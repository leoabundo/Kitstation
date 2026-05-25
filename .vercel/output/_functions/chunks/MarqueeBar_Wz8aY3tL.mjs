import { c as createComponent } from './astro-component_DtKWzRzq.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_C6k9hd8D.mjs';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { href: "#servicios", label: "Servicios" },
    { href: "#soluciones", label: "Soluciones" },
    { href: "/websites/", label: "Paginas web" },
    { href: "/nosotros/", label: "Nosotros" }
  ];
  const mobileMenuGroups = [
    {
      label: "Servicios",
      links: [
        { href: "https://kitstation.pe/animacion-digital/", label: "Animacion digital" },
        { href: "/websites/", label: "Diseno y desarrollo web" },
        { href: "https://kitstation.pe/automatizacion-ia/", label: "Automatizacion con IA" },
        { href: "https://kitstation.pe/campanas-digitales/", label: "Campaña digital" },
        { href: "https://kitstation.pe/posicionamiento-seo/", label: "Posicionamiento SEO" },
        { href: "https://kitstation.pe/consutoria-soporte/", label: "Consultoria y soporte" }
      ]
    },
    {
      label: "IA",
      icon: "stars",
      links: [
        { href: "https://kitstation.pe/automatizacion-ia/", label: "Automatizacion con IA" },
        { href: "/contactanos/", label: "Flujos por WhatsApp" }
      ]
    }
  ];
  const mobileMenuLinks = [
    { href: "/websites/", label: "Paginas web" },
    { href: "/nosotros/", label: "Empresa" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="site-header"> <div class="header-main container"> <a class="brand" href="/" aria-label="KitStation"> <img src="/images/logo-kitstation.webp" alt="KitStation" width="150" height="25"> </a> <nav class="desktop-nav" aria-label="Principal"> <ul> ${navItems.map((item) => renderTemplate`<li><a${addAttribute(item.href, "href")}>${item.label}</a></li>`)} </ul> </nav> <a class="header-cta" href="/contactanos/">Habla con Nosotros</a> <details class="mobile-nav"> <summary aria-label="Abrir menu"> <span></span> <span></span> <span></span> </summary> <nav aria-label="Principal movil"> <div class="mobile-nav__panel-head"> <a class="mobile-nav__brand" href="/" aria-label="KitStation"> <img src="/images/logo-kitstation.webp" alt="KitStation" width="150" height="25"> </a> </div> <div class="mobile-nav__menu"> ${mobileMenuGroups.map((group) => renderTemplate`<details class="mobile-nav__group"> <summary> <span class="mobile-nav__group-label"> <span>${group.label}</span> ${group.icon === "stars" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"></path> </svg>`} </span> </summary> <ul class="mobile-nav__sublist"> ${group.links.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> </details>`)} <ul class="mobile-nav__links"> ${mobileMenuLinks.map((item) => renderTemplate`<li><a${addAttribute(item.href, "href")}>${item.label}</a></li>`)} </ul> </div> </nav> </details> </div> </header>`;
}, "D:/web/Kitstation/kitstation-astro/src/components/Header.astro", void 0);

const $$MarqueeBar = createComponent(($$result, $$props, $$slots) => {
  const line = "Resultados que nacen en KitStation · Ideas que se convierten en proyectos · Proyectos que se convierten en resultados ·";
  return renderTemplate`${maybeRenderHead()}<div class="marquee-bar" aria-hidden="true"> <div class="container marquee-bar__viewport"> <div class="marquee-bar__track"> <span>${line}</span> <span>${line}</span> <span>${line}</span> <span>${line}</span> </div> </div> </div>`;
}, "D:/web/Kitstation/kitstation-astro/src/components/MarqueeBar.astro", void 0);

export { $$Header as $, $$MarqueeBar as a };
