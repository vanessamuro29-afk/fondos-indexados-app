import Callout from '../components/Callout'

export default function HorizontePerfilRiesgo() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Llegamos a la última pieza del puzle: para decidir tu asignación de activos necesitas
        conocer dos cosas sobre ti mismo, tu <strong>horizonte temporal</strong> y tu{' '}
        <strong>perfil de riesgo</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Horizonte temporal</h3>
      <p>
        Es el tiempo que planeas mantener el dinero invertido antes de necesitarlo. No es lo mismo
        ahorrar para unas vacaciones el año que viene que invertir pensando en la jubilación dentro
        de 30 años.
      </p>

      <Callout variant="info" title="Por qué importa">
        Un horizonte más largo da más margen para atravesar caídas temporales del mercado y esperar
        una posible recuperación antes de necesitar el dinero. Un horizonte corto reduce ese
        margen: si tuvieras que vender justo después de una caída, la pérdida se materializaría de
        verdad.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Perfil de riesgo</h3>
      <p>Combina dos dimensiones distintas, que conviene no confundir:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Capacidad de riesgo:</strong> cuánto puedes permitirte perder, en términos
          objetivos, sin comprometer tus objetivos financieros (por ejemplo, según tus ingresos,
          ahorros o compromisos económicos).
        </li>
        <li>
          <strong>Tolerancia al riesgo:</strong> cuánta volatilidad eres capaz de soportar
          emocionalmente sin tomar decisiones impulsivas, como vender en pánico durante una caída.
        </li>
      </ul>

      <Callout variant="warning" title="La trampa más habitual">
        Muchas decisiones de inversión poco acertadas no vienen de elegir mal los activos, sino de
        asumir más riesgo del que uno realmente puede tolerar emocionalmente, y luego vender en el
        peor momento posible cuando llega una caída fuerte. Conocer tu propia tolerancia es tan
        importante como entender los productos en los que inviertes.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Uniendo las piezas</h3>
      <p>
        Horizonte temporal, tolerancia al riesgo y objetivos financieros son los tres inputs que,
        combinados, ayudan a decidir una asignación de activos razonable para tu situación
        particular — no existe una única fórmula válida para todo el mundo, y esta app no
        sustituye el asesoramiento personalizado que pueda ofrecerte un profesional cualificado.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>El horizonte temporal es cuánto tiempo puedes mantener la inversión.</li>
        <li>El perfil de riesgo combina capacidad objetiva y tolerancia emocional.</li>
        <li>Ambos, junto con tus objetivos, orientan tu asignación de activos.</li>
      </ul>
    </div>
  )
}
