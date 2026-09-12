import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function AsignacionActivos() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Con lo aprendido hasta ahora, estás listo para la pregunta central de la construcción de
        una cartera: <strong>¿qué porcentaje destino a renta fija y qué porcentaje a renta
        variable?</strong> A esta decisión se le llama <strong>asignación de activos</strong> (o
        "asset allocation").
      </p>

      <Callout variant="definition" title="Asignación de activos">
        Es el reparto del capital entre las grandes categorías de inversión. Numerosos estudios
        académicos sobre gestión de carteras sitúan la asignación de activos como uno de los
        factores más determinantes en el resultado a largo plazo de una cartera diversificada,
        por delante incluso de qué fondo concreto elijas dentro de cada categoría.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">El compromiso riesgo-potencial</h3>
      <p>
        En términos generales, más peso en renta variable suele implicar mayor volatilidad
        esperada y, potencialmente, mayor crecimiento a largo plazo. Más peso en renta fija suele
        implicar más estabilidad, pero un potencial de crecimiento más limitado. No hay una
        combinación "perfecta" válida para todo el mundo.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Tres carteras hipotéticas de 10.000 € con rentabilidades anuales medias{' '}
          <DataTag type="illustrative" /> a modo de ejercicio (sin aportaciones adicionales, a 20
          años):
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>80% RV / 20% RF, rentabilidad media anual 7% → ≈ 38.700 €</li>
          <li>50% RV / 50% RF, rentabilidad media anual 5% → ≈ 26.500 €</li>
          <li>20% RV / 80% RF, rentabilidad media anual 3% → ≈ 18.100 €</li>
        </ul>
        <p className="mt-2 text-xs text-slate-500">
          Rentabilidades inventadas para ilustrar el efecto de la asignación de activos, no una
          predicción de lo que rendirá ninguna combinación real. Prueba el Simulador de Cartera de
          esta app para explorar tus propios escenarios.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">¿Qué determina tu asignación adecuada?</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Horizonte temporal:</strong> cuánto tiempo puedes mantener el dinero invertido.
        </li>
        <li>
          <strong>Tolerancia al riesgo:</strong> cuánta volatilidad puedes soportar sin tomar
          decisiones impulsivas.
        </li>
        <li>
          <strong>Objetivos financieros:</strong> para qué necesitas ese dinero y cuándo.
        </li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>La asignación de activos es el reparto entre RF y RV (y otras categorías).</li>
        <li>Influye de forma muy significativa en el riesgo y el potencial de la cartera.</li>
        <li>Depende de tu horizonte, tolerancia al riesgo y objetivos personales.</li>
      </ul>
    </div>
  )
}
