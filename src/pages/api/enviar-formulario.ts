import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

const JSON_HEADERS = {
  "Content-Type": "application/json"
};

const FIELD_LIMITS: Record<string, number> = {
  formulario: 80,
  pagina_origen: 500,
  email: 254,
  correo: 254,
  correo_electronico: 254,
  phone: 30,
  telefono: 30,
  celular: 30,
  message: 5000,
  mensaje: 5000,
  detalle_reclamo: 5000,
  descripcion_pedido: 5000,
  descripcion_monto: 3000
};

const REQUIRED_FIELDS: Record<string, string[]> = {
  Contacto: ["name", "phone", "email", "service", "message", "privacy"],
  "Diseno de Pagina Web": ["company", "email", "phone", "message"],
  "Automatizacion con IA": ["company", "email", "phone", "message"],
  "Campanas Digitales": ["company", "email", "phone", "message"],
  "Posicionamiento SEO": ["company", "email", "phone", "message"],
  "Consultoria y Soporte": ["company", "email", "phone", "message"],
  "Creacion de Contenido": ["company", "email", "phone", "message"],
  "Animacion Digital": ["company", "email", "phone", "message"],
  "Libro de Reclamaciones": [
    "reclamo_id",
    "fecha_incidente",
    "nombre_completo",
    "tipo_documento",
    "numero_documento",
    "correo_electronico",
    "telefono",
    "distrito",
    "direccion",
    "producto",
    "monto_reclamado",
    "descripcion_monto",
    "tipo_reclamo",
    "fecha_pedido",
    "tipo_envio",
    "detalle_reclamo",
    "descripcion_pedido",
    "aviso_legal"
  ]
};

function jsonResponse(status: number, payload: Record<string, unknown>) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: JSON_HEADERS
  });
}

function cleanValue(value: FormDataEntryValue | null, limit = 500): string {
  if (typeof value !== "string") return "";

  return value
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .slice(0, limit);
}

