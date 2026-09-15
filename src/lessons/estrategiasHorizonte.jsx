import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function EstrategiasHorizonte() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Para cerrar el bloque de estrategias, vemos cómo se suele adaptar una cartera al paso del
        tiempo, y dos formas distintas de usar la renta fija: mantener bonos individuales hasta su
        vencimiento, o invertir a través de fondos.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Reducir renta variable con la edad u horizonte (glide path)</h3>
      <p>
        Una idea habitual es ir reduciendo el peso de la renta variable (y aumentando el de renta
        fija) a medida que se acerca el momento en que se necesitará el dinero — por ejemplo, según
        se acerca la jubilación. A esta trayectoria de asignación cada vez más conservadora se le
        llama <strong>glide path</strong>.
      </p>

      <Callout variant="example" title="Ejemplo ilustrativo (no una recomendación)">
        <p>
          Una posible trayectoria de ejemplo, sin ninguna base normativa ni recomendación personal{' '}
          <DataTag
            type="illustrative"
            note="Existen heurísticas populares (como 'resta tu edad de 100 o 110 para saber el % en renta variable'), pero son simplificaciones genéricas, no fórmulas validadas para cada persona. No sustituyen un análisis de tu situación concreta."
          />
          :
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full min-w-[360px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-300 text-left">
                <th className="py-1 pr-3">Años hasta el objetivo</th>
                <th className="py-1">% Renta variable (ejemplo)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-1 pr-3">30 años</td>
                <td className="py-1">90%</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 pr-3">15 años</td>
                <td className="py-1">70%</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-1 pr-3">5 años</td>
                <td className="py-1">40%</td>
              </tr>
              <tr>
                <td className="py-1 pr-3">0 años (objetivo alcanzado)</td>
                <td className="py-1">20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Callout>

      <Callout variant="warning" title="No es una fórmula única">
        Un glide path es solo un patrón general de reducir riesgo con el tiempo. La pendiente
        concreta (cuánto y cuándo reducir) depende de tu capacidad de asumir pérdidas, tu tolerancia
        emocional y tus objetivos — no de una fórmula matemática universal.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Bonos individuales hasta vencimiento vs. fondos de renta fija</h3>
      <p>
        Ya viste que la duración mide la sensibilidad del precio a los tipos de interés. Hay una
        diferencia importante en cómo afecta esto según cómo inviertas en renta fija:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Bono individual mantenido hasta vencimiento:</strong> si lo conservas hasta el
          final (y el emisor no incumple), recuperas el importe pactado más los cupones, con
          independencia de cómo haya oscilado su precio de mercado mientras tanto. Su duración
          efectiva se va reduciendo con el tiempo, hasta llegar a cero al vencimiento.
        </li>
        <li>
          <strong>Fondo de renta fija:</strong> compra y vende bonos continuamente para mantener
          unas características objetivo (por ejemplo, una duración media concreta). El fondo nunca
          "vence": su duración se mantiene relativamente estable en el tiempo, y su valor
          liquidativo refleja en cada momento el precio de mercado de los bonos que contiene.
        </li>
      </ul>

      <Callout variant="example" title="Ejemplo ilustrativo">
        <p>
          Compras un bono individual a 5 años por 1.000 € con cupón fijo <DataTag type="illustrative" />.
          Si los tipos suben el año 2, el precio de mercado de tu bono bajaría si quisieras venderlo
          en ese momento — pero si simplemente esperas hasta el año 5, cobras el importe pactado
          igualmente. Un fondo de renta fija con duración similar, en cambio, reflejaría esa subida
          de tipos en su valor liquidativo de forma permanente mientras la duración se mantenga,
          sin un "vencimiento" en el que recuperar un importe fijado de antemano.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Escalera de bonos (bond laddering)</h3>
      <p>
        Una <strong>escalera de bonos</strong> consiste en comprar varios bonos con vencimientos
        escalonados en el tiempo (por ejemplo, a 1, 2, 3, 4 y 5 años), en lugar de concentrar todo
        el capital en un único vencimiento.
      </p>

      <Callout variant="example" title="Ejemplo ilustrativo">
        <p>
          Con 5.000 € repartidos en 5 bonos de 1.000 € a 1, 2, 3, 4 y 5 años{' '}
          <DataTag type="illustrative" />, cada año vence uno de ellos: recuperas ese capital y
          puedes reinvertirlo en un nuevo bono a 5 años a los tipos vigentes en ese momento. Esto
          reparte el riesgo de tener que reinvertir todo tu capital de golpe en un momento
          concreto (bueno o malo) de tipos de interés, y te va dando liquidez periódica sin
          necesidad de vender nada anticipadamente.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Un glide path reduce gradualmente el peso de renta variable según se acerca el objetivo, sin ser una fórmula única válida para todos.</li>
        <li>Un bono mantenido hasta vencimiento devuelve un importe pactado, mientras que un fondo de renta fija nunca "vence" y refleja continuamente el precio de mercado.</li>
        <li>Una escalera de bonos reparte el riesgo de reinversión escalonando los vencimientos en el tiempo.</li>
      </ul>
    </div>
  )
}
