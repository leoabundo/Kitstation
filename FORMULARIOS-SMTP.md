# Formularios SMTP KitStation

## Arquitectura

Los formularios Astro publican por `POST` a `/api/enviar-formulario.php`. El
endpoint valida los campos, bloquea el honeypot y envia con PHPMailer mediante
SMTP de Titan. La configuracion real y PHPMailer deben estar fuera de
`public_html`.

## Estructura en cPanel

Suponiendo que el document root del dominio es `/home/USUARIO/public_html`:

```text
/home/USUARIO/public_html/api/enviar-formulario.php
/home/USUARIO/kitstation-mail/config-mail.php
/home/USUARIO/kitstation-mail/composer.json
/home/USUARIO/kitstation-mail/vendor/autoload.php
```

El endpoint calcula la ruta desde su ubicacion en
`/home/USUARIO/public_html/api/enviar-formulario.php`: sube hasta
`/home/USUARIO/` y carga exclusivamente:

```text
/home/USUARIO/kitstation-mail/config-mail.php
/home/USUARIO/kitstation-mail/vendor/autoload.php
```

No coloque la contrasena SMTP en `public_html`.

## Instalacion

1. Ejecute `npm run build`.
2. Suba el contenido de `dist/` a `public_html/`. Esto incluye
   `api/enviar-formulario.php`.
3. Cree la carpeta privada `~/kitstation-mail` desde el administrador de
   archivos o terminal de cPanel.
4. Suba `server/mail/composer.json` a `~/kitstation-mail/composer.json`.
5. Copie `server/mail/config-mail.example.php` como
   `~/kitstation-mail/config-mail.php`.
6. Edite `config-mail.php` e ingrese la contrasena real de
   `leo@kitstation.pe`.
7. Desde Terminal de cPanel, ejecute:

```bash
cd ~/kitstation-mail
composer install --no-dev --optimize-autoloader
```

Si HostGator no ofrece Terminal o Composer, instale Composer en un entorno
local con PHP, ejecute el mismo comando dentro de `server/mail/` y suba la
carpeta `vendor/` resultante a `~/kitstation-mail/vendor/`.

## Configuracion Titan

Configuracion principal en `~/kitstation-mail/config-mail.php`:

```php
<?php
return [
    'smtp_host' => 'smtp.titan.email',
    'smtp_port' => 465,
    'smtp_secure' => 'ssl',
    'smtp_user' => 'leo@kitstation.pe',
    'smtp_pass' => 'CONTRASENA_REAL',
    'mail_from' => 'leo@kitstation.pe',
    'mail_from_name' => 'Formulario Web Kitstation',
    'mail_to' => [
        'leo@kitstation.pe',
        'rodrigo@kitstation.pe',
    ],
];
```

Si la conexion SSL por el puerto `465` falla, cambie solo:

```php
'smtp_port' => 587,
'smtp_secure' => 'tls',
```

## Pruebas en produccion

1. Abra cada formulario en el dominio publicado y envie datos de prueba.
2. Confirme recepcion en `leo@kitstation.pe` y `rodrigo@kitstation.pe`.
3. Confirme que al responder el correo se use el email ingresado por el
   cliente (`Reply-To`).
4. Pruebe el honeypot desde herramientas del navegador asignando un valor al
   campo `website`; el endpoint devolvera exito aparente pero no enviara correo.
5. Envie un formulario sin un campo requerido mediante una peticion manual y
   confirme una respuesta JSON con `success: false`.

Astro no ejecuta PHP durante `npm run dev` o `astro preview`. La prueba SMTP
real se realiza en cPanel o en un servidor local que sirva PHP y tenga la
carpeta privada configurada.

## Diagnostico

Si no llega correo:

1. Verifique que exista `~/kitstation-mail/vendor/autoload.php`.
2. Verifique usuario y contrasena SMTP de Titan y que el acceso de terceros
   siga habilitado.
3. Cambie temporalmente a puerto `587` con `tls`.
4. Revise el registro de errores PHP de cPanel; el frontend nunca muestra
   detalles sensibles.
5. Consulte con HostGator si bloquea conexiones SMTP salientes.
6. Revise SPF, DKIM y configuracion del dominio en Titan para entregabilidad.

No es obligatorio crear `formularios@kitstation.pe`. Usar
`leo@kitstation.pe` como remitente es valido si es una cuenta SMTP real. Un
correo tecnico separado es conveniente mas adelante para separar credenciales,
auditoria y reputacion de envios de los buzones personales.
