import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function FiscalidadBasica() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <Callout variant="warning" title="Esto no es asesoramiento fiscal">
        Esta lección da una idea general y simplificada de cómo funciona la fiscalidad de los
        fondos en España. La normativa fiscal cambia con el tiempo y tiene matices según tu
        situación personal. Para cualquier decisión real, consulta la web de la Agencia Tributaria
        o a un asesor fiscal cualificado — no te bases solo en esta lección.
      </Callout>

      <p>
        Uno de los rasgos distintivos de los fondos de inversión tradicionales en España (a
        diferencia de comprar acciones o ETFs directamente) es el llamado{' '}
        <strong>régimen de traspasos</strong>.
      </p>

      <Callout variant="definition" title="Régimen de traspasos (idea general)">
        En España, mover tu dinero de un fondo de inversión a otro fondo de inversión (un
        "traspaso") no suele generar, en el momento del traspaso, una tributación por la ganancia
        obtenida hasta ese momento. La tributación se traslada al momento en que finalmente
        reembolsas (vendes) tus participaciones y sacas el dinero del "mundo fondos".{' '}
        <DataTag
          type="uncertain"
          note="Esta es una característica estructural del sistema fiscal español para fondos de inversión, vigente desde hace muchos años, pero las leyes fiscales pueden modificarse. Verifica la normativa vigente en la Agencia Tributaria antes de dar esto por sentado para tu caso."
        />
      </Callout>

      <Callout variant="example" title="Ejemplo numérico simplificado">
        <p>Compara dos situaciones hipotéticas (cifras inventadas, sin comisiones ni impuestos reales incluidos) <DataTag type="illustrative" />:</p>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong>Con acciones/ETF:</strong> inviertes 10.000 €, ganan un 20% (12.000 €) y
            decides cambiar a otra inversión. Al vender, esa ganancia de 2.000 € tributa ese mismo
            año.
          </li>
          <li>
            <strong>Con fondos (traspaso):</strong> inviertes 10.000 € en el Fondo A, ganan un 20%
            (12.000 €) y decides traspasar todo a un Fondo B. Ese traspaso, en general, no genera
            tributación en ese momento: los 12.000 € completos pasan al Fondo B, y la tributación
            de la ganancia se difiere hasta que finalmente reembolses en efectivo.
          </li>
        </ul>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">¿Y los ETFs?</h3>
      <p>
        Los ETFs (fondos cotizados, que se compran y venden en bolsa como una acción) generalmente{' '}
        <strong>no</strong> han contado con este régimen de traspasos en España cuando cotizan en
        bolsas españolas: cada venta puede considerarse un evento fiscal en el momento en que se
        produce.{' '}
        <DataTag
          type="uncertain"
          note="El tratamiento fiscal de los ETFs puede tener matices según dónde coticen y ha sido objeto de debate normativo. Verifica siempre la normativa actualizada, ya que este es un área donde las reglas pueden cambiar."
        />
      </p>

      <h3 className="text-lg font-semibold text-slate-900">¿Cuándo se tributa, en general?</h3>
      <p>
        Cuando finalmente reembolsas participaciones de un fondo y obtienes una ganancia, esa
        ganancia se integra, en el caso español, dentro de la base imponible del ahorro del IRPF,
        con tramos progresivos que la Agencia Tributaria actualiza periódicamente. No incluimos
        aquí los porcentajes exactos porque cambian con el tiempo y no queremos presentar como
        vigente un dato que podría haberse quedado desactualizado — consúltalos en la fuente
        oficial cuando los necesites.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Los traspasos entre fondos de inversión en España, en general, difieren la tributación.</li>
        <li>Los ETFs listados en bolsa suelen no beneficiarse de este mismo régimen.</li>
        <li>Los tipos impositivos concretos cambian con el tiempo: verifica siempre la fuente oficial.</li>
      </ul>
    </div>
  )
}
