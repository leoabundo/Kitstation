import type { APIRoute } from "astro";

export const prerender = true;

const siteUrl = "https://kitstation.pe";
const routes = [
  "/",
  "/animacion-digital/",
  "/automatizacion-con-ia/",
  "/campanas-digitales/",
  "/consultoria-y-soporte/",
  "/contactanos/",
  "/creacion-de-contenido/",
  "/diseno-de-pagina-web/",
  "/landing-paginas-webs/",
  "/libro-de-reclamaciones/",
  "/nosotros/",
  "/politicas-y-privacidad/",
  "/posicionamiento-seo/",
  "/preguntas-frecuentes/",
  "/terminos-y-condiciones/",
  "/websites/",
  "/servicios/diseno-web/",
  "/servicios/google-ads/",
  "/servicios/meta-ads/",
  "/servicios/automatizacion-whatsapp/",
  "/servicios/crm-personalizado/",
  "/servicios/desarrollo-web/"
];

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
