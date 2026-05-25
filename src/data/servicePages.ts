export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServicePageConfig {
  slug: string;
  href: string;
  shortName: string;
  title: string;
  pageTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  summary: string;
  accent: string;
  image: string;
  benefits: string[];
  process: ServiceProcessStep[];
}

export const servicePages: ServicePageConfig[] = [
  {
    slug: "diseno-web",
    href: "/servicios/diseno-web/",
    shortName: "Diseño web",
    title: "Diseño de páginas web para empresas en Perú",
    pageTitle: "Diseño de páginas web para empresas en Perú | Kitstation",
    metaDescription:
      "Creamos páginas web profesionales para empresas en Perú con enfoque comercial, velocidad de carga y una experiencia clara para convertir visitas en oportunidades.",
    heading: "Diseño de páginas web para empresas en Perú",
    intro:
      "Creamos páginas web profesionales para marcas que necesitan verse bien, cargar rápido y comunicar valor desde la primera visita.",
    summary:
      "Nuestro equipo trabaja estructura, contenido y conversión para empresas en Lima y todo Perú que necesitan una presencia digital más sólida.",
    accent: "#6945bb",
    image: "/images/service-web.webp",
    benefits: [
      "Sitios corporativos y landings con estructura clara para vender mejor.",
      "Contenido y jerarquía visual pensados para usuarios y buscadores.",
      "Versiones optimizadas para mobile, formularios y captación comercial."
    ],
    process: [
      {
        title: "Diagnóstico y objetivos",
        description: "Definimos el tipo de página, público, mensajes y acción principal que debe lograr el sitio."
      },
      {
        title: "Diseño y contenido",
        description: "Ordenamos secciones, copy, llamadas a la acción e integraciones para que la web tenga claridad comercial."
      },
      {
        title: "Publicación y mejora",
        description: "Lanzamos la página, medimos el comportamiento inicial y dejamos lista la base para SEO y campañas."
      }
    ]
  },
  {
    slug: "google-ads",
    href: "/servicios/google-ads/",
    shortName: "Google Ads",
    title: "Servicio de Google Ads para empresas en Perú",
    pageTitle: "Servicio de Google Ads para empresas en Perú | Kitstation",
    metaDescription:
      "Gestionamos Google Ads para empresas en Perú con foco en captación de leads, optimización de presupuesto y campañas Search, Display y YouTube.",
    heading: "Servicio de Google Ads para empresas en Perú",
    intro:
      "Llevamos tráfico de alta intención hacia tu negocio con campañas de Google Ads orientadas a conversión y control de presupuesto.",
    summary:
      "Trabajamos keywords, anuncios, páginas de destino y medición para que tus campañas generen contactos reales y no solo clics.",
    accent: "#1f5eff",
    image: "/images/service-campaigns.webp",
    benefits: [
      "Campañas Search, Display y YouTube alineadas al objetivo comercial.",
      "Segmentación, copys y extensiones pensadas para empresas en Perú.",
      "Optimización constante para mejorar costo por lead y calidad del tráfico."
    ],
    process: [
      {
        title: "Investigación de demanda",
        description: "Detectamos términos de búsqueda, zonas y servicios con mejor potencial para tu negocio."
      },
      {
        title: "Lanzamiento controlado",
        description: "Construimos campañas, grupos de anuncios, audiencias y conversiones con una estructura medible."
      },
      {
        title: "Optimización semanal",
        description: "Ajustamos pujas, anuncios, keywords y páginas para mejorar resultados con datos reales."
      }
    ]
  },
  {
    slug: "meta-ads",
    href: "/servicios/meta-ads/",
    shortName: "Meta Ads",
    title: "Servicio de Meta Ads en Perú",
    pageTitle: "Servicio de Meta Ads en Perú | Kitstation",
    metaDescription:
      "Creamos y optimizamos campañas de Meta Ads en Perú para empresas que quieren generar alcance, prospectos y ventas en Facebook e Instagram.",
    heading: "Servicio de Meta Ads en Perú para captar clientes",
    intro:
      "Desarrollamos campañas de Meta Ads para que tu empresa gane visibilidad, atraiga prospectos y mantenga un flujo constante de oportunidades.",
    summary:
      "Combinamos segmentación, creatividades y seguimiento comercial para que Facebook e Instagram trabajen a favor de tus ventas.",
    accent: "#454884",
    image: "/images/service-campaigns.webp",
    benefits: [
      "Anuncios orientados a prospectos, mensajes y remarketing.",
      "Creatividades y copys adaptados al tipo de oferta y al público objetivo.",
      "Lectura de resultados para escalar lo que mejor funciona."
    ],
    process: [
      {
        title: "Definición de audiencias",
        description: "Seleccionamos segmentos por interés, comportamiento, ubicación y etapa del embudo comercial."
      },
      {
        title: "Creatividad y pruebas",
        description: "Creamos variaciones de anuncios y mensajes para encontrar el ángulo de mejor respuesta."
      },
      {
        title: "Seguimiento y escalado",
        description: "Revisamos métricas clave para reducir desperdicio y potenciar los conjuntos ganadores."
      }
    ]
  },
  {
    slug: "automatizacion-whatsapp",
    href: "/servicios/automatizacion-whatsapp/",
    shortName: "Automatización de WhatsApp",
    title: "Automatización de WhatsApp para empresas en Perú",
    pageTitle: "Automatización de WhatsApp para empresas en Perú | Kitstation",
    metaDescription:
      "Implementamos automatización de WhatsApp para empresas en Perú con respuestas iniciales, flujos comerciales, seguimiento y orden de conversaciones.",
    heading: "Automatización de WhatsApp para empresas en Perú",
    intro:
      "Automatizamos WhatsApp para que tu negocio responda más rápido, organice consultas y avance oportunidades sin depender de seguimiento manual en cada paso.",
    summary:
      "Es una solución útil para ventas, atención y captación cuando tu equipo necesita más velocidad sin perder contexto comercial.",
    accent: "#2c70ff",
    image: "/images/service-automation.webp",
    benefits: [
      "Respuesta inmediata para leads nuevos y clientes recurrentes.",
      "Flujos por tipo de servicio, sede, horario o etapa de venta.",
      "Mejor trazabilidad de conversaciones y menor fuga de oportunidades."
    ],
    process: [
      {
        title: "Mapeo del flujo comercial",
        description: "Analizamos cómo llegan tus consultas y qué datos debes capturar desde el primer mensaje."
      },
      {
        title: "Automatización e integración",
        description: "Configuramos mensajes, rutas, etiquetado y conexiones con formularios o CRM."
      },
      {
        title: "Pruebas y ajuste operativo",
        description: "Probamos escenarios reales y afinamos la experiencia para que el equipo trabaje mejor."
      }
    ]
  },
  {
    slug: "crm-personalizado",
    href: "/servicios/crm-personalizado/",
    shortName: "CRM personalizado",
    title: "CRM personalizado para empresas en Perú",
    pageTitle: "CRM personalizado para empresas en Perú | Kitstation",
    metaDescription:
      "Desarrollamos CRM personalizados para empresas en Perú con integración a WhatsApp, seguimiento de clientes y procesos adaptados a cada operación.",
    heading: "CRM personalizado para WhatsApp y ventas en Perú",
    intro:
      "Creamos CRM personalizados para ordenar contactos, conversaciones, tareas y etapas comerciales según la forma real en la que vende tu empresa.",
    summary:
      "Un CRM bien hecho reduce pérdida de seguimiento y da visibilidad a ventas, atención y postventa desde un solo sistema.",
    accent: "#f4bc22",
    image: "/images/service-consulting.webp",
    benefits: [
      "Registro centralizado de clientes, leads y conversaciones.",
      "Procesos hechos a medida para ventas, seguimiento y reportes.",
      "Integración con WhatsApp, formularios y herramientas internas cuando aplica."
    ],
    process: [
      {
        title: "Levantamiento funcional",
        description: "Revisamos cómo trabaja tu equipo y qué información necesita ver, registrar y activar."
      },
      {
        title: "Modelado del sistema",
        description: "Definimos módulos, permisos, etapas y automatizaciones con foco en uso real."
      },
      {
        title: "Implementación y adopción",
        description: "Entregamos un CRM claro, entrenable y listo para crecer contigo."
      }
    ]
  },
  {
    slug: "desarrollo-web",
    href: "/servicios/desarrollo-web/",
    shortName: "Desarrollo web",
    title: "Desarrollo web para negocios peruanos",
    pageTitle: "Desarrollo web para negocios peruanos | Kitstation",
    metaDescription:
      "Desarrollamos sistemas web para empresas en Perú, plataformas a medida y soluciones digitales para operaciones comerciales, ventas y gestión interna.",
    heading: "Desarrollo web y sistemas web para empresas en Perú",
    intro:
      "Construimos soluciones web a medida para empresas que necesitan procesos digitales más ordenados, escalables y conectados con su operación.",
    summary:
      "Desde una plataforma interna hasta un sistema comercial, trabajamos arquitectura funcional y una experiencia clara para negocios peruanos.",
    accent: "#131888",
    image: "/images/service-consulting.webp",
    benefits: [
      "Sistemas web adaptados a procesos reales y no a plantillas genéricas.",
      "Mayor control de operaciones, usuarios, datos y reportes.",
      "Base técnica lista para integrar ventas, CRM, formularios y automatizaciones."
    ],
    process: [
      {
        title: "Análisis del proceso",
        description: "Identificamos cuellos de botella, datos clave y funcionalidades necesarias para tu operación."
      },
      {
        title: "Desarrollo por módulos",
        description: "Construimos el sistema por bloques claros para mantener velocidad, orden y control de calidad."
      },
      {
        title: "Entrega y evolución",
        description: "Publicamos la solución, validamos el uso real y dejamos una base lista para nuevas mejoras."
      }
    ]
  }
];
