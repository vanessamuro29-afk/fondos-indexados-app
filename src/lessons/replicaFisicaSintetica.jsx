import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function ReplicaFisicaSintetica() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Ya sabes que un fondo indexado busca replicar un índice. Pero, por dentro, existen dos
        formas distintas de conseguirlo: <strong>réplica física</strong> y{' '}
        <strong>réplica sintética</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Réplica física</h3>
      <p>
        El fondo compra directamente los activos que componen el índice. Dentro de la réplica
        física hay dos variantes:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Completa:</strong> compra todos los activos del índice, en proporciones lo más
          parecidas posible a sus pesos oficiales.
        </li>
        <li>
          <strong>Por muestreo (sampling):</strong> cuando el índice tiene miles de activos (o
          algunos muy poco líquidos), el fondo compra solo una muestra representativa, elegida con
          técnicas estadísticas para que se comporte de forma muy parecida al índice completo.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900">Réplica sintética</h3>
      <p>
        El fondo no compra los activos del índice. En su lugar, mantiene una cartera de otros
        activos (a menudo activos líquidos y de bajo riesgo) y firma un contrato financiero
        (normalmente un <em>swap</em>) con una entidad —la contraparte— que se compromete a
        pagarle al fondo la rentabilidad exacta del índice, a cambio de la rentabilidad de esa
        cartera.
      </p>

      <Callout variant="warning" title="Riesgo de contraparte">
        La réplica sintética introduce un riesgo adicional que la física no tiene: el{' '}
        <strong>riesgo de contraparte</strong> — la posibilidad (normalmente limitada por
        regulación y garantías/colateral) de que la entidad con la que se firmó el swap no pueda
        cumplir su compromiso.
      </Callout>

      <Callout variant="example" title="Ejemplo simplificado">
        <p>
          Imagina un índice de un mercado con normas de acceso complicadas para inversores
          extranjeros <DataTag type="illustrative" />. Comprar físicamente cada acción podría ser
          costoso o incluso inviable para el fondo. Con una réplica sintética, el fondo evita ese
          problema: mantiene, por ejemplo, bonos líquidos europeos y recibe vía swap la
          rentabilidad de ese índice difícil de replicar físicamente.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Entonces, ¿cuál es "mejor"?</h3>
      <p>
        Ninguna es mejor en términos absolutos: es un intercambio de riesgos y ventajas. La física
        suele percibirse como más transparente e intuitiva (sabes exactamente qué posee el fondo),
        pero puede tener más dificultad para replicar índices con activos poco líquidos. La
        sintética puede lograr una réplica muy precisa incluso en índices complicados, a cambio de
        asumir riesgo de contraparte. Esta información —qué tipo de réplica usa— aparece en la
        documentación oficial del fondo (folleto, KID).
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Réplica física: el fondo compra los activos del índice (completa o por muestreo).</li>
        <li>Réplica sintética: el fondo usa un swap con una contraparte para obtener la rentabilidad del índice.</li>
        <li>La sintética añade riesgo de contraparte; la física puede tener más dificultad en índices poco líquidos.</li>
      </ul>
    </div>
  )
}
