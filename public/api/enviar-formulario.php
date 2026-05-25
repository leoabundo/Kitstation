<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

function json_response(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_value($value, int $limit = 4000): string
{
    if (!is_scalar($value)) {
        return '';
    }

    $text = trim((string) $value);
    $text = strip_tags($text);
    $text = (string) preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', '', $text);

    if (function_exists('mb_substr')) {
        return mb_substr($text, 0, $limit, 'UTF-8');
    }

    return substr($text, 0, $limit);
}

function html_value(string $value): string
{
    return nl2br(htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
}

function field_label(string $name): string
{
    return ucwords(str_replace('_', ' ', $name));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    json_response(405, [
        'success' => false,
        'message' => 'Metodo no permitido.',
    ]);
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 100000 || count($_POST) > 50) {
    json_response(413, [
        'success' => false,
        'message' => 'La solicitud excede el limite permitido.',
    ]);
}

$honeypot = clean_value($_POST['website'] ?? '', 150);
if ($honeypot !== '') {
    // The response does not reveal the spam filter to automated senders.
    json_response(200, [
        'success' => true,
        'message' => 'Tu mensaje fue enviado correctamente.',
    ]);
}

$limits = [
    'formulario' => 80,
    'pagina_origen' => 500,
    'email' => 254,
    'correo' => 254,
    'correo_electronico' => 254,
    'phone' => 30,
    'telefono' => 30,
    'celular' => 30,
    'message' => 5000,
    'mensaje' => 5000,
    'detalle_reclamo' => 5000,
    'descripcion_pedido' => 5000,
    'descripcion_monto' => 3000,
];

$data = [];
foreach ($_POST as $key => $value) {
    if (!is_string($key) || $key === 'website' || is_array($value)) {
        continue;
    }

    $safeKey = preg_replace('/[^a-zA-Z0-9_-]/', '', $key);
    if ($safeKey === '') {
        continue;
    }

    $data[$safeKey] = clean_value($value, $limits[$safeKey] ?? 500);
}

$formName = $data['formulario'] ?? '';
$requiredFields = [
    'Contacto' => ['name', 'phone', 'email', 'service', 'message', 'privacy'],
    'Diseno de Pagina Web' => ['company', 'email', 'phone', 'message'],
    'Automatizacion con IA' => ['company', 'email', 'phone', 'message'],
    'Campanas Digitales' => ['company', 'email', 'phone', 'message'],
    'Posicionamiento SEO' => ['company', 'email', 'phone', 'message'],
    'Consultoria y Soporte' => ['company', 'email', 'phone', 'message'],
    'Creacion de Contenido' => ['company', 'email', 'phone', 'message'],
    'Animacion Digital' => ['company', 'email', 'phone', 'message'],
    'Libro de Reclamaciones' => [
        'reclamo_id',
        'fecha_incidente',
        'nombre_completo',
        'tipo_documento',
        'numero_documento',
        'correo_electronico',
        'telefono',
        'distrito',
        'direccion',
        'producto',
        'monto_reclamado',
        'descripcion_monto',
        'tipo_reclamo',
        'fecha_pedido',
        'tipo_envio',
        'detalle_reclamo',
        'descripcion_pedido',
        'aviso_legal',
    ],
];

if ($formName === '' || !isset($requiredFields[$formName])) {
    json_response(422, [
        'success' => false,
        'message' => 'Formulario no valido.',
    ]);
}

foreach ($requiredFields[$formName] as $field) {
    if (!isset($data[$field]) || $data[$field] === '') {
        json_response(422, [
            'success' => false,
            'message' => 'Completa todos los campos obligatorios.',
        ]);
    }
}

$email = '';
foreach (['email', 'correo', 'correo_electronico'] as $emailField) {
    if (!empty($data[$emailField])) {
        $email = $data[$emailField];
        break;
    }
}

if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    json_response(422, [
        'success' => false,
        'message' => 'El correo electronico no es valido.',
    ]);
}

foreach (['phone', 'telefono', 'celular'] as $phoneField) {
    if (!empty($data[$phoneField]) && !preg_match('/^[0-9+() .-]{7,30}$/', $data[$phoneField])) {
        json_response(422, [
            'success' => false,
            'message' => 'El telefono no es valido.',
        ]);
    }
}

$publicHtmlDirectory = dirname(__DIR__);
$accountHomeDirectory = dirname($publicHtmlDirectory);
$privateDirectory = $accountHomeDirectory . DIRECTORY_SEPARATOR . 'kitstation-mail';
$configFile = $privateDirectory . DIRECTORY_SEPARATOR . 'config-mail.php';
$autoloadFile = $privateDirectory . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

if (!is_file($configFile) || !is_file($autoloadFile)) {
    error_log('KitStation mail: missing private config or PHPMailer autoload.');
    json_response(500, [
        'success' => false,
        'message' => 'No se pudo enviar el formulario. Intentalo nuevamente.',
    ]);
}

$config = require $configFile;
require_once $autoloadFile;

if (!is_array($config) || empty($config['smtp_pass']) || empty($config['mail_to'])) {
    error_log('KitStation mail: invalid private mail configuration.');
    json_response(500, [
        'success' => false,
        'message' => 'No se pudo enviar el formulario. Intentalo nuevamente.',
    ]);
}

$origin = !empty($data['pagina_origen'])
    ? $data['pagina_origen']
    : clean_value($_SERVER['HTTP_REFERER'] ?? '', 500);
$ip = clean_value($_SERVER['REMOTE_ADDR'] ?? 'No disponible', 80);
$userAgent = clean_value($_SERVER['HTTP_USER_AGENT'] ?? 'No disponible', 500);
$timezone = new DateTimeZone('America/Lima');
$receivedAt = new DateTime('now', $timezone);
$date = $receivedAt->format('d/m/Y H:i:s');
$subject = 'Nuevo formulario web - ' . str_replace(["\r", "\n"], '', $formName);

$excluded = ['formulario', 'pagina_origen'];
$fieldRows = '';
$plainFields = '';
foreach ($data as $key => $value) {
    if (in_array($key, $excluded, true)) {
        continue;
    }

    $label = field_label($key);
    $fieldRows .= '<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;background:#f5f5f5;">'
        . htmlspecialchars($label, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')
        . '</th><td style="padding:8px 12px;">' . html_value($value) . '</td></tr>';
    $plainFields .= $label . ': ' . $value . PHP_EOL;
}

$body = '<h2>Nuevo formulario recibido desde la web</h2>'
    . '<p><strong>Formulario:</strong> ' . html_value($formName) . '<br>'
    . '<strong>Pagina de origen:</strong> ' . html_value($origin ?: 'No informada') . '<br>'
    . '<strong>Fecha:</strong> ' . html_value($date) . '<br>'
    . '<strong>IP:</strong> ' . html_value($ip) . '<br>'
    . '<strong>Navegador:</strong> ' . html_value($userAgent) . '</p>'
    . '<h3>Campos enviados</h3>'
    . '<table style="border-collapse:collapse;border:1px solid #ddd;">' . $fieldRows . '</table>';

$altBody = "Nuevo formulario recibido desde la web\n\n"
    . "Formulario: {$formName}\n"
    . 'Pagina de origen: ' . ($origin ?: 'No informada') . "\n"
    . "Fecha: {$date}\nIP: {$ip}\nNavegador: {$userAgent}\n\nCampos enviados:\n{$plainFields}";

try {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = (string) ($config['smtp_host'] ?? 'smtp.titan.email');
    $mail->Port = (int) ($config['smtp_port'] ?? 465);
    $mail->SMTPAuth = true;
    $mail->Username = (string) ($config['smtp_user'] ?? '');
    $mail->Password = (string) $config['smtp_pass'];
    $mail->SMTPSecure = ($config['smtp_secure'] ?? 'ssl') === 'tls'
        ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS
        : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom(
        (string) ($config['mail_from'] ?? 'leo@kitstation.pe'),
        (string) ($config['mail_from_name'] ?? 'Formulario Web Kitstation')
    );

    foreach ((array) $config['mail_to'] as $recipient) {
        if (filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
            $mail->addAddress($recipient);
        }
    }

    if ($email !== '') {
        $mail->addReplyTo($email);
    }

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->AltBody = $altBody;
    $mail->send();

    json_response(200, [
        'success' => true,
        'message' => 'Tu mensaje fue enviado correctamente. Te responderemos pronto.',
    ]);
} catch (Throwable $exception) {
    error_log('KitStation mail: SMTP delivery failed: ' . $exception->getMessage());
    json_response(500, [
        'success' => false,
        'message' => 'No se pudo enviar el formulario. Intentalo nuevamente.',
    ]);
}
