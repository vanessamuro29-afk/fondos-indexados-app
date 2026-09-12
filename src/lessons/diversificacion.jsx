import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function Diversificacion() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        "No pongas todos los huevos en la misma cesta" es probablemente el consejo de inversión
        más antiguo y más útil que existe. En finanzas, a esto se le llama{' '}
        <strong>diversificación</strong>.
      </p>

      <p>
        Diversificar consiste en repartir tu dinero entre muchos activos distintos (empresas,
        sectores, países, tipos de activo) en lugar de concentrarlo en unos pocos. La lógica es
        simple: si una sola empresa quiebra o un sector concreto atraviesa una mala racha, el
        impacto sobre el conjunto de tu cartera es mucho menor si esa empresa o sector representa
        solo una pequeña parte del total.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Imagina dos escenarios <DataTag type="illustrative" />:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong>Cartera A:</strong> 1.000 € invertidos al 100% en una sola empresa. Si esa
            empresa quiebra, pierdes el 100% de tu inversión (1.000 €).
          </li>
          <li>
            <strong>Cartera B:</strong> 1.000 € repartidos a partes iguales entre 500 empresas (2 €
            en cada una). Si una de ellas quiebra, pierdes esos 2 €: un 0,2% del total.
          </li>
        </ul>
        <p className="mt-2">
          Un fondo indexado que replica un índice amplio funciona de forma parecida a la Cartera B:
          reparte el riesgo entre muchísimos activos.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Lo que la diversificación NO hace</h3>
      <p>
        Diversificar reduce el <strong>riesgo específico</strong> de un activo o sector concreto,
        pero no elimina el <strong>riesgo de mercado</strong>: si hay una crisis generalizada que
        afecta a todas las empresas de un mercado a la vez, una cartera diversificada también
        perderá valor, aunque probablemente menos que si hubiera estado concentrada en el sector
        más golpeado.
      </p>

      <Callout variant="warning" title="Diversificar entre tipos de activo">
        La diversificación no es solo "muchas empresas": también puedes diversificar entre renta
        fija y renta variable, entre distintos países o regiones, e incluso entre distintas
        divisas. Cada capa adicional de diversificación reduce un tipo distinto de riesgo
        concentrado.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Diversificar reparte el riesgo entre muchos activos distintos.</li>
        <li>Reduce el riesgo específico, pero no el riesgo de mercado en general.</li>
        <li>Los fondos indexados amplios ofrecen diversificación de forma sencilla y a bajo coste.</li>
      </ul>
    </div>
  )
}
