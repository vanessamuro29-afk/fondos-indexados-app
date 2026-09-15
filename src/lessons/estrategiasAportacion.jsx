import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function EstrategiasAportacion() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Ya sabes qué es el rebalanceo. Esta lección compara dos parejas de estrategias muy
        habituales a la hora de gestionar cómo entra el dinero en una cartera y cómo se mantiene en
        el tiempo. Ninguna es "la correcta": cada una tiene ventajas e inconvenientes según tu
        situación y tu forma de tolerar el riesgo.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Buy and hold vs. rebalanceo periódico</h3>
      <p>
        <strong>Buy and hold</strong> ("comprar y mantener") consiste en definir una cartera inicial
        y no volver a tocar sus pesos, dejando que cada activo evolucione libremente. El{' '}
        <strong>rebalanceo periódico</strong> (visto en la lección anterior) consiste en revisar la
        cartera cada cierto tiempo y devolverla a su asignación objetivo.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Partiendo de una cartera 60% renta variable / 40% renta fija durante 20 años, con
          rentabilidades medias anuales de ejemplo del 7% para RV y 3% para RF{' '}
          <DataTag type="illustrative" />:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Buy and hold:</strong> al no reequilibrar, la renta variable (que creció más)
            acaba pesando bastante más del 60% original al final del periodo.
          </li>
          <li>
            <strong>Rebalanceo anual:</strong> la cartera se mantiene siempre cerca del 60/40 a lo
            largo de todo el periodo, vendiendo parte de lo que más ha crecido cada año.
          </li>
        </ul>
        <p className="mt-2 text-xs text-slate-500">
          Cifras y rentabilidades inventadas para ilustrar el efecto acumulado, no una predicción de
          ningún mercado real.
        </p>
      </Callout>

      <Callout variant="warning" title="Pros y contras, no un veredicto">
        <p className="mb-1"><strong>Buy and hold:</strong> más simple, menos operaciones (menos costes de transacción y, en algunos países, menos impacto fiscal por ventas), pero el riesgo real de la cartera puede alejarse mucho de lo planeado con el tiempo.</p>
        <p><strong>Rebalanceo periódico:</strong> mantiene el riesgo más controlado y alineado con lo decidido inicialmente, pero implica más operaciones y decisiones periódicas. Cuál se ajusta mejor a ti depende de tu perfil, tu horizonte y cuánta atención quieres dedicarle a la cartera.</p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">
        Dollar-cost averaging (aportaciones periódicas) vs. aportación única
      </h3>
      <p>
        El <strong>dollar-cost averaging (DCA)</strong> consiste en invertir una cantidad fija de
        forma periódica (por ejemplo, cada mes), en vez de invertir todo el capital disponible de
        una sola vez (<strong>aportación única</strong> o "lump sum").
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Supongamos que tienes 12.000 € para invertir en un fondo, con estos dos precios de
          ejemplo por participación a lo largo de un año <DataTag type="illustrative" />:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Escenario A (precio cae y luego se recupera): empieza en 100 €, baja a 70 € a mitad de año y termina en 100 €.</li>
          <li>Escenario B (precio sube de forma constante): empieza en 100 € y termina en 130 €, subiendo cada mes.</li>
        </ul>
        <p className="mt-2">
          Con <strong>aportación única</strong> al inicio del año, en ambos escenarios comprarías a
          100 €. Con <strong>DCA</strong> (1.000 €/mes), en el Escenario A comprarías más
          participaciones cuando el precio está más bajo (a 70 €), reduciendo tu precio medio de
          compra por debajo de 100 €. En el Escenario B, en cambio, ir aportando poco a poco te
          hace comprar a precios cada vez más altos, resultando en un precio medio peor que haber
          invertido todo al principio a 100 €.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Precios inventados para ilustrar el mecanismo. No representan ningún fondo ni mercado
          real, ni sugieren que uno de los dos escenarios sea más probable que el otro.
        </p>
      </Callout>

      <Callout variant="warning" title="Pros y contras, no un veredicto">
        <p className="mb-1">
          La aportación única tiene, en promedio, más tiempo invertido en el mercado, lo cual puede
          jugar a su favor en mercados que tienden a subir con el tiempo — pero expone todo el
          capital al riesgo de invertir justo antes de una caída.
        </p>
        <p>
          El DCA reduce el riesgo de "acertar mal el momento" con todo el capital de golpe, y
          para mucha gente es psicológicamente más llevadero, aunque no garantiza mejor resultado:
          como muestra el ejemplo, en un mercado que sube de forma sostenida, aportar poco a poco
          puede salir peor que haber invertido todo al principio. Qué opción se ajusta mejor a ti
          depende de cuánto capital tienes disponible de golpe, tu horizonte y tu tolerancia a ver
          oscilaciones de corto plazo.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Buy and hold es más simple pero puede desviar mucho el riesgo real de la cartera con el tiempo.</li>
        <li>El rebalanceo periódico mantiene el riesgo más controlado, a costa de más operaciones.</li>
        <li>DCA reduce el riesgo de mal timing con todo el capital, pero no garantiza mejor resultado que la aportación única.</li>
        <li>Ninguna estrategia es universalmente "mejor": depende del perfil, el capital disponible y el horizonte de cada persona.</li>
      </ul>
    </div>
  )
}
