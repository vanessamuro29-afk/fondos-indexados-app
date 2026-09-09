import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function Rebalanceo() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Decidir una asignación de activos (por ejemplo, 60% renta variable / 40% renta fija) es
        solo el primer paso. Con el tiempo, como los distintos activos evolucionan de forma
        distinta, esos porcentajes se van desviando del objetivo original. Corregir esa desviación
        se llama <strong>rebalanceo</strong>.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Empiezas con 10.000 € repartidos 60% RV (6.000 €) / 40% RF (4.000 €){' '}
          <DataTag type="illustrative" />. Tras un año en el que la renta variable sube mucho y la
          renta fija apenas se mueve, tu cartera pasa a valer:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>RV: 6.000 € → 9.000 €</li>
          <li>RF: 4.000 € → 4.100 €</li>
        </ul>
        <p className="mt-2">
          Total: 13.100 €, repartidos ahora en aproximadamente 69% RV / 31% RF. Sin darte cuenta,
          tu cartera ha pasado a asumir más riesgo del que originalmente decidiste.
        </p>
        <p className="mt-2">
          Rebalancear hacia el 60/40 implicaría vender aproximadamente 1.140 € de RV y destinarlos
          a RF (o, alternativamente, dirigir las próximas aportaciones hacia RF hasta recuperar el
          equilibrio).
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Dos formas habituales de rebalancear</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Vendiendo y comprando:</strong> vender parte del activo que ha crecido más y
          usar ese dinero para comprar el que se ha quedado rezagado.
        </li>
        <li>
          <strong>Con nuevas aportaciones:</strong> si sigues aportando dinero periódicamente,
          puedes dirigir esas aportaciones hacia el activo infraponderado, sin necesidad de vender
          nada.
        </li>
      </ul>

      <Callout variant="info" title="¿Por qué importa?">
        El rebalanceo no busca "adivinar" el mercado, sino mantener el nivel de riesgo que
        originalmente decidiste que era adecuado para ti. Sin rebalanceo, el activo que más sube va
        ganando peso, lo que puede exponerte a más riesgo del planeado justo antes de una posible
        caída.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>El rebalanceo corrige la desviación entre la cartera real y la asignación objetivo.</li>
        <li>Puede hacerse vendiendo/comprando o dirigiendo nuevas aportaciones.</li>
        <li>Su objetivo es mantener el nivel de riesgo deseado, no maximizar rentabilidad puntual.</li>
      </ul>
    </div>
  )
}
