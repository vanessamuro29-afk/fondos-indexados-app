// Metadatos y tests de las lecciones de teoría.
// El contenido explicativo (JSX) de cada lección vive en src/lessons/*.jsx.
// Todas las cifras que aparecen en las lecciones son ejemplos ilustrativos
// para explicar un concepto matemático o financiero, no datos de mercado
// reales, salvo que se indique explícitamente lo contrario con su fuente.

export const LESSONS = [
  {
    id: 'que-es-fondo-indexado',
    order: 1,
    title: '¿Qué es un fondo indexado?',
    description: 'La idea central: comprar "todo el mercado" en lugar de intentar adivinar ganadores.',
    estimatedMinutes: 6,
    quiz: [
      {
        question: '¿Cuál es el objetivo principal de un fondo indexado?',
        options: [
          'Batir al mercado seleccionando las mejores acciones',
          'Replicar el comportamiento de un índice de referencia lo más fielmente posible',
          'Garantizar una rentabilidad fija cada año',
          'Invertir solo en una empresa muy prometedora',
        ],
        correctIndex: 1,
        explanation:
          'Un fondo indexado no intenta "adivinar" qué activos lo harán mejor: replica un índice (por ejemplo, un conjunto amplio de empresas o bonos) comprando, en la medida de lo posible, los mismos activos y en proporciones similares.',
      },
      {
        question: '¿Qué tipo de gestión usa un fondo indexado?',
        options: ['Gestión activa', 'Gestión pasiva', 'Gestión discrecional diaria', 'No tiene gestión'],
        correctIndex: 1,
        explanation:
          'Se llama gestión pasiva porque el gestor no decide qué comprar o vender según su opinión del mercado: sigue una regla predefinida (el índice).',
      },
      {
        question:
          'Si el índice de referencia sube un 1% en un día, ¿qué esperarías, en condiciones normales, de un fondo indexado que lo replica bien?',
        options: [
          'Que suba mucho más del 1%',
          'Que suba aproximadamente un 1%, menos una pequeña diferencia por comisiones',
          'Que no se mueva',
          'Que baje',
        ],
        correctIndex: 1,
        explanation:
          'Un fondo indexado bien construido se mueve de forma muy parecida a su índice; la pequeña diferencia que puede aparecer se debe a comisiones y a la propia mecánica de replicación (esto se llama "tracking error", lo veremos en otra lección).',
      },
      {
        question: 'Verdadero o falso: un fondo indexado elige activamente qué acciones comprar cada semana.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Falso. Un fondo indexado sigue una regla fija (el índice) y solo ajusta su cartera cuando el propio índice cambia su composición, no según la opinión de un gestor sobre qué va a subir.',
      },
    ],
  },
  {
    id: 'renta-fija-vs-variable',
    order: 2,
    title: 'Renta fija vs. renta variable',
    description: 'Prestar dinero (bonos) frente a ser propietario de una empresa (acciones).',
    estimatedMinutes: 7,
    quiz: [
      {
        question: 'Cuando compras un bono (renta fija), ¿qué estás haciendo básicamente?',
        options: [
          'Comprando una parte de la propiedad de una empresa',
          'Prestando dinero a un emisor (empresa o Estado) a cambio de unos intereses pactados',
          'Apostando por el precio de una materia prima',
          'Comprando un seguro',
        ],
        correctIndex: 1,
        explanation:
          'Un bono es, en esencia, un préstamo: tú prestas dinero al emisor y este se compromete a devolverlo en una fecha (vencimiento) y a pagarte unos intereses periódicos (cupones).',
      },
      {
        question: 'Cuando compras una acción (renta variable), ¿qué estás haciendo básicamente?',
        options: [
          'Prestando dinero a la empresa con interés fijo garantizado',
          'Convirtiéndote en copropietario de una parte de la empresa',
          'Comprando deuda pública',
          'Firmando un contrato de alquiler',
        ],
        correctIndex: 1,
        explanation:
          'Una acción representa una parte de la propiedad de la empresa. Como accionista participas de sus beneficios (o pérdidas) y de la evolución de su valor, sin que exista una devolución garantizada del dinero invertido.',
      },
      {
        question:
          'En términos generales, ¿cuál de las dos categorías suele mostrar mayor variabilidad de precio a corto plazo?',
        options: ['Renta fija', 'Renta variable', 'Ambas son igual de estables', 'Ninguna varía de precio'],
        correctIndex: 1,
        explanation:
          'La renta variable (acciones) tiende a fluctuar más en el corto plazo porque su precio depende de expectativas sobre beneficios futuros, mientras que un bono tiene pagos e importe de devolución pactados de antemano (aunque su precio de mercado también puede oscilar antes del vencimiento).',
      },
      {
        question:
          '¿Significa esto que la renta fija está siempre "libre de riesgo"?',
        options: [
          'Sí, un bono nunca puede perder valor',
          'No: existe riesgo de que el emisor no pague (riesgo de crédito) y el precio del bono también puede subir o bajar antes de su vencimiento',
          'No, la renta fija es más arriesgada que la renta variable siempre',
          'Solo tiene riesgo si es deuda pública',
        ],
        correctIndex: 1,
        explanation:
          'Todo instrumento financiero tiene algún tipo de riesgo. La renta fija tiene riesgo de crédito (que el emisor no pague) y riesgo de precio/tipo de interés (su valor de mercado varía si cambian los tipos de interés), aunque en general suele ser menos volátil que la renta variable.',
      },
    ],
  },
  {
    id: 'diversificacion',
    order: 3,
    title: 'Diversificación',
    description: 'No pongas todos los huevos en la misma cesta: repartir el riesgo entre muchos activos.',
    estimatedMinutes: 6,
    quiz: [
      {
        question: '¿Qué significa "diversificar" una inversión?',
        options: [
          'Invertir todo el dinero en la empresa que más te gusta',
          'Repartir el dinero entre muchos activos distintos para reducir el impacto de que uno de ellos vaya mal',
          'Cambiar de fondo cada mes',
          'Invertir solo en un sector muy concreto',
        ],
        correctIndex: 1,
        explanation:
          'Diversificar consiste en repartir la inversión entre muchos activos (empresas, sectores, países, tipos de activo) para que el mal comportamiento de uno solo no arruine el conjunto de la cartera.',
      },
      {
        question:
          'Si inviertes en un fondo indexado que replica un índice con cientos de empresas, ¿qué ocurre si una sola de esas empresas quiebra?',
        options: [
          'Pierdes todo tu dinero',
          'El impacto en tu cartera es limitado, proporcional al peso de esa empresa en el índice',
          'El fondo deja de existir',
          'Recibes automáticamente una compensación',
        ],
        correctIndex: 1,
        explanation:
          'Al estar repartida la inversión entre muchas empresas, el peso de una sola suele ser pequeño, así que su quiebra afecta solo en esa proporción al conjunto del fondo.',
      },
      {
        question:
          'Verdadero o falso: diversificar elimina por completo el riesgo de perder dinero.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Falso. Diversificar reduce el riesgo específico de un activo concreto, pero no elimina el riesgo de mercado: si todo el mercado cae (una crisis general), una cartera diversificada también puede perder valor.',
      },
      {
        question:
          'Un fondo indexado global que incluye miles de empresas de muchos países, comparado con comprar acciones de una sola empresa, ¿qué característica tiene?',
        options: [
          'Mayor concentración de riesgo',
          'Mayor diversificación y, en principio, menor riesgo específico',
          'Rentabilidad garantizada',
          'Menor diversificación',
        ],
        correctIndex: 1,
        explanation:
          'Cuantas más empresas, sectores y países distintos incluya el fondo, mayor es la diversificación y menor el riesgo asociado a que un único activo vaya mal.',
      },
    ],
  },
  {
    id: 'comisiones-ter',
    order: 4,
    title: 'TER y comisiones',
    description: 'El coste de invertir y por qué unas décimas de diferencia importan a largo plazo.',
    estimatedMinutes: 8,
    quiz: [
      {
        question: '¿Qué es el TER (Total Expense Ratio) de un fondo?',
        options: [
          'El porcentaje de rentabilidad garantizada',
          'El porcentaje anual que cobra el fondo en concepto de gastos de gestión y otros costes',
          'El impuesto que paga el Estado por el fondo',
          'La comisión que cobra tu banco solo la primera vez',
        ],
        correctIndex: 1,
        explanation:
          'El TER expresa, en porcentaje anual sobre el patrimonio, el conjunto de gastos que soporta el fondo (gestión, administración, etc.). Se descuenta automáticamente del valor del fondo, por lo que reduce la rentabilidad que recibe la persona inversora.',
      },
      {
        question:
          'Dos fondos ofrecen (de forma ilustrativa) la misma rentabilidad bruta anual, pero uno tiene un TER del 0,2% y otro del 1,5%. A largo plazo, ¿qué ocurre?',
        options: [
          'No hay ninguna diferencia relevante',
          'El fondo con menor TER tenderá a acumular más capital neto, porque el interés compuesto amplifica el efecto de las comisiones año tras año',
          'El fondo con mayor TER siempre da más rentabilidad',
          'El TER solo afecta el primer año',
        ],
        correctIndex: 1,
        explanation:
          'Aunque la diferencia anual parezca pequeña, el interés compuesto hace que una comisión más alta reste una porción creciente del capital cada año. A lo largo de varias décadas, esa diferencia puede ser muy significativa. Prueba la calculadora de la app para verlo con números.',
      },
      {
        question:
          'Como orden de magnitud (valor ilustrativo, no un dato oficial de ninguna gestora concreta), ¿qué suele ser más habitual?',
        options: [
          'Los fondos indexados suelen tener TER más bajos que muchos fondos de gestión activa',
          'Los fondos indexados siempre son más caros que los de gestión activa',
          'El TER es idéntico en todos los fondos por ley',
          'El TER no existe en fondos indexados',
        ],
        correctIndex: 0,
        explanation:
          'Como los fondos indexados no requieren un equipo de analistas tomando decisiones activas, su coste de gestión suele ser menor que el de muchos fondos de gestión activa. Esto es una tendencia general del sector, no un dato fijo: el TER exacto de cada fondo se consulta en su folleto o documento de datos fundamentales (KID/KIID).',
      },
      {
        question: '¿Dónde deberías consultar el TER exacto de un fondo concreto antes de invertir?',
        options: [
          'En un foro de internet',
          'En el documento de datos fundamentales (KID/KIID) o folleto oficial del fondo',
          'Preguntando a un amigo',
          'No hace falta consultarlo nunca',
        ],
        correctIndex: 1,
        explanation:
          'El documento de datos fundamentales para el inversor (KID/KIID) es el documento oficial y regulado donde se detallan los costes, riesgos y características del fondo. Es la fuente correcta para datos reales y actualizados.',
      },
    ],
  },
  {
    id: 'tracking-error',
    order: 5,
    title: 'Tracking error',
    description: 'Por qué un fondo indexado casi nunca replica el índice al milímetro.',
    estimatedMinutes: 6,
    quiz: [
      {
        question: '¿Qué mide el "tracking error" (error de seguimiento)?',
        options: [
          'La rentabilidad total del fondo',
          'La diferencia entre la rentabilidad del fondo y la de su índice de referencia',
          'El número de empresas del índice',
          'El riesgo de que el gestor cometa un fraude',
        ],
        correctIndex: 1,
        explanation:
          'El tracking error cuantifica cuánto se desvía, en promedio, la rentabilidad del fondo respecto a la de su índice. Un fondo indexado de buena calidad busca minimizarlo.',
      },
      {
        question: '¿Cuál de estos factores puede contribuir a un mayor tracking error?',
        options: [
          'Las comisiones del fondo',
          'No poder comprar exactamente todos los activos del índice en las mismas proporciones',
          'Costes de transacción al reajustar la cartera',
          'Todas las anteriores',
        ],
        correctIndex: 3,
        explanation:
          'Las comisiones, la dificultad de replicar exactamente el índice (por ejemplo, activos poco líquidos) y los costes de operar en el mercado son causas habituales de que el fondo no siga al índice de forma perfecta.',
      },
      {
        question:
          '(Ejemplo ilustrativo, no un dato real) Si un índice sube un 8,00% en un año y el fondo indexado que lo replica sube un 7,85%, ¿qué tracking error aproximado hubo ese año?',
        options: ['0,15 puntos porcentuales', '8,00 puntos porcentuales', '7,85 puntos porcentuales', '0 puntos porcentuales'],
        correctIndex: 0,
        explanation:
          'La diferencia entre 8,00% y 7,85% es 0,15 puntos porcentuales. Este es un ejemplo numérico simplificado para ilustrar el concepto, no una cifra real de ningún fondo o índice concreto.',
      },
      {
        question: 'Verdadero o falso: un tracking error de cero es lo normal y esperable en cualquier fondo indexado real.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Falso. En la práctica es muy difícil (y costoso) lograr un tracking error exactamente igual a cero. Lo habitual es que exista una pequeña desviación, que los buenos fondos indexados procuran mantener lo más baja posible.',
      },
    ],
  },
  {
    id: 'duracion-renta-fija',
    order: 6,
    title: 'Duración (renta fija)',
    description: 'Cómo de sensible es el precio de un bono a los cambios en los tipos de interés.',
    estimatedMinutes: 7,
    quiz: [
      {
        question: '¿Qué mide (de forma simplificada) la "duración" de un bono o de un fondo de renta fija?',
        options: [
          'El número de años que quedan hasta el vencimiento exacto',
          'La sensibilidad del precio del bono ante variaciones en los tipos de interés',
          'La rentabilidad garantizada del bono',
          'El riesgo de impago del emisor',
        ],
        correctIndex: 1,
        explanation:
          'La duración combina el tiempo hasta los pagos y su importe para estimar cuánto se movería el precio del bono si cambian los tipos de interés. No es exactamente lo mismo que "años hasta el vencimiento", aunque están relacionados.',
      },
      {
        question:
          '(Ejemplo ilustrativo) Si los tipos de interés suben, ¿qué tiende a pasar con el precio de mercado de los bonos ya existentes?',
        options: [
          'Tiende a subir',
          'Tiende a bajar',
          'No se ve afectado nunca',
          'Depende del color del bono',
        ],
        correctIndex: 1,
        explanation:
          'Cuando suben los tipos de interés, los bonos nuevos se emiten con cupones más altos, lo que hace relativamente menos atractivos a los bonos antiguos con cupones más bajos, y su precio de mercado tiende a bajar (relación inversa precio-tipos).',
      },
      {
        question:
          '(Ejemplo ilustrativo, no dato real) Entre un fondo con duración media de 2 años y otro con duración media de 15 años, ¿cuál sería, en principio, más sensible a una subida de tipos de interés?',
        options: ['El de duración 2 años', 'El de duración 15 años', 'Ambos igual', 'Ninguno, la duración no afecta al precio'],
        correctIndex: 1,
        explanation:
          'A mayor duración, mayor sensibilidad del precio ante cambios en los tipos de interés. Un fondo con duración más larga puede fluctuar más (para bien o para mal) cuando cambian los tipos.',
      },
      {
        question: '¿La duración aplica solo a bonos individuales o también a fondos de renta fija?',
        options: [
          'Solo a bonos individuales',
          'También se calcula una duración media para carteras y fondos de renta fija',
          'Solo a acciones',
          'No se puede calcular para fondos',
        ],
        correctIndex: 1,
        explanation:
          'Los fondos de renta fija publican habitualmente una duración media de su cartera, que ayuda a entender su sensibilidad conjunta a los movimientos de tipos de interés.',
      },
    ],
  },
  {
    id: 'volatilidad',
    order: 7,
    title: 'Volatilidad',
    description: 'Cuánto "sube y baja" el precio de una inversión con el tiempo.',
    estimatedMinutes: 6,
    quiz: [
      {
        question: '¿Qué describe la volatilidad de una inversión?',
        options: [
          'La rentabilidad media esperada',
          'La magnitud de las oscilaciones de precio a lo largo del tiempo',
          'El riesgo de impago del emisor',
          'El TER del fondo',
        ],
        correctIndex: 1,
        explanation:
          'La volatilidad mide cuánto varía el precio de un activo respecto a su media: cuanto más grandes y frecuentes son las subidas y bajadas, mayor es la volatilidad.',
      },
      {
        question:
          '(Ejemplo ilustrativo) Un fondo A varía típicamente entre -2% y +2% al mes, y un fondo B varía entre -8% y +8% al mes. ¿Cuál es más volátil?',
        options: ['El fondo A', 'El fondo B', 'Los dos igual', 'No se puede saber'],
        correctIndex: 1,
        explanation:
          'El fondo B tiene oscilaciones de mayor magnitud, por lo que es más volátil. Estos porcentajes son solo un ejemplo para ilustrar la idea, no datos de ningún fondo real.',
      },
      {
        question:
          'En general, ¿qué relación suele existir entre volatilidad y potencial de rentabilidad a largo plazo?',
        options: [
          'Mayor volatilidad implica siempre mayor rentabilidad garantizada',
          'Suele asumirse que asumir más volatilidad (más riesgo) puede compensarse, a largo plazo, con una mayor rentabilidad esperada, aunque no está garantizado',
          'No existe ninguna relación entre ambos conceptos',
          'La volatilidad y la rentabilidad son el mismo concepto',
        ],
        correctIndex: 1,
        explanation:
          'Un principio general en inversión es que para aspirar a mayor rentabilidad suele ser necesario aceptar mayor volatilidad/riesgo, pero esto es una relación esperada estadísticamente, no una garantía en ningún periodo concreto.',
      },
      {
        question: 'Verdadero o falso: la volatilidad a corto plazo es lo mismo que perder dinero de forma definitiva.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Falso. La volatilidad implica oscilaciones de valor que pueden revertirse con el tiempo. Solo se convierte en pérdida definitiva si vendes el activo en un momento bajo. Por eso el horizonte temporal es tan importante.',
      },
    ],
  },
  {
    id: 'rentabilidad-historica-vs-futura',
    order: 8,
    title: 'Rentabilidad histórica vs. futura',
    description: 'Por qué "en el pasado rindió X%" no es una promesa de lo que pasará mañana.',
    estimatedMinutes: 6,
    quiz: [
      {
        question:
          '¿Qué frase resume mejor la relación entre rentabilidad pasada y rentabilidad futura?',
        options: [
          'La rentabilidad pasada garantiza la rentabilidad futura',
          'Las rentabilidades pasadas no garantizan rentabilidades futuras',
          'Solo importa la rentabilidad del último mes',
          'La rentabilidad futura siempre es mejor que la pasada',
        ],
        correctIndex: 1,
        explanation:
          'Este es un principio ampliamente aceptado y habitual en la documentación regulada de productos financieros: los resultados pasados son información histórica, pero no predicen con certeza el comportamiento futuro.',
      },
      {
        question:
          'Si una fuente afirma una cifra concreta de rentabilidad histórica de un índice real sin citar fuente ni periodo exacto, ¿qué deberías hacer como usuario informado?',
        options: [
          'Darla por buena sin más',
          'Tratarla con cautela y buscar la fuente original y el periodo exacto antes de confiar en ella',
          'Ignorar siempre cualquier dato histórico',
          'Asumir que siempre es falsa',
        ],
        correctIndex: 1,
        explanation:
          'Los datos de rentabilidad histórica real deben poder verificarse: quién los publica, con qué metodología y en qué periodo exacto. Sin esa información, conviene ser prudente antes de usarlos para tomar decisiones.',
      },
      {
        question:
          'En esta aplicación, cuando se usa una rentabilidad anual en la calculadora o el simulador, ¿qué representa ese número?',
        options: [
          'Un dato de mercado real verificado',
          'Un supuesto hipotético que introduce la persona usuaria para ver el efecto matemático del interés compuesto',
          'Una predicción oficial de un banco central',
          'La rentabilidad media de todos los fondos indexados del mundo',
        ],
        correctIndex: 1,
        explanation:
          'Todas las rentabilidades usadas en la calculadora y el simulador de esta app son parámetros que tú mismo introduces o ajustas: sirven para explorar escenarios, no son datos de mercado reales ni una recomendación.',
      },
      {
        question:
          'Verdadero o falso: como algunas inversiones han rentado bien en el pasado, invertir en ellas hoy asegura buenos resultados futuros.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Falso. Ningún resultado pasado asegura resultados futuros. Los mercados dependen de múltiples factores futuros que no pueden conocerse de antemano.',
      },
    ],
  },
  {
    id: 'asignacion-activos',
    order: 9,
    title: 'Construcción de cartera: asignación de activos',
    description: 'Decidir qué porcentaje de renta fija y renta variable tiene tu cartera.',
    estimatedMinutes: 7,
    quiz: [
      {
        question: '¿Qué es la "asignación de activos" (asset allocation)?',
        options: [
          'Elegir un único fondo al azar',
          'Decidir qué porcentaje de la cartera se destina a cada tipo de activo (por ejemplo, renta fija y renta variable)',
          'El nombre de un impuesto sobre inversiones',
          'La comisión que cobra el bróker',
        ],
        correctIndex: 1,
        explanation:
          'La asignación de activos es la decisión de cómo repartir el capital entre las grandes categorías de inversión (renta fija, renta variable, y otras), y suele ser uno de los factores más determinantes en el resultado a largo plazo de una cartera.',
      },
      {
        question:
          'En términos generales, ¿qué suele implicar una cartera con mayor peso en renta variable frente a una con mayor peso en renta fija?',
        options: [
          'Menor volatilidad esperada y menor potencial de crecimiento',
          'Mayor volatilidad esperada y, potencialmente, mayor crecimiento a largo plazo',
          'Exactamente el mismo comportamiento',
          'Rentabilidad garantizada superior',
        ],
        correctIndex: 1,
        explanation:
          'La renta variable históricamente muestra más oscilaciones que la renta fija, pero también se le asocia un mayor potencial de crecimiento a largo plazo; es un intercambio entre riesgo y potencial de rentabilidad, no una garantía.',
      },
      {
        question: '¿Qué factores personales influyen normalmente en la asignación de activos adecuada para alguien?',
        options: [
          'Solo la edad',
          'El horizonte temporal, la tolerancia al riesgo y los objetivos financieros de la persona',
          'El color favorito de la persona',
          'Ninguno, la asignación debe ser igual para todo el mundo',
        ],
        correctIndex: 1,
        explanation:
          'No existe una única asignación "correcta": depende de cuánto tiempo vas a mantener la inversión, de cómo toleras emocionalmente las caídas de valor, y de para qué necesitas ese dinero.',
      },
      {
        question:
          'Verdadero o falso: una vez definida la asignación de activos, debe mantenerse exactamente igual para siempre, sin ninguna revisión.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Falso. La asignación de activos puede revisarse con el tiempo (por ejemplo, si cambian tus objetivos u horizonte), y además requiere rebalanceo periódico, que veremos en la siguiente lección.',
      },
    ],
  },
  {
    id: 'rebalanceo',
    order: 10,
    title: 'Rebalanceo',
    description: 'Cómo mantener tu cartera alineada con el reparto de riesgo que decidiste.',
    estimatedMinutes: 6,
    quiz: [
      {
        question: '¿Qué es el rebalanceo de una cartera?',
        options: [
          'Vender toda la cartera y empezar de nuevo',
          'Ajustar periódicamente los pesos de cada activo para que vuelvan a la asignación objetivo original',
          'Cambiar de bróker cada año',
          'Aumentar siempre el riesgo con el tiempo',
        ],
        correctIndex: 1,
        explanation:
          'Como los distintos activos evolucionan de forma distinta, con el tiempo los pesos reales de la cartera se desvían del objetivo inicial. Rebalancear consiste en comprar o vender para volver a esos porcentajes objetivo.',
      },
      {
        question:
          '(Ejemplo ilustrativo) Empezaste con una cartera 60% renta variable / 40% renta fija. Tras una fuerte subida de la renta variable, ahora tu cartera está en 75% / 25%. ¿Qué haría un rebalanceo hacia el objetivo original?',
        options: [
          'Comprar más renta variable para llegar al 90%',
          'Vender parte de la renta variable y/o comprar renta fija para volver aproximadamente al 60% / 40%',
          'No hacer nada nunca',
          'Vender toda la renta fija',
        ],
        correctIndex: 1,
        explanation:
          'Rebalancear implica mover capital desde el activo que ha crecido más (en este ejemplo, renta variable) hacia el que se ha quedado rezagado, para recuperar el reparto de riesgo original que habías decidido.',
      },
      {
        question: '¿Por qué es útil el rebalanceo desde el punto de vista del riesgo?',
        options: [
          'Porque garantiza mayor rentabilidad siempre',
          'Porque evita que la cartera acumule, sin darte cuenta, más riesgo del que originalmente decidiste asumir',
          'Porque elimina toda posibilidad de pérdida',
          'Porque reduce los impuestos automáticamente',
        ],
        correctIndex: 1,
        explanation:
          'Sin rebalanceo, el activo que más sube va ganando peso en la cartera, lo que puede hacer que —sin quererlo— termines asumiendo mucho más riesgo del que inicialmente considerabas adecuado para ti.',
      },
      {
        question:
          'Verdadero o falso: el rebalanceo solo puede hacerse vendiendo activos, nunca con nuevas aportaciones.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Falso. Una forma habitual de rebalancear sin vender es dirigir las nuevas aportaciones hacia el activo que se ha quedado por debajo de su peso objetivo, hasta que la cartera vuelva a estar equilibrada.',
      },
    ],
  },
  {
    id: 'horizonte-perfil-riesgo',
    order: 11,
    title: 'Horizonte temporal y perfil de riesgo',
    description: 'Cuánto tiempo vas a invertir y cuánta volatilidad puedes tolerar, en la práctica.',
    estimatedMinutes: 7,
    quiz: [
      {
        question: '¿Qué es el "horizonte temporal" de una inversión?',
        options: [
          'El nombre del índice que sigues',
          'El tiempo que planeas mantener el dinero invertido antes de necesitarlo',
          'La hora del día en que operas en el mercado',
          'El número de activos en tu cartera',
        ],
        correctIndex: 1,
        explanation:
          'El horizonte temporal es cuánto tiempo puedes dejar ese dinero invertido sin necesitarlo, lo cual influye mucho en qué nivel de volatilidad puedes permitirte asumir.',
      },
      {
        question:
          'En general, ¿por qué un horizonte temporal más largo permite (en principio) asumir más renta variable?',
        options: [
          'Porque la renta variable nunca baja a largo plazo',
          'Porque hay más tiempo para que posibles caídas temporales se recuperen antes de necesitar el dinero',
          'Porque a largo plazo las comisiones desaparecen',
          'No existe relación entre horizonte y tipo de activo',
        ],
        correctIndex: 1,
        explanation:
          'Un horizonte más largo da más margen para atravesar periodos de caídas y esperar una posible recuperación, sin verte obligado a vender en un mal momento por necesitar el dinero.',
      },
      {
        question: '¿Qué es el "perfil de riesgo" de una persona inversora?',
        options: [
          'Un dato que fija el Estado para todos por igual',
          'La combinación de su capacidad financiera para asumir pérdidas y su tolerancia emocional a la volatilidad',
          'El nombre de una comisión bancaria',
          'El número de fondos que tiene contratados',
        ],
        correctIndex: 1,
        explanation:
          'El perfil de riesgo combina dos cosas: cuánto puedes permitirte perder sin comprometer tus objetivos (capacidad) y cuánta volatilidad eres capaz de soportar sin tomar decisiones impulsivas (tolerancia).',
      },
      {
        question:
          'Verdadero o falso: alguien que va a necesitar el dinero en 6 meses debería, en general, asumir el mismo nivel de riesgo que alguien que invierte pensando en 25 años.',
        options: ['Verdadero', 'Falso'],
        correctIndex: 1,
        explanation:
          'Falso. Cuanto más corto es el horizonte temporal, menos margen hay para recuperarse de una caída, por lo que en general se recomienda asumir menos volatilidad cuanto más cerca esté el momento en que se necesitará el dinero.',
      },
    ],
  },
  {
    id: 'kid',
    order: 12,
    title: 'El KID: Documento de Datos Fundamentales',
    description: 'El documento breve y obligatorio que resume un fondo antes de contratarlo, y cómo leerlo.',
    estimatedMinutes: 8,
    quiz: [
      {
        question: '¿Qué es el KID (Documento de Datos Fundamentales)?',
        options: [
          'Un contrato opcional que solo piden algunos bancos',
          'Un documento breve y obligatorio que resume objetivo, riesgo, costes y horizonte de un fondo',
          'El folleto completo de cientos de páginas del fondo',
          'Un informe que solo ven los gestores del fondo',
        ],
        correctIndex: 1,
        explanation:
          'El KID (o Documento de Datos Fundamentales) es un resumen breve y estandarizado, obligatorio por normativa, para que puedas conocer y comparar lo esencial de un producto antes de contratarlo.',
      },
      {
        question: '¿Qué indica el indicador SRI que aparece en el KID?',
        options: [
          'El nombre del gestor del fondo',
          'Una escala de riesgo del 1 (menor) al 7 (mayor)',
          'El país donde se registró el fondo',
          'El número de partícipes del fondo',
        ],
        correctIndex: 1,
        explanation:
          'El SRI (Summary Risk Indicator) resume, en una escala del 1 al 7, el nivel de riesgo del producto de forma simplificada y comparable entre fondos.',
      },
      {
        question:
          'En el ejemplo ficticio de la lección, el fondo mostraba un SRI de 5/7 y un TER de 0,25%. ¿Qué interpretación es razonable?',
        options: [
          'Es un fondo de bajísimo riesgo y comisiones muy altas',
          'Es un fondo de riesgo medio-alto (coherente con renta variable) y coste bajo típico de gestión pasiva',
          'El dato es imposible, un fondo no puede tener esos dos valores a la vez',
          'El SRI y el TER miden exactamente lo mismo',
        ],
        correctIndex: 1,
        explanation:
          'Un SRI de 5/7 sugiere un riesgo medio-alto, propio de renta variable, mientras que un TER de 0,25% es un coste bajo, típico de fondos de gestión pasiva/indexada. Son dos datos distintos e independientes.',
      },
      {
        question: '¿Los escenarios de rentabilidad del KID son una promesa de lo que ganarás?',
        options: [
          'Sí, están garantizados por el regulador',
          'No, son cálculos estandarizados sobre datos pasados, no una garantía de resultados futuros',
          'Sí, siempre se cumplen exactamente',
          'El KID no incluye escenarios de rentabilidad',
        ],
        correctIndex: 1,
        explanation:
          'Igual que cualquier otro dato histórico, los escenarios de rentabilidad del KID no garantizan resultados futuros: son una estimación calculada con una metodología estándar, no una promesa.',
      },
    ],
  },
  {
    id: 'replica-fisica-sintetica',
    order: 13,
    title: 'Réplica física vs. sintética',
    description: 'Dos formas distintas de construir un fondo indexado por dentro, y qué riesgos añade cada una.',
    estimatedMinutes: 7,
    quiz: [
      {
        question: 'En la réplica física, ¿cómo consigue el fondo seguir al índice?',
        options: [
          'Firmando un swap con una entidad financiera',
          'Comprando directamente los activos del índice (de forma completa o por muestreo)',
          'Prediciendo qué activos subirán más',
          'No compra ningún activo',
        ],
        correctIndex: 1,
        explanation:
          'La réplica física consiste en comprar los activos reales del índice, ya sea todos ellos (completa) o una muestra representativa (por muestreo).',
      },
      {
        question: '¿Qué caracteriza a la réplica sintética?',
        options: [
          'El fondo compra todas las acciones del índice físicamente',
          'El fondo usa un contrato (swap) con una contraparte para obtener la rentabilidad del índice',
          'El fondo no tiene ningún tipo de riesgo',
          'Es idéntica a la réplica física por muestreo',
        ],
        correctIndex: 1,
        explanation:
          'En la réplica sintética, el fondo mantiene otros activos y usa un swap con una contraparte que le paga la rentabilidad del índice a cambio de la rentabilidad de esa cartera.',
      },
      {
        question: '¿Qué riesgo adicional introduce la réplica sintética que la física no tiene?',
        options: [
          'Riesgo de tipo de cambio siempre',
          'Riesgo de contraparte',
          'Riesgo de inflación',
          'Ningún riesgo adicional',
        ],
        correctIndex: 1,
        explanation:
          'Al depender de un swap con una entidad (la contraparte), la réplica sintética añade el riesgo de que esa entidad no pueda cumplir su compromiso, algo que la réplica física no tiene.',
      },
      {
        question: '¿Cuándo puede ser especialmente útil la réplica sintética?',
        options: [
          'Nunca, es siempre peor que la física',
          'Cuando replicar físicamente un índice es costoso o complicado (por ejemplo, mercados de difícil acceso)',
          'Solo en fondos de renta fija a corto plazo',
          'Solo quiere usarla si el fondo es muy pequeño',
        ],
        correctIndex: 1,
        explanation:
          'La réplica sintética puede facilitar seguir índices donde comprar los activos directamente es difícil, costoso o está sujeto a restricciones de acceso.',
      },
    ],
  },
  {
    id: 'tracking-difference',
    order: 14,
    title: 'Tracking difference (y su diferencia con el tracking error)',
    description: 'Dos métricas distintas para evaluar qué tan bien un fondo sigue a su índice.',
    estimatedMinutes: 6,
    quiz: [
      {
        question: '¿Qué mide la tracking difference?',
        options: [
          'La volatilidad diaria de la diferencia entre fondo e índice',
          'La diferencia acumulada de rentabilidad entre el fondo y el índice al final de un periodo',
          'El riesgo de contraparte del fondo',
          'El número de activos del índice',
        ],
        correctIndex: 1,
        explanation:
          'La tracking difference resume, al cabo de un periodo (por ejemplo, un año), cuánto ha rendido de más o de menos el fondo respecto a su índice en total.',
      },
      {
        question: '¿En qué se diferencia del tracking error?',
        options: [
          'Son exactamente lo mismo con distinto nombre',
          'El tracking error mide la dispersión/volatilidad de la diferencia; la tracking difference mide la diferencia acumulada en un periodo',
          'El tracking error solo se usa en renta fija',
          'La tracking difference solo aplica a fondos sintéticos',
        ],
        correctIndex: 1,
        explanation:
          'Son complementarios: el tracking error habla de cuánto varía la diferencia día a día, mientras que la tracking difference resume el resultado acumulado de esa diferencia en un periodo.',
      },
      {
        question:
          '(Ejemplo ilustrativo) Si el índice rinde 9,00% en un año y el fondo rinde 8,75%, ¿cuál es la tracking difference de ese año?',
        options: ['+0,25 puntos porcentuales', '-0,25 puntos porcentuales', '9,00 puntos porcentuales', '0 puntos porcentuales'],
        correctIndex: 1,
        explanation: '8,75% − 9,00% = −0,25 puntos porcentuales: el fondo rindió un poco menos que el índice ese año.',
      },
      {
        question: '¿Por qué la tracking difference suele ser negativa en la mayoría de fondos indexados?',
        options: [
          'Porque los índices siempre bajan',
          'Principalmente por el TER y otros costes de gestión, que el índice (al ser solo una referencia teórica) no paga',
          'Porque los fondos indexados están mal gestionados por norma',
          'Es imposible que sea negativa',
        ],
        correctIndex: 1,
        explanation:
          'El índice es una referencia teórica sin comisiones; el fondo sí las paga, por lo que lo habitual es un pequeño rendimiento inferior al índice, cercano al TER, y esto es normal y esperable.',
      },
    ],
  },
  {
    id: 'fiscalidad-basica',
    order: 15,
    title: 'Fiscalidad básica de los fondos (España)',
    description: 'Una idea general de los traspasos entre fondos y cuándo se tributa — no es asesoramiento fiscal.',
    estimatedMinutes: 7,
    quiz: [
      {
        question: '¿Qué es, en líneas generales, el "régimen de traspasos" de los fondos en España?',
        options: [
          'Un impuesto adicional al comprar un fondo',
          'La posibilidad de mover dinero entre fondos de inversión sin tributar en ese momento por la ganancia acumulada',
          'Una comisión que cobra el banco al cambiar de fondo',
          'Una obligación de vender el fondo cada año',
        ],
        correctIndex: 1,
        explanation:
          'El régimen de traspasos permite, en general, cambiar de un fondo a otro sin que ese movimiento genere en ese momento una tributación sobre la ganancia: la tributación se difiere hasta el reembolso final en efectivo.',
      },
      {
        question:
          '¿Los ETFs listados en bolsas españolas suelen tener, en general, este mismo régimen de traspasos?',
        options: [
          'Sí, exactamente igual que los fondos tradicionales',
          'En general no; cada venta de un ETF puede considerarse un evento fiscal en el momento en que ocurre',
          'Los ETFs nunca tributan',
          'No existe diferencia alguna entre fondos y ETFs a efectos fiscales',
        ],
        correctIndex: 1,
        explanation:
          'A diferencia de los fondos tradicionales, los ETFs cotizados en bolsa generalmente no se han beneficiado de este régimen de traspasos cuando cotizan en mercados españoles.',
      },
      {
        question:
          '¿Puedes fiarte de un porcentaje exacto de impuestos sobre plusvalías que hayas leído hace tiempo?',
        options: [
          'Sí, los tipos impositivos nunca cambian',
          'No necesariamente: los tramos y tipos del IRPF se actualizan periódicamente, conviene verificar la normativa vigente',
          'Solo si lo dice un amigo',
          'Da igual, el fondo lo calcula todo automáticamente sin que importe la ley',
        ],
        correctIndex: 1,
        explanation:
          'La normativa fiscal, incluidos los tramos y tipos aplicables, puede cambiar con el tiempo. Antes de dar por buena una cifra concreta, conviene comprobarla en la fuente oficial actualizada.',
      },
      {
        question: '¿Esta lección constituye asesoramiento fiscal personalizado?',
        options: [
          'Sí, puedes aplicarla directamente a tu declaración de la renta',
          'No, es información general simplificada; para tu caso concreto hay que consultar fuentes oficiales o un profesional',
          'Sí, sustituye a la Agencia Tributaria',
          'No tiene ninguna utilidad ni siquiera como introducción',
        ],
        correctIndex: 1,
        explanation:
          'Esta lección da solo una idea general simplificada. Para decisiones reales sobre tu situación fiscal, consulta la Agencia Tributaria o un asesor fiscal cualificado.',
      },
    ],
  },
  {
    id: 'liquidez',
    order: 16,
    title: 'Liquidez',
    description: 'Qué tan fácil es convertir tu inversión en dinero disponible, y por qué importa.',
    estimatedMinutes: 6,
    quiz: [
      {
        question: '¿Qué describe el concepto de "liquidez" de una inversión?',
        options: [
          'La rentabilidad media esperada',
          'La facilidad para convertir la inversión en dinero disponible sin penalización relevante',
          'El nivel de riesgo del emisor',
          'El coste de gestión del fondo',
        ],
        correctIndex: 1,
        explanation:
          'La liquidez mide cuán fácil y rápido es convertir una inversión en efectivo disponible, sin tener que malvenderla ni esperar demasiado.',
      },
      {
        question: '¿Cómo se compra/vende habitualmente un fondo de inversión tradicional?',
        options: [
          'Cotiza en bolsa en tiempo real, como una acción',
          'A un único precio diario (valor liquidativo), calculado normalmente al cierre de la sesión',
          'Solo se puede vender una vez al año',
          'No tiene ningún mecanismo de compra o venta',
        ],
        correctIndex: 1,
        explanation:
          'Los fondos tradicionales operan con un valor liquidativo (VL) calculado normalmente una vez al día, a diferencia de los ETFs, que cotizan en bolsa de forma continua durante el horario de mercado.',
      },
      {
        question: '¿Qué distingue a un ETF de un fondo tradicional en cuanto a liquidez del vehículo?',
        options: [
          'El ETF solo se puede vender una vez al mes',
          'El ETF cotiza y se negocia en bolsa en tiempo real durante el horario de mercado',
          'No hay ninguna diferencia',
          'El fondo tradicional cotiza en bolsa y el ETF no',
        ],
        correctIndex: 1,
        explanation:
          'A diferencia del VL diario de los fondos tradicionales, un ETF se compra y vende en bolsa en cualquier momento durante el horario de mercado, con un precio que puede variar continuamente.',
      },
      {
        question:
          '¿Por qué puede ser relevante la liquidez de los activos que hay dentro de un fondo, no solo la del propio fondo?',
        options: [
          'No tiene ninguna relevancia',
          'Porque en momentos de mucho estrés de mercado, activos poco líquidos pueden ser más difíciles de vender rápido y sin afectar su precio',
          'Porque determina el color de la interfaz del bróker',
          'Porque cambia el nombre legal del fondo',
        ],
        correctIndex: 1,
        explanation:
          'Si un fondo mantiene una parte relevante en activos poco líquidos, podría tener más dificultades para atender reembolsos masivos en momentos de mucha inestabilidad, sin afectar el precio de esos activos.',
      },
    ],
  },
]

export function getLessonById(id) {
  return LESSONS.find((lesson) => lesson.id === id)
}

export function getNextLesson(id) {
  const index = LESSONS.findIndex((lesson) => lesson.id === id)
  if (index === -1 || index === LESSONS.length - 1) return null
  return LESSONS[index + 1]
}
