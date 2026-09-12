// Glosario de referencia rápida: recopila los términos ya explicados en las
// lecciones (y, en un par de casos, en el módulo de escenarios) de esta app.
// No se inventan términos nuevos que no se hayan usado ya en el contenido.

export const GLOSSARY_CATEGORIES = [
  'Conceptos generales',
  'Renta fija',
  'Renta variable',
  'Cartera y riesgo',
  'Costes y documentación',
]

export const GLOSSARY = [
  {
    term: 'Fondo indexado',
    category: 'Conceptos generales',
    definition:
      'Fondo de inversión de gestión pasiva cuyo objetivo es replicar el comportamiento de un índice, en lugar de intentar batirlo eligiendo activos.',
    link: { type: 'lesson', id: 'que-es-fondo-indexado' },
  },
  {
    term: 'Gestión pasiva',
    category: 'Conceptos generales',
    definition:
      'Estilo de gestión que sigue una regla fija y transparente (la composición de un índice) en vez de tomar decisiones discrecionales sobre qué comprar o vender.',
    link: { type: 'lesson', id: 'que-es-fondo-indexado' },
  },
  {
    term: 'Índice',
    category: 'Conceptos generales',
    definition:
      'Lista de activos (acciones, bonos...) con reglas claras sobre qué entra, qué sale y qué peso tiene cada uno. Sirve como referencia del comportamiento de un mercado.',
    link: { type: 'lesson', id: 'que-es-fondo-indexado' },
  },
  {
    term: 'Renta fija',
    category: 'Renta fija',
    definition:
      'Instrumentos (como los bonos) mediante los que prestas dinero a un emisor a cambio de unos intereses (cupones) pactados y la devolución del capital al vencimiento.',
    link: { type: 'lesson', id: 'renta-fija-vs-variable' },
  },
  {
    term: 'Cupón',
    category: 'Renta fija',
    definition: 'El pago periódico de intereses que recibe quien posee un bono, pactado de antemano por el emisor.',
    link: { type: 'lesson', id: 'renta-fija-vs-variable' },
  },
  {
    term: 'Renta variable',
    category: 'Renta variable',
    definition:
      'Instrumentos (como las acciones) mediante los que te conviertes en copropietario de una empresa, sin devolución de capital garantizada.',
    link: { type: 'lesson', id: 'renta-fija-vs-variable' },
  },
  {
    term: 'Diversificación',
    category: 'Conceptos generales',
    definition:
      'Repartir la inversión entre muchos activos distintos para reducir el impacto de que uno solo vaya mal. Reduce el riesgo específico, no el riesgo de mercado en general.',
    link: { type: 'lesson', id: 'diversificacion' },
  },
  {
    term: 'TER (comisiones)',
    category: 'Costes y documentación',
    definition:
      'Total Expense Ratio: porcentaje anual que cobra un fondo en concepto de gastos de gestión y otros costes, que reduce la rentabilidad neta.',
    link: { type: 'lesson', id: 'comisiones-ter' },
  },
  {
    term: 'Tracking error',
    category: 'Conceptos generales',
    definition:
      'Mide la dispersión/volatilidad de la diferencia entre la rentabilidad de un fondo indexado y la de su índice de referencia.',
    link: { type: 'lesson', id: 'tracking-error' },
  },
  {
    term: 'Duración',
    category: 'Renta fija',
    definition:
      'Medida de la sensibilidad del precio de un bono (o de un fondo de renta fija) ante cambios en los tipos de interés: a mayor duración, mayor sensibilidad.',
    link: { type: 'lesson', id: 'duracion-renta-fija' },
  },
  {
    term: 'Volatilidad',
    category: 'Conceptos generales',
    definition:
      'Magnitud de las oscilaciones de precio de una inversión a lo largo del tiempo. No es lo mismo que una pérdida definitiva.',
    link: { type: 'lesson', id: 'volatilidad' },
  },
  {
    term: 'Rentabilidad histórica vs. futura',
    category: 'Conceptos generales',
    definition:
      'Principio según el cual los resultados pasados de una inversión no garantizan sus resultados futuros.',
    link: { type: 'lesson', id: 'rentabilidad-historica-vs-futura' },
  },
  {
    term: 'Asignación de activos',
    category: 'Cartera y riesgo',
    definition:
      'Decisión de qué porcentaje de una cartera se destina a cada tipo de activo (por ejemplo, renta fija y renta variable).',
    link: { type: 'lesson', id: 'asignacion-activos' },
  },
  {
    term: 'Rebalanceo',
    category: 'Cartera y riesgo',
    definition:
      'Ajuste periódico de los pesos de una cartera para que vuelvan a la asignación objetivo original, corrigiendo las desviaciones acumuladas.',
    link: { type: 'lesson', id: 'rebalanceo' },
  },
  {
    term: 'Horizonte temporal',
    category: 'Cartera y riesgo',
    definition: 'El tiempo que planeas mantener una inversión antes de necesitar ese dinero.',
    link: { type: 'lesson', id: 'horizonte-perfil-riesgo' },
  },
  {
    term: 'Perfil de riesgo',
    category: 'Cartera y riesgo',
    definition:
      'Combinación de la capacidad financiera para asumir pérdidas y la tolerancia emocional a la volatilidad de una persona inversora.',
    link: { type: 'lesson', id: 'horizonte-perfil-riesgo' },
  },
  {
    term: 'KID (Documento de Datos Fundamentales)',
    category: 'Costes y documentación',
    definition:
      'Documento breve y obligatorio que resume el objetivo, riesgo, costes y horizonte recomendado de un fondo antes de contratarlo.',
    link: { type: 'lesson', id: 'kid' },
  },
  {
    term: 'Indicador SRI',
    category: 'Costes y documentación',
    definition: 'Escala del 1 (menor riesgo) al 7 (mayor riesgo) que resume el nivel de riesgo de un producto en el KID.',
    link: { type: 'lesson', id: 'kid' },
  },
  {
    term: 'Réplica física',
    category: 'Conceptos generales',
    definition:
      'Forma de construir un fondo indexado comprando directamente los activos del índice, de forma completa o mediante una muestra representativa.',
    link: { type: 'lesson', id: 'replica-fisica-sintetica' },
  },
  {
    term: 'Réplica sintética',
    category: 'Conceptos generales',
    definition:
      'Forma de construir un fondo indexado usando un contrato (swap) con una entidad que paga al fondo la rentabilidad del índice, sin comprar sus activos directamente.',
    link: { type: 'lesson', id: 'replica-fisica-sintetica' },
  },
  {
    term: 'Riesgo de contraparte',
    category: 'Conceptos generales',
    definition:
      'Riesgo de que la entidad con la que un fondo ha firmado un contrato (como un swap en la réplica sintética) no pueda cumplir su compromiso.',
    link: { type: 'lesson', id: 'replica-fisica-sintetica' },
  },
  {
    term: 'Tracking difference',
    category: 'Conceptos generales',
    definition:
      'Diferencia acumulada de rentabilidad entre un fondo y su índice al final de un periodo, a diferencia del tracking error (que mide dispersión).',
    link: { type: 'lesson', id: 'tracking-difference' },
  },
  {
    term: 'Régimen de traspasos',
    category: 'Costes y documentación',
    definition:
      'En España, la posibilidad de mover dinero entre fondos de inversión sin tributar en ese momento, difiriendo la tributación al reembolso final. Consulta siempre la normativa vigente.',
    link: { type: 'lesson', id: 'fiscalidad-basica' },
  },
  {
    term: 'Liquidez',
    category: 'Conceptos generales',
    definition: 'Facilidad para convertir una inversión en dinero disponible sin penalización relevante ni demoras excesivas.',
    link: { type: 'lesson', id: 'liquidez' },
  },
  {
    term: 'Valor liquidativo (VL)',
    category: 'Conceptos generales',
    definition:
      'Precio al que se compran/venden las participaciones de un fondo tradicional, calculado normalmente una vez al día.',
    link: { type: 'lesson', id: 'liquidez' },
  },
  {
    term: 'ETF (fondo cotizado)',
    category: 'Conceptos generales',
    definition:
      'Fondo que, a diferencia de uno tradicional, se compra y vende en bolsa en tiempo real durante el horario de mercado, como una acción.',
    link: { type: 'lesson', id: 'liquidez' },
  },
  {
    term: 'Curva de tipos',
    category: 'Renta fija',
    definition:
      'Representación de los tipos de interés de la deuda de un mismo emisor según el plazo. Se dice "invertida" cuando el corto plazo ofrece más interés que el largo, al contrario de lo habitual.',
    link: { type: 'scenario', id: 'curva-invertida' },
  },
  {
    term: 'Riesgo de divisa',
    category: 'Cartera y riesgo',
    definition:
      'Riesgo de que las variaciones en el tipo de cambio entre divisas afecten al valor, en tu moneda, de una inversión hecha en otra divisa distinta.',
    link: null,
  },
  {
    term: 'Distribución vs. acumulación',
    category: 'Costes y documentación',
    definition:
      'Dos formas de tratar los dividendos o cupones que genera un fondo: las clases "de distribución" los reparten periódicamente en efectivo, y las "de acumulación" los reinvierten automáticamente dentro del fondo.',
    link: null,
  },
]

export function searchGlossary(query, category) {
  const q = query.trim().toLowerCase()
  return GLOSSARY.filter((entry) => {
    const matchesCategory = !category || category === 'Todas' || entry.category === category
    const matchesQuery =
      !q || entry.term.toLowerCase().includes(q) || entry.definition.toLowerCase().includes(q)
    return matchesCategory && matchesQuery
  }).sort((a, b) => a.term.localeCompare(b.term, 'es'))
}
