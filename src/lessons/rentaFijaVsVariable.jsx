import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function RentaFijaVsVariable() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        En el mundo de la inversión, casi todo se puede agrupar en dos grandes familias:{' '}
        <strong>renta fija</strong> y <strong>renta variable</strong>. Entender la diferencia es la
        base para construir cualquier cartera.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Renta fija: prestar dinero</h3>
      <p>
        Cuando compras renta fija (por ejemplo, un bono), estás prestando dinero a un emisor
        (una empresa o un Estado). A cambio, el emisor se compromete a devolverte el dinero en una
        fecha concreta (vencimiento) y a pagarte unos intereses periódicos (cupones) pactados de
        antemano.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Compras un bono de 1.000 € a 5 años con un cupón anual del 3%{' '}
          <DataTag type="illustrative" />. Cada año recibirías 30 € en concepto de intereses, y al
          cabo de los 5 años (si el emisor cumple), recuperarías los 1.000 € iniciales.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Renta variable: ser propietario</h3>
      <p>
        Cuando compras renta variable (una acción), pasas a ser copropietario de una parte de esa
        empresa. No hay un pago de intereses fijo ni una devolución garantizada: tu resultado
        depende de cómo evolucione el negocio y de lo que otros inversores estén dispuestos a pagar
        por esa parte de la empresa en el futuro.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Compras una acción a 50 € <DataTag type="illustrative" />. Si dentro de un año la
          empresa vale más y la acción cotiza a 55 €, has ganado un 10% (más el posible dividendo
          que reparta). Si cotiza a 45 €, habrías perdido un 10% sobre el papel, salvo que decidas
          vender en ese momento.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">¿Cuál es "mejor"?</h3>
      <p>
        Ninguna de las dos es mejor en abstracto: tienen perfiles de riesgo y comportamiento
        distintos. La renta variable tiende a ser más volátil a corto plazo, pero se le asocia un
        mayor potencial de crecimiento a largo plazo. La renta fija suele ser más estable, pero con
        un potencial de crecimiento más limitado. Ninguna está "libre de riesgo": la renta fija
        tiene riesgo de que el emisor no pague (riesgo de crédito) y su precio de mercado también
        puede variar antes del vencimiento.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Renta fija = prestas dinero, recibes intereses pactados.</li>
        <li>Renta variable = eres propietario, sin devolución garantizada.</li>
        <li>Ambas tienen riesgos, aunque de naturaleza distinta.</li>
      </ul>
    </div>
  )
}
