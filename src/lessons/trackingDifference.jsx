import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function TrackingDifference() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Ya conoces el <strong>tracking error</strong>. Existe un concepto hermano, con el que se
        confunde a menudo, que mide algo distinto: la <strong>tracking difference</strong>{' '}
        (diferencia de seguimiento).
      </p>

      <Callout variant="definition" title="Dos preguntas distintas">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Tracking error:</strong> ¿cuánto <em>varía</em> día a día (o mes a mes) la
            diferencia entre el fondo y el índice? Es una medida de dispersión/volatilidad de esa
            diferencia.
          </li>
          <li>
            <strong>Tracking difference:</strong> al final de un periodo (por ejemplo, un año),
            ¿cuánto ha <em>rendido de más o de menos</em> el fondo respecto al índice, en total?
            Es una diferencia acumulada, no una medida de dispersión.
          </li>
        </ul>
      </Callout>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Un fondo indexado ficticio a lo largo de un año <DataTag type="illustrative" />:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>El índice rinde un 9,00% en el año.</li>
          <li>El fondo rinde un 8,75% en el año.</li>
        </ul>
        <p className="mt-2">
          La <strong>tracking difference</strong> de ese año sería:
        </p>
        <p className="mt-1 font-mono text-xs sm:text-sm">
          8,75% − 9,00% = <strong>−0,25 puntos porcentuales</strong>
        </p>
        <p className="mt-2">
          Ese mismo fondo, sin embargo, podría tener un <strong>tracking error</strong> bajo (por
          ejemplo, oscilaciones diarias muy pequeñas y consistentes respecto al índice) si esa
          diferencia de −0,25% se ha ido acumulando de forma estable a lo largo del año, en vez de
          con saltos grandes e irregulares.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">¿Por qué la tracking difference suele ser negativa?</h3>
      <p>
        Lo más habitual es que un fondo indexado rinda ligeramente <em>menos</em> que su índice,
        principalmente por el TER y otros costes de gestión: el índice, por definición, no paga
        comisiones, mientras que el fondo sí. Una tracking difference negativa pequeña y estable
        (cercana al TER del fondo) suele considerarse una señal de buena gestión de la réplica.
      </p>

      <Callout variant="warning" title="Ambos datos son complementarios">
        Un fondo puede tener un tracking error bajo (se mueve de forma muy predecible respecto al
        índice) y aun así una tracking difference apreciable si esa diferencia pequeña se repite de
        forma constante. Para evaluar bien un fondo conviene mirar los dos datos, no solo uno.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Tracking error: dispersión/volatilidad de la diferencia fondo-índice.</li>
        <li>Tracking difference: diferencia acumulada de rentabilidad en un periodo concreto.</li>
        <li>Una tracking difference negativa y estable, cercana al TER, es habitual y esperable.</li>
      </ul>
    </div>
  )
}
