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
    shortName: "Diseno web",
    title: "Diseno de paginas web para empresas en Peru",
    pageTitle: "Diseno de paginas web para empresas en Peru | Kitstation",
    metaDescription:
      "Creamos paginas web profesionales para empresas en Peru con enfoque comercial, velocidad de carga y una experiencia clara para convertir visitas en oportunidades.",
    heading: "Diseno de paginas web para empresas en Peru",
    intro:
      "Creamos paginas web profesionales para marcas que necesitan verse bien, cargar rapido y comunicar valor desde la primera visita.",
    summary:
      "Nuestro equipo trabaja estructura, contenido y conversion para empresas en Lima y todo Peru que necesitan una presencia digital mas solida.",
    accent: "#6945bb",
    image: "/images/service-web.webp",
    benefits: [
      "Sitios corporativos y landings con estructura clara para vender mejor.",
      "Contenido y jerarquia visual pensados para usuarios y buscadores.",
      "Versiones optimizadas para mobile, formularios y captacion comercial."
    ],
    process: [
      {
        title: "Diagnostico y objetivos",
        description: "Definimos el tipo de pagina, publico, mensajes y accion principal que debe lograr el sitio."
      },
      {
        title: "Diseno y contenido",
        description: "Ordenamos secciones, copy, llamadas a la accion e integraciones para que la web tenga claridad comercial."
      },
      {
        title: "Publicacion y mejora",
        description: "Lanzamos la pagina, medimos el comportamiento inicial y dejamos lista la base para SEO y campanas."
      }
    ]
  },
  {
    slug: "google-ads",
    href: "/servicios/google-ads/",
    shortName: "Google Ads",
    title: "Servicio de Google Ads para empresas en Peru",
    pageTitle: "Servicio de Google Ads para empresas en Peru | Kitstation",
    metaDescription:
      "Gestionamos Google Ads para empresas en Peru con foco en captacion de leads, optimizacion de presupuesto y campanas Search, Display y YouTube.",
    heading: "Servicio de Google Ads para empresas en Peru",
    intro:
      "Llevamos trafico de alta intencion hacia tu negocio con campanas de Google Ads orientadas a conversion y control de presupuesto.",
    summary:
      "Trabajamos keywords, anuncios, paginas de destino y medicion para que tus campanas generen contactos reales y no solo clics.",
    accent: "#1f5eff",
    image: "/images/service-campaigns.webp",
    benefits: [
      "Campanas Search, Display y YouTube alineadas al objetivo comercial.",
      "Segmentacion, copys y extensiones pensadas para empresas en Peru.",
      "Optimizacion constante para mejorar costo por lead y calidad del trafico."
    ],
    process: [
      {
        title: "Investigacion de demanda",
        description: "Detectamos terminos de busqueda, zonas y servicios con mejor potencial para tu negocio."
      },
      {
        title: "Lanzamiento controlado",
        description: "Construimos campanas, grupos de anuncios, audiencias y conversiones con una estructura medible."
      },
      {
        title: "Optimizacion semanal",
        description: "Ajustamos pujas, anuncios, keywords y paginas para mejorar resultados con datos reales."
      }
    ]
  },
  {
    slug: "meta-ads",
    href: "/servicios/meta-ads/",
    shortName: "Meta Ads",
    title: "Servicio de Meta Ads en Peru",
    pageTitle: "Servicio de Meta Ads en Peru | Kitstation",
    metaDescription:
      "Creamos y optimizamos campanas de Meta Ads en Peru para empresas que quieren generar alcance, prospectos y ventas en Facebook e Instagram.",
    heading: "Servicio de Meta Ads en Peru para captar clientes",
    intro:
      "Desarrollamos campanas de Meta Ads para que tu empresa gane visibilidad, atraiga prospectos y mantenga un flujo constante de oportunidades.",
    summary:
      "Combinamos segmentacion, creatividades y seguimiento comercial para que Facebook e Instagram trabajen a favor de tus ventas.",
    accent: "#454884",
    image: "/images/service-campaigns.webp",
    benefits: [
      "Anuncios orientados a prospectos, mensajes y remarketing.",
      "Creatividades y copys adaptados al tipo de oferta y al publico objetivo.",
      "Lectura de resultados para escalar lo que mejor funciona."
    ],
    process: [
      {
        title: "Definicion de audiencias",
        description: "Seleccionamos segmentos por interes, comportamiento, ubicacion y etapa del embudo comercial."
      },
      {
        title: "Creatividad y pruebas",
        description: "Creamos variaciones de anuncios y mensajes para encontrar el angulo de mejor respuesta."
      },
      {
        title: "Seguimiento y escalado",
        description: "Revisamos metricas clave para reducir desperdicio y potenciar los conjuntos ganadores."
      }
    ]
  },
  {
    slug: "automatizacion-whatsapp",
    href: "/servicios/automatizacion-whatsapp/",
    shortName: "Automatizacion de WhatsApp",
    title: "Automatizacion de WhatsApp para empresas en Peru",
    pageTitle: "Automatizacion de WhatsApp para empresas en Peru | Kitstation",
    metaDescription:
      "Implementamos automatizacion de WhatsApp para empresas en Peru con respuestas iniciales, flujos comerciales, seguimiento y orden de conversaciones.",
    heading: "Automatizacion de WhatsApp para empresas en Peru",
    intro:
      "Automatizamos WhatsApp para que tu negocio responda mas rapido, organice consultas y avance oportunidades sin depender de seguimiento manual en cada paso.",
    summary:
      "Es una solucion util para ventas, atencion y captacion cuando tu equipo necesita mas velocidad sin perder contexto comercial.",
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
        description: "Analizamos como llegan tus consultas y que datos debes capturar desde el primer mensaje."
      },
      {
        title: "Automatizacion e integracion",
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
    title: "CRM personalizado para empresas en Peru",
    pageTitle: "CRM personalizado para empresas en Peru | Kitstation",
    metaDescription:
      "Desarrollamos CRM personalizados para empresas en Peru con integracion a WhatsApp, seguimiento de clientes y procesos adaptados a cada operacion.",
    heading: "CRM personalizado para WhatsApp y ventas en Peru",
    intro:
      "Creamos CRM personalizados para ordenar contactos, conversaciones, tareas y etapas comerciales segun la forma real en la que vende tu empresa.",
    summary:
      "Un CRM bien hecho reduce perdida de seguimiento y da visibilidad a ventas, atencion y postventa desde un solo sistema.",
    accent: "#f4bc22",
    image: "/images/service-consulting.webp",
    benefits: [
      "Registro centralizado de clientes, leads y conversaciones.",
      "Procesos hechos a medida para ventas, seguimiento y reportes.",
      "Integracion con WhatsApp, formularios y herramientas internas cuando aplica."
    ],
    process: [
      {
        title: "Levantamiento funcional",
        description: "Revisamos como trabaja tu equipo y que informacion necesita ver, registrar y activar."
      },
      {
        title: "Modelado del sistema",
        description: "Definimos modulos, permisos, etapas y automatizaciones con foco en uso real."
      },
      {
        title: "Implementacion y adopcion",
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
      "Desarrollamos sistemas web para empresas en Peru, plataformas a medida y soluciones digitales para operaciones comerciales, ventas y gestion interna.",
    heading: "Desarrollo web y sistemas web para empresas en Peru",
    intro:
      "Construimos soluciones web a medida para empresas que necesitan procesos digitales mas ordenados, escalables y conectados con su operacion.",
    summary:
      "Desde una plataforma interna hasta un sistema comercial, trabajamos arquitectura funcional y una experiencia clara para negocios peruanos.",
    accent: "#131888",
    image: "/images/service-consulting.webp",
    benefits: [
      "Sistemas web adaptados a procesos reales y no a plantillas genericas.",
      "Mayor control de operaciones, usuarios, datos y reportes.",
      "Base tecnica lista para integrar ventas, CRM, formularios y automatizaciones."
    ],
    process: [
      {
        title: "Analisis del proceso",
        description: "Identificamos cuellos de botella, datos clave y funcionalidades necesarias para tu operacion."
      },
      {
        title: "Desarrollo por modulos",
        description: "Construimos el sistema por bloques claros para mantener velocidad, orden y control de calidad."
      },
      {
        title: "Entrega y evolucion",
        description: "Publicamos la solucion, validamos el uso real y dejamos una base lista para nuevas mejoras."
      }
    ]
  }
];
