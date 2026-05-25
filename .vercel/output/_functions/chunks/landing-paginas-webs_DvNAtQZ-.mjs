import { c as createComponent } from './astro-component_DtKWzRzq.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_C6k9hd8D.mjs';
import { $ as $$BaseLayout } from './global_Dn0GJ-_t.mjs';
import { $ as $$Footer } from './Footer_2_LwftBo.mjs';
import { $ as $$WhatsAppButton } from './WhatsAppButton_CVLksrS8.mjs';

const $$LandingPaginasWebs = createComponent(($$result, $$props, $$slots) => {
  const siteTypes = [
    "Tienda online",
    "Servicios",
    "Restaurante",
    "Consultorias",
    "Eventos",
    "Blogs",
    "Otros"
  ];
  const benefitVisuals = [
    {
      title: "Diseno inteligente y personalizado",
      image: "https://kitstation.pe/wp-content/uploads/2025/11/kitcito-landing.webp"
    },
    {
      title: "Webs optimizadas y seguras",
      image: "https://kitstation.pe/wp-content/uploads/2025/11/esfera-landing-3.webp"
    },
    {
      title: "100% adaptables a moviles",
      image: "https://kitstation.pe/wp-content/uploads/2025/11/iphone-landing.webp"
    }
  ];
  const featureCards = [
    {
      title: "Tienda online",
      description: "Vende tus productos y gestiona tu inventario con una plataforma de comercio electronico segura y facil de usar.",
      image: "https://kitstation.pe/wp-content/uploads/2026/02/zapatillas-3.webp"
    },
    {
      title: "Correos personalizados",
      description: "Potencia tu identidad corporativa con correos profesionales que generen confianza y autoridad en cada mensaje que envies.",
      image: "https://kitstation.pe/wp-content/uploads/2026/02/correo-personalizado-3.webp"
    },
    {
      title: "Blog profesional",
      description: "Comparte contenido de valor, mejora tu posicionamiento en buscadores y conecta con tu audiencia de manera estrategica y constante.",
      image: "https://kitstation.pe/wp-content/uploads/2026/02/blog-1.webp"
    },
    {
      title: "Software para agendar citas",
      description: "Automatiza tus reservas y organiza tu calendario con un sistema interactivo disenado para optimizar el tiempo de tu negocio.",
      image: "https://kitstation.pe/wp-content/uploads/2026/02/citas-1.webp"
    }
  ];
  const principles = [
    {
      title: "Identidad visual inmersiva",
      text: "Disenamos interfaces que respiran el ADN de tu marca. Sin plantillas genericas; aplicamos direccion de arte y narrativa visual."
    },
    {
      title: "Ingenieria a medida",
      text: "Desarrollo tecnico enfocado en tus objetivos comerciales. Implementamos soluciones especificas y escalables para crecer."
    },
    {
      title: "Adaptabilidad fluida",
      text: "Garantizamos una navegacion intuitiva en cualquier entorno. Tu web se adapta perfectamente a cada dispositivo."
    },
    {
      title: "Rendimiento estrategico",
      text: "Entregamos una plataforma preparada para posicionar y convertir. Creada para competir en los motores de busqueda."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Landing Paginas Webs | KitStation", "description": "Landing de paginas web de KitStation para negocios que necesitan una plataforma digital unica, veloz y lista para convertir.", "data-astro-cid-pb76glpp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="landing-webs" data-astro-cid-pb76glpp> <section class="landing-webs__hero" id="iniciar" data-astro-cid-pb76glpp> <div class="landing-webs__hero-copy container" data-astro-cid-pb76glpp> <div class="landing-webs__hero-media" data-astro-cid-pb76glpp> <video class="landing-webs__hero-video" autoplay muted playsinline loop preload="metadata" data-astro-cid-pb76glpp> <source src="https://kitstation.pe/wp-content/uploads/2026/03/PORTADA-LANDIG-WEB-12-reducid.mp4" type="video/mp4" data-astro-cid-pb76glpp> </video> </div> <h1 data-astro-cid-pb76glpp> <span data-astro-cid-pb76glpp>Creamos tu pagina web</span> <span data-astro-cid-pb76glpp>profesional</span> </h1> <p class="landing-webs__hero-text" data-astro-cid-pb76glpp>
Olvidate de las plataformas estandar. Brindamos a tu marca una arquitectura digital unica,
          disenada y desarrollada estrategicamente para superar lo que imaginaste.
</p> <div class="landing-webs__hero-selector" data-astro-cid-pb76glpp> <p class="landing-webs__hero-question" data-astro-cid-pb76glpp>Que tipo de <strong data-astro-cid-pb76glpp>sitio web</strong> te gustaria crear?</p> <div class="landing-webs__chips" aria-label="Tipos de sitio" data-astro-cid-pb76glpp> ${siteTypes.map((item) => renderTemplate`<button type="button" data-astro-cid-pb76glpp>${item}</button>`)} </div> <div class="landing-webs__hero-cta" data-astro-cid-pb76glpp> <a href="/contactanos/" data-astro-cid-pb76glpp>Empezar ahora</a> </div> <p class="landing-webs__privacy" data-astro-cid-pb76glpp>
Al enviar, aceptas las <a href="/politicas-y-privacidad/" data-astro-cid-pb76glpp>politicas de privacidad</a> </p> </div> </div> </section> <section class="landing-webs__benefits" data-astro-cid-pb76glpp> <div class="container" data-astro-cid-pb76glpp> <header class="landing-webs__section-head" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>El beneficio de trabajar con un equipo que entiende tu negocio</h2> </header> <div class="landing-webs__benefit-panel" data-astro-cid-pb76glpp> ${benefitVisuals.map((card) => renderTemplate`<article class="landing-webs__benefit-node" data-astro-cid-pb76glpp> <img${addAttribute(card.image, "src")}${addAttribute(card.title, "alt")} loading="lazy" data-astro-cid-pb76glpp> <div class="landing-webs__benefit-hover" data-astro-cid-pb76glpp> <h3 data-astro-cid-pb76glpp>${card.title}</h3> </div> </article>`)} </div> </div> </section> <section class="landing-webs__statement" data-astro-cid-pb76glpp> <div class="container landing-webs__statement-shell" data-astro-cid-pb76glpp> <header class="landing-webs__section-head" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>Disenamos sin limites la web exacta que necesitas.</h2> <p data-astro-cid-pb76glpp>
Eleva tu marca con una web estrategica de alto nivel. Ya sea para vender online o escalar tu
            negocio, en KitStation lo hacemos realidad. Sin plantillas: construimos la plataforma exacta
            que necesitas para diferenciarte.
</p> </header> <a class="landing-webs__cta-link" href="/contactanos/" data-astro-cid-pb76glpp>Empezar</a> </div> </section> <section class="landing-webs__interactive" data-astro-cid-pb76glpp> <div class="container landing-webs__interactive-shell" data-astro-cid-pb76glpp> <div class="landing-webs__interactive-copy" data-astro-cid-pb76glpp> <p class="landing-webs__section-kicker" data-astro-cid-pb76glpp>Experiencia de Producto Interactiva</p> <h2 data-astro-cid-pb76glpp>Transformamos la observacion pasiva en una experiencia tactil digital.</h2> <p data-astro-cid-pb76glpp>
Integramos recursos visuales y secciones dinamicas para convertir una visita comun en una
            demostracion memorable de tu producto o servicio.
</p> <a class="landing-webs__cta-link landing-webs__cta-link--dark" href="/contactanos/" data-astro-cid-pb76glpp>
Personalizar mi experiencia
</a> </div> <div class="landing-webs__interactive-visual" data-astro-cid-pb76glpp> <img src="https://kitstation.pe/wp-content/uploads/2026/01/web-3.webp" alt="Vista interactiva de producto" loading="lazy" data-astro-cid-pb76glpp> </div> </div> </section> <section class="landing-webs__chat" data-astro-cid-pb76glpp> <div class="container landing-webs__chat-shell" data-astro-cid-pb76glpp> <div class="landing-webs__chat-copy" data-astro-cid-pb76glpp> <p class="landing-webs__section-kicker" data-astro-cid-pb76glpp>Chat Inteligente IA</p> <h2 data-astro-cid-pb76glpp>Sistemas de asistencia inteligente para responder dentro de tu web.</h2> <p data-astro-cid-pb76glpp>
Entrenamos a nuestra IA para conocer tus productos, precios y gestion del negocio, y asi
            convertir dudas en oportunidades de venta.
</p> <a class="landing-webs__cta-link" href="/contactanos/" data-astro-cid-pb76glpp>Empezar ahora</a> </div> <div class="landing-webs__chat-widget" data-astro-cid-pb76glpp> <div class="landing-webs__chat-header" data-astro-cid-pb76glpp>Prueba nuestra IA para ventas!</div> <div class="landing-webs__chat-messages" data-astro-cid-pb76glpp> <div class="landing-webs__chat-bubble landing-webs__chat-bubble--user" data-astro-cid-pb76glpp>Hola</div> <div class="landing-webs__chat-bubble landing-webs__chat-bubble--bot" data-astro-cid-pb76glpp>
Hola. Si, podemos ayudarte a crear una web que venda, informe o automatice procesos.
</div> </div> <div class="landing-webs__chat-actions" data-astro-cid-pb76glpp> <button type="button" data-astro-cid-pb76glpp>Hola</button> <button type="button" data-astro-cid-pb76glpp>Como funciona este chat?</button> </div> <div class="landing-webs__chat-input" data-astro-cid-pb76glpp> <input type="text" placeholder="Escribe tu mensaje..." data-astro-cid-pb76glpp> <button type="button" data-astro-cid-pb76glpp>Enviar</button> </div> </div> </div> </section> <section class="landing-webs__principles" data-astro-cid-pb76glpp> <div class="container landing-webs__principles-shell" data-astro-cid-pb76glpp> <div class="landing-webs__principles-copy" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>Tu marca, convertida en experiencia digital.</h2> <p data-astro-cid-pb76glpp>
Diseno estrategico y desarrollo tecnico sin ataduras. Construimos plataformas web que fusionan
            estetica inmersiva con funcionalidad de alto rendimiento.
</p> <div class="landing-webs__principles-grid" data-astro-cid-pb76glpp> ${principles.map((item) => renderTemplate`<article data-astro-cid-pb76glpp> <h3 data-astro-cid-pb76glpp>${item.title}</h3> <p data-astro-cid-pb76glpp>${item.text}</p> </article>`)} </div> </div> <div class="landing-webs__principles-image" data-astro-cid-pb76glpp> <img src="https://kitstation.pe/wp-content/uploads/2026/01/img-diseno-web-1.webp" alt="Visual de diseno web" loading="lazy" data-astro-cid-pb76glpp> </div> </div> </section> <section class="landing-webs__features" data-astro-cid-pb76glpp> <div class="container" data-astro-cid-pb76glpp> <header class="landing-webs__section-head" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>Descubre todas las herramientas que ofrecemos para tu negocio</h2> <a class="landing-webs__cta-link landing-webs__cta-link--dark" href="/contactanos/" data-astro-cid-pb76glpp>
Empezar ahora
</a> </header> <div class="landing-webs__feature-grid" data-astro-cid-pb76glpp> ${featureCards.map((card) => renderTemplate`<article class="landing-webs__feature-card" data-astro-cid-pb76glpp> <img${addAttribute(card.image, "src")}${addAttribute(card.title, "alt")} loading="lazy" data-astro-cid-pb76glpp> <div class="landing-webs__feature-card-copy" data-astro-cid-pb76glpp> <h3 data-astro-cid-pb76glpp>${card.title}</h3> <p data-astro-cid-pb76glpp>${card.description}</p> <a href="/contactanos/" data-astro-cid-pb76glpp>Empezar ahora</a> </div> </article>`)} </div> </div> </section> <section class="landing-webs__closing" data-astro-cid-pb76glpp> <div class="container landing-webs__closing-shell" data-astro-cid-pb76glpp> <h2 data-astro-cid-pb76glpp>Mas resultados para tus proyectos</h2> <a class="landing-webs__cta-link" href="/contactanos/" data-astro-cid-pb76glpp>Empezar ahora</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-pb76glpp": true })} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-pb76glpp": true })} ` })}`;
}, "D:/web/Kitstation/kitstation-astro/src/pages/landing-paginas-webs.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/src/pages/landing-paginas-webs.astro";
const $$url = "/landing-paginas-webs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LandingPaginasWebs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
