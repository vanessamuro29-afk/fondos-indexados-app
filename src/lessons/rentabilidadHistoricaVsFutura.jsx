import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function RentabilidadHistoricaVsFutura() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Es muy habitual encontrar frases como "esta inversión ha rentado un X% de media en los
        últimos años". Son datos interesantes para entender el pasado, pero conviene tratarlos con
        una regla clara en mente.
      </p>

      <Callout variant="warning" title="Principio clave">
        Las rentabilidades pasadas no garantizan rentabilidades futuras. Es una de las advertencias
        más habituales y ampliamente aceptadas en la documentación regulada de productos
        financieros.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">¿Por qué es importante recordarlo?</h3>
      <p>
        Los mercados dependen de un número enorme de factores futuros —económicos, políticos,
        tecnológicos, psicológicos— que no pueden conocerse de antemano. Que algo haya funcionado
        bien en el pasado no asegura que vaya a repetirse en el futuro, ni siquiera que vaya a
        parecerse.
      </p>

      <Callout variant="info" title="Cómo tratar una cifra de rentabilidad histórica real">
        <p>Antes de dar por buena una cifra de rentabilidad histórica de un índice o fondo real, pregúntate:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>¿Quién la publica y con qué metodología?</li>
          <li>¿Qué periodo exacto cubre (fechas de inicio y fin)?</li>
          <li>¿Incluye o no la reinversión de dividendos/cupones?</li>
          <li>¿Está expresada en términos nominales o descontando la inflación?</li>
        </ul>
        <p className="mt-2">
          Si no puedes verificar estos datos, lo más honesto es tratar la cifra con cautela en
          lugar de darla por un hecho.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Los números de esta aplicación</h3>
      <p>
        En la Calculadora y en el Simulador de Cartera de esta app, tú introduces la rentabilidad
        anual que quieres explorar <DataTag type="illustrative" />. Son ejercicios matemáticos
        sobre interés compuesto, útiles para entender el efecto del tiempo, las aportaciones y las
        comisiones — nunca una predicción ni una recomendación de inversión real.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>El pasado no predice el futuro con certeza.</li>
        <li>Cualquier dato histórico real debe poder verificarse: fuente, periodo y metodología.</li>
        <li>Los ejemplos numéricos de esta app son hipotéticos y educativos, no reales.</li>
      </ul>
    </div>
  )
}
