// Escenarios de práctica para interpretar situaciones de mercado.
//
// IMPORTANTE: todos los escenarios de este archivo son EJEMPLOS EDUCATIVOS
// redactados para este ejercicio. Ninguno describe una noticia real, un
// evento concreto que haya ocurrido, ni una predicción de lo que vaya a
// pasar en los mercados. Los nombres de países, bancos centrales o cifras
// son genéricos e ilustrativos. El objetivo es practicar el razonamiento
// (relaciones entre tipos de interés, duración, inflación, volatilidad y
// riesgo), nunca sugerir qué hacer con dinero real.

export const SCENARIOS = [
  {
    id: 'subida-tipos',
    order: 1,
    tag: 'Tipos de interés',
    title: 'Un banco central sube los tipos de interés',
    narrative: `Escenario educativo (ficticio): el banco central de una región económica anuncia una
subida de su tipo de interés de referencia, tras varios meses señalando que lo haría para
intentar moderar la inflación. Los mercados ya esperaban parcialmente esta subida.`,
    questions: [
      {
        question:
          'En este escenario, ¿qué relación general estudiada en la lección de "Duración" ayuda a razonar el efecto sobre bonos ya emitidos?',
        options: [
          'A mayor duración, menor sensibilidad del precio a los tipos de interés',
          'A mayor duración, mayor sensibilidad del precio a los tipos de interés (relación inversa precio-tipos)',
          'La duración no tiene relación con los tipos de interés',
          'Los tipos de interés solo afectan a la renta variable',
        ],
        correctIndex: 1,
        explanation:
          'La relación estudiada es: a mayor duración, mayor sensibilidad del precio del bono ante cambios en los tipos. Es un razonamiento sobre mecánica financiera general, no una predicción de este caso concreto.',
      },
      {
        question:
          'Entre un fondo de renta fija de duración larga y otro de duración corta, ¿cuál cabría esperar, en principio, que sufra una mayor variación de precio ante esta subida de tipos?',
        options: [
          'El de duración corta',
          'El de duración larga',
          'Ambos exactamente igual siempre',
          'Ninguno, la renta fija nunca varía de precio',
        ],
        correctIndex: 1,
        explanation:
          'Conceptualmente, el fondo de duración larga es más sensible a los cambios de tipos, por lo que en principio mostraría una mayor variación de precio ante la misma subida. Esto es un razonamiento general, no un pronóstico de ningún fondo real.',
      },
      {
        question:
          '¿Qué debería hacer alguien con este razonamiento, según los principios de esta app?',
        options: [
          'Vender inmediatamente todos sus fondos de renta fija de duración larga',
          'Usarlo solo para entender mejor el mecanismo, no como una señal de qué comprar o vender',
          'Comprar más renta fija de duración larga porque "ya ha bajado y va a subir"',
          'Ignorar por completo el concepto de duración a partir de ahora',
        ],
        correctIndex: 1,
        explanation:
          'El objetivo de este ejercicio es entender relaciones (cómo la duración afecta la sensibilidad a tipos), no derivar una acción de compra o venta. Ninguna decisión real de inversión debería basarse solo en un ejercicio educativo como este.',
      },
    ],
  },
  {
    id: 'inflacion-alta',
    order: 2,
    tag: 'Inflación',
    title: 'Un periodo de inflación alta y persistente',
    narrative: `Escenario educativo (ficticio): durante varios trimestres, los datos de precios al
consumo de una región muestran una inflación notablemente por encima de lo habitual en
los años previos, afectando a la mayoría de bienes y servicios.`,
    questions: [
      {
        question:
          'Si la inflación es alta, ¿qué distinción de la lección "Rentabilidad histórica vs. futura" resulta relevante para interpretar una rentabilidad nominal?',
        options: [
          'No hay ninguna distinción relevante',
          'La diferencia entre rentabilidad nominal (sin descontar inflación) y rentabilidad real (descontando inflación)',
          'La diferencia entre TER y tracking error',
          'La diferencia entre renta fija y renta variable',
        ],
        correctIndex: 1,
        explanation:
          'Con inflación alta, una misma rentabilidad nominal representa una ganancia real (ajustada por inflación) menor. Distinguir nominal de real es clave para interpretar cualquier cifra de rentabilidad en este contexto.',
      },
      {
        question:
          '(Ejemplo ilustrativo, no dato real) Si una inversión rinde un 5% nominal en un año en que la inflación fue del 6%, ¿qué se puede decir de la rentabilidad real aproximada?',
        options: [
          'Sería aproximadamente +11%',
          'Sería aproximadamente -1% (el poder adquisitivo se redujo ligeramente)',
          'Sería exactamente 5%, la inflación no afecta al cálculo',
          'No se puede estimar de ninguna forma',
        ],
        correctIndex: 1,
        explanation:
          'De forma simplificada, rentabilidad real ≈ rentabilidad nominal − inflación: 5% − 6% ≈ −1%. Aunque el valor en dinero subió, el poder adquisitivo real bajó ligeramente. Cifras inventadas para el ejercicio.',
      },
      {
        question:
          '¿Qué relación general se suele estudiar entre inflación alta y renta fija de cupón fijo ya emitida?',
        options: [
          'La inflación alta no afecta en absoluto a la renta fija',
          'Una inflación más alta de lo esperado puede erosionar el valor real de unos cupones fijos pactados de antemano',
          'La inflación siempre mejora la rentabilidad real de la renta fija',
          'La renta fija se ajusta automáticamente a la inflación en todos los casos',
        ],
        correctIndex: 1,
        explanation:
          'Si un bono paga un cupón fijo pactado antes de que la inflación subiera, ese cupón vale menos en términos reales cuando la inflación es más alta de lo previsto. Existen bonos ligados a la inflación que son una excepción a este razonamiento general, pero no es el caso por defecto.',
      },
      {
        question: '¿Este ejercicio te dice si deberías cambiar tu cartera ante inflación alta?',
        options: [
          'Sí, indica exactamente qué activos comprar',
          'No: solo ayuda a razonar relaciones económicas generales, no sustituye ningún análisis personalizado ni es una recomendación',
          'Sí, siempre hay que vender renta fija con inflación alta',
          'Sí, siempre hay que vender renta variable con inflación alta',
        ],
        correctIndex: 1,
        explanation:
          'El objetivo es solo practicar el razonamiento económico. Ninguna decisión de inversión real debería tomarse a partir de un ejercicio educativo genérico como este.',
      },
    ],
  },
  {
    id: 'correccion-bursatil',
    order: 3,
    tag: 'Renta variable',
    title: 'Una corrección fuerte en los mercados de renta variable',
    narrative: `Escenario educativo (ficticio): a lo largo de unas pocas semanas, los principales índices
bursátiles de una región caen de forma pronunciada respecto a sus niveles previos, en un
contexto de incertidumbre económica generalizada.`,
    questions: [
      {
        question:
          'Según lo estudiado en "Volatilidad", ¿cómo se describiría técnicamente una caída pronunciada y rápida como esta?',
        options: [
          'Como un ejemplo de baja volatilidad',
          'Como un ejemplo de alta volatilidad (una oscilación de gran magnitud en poco tiempo)',
          'La volatilidad no tiene relación con las caídas de precio',
          'Como un cambio en el TER de los fondos',
        ],
        correctIndex: 1,
        explanation:
          'Una caída rápida y de gran magnitud es, por definición, un episodio de alta volatilidad: una oscilación grande del precio en poco tiempo, sea al alza o a la baja.',
      },
      {
        question:
          'Según el concepto de "Diversificación", ¿una cartera repartida entre muchos sectores y países se vería completamente inmune a esta corrección?',
        options: [
          'Sí, la diversificación elimina cualquier caída',
          'No: la diversificación reduce el riesgo específico de un activo o sector, pero no elimina el riesgo de mercado generalizado',
          'La diversificación solo funciona en renta fija',
          'La diversificación aumenta las caídas',
        ],
        correctIndex: 1,
        explanation:
          'Como se vio en la lección de diversificación, repartir entre muchos activos reduce el riesgo específico, pero si cae "todo el mercado" a la vez, una cartera diversificada también se ve afectada, aunque de forma distinta a una concentrada en el sector más golpeado.',
      },
      {
        question:
          'Según "Horizonte temporal y perfil de riesgo", ¿qué factor es clave para decidir cómo reaccionar (o no reaccionar) ante una caída así?',
        options: [
          'El color de la interfaz del bróker',
          'El horizonte temporal de la inversión y la tolerancia al riesgo de la persona',
          'Ninguno, siempre hay que vender de inmediato',
          'Solo importa la opinión de un influencer financiero',
        ],
        correctIndex: 1,
        explanation:
          'Cuanto más largo sea el horizonte y mayor la tolerancia al riesgo definida de antemano, más margen existe, en principio, para no verse forzado a tomar decisiones apresuradas durante una caída. Esto es un principio general, no una instrucción sobre qué hacer en un caso concreto.',
      },
      {
        question: '¿Qué NO debe concluirse de este ejercicio?',
        options: [
          'Que la volatilidad y las caídas de mercado son un fenómeno estudiado en finanzas',
          'Que ahora mismo es un buen o mal momento para comprar o vender algo',
          'Que la diversificación reduce, pero no elimina, el riesgo de mercado',
          'Que el horizonte temporal influye en la capacidad de asumir volatilidad',
        ],
        correctIndex: 1,
        explanation:
          'Este ejercicio es puramente conceptual y ficticio: en ningún caso debe interpretarse como una señal sobre si es buen o mal momento para operar con dinero real.',
      },
    ],
  },
  {
    id: 'curva-invertida',
    order: 4,
    tag: 'Renta fija',
    title: 'La curva de tipos se invierte',
    narrative: `Escenario educativo (ficticio): en un mercado de deuda pública, los bonos a corto plazo
(por ejemplo, a 2 años) empiezan a ofrecer una rentabilidad (tipo de interés) más alta
que los bonos a largo plazo (por ejemplo, a 10 años) del mismo emisor — lo contrario de
lo habitual.`,
    questions: [
      {
        question: '¿Qué es, de forma simplificada, la "curva de tipos"?',
        options: [
          'Un gráfico que representa el precio de las acciones',
          'La representación de los tipos de interés de la deuda de un mismo emisor a distintos plazos',
          'Un indicador de riesgo de un fondo indexado',
          'Un sinónimo de la volatilidad',
        ],
        correctIndex: 1,
        explanation:
          'La curva de tipos muestra, para un mismo emisor (por ejemplo, un Estado), qué tipo de interés ofrece su deuda según el plazo: a más corto plazo, a más largo plazo, etc.',
      },
      {
        question: '¿Por qué se considera "invertida" en este escenario?',
        options: [
          'Porque los bonos a largo plazo ofrecen más interés que los de corto plazo, como es habitual',
          'Porque los bonos a corto plazo ofrecen más interés que los de largo plazo, al contrario de lo habitual',
          'Porque todos los bonos ofrecen el mismo interés',
          'Porque no existen bonos a largo plazo',
        ],
        correctIndex: 1,
        explanation:
          'Lo "normal" suele ser que prestar a más largo plazo exija un interés mayor (por la incertidumbre de un periodo más largo). Que ocurra lo contrario es lo que se describe como una curva invertida.',
      },
      {
        question:
          'Un fondo de renta fija de muy corto plazo y otro de muy largo plazo, en este escenario ficticio, ¿tendrían necesariamente la misma rentabilidad esperada según sus respectivos plazos?',
        options: [
          'Sí, siempre son iguales',
          'No: por definición del escenario, los tipos ofrecidos a cada plazo son distintos entre sí',
          'Es imposible de determinar ningún dato en este ejercicio',
          'La duración no influye en absoluto',
        ],
        correctIndex: 1,
        explanation:
          'Por construcción del propio escenario (una curva invertida), los tipos a corto y a largo plazo son distintos entre sí; el ejercicio busca que practiques identificar esa relación descrita, no un dato de mercado real.',
      },
    ],
  },
  {
    id: 'bajada-tipos-recesion',
    order: 5,
    tag: 'Tipos de interés',
    title: 'El banco central baja los tipos ante el temor a una recesión',
    narrative: `Escenario educativo (ficticio): tras varios indicadores económicos débiles, el banco
central de una región decide bajar su tipo de interés de referencia, con el objetivo
declarado de estimular la actividad económica.`,
    questions: [
      {
        question:
          'Retomando la relación precio-tipos estudiada en "Duración", ¿qué cabría esperar, en principio, del precio de los bonos ya existentes con cupón fijo tras una bajada de tipos?',
        options: [
          'Que tienda a bajar',
          'Que tienda a subir (los cupones fijos antiguos resultan más atractivos frente a los nuevos, más bajos)',
          'Que no se vea afectado en absoluto',
          'Que desaparezca el bono',
        ],
        correctIndex: 1,
        explanation:
          'La relación inversa precio-tipos indica que, cuando bajan los tipos, los bonos ya emitidos con cupones más altos (fijados antes de la bajada) tienden a ganar atractivo relativo, lo que en principio favorece su precio.',
      },
      {
        question:
          '¿El temor a una recesión, por sí solo, garantiza que la renta variable vaya a caer a partir de ese momento?',
        options: [
          'Sí, es una certeza matemática',
          'No: los mercados dependen de múltiples factores futuros inciertos, y ninguna afirmación de este tipo puede darse por segura',
          'Sí, siempre ocurre exactamente así',
          'La renta variable no tiene relación con el ciclo económico',
        ],
        correctIndex: 1,
        explanation:
          'Ligado a la lección "Rentabilidad histórica vs. futura": ninguna afirmación sobre lo que "va a pasar" en el mercado puede darse por cierta. Este ejercicio pide razonar mecanismos generales, no predecir resultados.',
      },
      {
        question: '¿Cuál es el propósito de plantear este escenario?',
        options: [
          'Indicarte que debes comprar renta fija de duración larga ahora mismo',
          'Practicar el razonamiento sobre cómo se relacionan tipos de interés y precios de bonos, sin extraer una recomendación de inversión',
          'Predecir con certeza una recesión real',
          'Sustituir el análisis de un profesional financiero',
        ],
        correctIndex: 1,
        explanation:
          'El único objetivo es entender relaciones conceptuales. No debe interpretarse como una señal ni una recomendación sobre qué hacer con dinero real.',
      },
    ],
  },
  {
    id: 'volatilidad-geopolitica',
    order: 6,
    tag: 'Volatilidad',
    title: 'Un episodio de inestabilidad geopolítica genera incertidumbre en los mercados',
    narrative: `Escenario educativo (ficticio): un evento geopolítico inesperado genera una oleada de
incertidumbre en los mercados financieros globales durante varios días, con movimientos
de precio más bruscos de lo habitual en múltiples clases de activos.`,
    questions: [
      {
        question: '¿Cómo se relaciona este escenario con el concepto de "volatilidad"?',
        options: [
          'No tiene relación alguna',
          'Es un ejemplo típico de aumento temporal de la volatilidad: mayor magnitud de las oscilaciones de precio',
          'La volatilidad solo puede subir por causas económicas, nunca geopolíticas',
          'Significa que los precios han dejado de moverse',
        ],
        correctIndex: 1,
        explanation:
          'Un evento inesperado que genera incertidumbre suele traducirse en mayor volatilidad: oscilaciones de precio más amplias y frecuentes de lo habitual, en uno u otro sentido.',
      },
      {
        question:
          'Si una persona tiene un horizonte temporal muy largo (por ejemplo, 25 años) para ese dinero, ¿qué principio de la lección "Horizonte temporal" es relevante aquí?',
        options: [
          'Que debe reaccionar de inmediato ante cualquier episodio de volatilidad',
          'Que un horizonte largo da más margen para atravesar episodios de volatilidad temporal antes de necesitar el dinero',
          'Que el horizonte temporal no importa en absoluto',
          'Que debe cambiar su perfil de riesgo cada vez que hay noticias',
        ],
        correctIndex: 1,
        explanation:
          'El principio general estudiado es que un horizonte largo ofrece más margen temporal para que la volatilidad se modere con el tiempo, sin que la persona se vea forzada a actuar en el peor momento posible.',
      },
      {
        question:
          '¿Debería este ejercicio decirte si en un episodio así conviene comprar, vender o mantener tus inversiones?',
        options: [
          'Sí, siempre hay que vender ante cualquier inestabilidad',
          'No: este ejercicio solo entrena el reconocimiento de conceptos (volatilidad, horizonte temporal), nunca una decisión concreta',
          'Sí, siempre hay que comprar más en cualquier caída',
          'Sí, el ejercicio calcula automáticamente la mejor decisión',
        ],
        correctIndex: 1,
        explanation:
          'Ni esta pregunta ni ninguna otra de este módulo pretende decirte qué hacer con dinero real. El objetivo es únicamente practicar el reconocimiento de conceptos financieros en un relato ficticio.',
      },
    ],
  },
]

export function getScenarioById(id) {
  return SCENARIOS.find((s) => s.id === id)
}

export function getNextScenario(id) {
  const index = SCENARIOS.findIndex((s) => s.id === id)
  if (index === -1 || index === SCENARIOS.length - 1) return null
  return SCENARIOS[index + 1]
}
