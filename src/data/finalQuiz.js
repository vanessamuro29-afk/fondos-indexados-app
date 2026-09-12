// Test final acumulativo: mezcla preguntas de todas las lecciones.
// Todas las cifras son ejemplos ilustrativos para el ejercicio.

export const FINAL_QUIZ = [
  {
    question: 'Un fondo indexado busca principalmente...',
    options: [
      'Batir al mercado eligiendo activos ganadores',
      'Replicar el comportamiento de un índice de referencia',
      'Garantizar una rentabilidad fija',
      'Concentrar la inversión en pocas empresas',
    ],
    correctIndex: 1,
    explanation: 'Es la idea central de la gestión pasiva: seguir un índice, no intentar batirlo.',
  },
  {
    question: 'Comprar un bono equivale, en esencia, a...',
    options: [
      'Ser propietario de una empresa',
      'Prestar dinero a un emisor a cambio de intereses',
      'Comprar un fondo de renta variable',
      'Adquirir un derivado financiero complejo',
    ],
    correctIndex: 1,
    explanation: 'La renta fija representa un préstamo del inversor al emisor (empresa o Estado).',
  },
  {
    question: 'Comprar una acción equivale a...',
    options: [
      'Prestar dinero con interés garantizado',
      'Convertirte en copropietario de una parte de la empresa',
      'Comprar deuda pública',
      'Firmar un depósito bancario',
    ],
    correctIndex: 1,
    explanation: 'La renta variable representa una parte de la propiedad de la empresa, sin devolución garantizada.',
  },
  {
    question: 'Diversificar una cartera sirve principalmente para...',
    options: [
      'Eliminar totalmente el riesgo de mercado',
      'Reducir el impacto de que un activo concreto vaya mal',
      'Aumentar las comisiones',
      'Garantizar rentabilidad positiva',
    ],
    correctIndex: 1,
    explanation: 'Reparte el riesgo específico de cada activo, aunque no elimina el riesgo general del mercado.',
  },
  {
    question: 'El TER de un fondo representa...',
    options: [
      'La rentabilidad garantizada anual',
      'El porcentaje anual de gastos y comisiones del fondo',
      'Un impuesto estatal fijo',
      'El número de activos del fondo',
    ],
    correctIndex: 1,
    explanation: 'El TER son los costes anuales del fondo, que reducen la rentabilidad neta para el inversor.',
  },
  {
    question: 'Una comisión más alta mantenida durante muchos años...',
    options: [
      'No afecta al capital final por el interés compuesto',
      'Puede reducir de forma significativa el capital final acumulado',
      'Solo afecta el primer año de inversión',
      'Aumenta la rentabilidad bruta del fondo',
    ],
    correctIndex: 1,
    explanation: 'El interés compuesto amplifica el efecto de las comisiones a lo largo de los años.',
  },
  {
    question: 'El "tracking error" mide...',
    options: [
      'La rentabilidad total de un fondo',
      'La diferencia entre la rentabilidad del fondo y la de su índice de referencia',
      'El riesgo de impago del emisor',
      'El número de partícipes del fondo',
    ],
    correctIndex: 1,
    explanation: 'Cuantifica cuánto se desvía el fondo respecto al índice que intenta replicar.',
  },
  {
    question: 'La "duración" en renta fija describe principalmente...',
    options: [
      'El número exacto de años hasta el vencimiento',
      'La sensibilidad del precio del bono ante cambios en los tipos de interés',
      'El riesgo de que la empresa quiebre',
      'La rentabilidad garantizada del bono',
    ],
    correctIndex: 1,
    explanation: 'A mayor duración, mayor sensibilidad del precio a las variaciones de tipos de interés.',
  },
  {
    question: 'La volatilidad de una inversión hace referencia a...',
    options: [
      'La rentabilidad media esperada',
      'La magnitud de las oscilaciones de precio en el tiempo',
      'El coste de gestión del fondo',
      'El riesgo de fraude del gestor',
    ],
    correctIndex: 1,
    explanation: 'La volatilidad mide cuánto varía el precio respecto a su media, no si esa variación es "buena" o "mala".',
  },
  {
    question: '¿Es correcto decir que la rentabilidad pasada garantiza la rentabilidad futura?',
    options: ['Sí, siempre', 'No, las rentabilidades pasadas no garantizan resultados futuros', 'Solo si el fondo es indexado', 'Solo en renta fija'],
    correctIndex: 1,
    explanation: 'Es un principio ampliamente aceptado: los datos históricos no predicen con certeza el futuro.',
  },
  {
    question: 'La "asignación de activos" consiste en...',
    options: [
      'Elegir un único fondo al azar',
      'Decidir qué porcentaje de la cartera va a cada tipo de activo (por ejemplo, RF y RV)',
      'Cambiar de bróker periódicamente',
      'Calcular impuestos anuales',
    ],
    correctIndex: 1,
    explanation: 'Es la decisión de reparto entre grandes categorías de activos, clave en el resultado a largo plazo.',
  },
  {
    question: 'Rebalancear una cartera significa...',
    options: [
      'Venderlo todo y empezar de cero',
      'Ajustar los pesos de los activos para volver a la asignación objetivo original',
      'Aumentar siempre el riesgo con el tiempo',
      'Cambiar de divisa la inversión',
    ],
    correctIndex: 1,
    explanation: 'El rebalanceo corrige las desviaciones que aparecen cuando unos activos crecen más que otros.',
  },
  {
    question: 'Un horizonte temporal más largo permite, en general...',
    options: [
      'Asumir menos riesgo siempre',
      'Tener más margen para recuperarse de caídas temporales antes de necesitar el dinero',
      'Eliminar toda posibilidad de pérdida',
      'No afecta a la decisión de riesgo',
    ],
    correctIndex: 1,
    explanation: 'A más tiempo disponible, más margen para atravesar caídas de mercado sin verse forzado a vender.',
  },
  {
    question: 'El perfil de riesgo de una persona combina...',
    options: [
      'Solo su edad',
      'Su capacidad financiera para asumir pérdidas y su tolerancia emocional a la volatilidad',
      'El tamaño de su banco',
      'El número de fondos que posee',
    ],
    correctIndex: 1,
    explanation: 'Capacidad (cuánto puede permitirse perder) y tolerancia (cuánta volatilidad soporta emocionalmente).',
  },
  {
    question:
      'En esta aplicación, las rentabilidades usadas en la calculadora y el simulador de cartera son...',
    options: [
      'Datos de mercado reales verificados',
      'Parámetros hipotéticos que introduce la persona usuaria, con fines educativos',
      'Predicciones oficiales de un regulador',
      'La media histórica exacta de la bolsa mundial',
    ],
    correctIndex: 1,
    explanation: 'Son ejercicios matemáticos con datos que tú mismo defines: no son recomendaciones ni datos reales de mercado.',
  },
  {
    question: 'Verdadero o falso: diversificar y rebalancear una cartera elimina completamente el riesgo de pérdida.',
    options: ['Verdadero', 'Falso'],
    correctIndex: 1,
    explanation: 'Falso. Reducen ciertos riesgos (concentración, desviación del objetivo), pero ninguna inversión está libre de riesgo.',
  },
  {
    question: 'El KID (Documento de Datos Fundamentales) es...',
    options: [
      'Un documento opcional que casi nadie usa',
      'Un documento breve y obligatorio que resume objetivo, riesgo (SRI), costes y horizonte de un fondo',
      'El folleto completo de cientos de páginas',
      'Un informe interno solo para el gestor',
    ],
    correctIndex: 1,
    explanation: 'El KID es un resumen breve y estandarizado, obligatorio por normativa, para comparar productos antes de contratarlos.',
  },
  {
    question: 'En la réplica sintética de un fondo indexado...',
    options: [
      'El fondo compra directamente todos los activos del índice',
      'El fondo usa un swap con una contraparte para obtener la rentabilidad del índice',
      'No existe ningún tipo de riesgo adicional',
      'Es idéntica a comprar acciones una a una',
    ],
    correctIndex: 1,
    explanation: 'La réplica sintética depende de un contrato (swap) con una contraparte, lo que añade riesgo de contraparte frente a la réplica física.',
  },
  {
    question: 'La tracking difference, a diferencia del tracking error, mide...',
    options: [
      'La volatilidad diaria de la diferencia fondo-índice',
      'La diferencia acumulada de rentabilidad entre fondo e índice en un periodo',
      'El riesgo de contraparte',
      'El nivel de riesgo SRI',
    ],
    correctIndex: 1,
    explanation: 'El tracking error mide dispersión/volatilidad de la diferencia; la tracking difference resume el resultado acumulado en un periodo.',
  },
  {
    question: 'Sobre el régimen de traspasos entre fondos en España (información general, no asesoramiento fiscal)...',
    options: [
      'Genera tributación inmediata siempre',
      'Permite, en general, cambiar de fondo sin tributar en ese momento, difiriendo la tributación al reembolso final',
      'Solo aplica a los ETFs',
      'Ha sido siempre igual e inmutable en cualquier país',
    ],
    correctIndex: 1,
    explanation: 'Es una característica estructural del sistema español para fondos tradicionales, aunque la normativa puede cambiar: conviene verificarla en fuentes oficiales.',
  },
  {
    question: 'La liquidez de una inversión se refiere a...',
    options: [
      'Su rentabilidad esperada',
      'La facilidad para convertirla en dinero disponible sin penalización relevante',
      'Su nivel de riesgo SRI',
      'El tipo de réplica que usa',
    ],
    correctIndex: 1,
    explanation: 'La liquidez mide cuán fácil y rápido es convertir una inversión en efectivo disponible, sin malvenderla ni esperar demasiado.',
  },
]