function fieldLabel(name: string): string {
  return name
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function htmlValue(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br>");
}

function getEnv(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function getRecipients(): string[] {
  return getEnv("MAIL_TO")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getMissingEnvVars(envMap: Record<string, string | number | string[]>): string[] {
  const missing: string[] = [];

  for (const [key, value] of Object.entries(envMap)) {
    if (Array.isArray(value)) {
      if (value.length === 0) missing.push(key);
      continue;
    }

    if (typeof value === "number") {
      if (!Number.isFinite(value) || value <= 0) missing.push(key);
      continue;
    }

    if (!value) missing.push(key);
  }

  return missing;
}

function getRequestMetadata(request: Request, fallbackIp: string) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || fallbackIp || "No disponible";
  const userAgent = request.headers.get("user-agent")?.trim() || "No disponible";

  return { ip, userAgent };
}

async function handleMethodNotAllowed() {
  return new Response(
    JSON.stringify({
      success: false,
      message: "Metodo no permitido."
    }),
    {
      status: 405,
      headers: {
        ...JSON_HEADERS,
        Allow: "POST, OPTIONS"
      }
    }
  );
}

export const GET: APIRoute = handleMethodNotAllowed;
export const PUT: APIRoute = handleMethodNotAllowed;
export const PATCH: APIRoute = handleMethodNotAllowed;
export const DELETE: APIRoute = handleMethodNotAllowed;

export const OPTIONS: APIRoute = async () =>
  new Response(null, {
    status: 204,
    headers: {
      Allow: "POST, OPTIONS"
    }
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    console.log("[api/enviar-formulario] Metodo recibido:", request.method);

    const formData = await request.formData();

    const honeypot = cleanValue(formData.get("website"), 150);
    if (honeypot !== "") {
      return jsonResponse(200, {
        success: true,
        message: "Tu mensaje fue enviado correctamente."
      });
    }

    const data: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (key === "website") continue;
      if (typeof value !== "string") continue;
      if (!/^[a-zA-Z0-9_-]+$/.test(key)) continue;

      data[key] = cleanValue(value, FIELD_LIMITS[key] ?? 500);
    }

    const formName = data.formulario ?? "";
    const requiredFields = REQUIRED_FIELDS[formName];

    console.log("[api/enviar-formulario] Formulario recibido:", formName || "(sin nombre)");

    if (!formName || !requiredFields) {
      return jsonResponse(422, {
        success: false,
        message: "Formulario no valido."
      });
    }

    for (const field of requiredFields) {
      if (!data[field]) {
        return jsonResponse(422, {
          success: false,
          message: "Completa todos los campos obligatorios."
        });
      }
    }

    const email =
      data.email || data.correo || data.correo_electronico || "";

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse(422, {
        success: false,
        message: "El correo electronico no es valido."
      });
    }

    for (const phoneField of ["phone", "telefono", "celular"]) {
      if (data[phoneField] && !/^[0-9+() .-]{7,30}$/.test(data[phoneField])) {
        return jsonResponse(422, {
          success: false,
          message: "El telefono no es valido."
        });
      }
    }

    const smtpHost = getEnv("SMTP_HOST");
    const smtpPort = Number(getEnv("SMTP_PORT") || "465");
    const smtpSecure = getEnv("SMTP_SECURE").toLowerCase();
    const smtpUser = getEnv("SMTP_USER");
    const smtpPass = getEnv("SMTP_PASS");
    const mailFrom = getEnv("MAIL_FROM");
    const mailFromName = getEnv("MAIL_FROM_NAME") || "Formulario Web Kitstation";
    const recipients = getRecipients();

    console.log("[api/enviar-formulario] MAIL_TO existe:", recipients.length > 0 ? "si" : "no");
    console.log("[api/enviar-formulario] SMTP_HOST:", smtpHost || "(vacio)");
    console.log("[api/enviar-formulario] SMTP_PORT:", String(smtpPort || ""));
    console.log("[api/enviar-formulario] SMTP_SECURE:", smtpSecure || "(vacio)");
    console.log("[api/enviar-formulario] SMTP_USER:", smtpUser || "(vacio)");

    const missingEnvVars = getMissingEnvVars({
      SMTP_HOST: smtpHost,
      SMTP_PORT: smtpPort,
      SMTP_SECURE: smtpSecure,
      SMTP_USER: smtpUser,
      SMTP_PASS: smtpPass,
      MAIL_FROM: mailFrom,
      MAIL_TO: recipients
    });

    if (missingEnvVars.length > 0) {
      console.error("[api/enviar-formulario] Configuracion SMTP incompleta. Faltan:", missingEnvVars.join(", "));
      return jsonResponse(500, {
        success: false,
        message: "Configuración SMTP incompleta"
      });
    }

    const useSecureConnection =
      smtpSecure === "ssl" ||
      smtpSecure === "true" ||
      (smtpSecure !== "tls" && smtpPort === 465);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: useSecureConnection,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const origin = data.pagina_origen || request.headers.get("referer") || "No informada";
    const { ip, userAgent } = getRequestMetadata(request, clientAddress ?? "");
    const receivedAt = new Intl.DateTimeFormat("es-PE", {
      timeZone: "America/Lima",
      dateStyle: "short",
      timeStyle: "medium"
    }).format(new Date());

    const excluded = new Set(["formulario", "pagina_origen"]);
    const fieldRows = Object.entries(data)
      .filter(([key]) => !excluded.has(key))
      .map(
        ([key, value]) =>
          `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;background:#f5f5f5;">${htmlValue(fieldLabel(key))}</th><td style="padding:8px 12px;">${htmlValue(value)}</td></tr>`
      )
      .join("");

    const plainFields = Object.entries(data)
      .filter(([key]) => !excluded.has(key))
      .map(([key, value]) => `${fieldLabel(key)}: ${value}`)
      .join("\n");

    const subject = `Nuevo formulario web - ${formName}`;
    const html = `<h2>Nuevo formulario recibido desde la web</h2>
<p><strong>Formulario:</strong> ${htmlValue(formName)}<br>
<strong>Pagina de origen:</strong> ${htmlValue(origin)}<br>
<strong>Fecha:</strong> ${htmlValue(receivedAt)}<br>
<strong>IP:</strong> ${htmlValue(ip)}<br>
<strong>Navegador:</strong> ${htmlValue(userAgent)}</p>
<h3>Campos enviados</h3>
<table style="border-collapse:collapse;border:1px solid #ddd;">${fieldRows}</table>`;

    const text = `Nuevo formulario recibido desde la web

Formulario: ${formName}
Pagina de origen: ${origin}
Fecha: ${receivedAt}
IP: ${ip}
Navegador: ${userAgent}

Campos enviados:
${plainFields}`;

    await transporter.sendMail({
      from: `"${mailFromName}" <${mailFrom}>`,
      to: recipients,
      replyTo: email || undefined,
      subject,
      html,
      text
    });

    return jsonResponse(200, {
      success: true,
      message: "Tu mensaje fue enviado correctamente. Te responderemos pronto."
    });
  } catch (error) {
    const mailError = error as {
      name?: string;
      code?: string;
      command?: string;
      message?: string;
    };

    console.error("[api/enviar-formulario] Mail delivery failed:", {
      name: mailError?.name || "Error",
      code: mailError?.code || "SIN_CODIGO",
      command: mailError?.command || "SIN_COMMAND",
      message: mailError?.message || "Sin mensaje"
    });

    return jsonResponse(500, {
      success: false,
      message: "No se pudo enviar el formulario."
    });
  }
};
