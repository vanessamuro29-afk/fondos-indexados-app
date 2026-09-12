// Puntos de la checklist "Qué mirar antes de invertir en un fondo".
// Cada punto enlaza a la lección o término del glosario donde se explica,
// para que la usuaria pueda repasarlo. La checklist en sí no evalúa ni
// puntúa el fondo: solo ayuda a organizar qué revisar.

export const CHECKLIST_ITEMS = [
  {
    id: 'objetivo-kid',
    label: 'He leído el KID / folleto del fondo',
    tooltip:
      'El KID resume objetivo, riesgo (SRI), costes y horizonte recomendado. Es el punto de partida antes de mirar cualquier otra cosa.',
    link: { type: 'lesson', id: 'kid' },
  },
  {
    id: 'comisiones',
    label: 'Comisiones (TER) y otros costes',
    tooltip:
      'El TER reduce la rentabilidad neta cada año, y su efecto se amplifica con el interés compuesto a largo plazo.',
    link: { type: 'lesson', id: 'comisiones-ter' },
  },
  {
    id: 'tipo-replica',
    label: 'Tipo de réplica (física o sintética)',
    tooltip:
      'La réplica física compra los activos del índice; la sintética usa un swap con una contraparte, lo que añade riesgo de contraparte.',
    link: { type: 'lesson', id: 'replica-fisica-sintetica' },
  },
  {
    id: 'tracking',
    label: 'Tracking error y tracking difference',
    tooltip:
      'El tracking error mide cuánto varía la diferencia fondo-índice; la tracking difference mide cuánto ha rendido de más o de menos en un periodo.',
    link: { type: 'lesson', id: 'tracking-difference' },
  },
  {
    id: 'duracion',
    label: 'Duración (si es un fondo de renta fija)',
    tooltip:
      'A mayor duración, mayor sensibilidad del precio del fondo ante cambios en los tipos de interés.',
    link: { type: 'lesson', id: 'duracion-renta-fija' },
  },
  {
    id: 'diversificacion',
    label: 'Nivel de diversificación (nº de activos, sectores, países)',
    tooltip:
      'Cuantos más activos, sectores y países distintos incluya, menor es el riesgo específico de que uno solo vaya mal.',
    link: { type: 'lesson', id: 'diversificacion' },
  },
  {
    id: 'divisa',
    label: 'Divisa / riesgo de tipo de cambio',
    tooltip:
      'Si el fondo invierte en activos en otra divisa distinta a la tuya, las variaciones del tipo de cambio pueden afectar al valor final, para bien o para mal.',
    link: { type: 'glossary', term: 'Riesgo de divisa' },
  },
  {
    id: 'distribucion-acumulacion',
    label: 'Reparto: clase de distribución o de acumulación',
    tooltip:
      'Las clases de distribución reparten dividendos/cupones en efectivo periódicamente; las de acumulación los reinvierten automáticamente dentro del fondo.',
    link: { type: 'glossary', term: 'Distribución vs. acumulación' },
  },
  {
    id: 'liquidez',
    label: 'Liquidez (cómo y cuándo puedes recuperar el dinero)',
    tooltip:
      'Los fondos tradicionales operan a un valor liquidativo diario; los ETFs cotizan en bolsa en tiempo real. El plazo de disponibilidad del dinero varía según el vehículo.',
    link: { type: 'lesson', id: 'liquidez' },
  },
  {
    id: 'horizonte-perfil',
    label: 'Coherencia con tu horizonte temporal y tu perfil de riesgo',
    tooltip:
      'Un horizonte más corto suele requerir asumir menos volatilidad; un horizonte más largo da más margen para atravesar caídas temporales.',
    link: { type: 'lesson', id: 'horizonte-perfil-riesgo' },
  },
]
