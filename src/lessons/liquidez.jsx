import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function Liquidez() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        La <strong>liquidez</strong> es la facilidad con la que puedes convertir una inversión en
        dinero disponible, sin tener que malvenderla ni esperar demasiado tiempo. Es un concepto
        distinto de la rentabilidad o el riesgo, aunque está relacionado con ambos.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Liquidez del vehículo: fondo tradicional vs. ETF</h3>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Fondo de inversión tradicional:</strong> compras y vendes participaciones a un
          único precio diario, el valor liquidativo (VL), calculado normalmente al cierre de cada
          sesión. Pides el reembolso y el dinero suele llegar en un plazo de varios días hábiles.
        </li>
        <li>
          <strong>ETF (fondo cotizado):</strong> se compra y vende en bolsa durante el horario de
          mercado, con un precio que puede variar minuto a minuto, igual que una acción.
        </li>
      </ul>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Un fondo tradicional ficticio calcula su VL cada día al cierre <DataTag type="illustrative" />. Si
          envías tu orden de reembolso un lunes a mediodía, se ejecutará al VL de cierre de ese
          lunes (o del día siguiente, según las normas del fondo), y podrías recibir el dinero en
          tu cuenta, por ejemplo, 2-4 días hábiles después — el plazo exacto depende de cada fondo
          y gestora, así que consúltalo en su documentación.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Liquidez de los activos subyacentes</h3>
      <p>
        Además de cómo se compra/vende el fondo, importa cuán líquidos son los activos que tiene
        dentro. Acciones de grandes empresas muy negociadas o deuda pública de países grandes
        suelen ser muy líquidas. Acciones de empresas muy pequeñas, o bonos de emisores poco
        habituales, pueden ser mucho menos líquidas.
      </p>

      <Callout variant="warning" title="Por qué importa en momentos de estrés">
        En circunstancias de mucha inestabilidad en los mercados, si un fondo tiene una parte
        relevante en activos poco líquidos, podría tener más dificultad para vender esos activos
        rápidamente y sin afectar su precio, si muchos partícipes piden el reembolso a la vez. Es
        una de las razones por las que la diversificación y conocer qué contiene un fondo son
        relevantes más allá de la rentabilidad esperada.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Liquidez = facilidad para convertir la inversión en dinero disponible sin penalización.</li>
        <li>Los fondos tradicionales operan a un VL diario; los ETFs cotizan en bolsa en tiempo real.</li>
        <li>La liquidez de los activos subyacentes también importa, especialmente en momentos de estrés de mercado.</li>
      </ul>
    </div>
  )
}
