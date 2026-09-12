import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function Volatilidad() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        La <strong>volatilidad</strong> describe cuánto "sube y baja" el precio de una inversión a
        lo largo del tiempo. No indica si una inversión es buena o mala, sino cuánto se mueve su
        valor respecto a su media.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Dos fondos hipotéticos <DataTag type="illustrative" />:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Fondo A: sus rentabilidades mensuales suelen moverse entre -2% y +2%</li>
          <li>Fondo B: sus rentabilidades mensuales suelen moverse entre -8% y +8%</li>
        </ul>
        <p className="mt-2">
          El Fondo B es más volátil: sus oscilaciones son de mayor magnitud, aunque a largo plazo
          ambos podrían terminar con una rentabilidad media similar o distinta — la volatilidad no
          determina por sí sola el resultado final, solo el "camino" que se recorre para llegar a
          él.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Volatilidad y riesgo no son sinónimos exactos</h3>
      <p>
        En el lenguaje financiero cotidiano, "volatilidad" se usa a menudo como sinónimo de
        "riesgo", pero conviene matizar: la volatilidad mide oscilaciones, que pueden ser
        temporales y revertirse con el tiempo. Solo se convierten en una pérdida definitiva si
        decides vender en un momento de precio bajo.
      </p>

      <Callout variant="warning" title="El horizonte temporal importa">
        Cuanto más largo sea tu horizonte de inversión, más margen tienes para "esperar" a que una
        caída temporal se recupere, sin verte obligado a vender en el peor momento.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Relación con la rentabilidad esperada</h3>
      <p>
        Un principio general (no una garantía) en inversión es que para aspirar a mayor
        rentabilidad a largo plazo suele ser necesario aceptar mayor volatilidad. Esto se debe a
        que los inversores exigen una compensación extra por asumir más incertidumbre, pero nada
        garantiza que se cumpla en un periodo concreto.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>La volatilidad mide la magnitud de las oscilaciones de precio.</li>
        <li>No es lo mismo que una pérdida definitiva.</li>
        <li>Suele estar relacionada con el potencial de rentabilidad a largo plazo, sin garantías.</li>
      </ul>
    </div>
  )
}
