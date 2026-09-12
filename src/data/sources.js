// Enlaces externos curados a fuentes de información fiables.
// Son solo enlaces para que el usuario los abra por su cuenta: esta app no
// hace scraping ni integración con estos sitios, ni importa sus datos.
// Se enlaza siempre a la página principal de cada organización (no a rutas
// internas concretas) porque las URLs internas cambian con el tiempo; una
// vez dentro, usa el buscador del propio sitio para encontrar lo que
// necesites.

export const SOURCE_CATEGORIES = [
  {
    id: 'buscadores',
    title: 'Buscadores y datos de fondos',
    description:
      'Sitios donde puedes buscar fondos concretos, comparar sus datos (TER, rentabilidad histórica con su periodo, categoría de riesgo) y leer análisis independientes.',
    sources: [
      {
        name: 'Morningstar España',
        url: 'https://www.morningstar.es',
        note:
          'Buscador y comparador de fondos con datos como rentabilidad histórica (con su periodo exacto), comisiones, rating y categoría del fondo. Útil para consultar el KID/ficha de un fondo concreto antes de decidir.',
      },
    ],
  },
  {
    id: 'reguladores',
    title: 'Reguladores y datos oficiales',
    description:
      'Organismos oficiales españoles y europeos con estadísticas, normativa y registros verificables sobre mercados financieros.',
    sources: [
      {
        name: 'CNMV — Comisión Nacional del Mercado de Valores',
        url: 'https://www.cnmv.es',
        note:
          'Regulador de los mercados de valores en España. Publica registros oficiales de fondos y sociedades gestoras, normativa, alertas sobre entidades no autorizadas y estadísticas del sector.',
      },
      {
        name: 'Banco de España',
        url: 'https://www.bde.es',
        note:
          'Banco central de España. Publica estadísticas económicas y financieras oficiales, informes de estabilidad financiera y material de educación financiera.',
      },
      {
        name: 'BCE — Banco Central Europeo',
        url: 'https://www.ecb.europa.eu',
        note:
          'Banco central de la eurozona. Fuente oficial para decisiones de política monetaria (tipos de interés de referencia), inflación de la eurozona y estadísticas del área euro.',
      },
      {
        name: 'CNMC — Comisión Nacional de los Mercados y la Competencia',
        url: 'https://www.cnmc.es',
        note:
          'Organismo que supervisa la competencia y regula varios mercados en España. Relevante para entender el contexto regulatorio general, aunque no es un regulador específico de fondos de inversión.',
      },
    ],
  },
  {
    id: 'educacion',
    title: 'Educación financiera',
    description:
      'Recursos pensados específicamente para explicar conceptos financieros a personas no especialistas.',
    sources: [
      {
        name: 'Finanzas para Todos',
        url: 'https://www.finanzasparatodos.es',
        note:
          'Portal de educación financiera impulsado conjuntamente por la CNMV y el Banco de España, con guías y calculadoras sobre ahorro, inversión y productos financieros explicadas en lenguaje sencillo.',
      },
    ],
  },
]
