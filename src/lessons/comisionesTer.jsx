import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function ComisionesTer() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Invertir no es gratis: los fondos cobran una serie de gastos por gestionarlos. El indicador
        más habitual para resumir estos costes es el <strong>TER</strong> (Total Expense Ratio, o
        ratio de gastos totales), expresado como un porcentaje anual sobre el patrimonio invertido.
      </p>

      <Callout variant="definition" title="TER">
        El TER se descuenta automáticamente del valor del fondo a lo largo del año: no es una
        factura que recibas aparte, sino que ya está reflejado en la rentabilidad neta que ves.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Por qué una diferencia pequeña importa mucho</h3>
      <p>
        Una diferencia de comisión que parece insignificante (por ejemplo, medio punto porcentual
        al año) puede tener un efecto muy grande a largo plazo, porque el interés compuesto hace
        que esa comisión se aplique, año tras año, sobre un capital cada vez mayor.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Supongamos una aportación única de 10.000 € durante 30 años, con una rentabilidad bruta
          anual del 6% en ambos casos <DataTag type="illustrative" />:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Fondo con TER 0,2% → rentabilidad neta aproximada 5,8% anual</li>
          <li>Fondo con TER 1,5% → rentabilidad neta aproximada 4,5% anual</li>
        </ul>
        <p className="mt-2 font-mono text-xs sm:text-sm">
          10.000 € × (1,058)^30 ≈ <strong>54.700 €</strong>
          <br />
          10.000 € × (1,045)^30 ≈ <strong>37.600 €</strong>
        </p>
        <p className="mt-2 text-xs text-slate-500">
          La diferencia (más de 17.000 € en este ejemplo) no viene de que un fondo "rinda mejor",
          sino únicamente del efecto acumulado de una comisión menor. Puedes explorar este efecto
          tú mismo en la Calculadora de la app.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Gestión pasiva y costes</h3>
      <p>
        Como norma general del sector, los fondos indexados{' '}
        <DataTag
          type="uncertain"
          note="Esto es una tendencia general ampliamente observada en el sector, no un dato oficial de ninguna gestora o regulador concreto. El TER exacto de cada fondo varía y debe consultarse en su documentación oficial."
        />{' '}
        suelen tener TER más bajos que muchos fondos de gestión activa, ya que no requieren un
        equipo de analistas tomando decisiones discrecionales de compra-venta.
      </p>

      <Callout variant="warning" title="Dónde consultar el TER real">
        El TER exacto de cualquier fondo concreto debe consultarse en su documento de datos
        fundamentales para el inversor (KID/KIID) o folleto oficial, nunca en fuentes informales.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>El TER resume el coste anual de un fondo.</li>
        <li>Pequeñas diferencias de comisión se amplifican mucho con el interés compuesto.</li>
        <li>Consulta siempre el TER real en la documentación oficial del fondo.</li>
      </ul>
    </div>
  )
}
