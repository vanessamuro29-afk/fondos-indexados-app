// Registro de temas usado para clasificar noticias financieras por
// palabras clave (sin IA, sin analizar el contenido real de cada noticia:
// solo detecta de qué tipo de tema general trata). Lo usa tanto el script
// que obtiene las noticias (scripts/fetch-market-news.mjs) como la propia
// app, para poder enlazar cada tema con la lección/glosario correspondiente
// y saber si ya existe un escenario educativo que lo cubra.
//
// `scenarioTag` debe coincidir exactamente con el `tag` de algún escenario
// en src/data/scenarios.js cuando el tema ya esté cubierto; si no hay
// ningún escenario que lo cubra, se deja en null.

export const NEWS_TOPICS = [
  {
    id: 'tipos-interes',
    label: 'Tipos de interés',
    keywords: [
      'interest rate', 'rate hike', 'rate cut', 'fed funds', 'federal reserve',
      'tipos de interés', 'tipo de interés', 'bce', 'ecb rate', 'banco central europeo',
      'central bank', 'monetary policy', 'política monetaria',
    ],
    scenarioTag: 'Tipos de interés',
    glossaryTerms: ['Duración', 'Curva de tipos'],
    note: 'Los cambios en los tipos de interés de referencia afectan al precio de los bonos ya emitidos: cuanto mayor es la duración de un bono o fondo de renta fija, más sensible es su precio a este tipo de noticias.',
  },
  {
    id: 'inflacion',
    label: 'Inflación',
    keywords: ['inflation', 'cpi', 'consumer price', 'inflación', 'ipc', 'precios al consumo'],
    scenarioTag: 'Inflación',
    glossaryTerms: ['Rentabilidad histórica vs. futura'],
    note: 'Una inflación distinta de la esperada cambia la rentabilidad real (descontada la inflación) de cualquier inversión, y puede erosionar el valor de cupones fijos pactados de antemano.',
  },
  {
    id: 'renta-variable',
    label: 'Renta variable',
    keywords: [
      'stock market', 'sell-off', 'selloff', 'market correction', 'wall street', 's&p 500',
      'nasdaq', 'dow jones', 'bolsa', 'desplome', 'caída bursátil', 'acciones',
    ],
    scenarioTag: 'Renta variable',
    glossaryTerms: ['Volatilidad', 'Diversificación'],
    note: 'Los movimientos bruscos en los mercados de acciones son episodios de volatilidad: recuerda que la diversificación reduce el riesgo específico de un activo, pero no el riesgo de mercado en general.',
  },
  {
    id: 'curva-tipos',
    label: 'Curva de tipos',
    keywords: ['yield curve', 'inverted yield', 'curva de tipos', 'curva invertida'],
    scenarioTag: 'Renta fija',
    glossaryTerms: ['Curva de tipos', 'Duración'],
    note: 'La curva de tipos compara el interés de la deuda de un mismo emisor a distintos plazos; cuando se invierte, el corto plazo ofrece más interés que el largo, al contrario de lo habitual.',
  },
  {
    id: 'geopolitica',
    label: 'Volatilidad geopolítica',
    keywords: ['geopolitical', 'sanctions', 'guerra', 'conflicto armado', 'sanciones', 'tensión comercial'],
    scenarioTag: 'Volatilidad',
    glossaryTerms: ['Volatilidad'],
    note: 'Los eventos geopolíticos inesperados suelen traducirse en un aumento temporal de la volatilidad: oscilaciones de precio más amplias de lo habitual en varias clases de activos a la vez.',
  },
  // --- Temas que, de momento, no tienen un escenario educativo dedicado ---
  {
    id: 'criptomonedas',
    label: 'Criptomonedas',
    keywords: ['bitcoin', 'crypto', 'criptomoneda', 'ethereum', 'cryptocurrency'],
    scenarioTag: null,
    glossaryTerms: [],
    note: 'Esta app no cubre criptomonedas: no forman parte de los fondos indexados de renta fija o variable explicados aquí, y tienen una dinámica de riesgo propia no tratada en esta teoría.',
  },
  {
    id: 'materias-primas',
    label: 'Materias primas',
    keywords: ['oil price', 'crude oil', 'commodities', 'petróleo', 'materias primas', 'gas natural', 'gold price'],
    scenarioTag: null,
    glossaryTerms: [],
    note: 'Las materias primas pueden afectar indirectamente a la inflación y a sectores concretos de la renta variable, pero no se explican en detalle en esta app.',
  },
  {
    id: 'comercio-aranceles',
    label: 'Comercio internacional y aranceles',
    keywords: ['tariff', 'trade war', 'arancel', 'guerra comercial', 'comercio internacional'],
    scenarioTag: null,
    glossaryTerms: ['Diversificación'],
    note: 'Los cambios en aranceles o relaciones comerciales pueden afectar de forma desigual a distintos sectores y países, lo que conecta con la idea de diversificar entre regiones.',
  },
  {
    id: 'sector-bancario',
    label: 'Sector bancario',
    keywords: ['bank failure', 'banking crisis', 'bank run', 'crisis bancaria', 'quiebra de un banco', 'rescate bancario'],
    scenarioTag: null,
    glossaryTerms: ['Riesgo de contraparte', 'Diversificación'],
    note: 'Los problemas en entidades bancarias concretas pueden relacionarse con el riesgo de contraparte visto en réplica sintética, y recuerdan la importancia de no concentrar el riesgo en un único emisor.',
  },
  {
    id: 'divisas',
    label: 'Divisas',
    keywords: ['currency', 'exchange rate', 'dólar', 'tipo de cambio', 'devaluación', 'depreciación de la divisa'],
    scenarioTag: null,
    glossaryTerms: ['Riesgo de divisa'],
    note: 'Los movimientos de tipo de cambio afectan al valor, en tu propia divisa, de cualquier inversión hecha en una divisa distinta — es lo que en el glosario se llama riesgo de divisa.',
  },
]

export function matchTopics(text) {
  const lower = text.toLowerCase()
  return NEWS_TOPICS.filter((topic) => topic.keywords.some((kw) => lower.includes(kw.toLowerCase())))
}

export function isNewScenarioCandidate(matchedTopics) {
  return matchedTopics.length > 0 && matchedTopics.every((t) => t.scenarioTag === null)
}
