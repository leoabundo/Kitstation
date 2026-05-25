import { c as createComponent } from './astro-component_DtKWzRzq.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_C6k9hd8D.mjs';
import { $ as $$BaseLayout } from './global_Dn0GJ-_t.mjs';
import { $ as $$Header, a as $$MarqueeBar } from './MarqueeBar_Wz8aY3tL.mjs';
import { $ as $$Footer } from './Footer_2_LwftBo.mjs';
import { $ as $$WhatsAppButton } from './WhatsAppButton_CVLksrS8.mjs';

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Nosotros | KitStation", "description": "Conoce mas sobre KitStation, su enfoque, trayectoria y manera de construir proyectos visuales.", "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-noeej2nj": true })} ${renderComponent($$result2, "MarqueeBar", $$MarqueeBar, { "data-astro-cid-noeej2nj": true })} ${maybeRenderHead()}<main class="about-page" data-astro-cid-noeej2nj> <section class="about-page__section" data-astro-cid-noeej2nj> <div class="container" data-astro-cid-noeej2nj> <div class="about-page__content" data-astro-cid-noeej2nj> <h1 data-astro-cid-noeej2nj>Nosotros</h1> <p data-astro-cid-noeej2nj>
Fundado en 2024, <strong data-astro-cid-noeej2nj>KitStation</strong> es un estudio de diseño con sede en Lima, Perú,
            especializado en crear experiencias visuales inmersivas y soluciones creativas que conectan con
            el público de forma auténtica y estratégica.
</p> <p data-astro-cid-noeej2nj>
Con una visión audaz, una dirección creativa refinada y un dominio técnico en constante
            evolución, KitStation desarrolla contenido digital de alto impacto que combina arte, tecnología y
            propósito. Nuestro trabajo abarca desde proyectos comerciales dirigidos por marcas hasta piezas
            experimentales que empujan los límites del diseño y la narrativa visual.
</p> <p data-astro-cid-noeej2nj>
Nuestro enfoque interdisciplinario integra CGI, dirección creativa, investigación y desarrollo,
            diseño gráfico, gráficos en movimiento, desarrollo de marca, diseño experiencial y diseño web,
            permitiéndonos construir soluciones visuales completas con una estética contemporánea, precisa y
            emocionalmente poderosa.
</p> <p data-astro-cid-noeej2nj>
En KitStation, no solo diseñamos. Creamos experiencias que inspiran, elevan marcas y desafían
            lo convencional.
</p> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-noeej2nj": true })} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-noeej2nj": true })} ` })}`;
}, "D:/web/Kitstation/kitstation-astro/src/pages/nosotros.astro", void 0);

const $$file = "D:/web/Kitstation/kitstation-astro/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
