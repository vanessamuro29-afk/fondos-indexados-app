export default function LegalNotice() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <h1 className="text-2xl font-bold text-slate-900">Aviso legal</h1>

      <p>
        Esta aplicación (en adelante, "la app") es un recurso <strong>exclusivamente educativo</strong>{' '}
        para aprender los conceptos básicos e intermedios de la inversión en fondos indexados de
        renta fija y renta variable.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">No es asesoramiento financiero</h2>
      <p>
        Nada de lo publicado en esta app constituye asesoramiento financiero, fiscal o legal, ni
        una recomendación de inversión personalizada. No se ha evaluado la idoneidad de ningún
        producto o estrategia para tu situación personal.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">Las cifras son ilustrativas, salvo indicación contraria</h2>
      <p>
        Salvo que un dato concreto indique explícitamente una fuente y una fecha verificables, toda
        cifra de rentabilidad, comisión o cualquier otro parámetro numérico que aparezca en la app
        es un <strong>valor ilustrativo</strong>, definido únicamente con fines pedagógicos. No
        representa el comportamiento real de ningún índice, fondo o producto financiero concreto.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">Rentabilidades pasadas y futuras</h2>
      <p>
        Ninguna rentabilidad pasada, real o hipotética, garantiza resultados futuros. Toda
        inversión conlleva riesgo, incluyendo la posible pérdida parcial o total del capital
        invertido.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">Almacenamiento de datos</h2>
      <p>
        Esta app no utiliza servidores, cuentas de usuario ni recopila datos personales. El
        progreso de tus lecciones y tests se guarda únicamente en el almacenamiento local
        (localStorage) de tu propio navegador y nunca se envía a terceros.
      </p>

      <h2 className="text-lg font-semibold text-slate-900">Antes de invertir dinero real</h2>
      <p>
        Contrasta siempre la información con fuentes oficiales (folletos, documentos de datos
        fundamentales para el inversor, reguladores) y considera consultar con un profesional
        cualificado antes de tomar decisiones de inversión.
      </p>
    </div>
  )
}
