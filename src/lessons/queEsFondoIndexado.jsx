import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function QueEsFondoIndexado() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Imagina que en lugar de intentar adivinar qué 5 empresas lo harán mejor el año que viene,
        decides comprar un poquito de <strong>todas</strong> las empresas grandes de un mercado a
        la vez. Esa es, en esencia, la idea de un <strong>fondo indexado</strong>.
      </p>

      <p>
        Un fondo indexado es un fondo de inversión cuyo objetivo no es "ganarle" al mercado, sino{' '}
        <strong>replicar el comportamiento de un índice</strong> (por ejemplo, un listado de las
        principales empresas de un país o región, o un conjunto de bonos). Si el índice sube un
        1%, el fondo indexado busca subir aproximadamente lo mismo; si baja, también baja de forma
        parecida.
      </p>

      <Callout variant="definition" title="Índice">
        Un índice es, básicamente, una lista de activos (acciones, bonos...) con unas reglas claras
        sobre qué entra, qué sale y qué peso tiene cada uno. Sirve como "termómetro" de un mercado
        o segmento del mercado.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Gestión pasiva vs. gestión activa</h3>
      <p>
        En la <strong>gestión activa</strong>, un equipo de gestores decide qué comprar y vender
        intentando anticiparse al mercado y superar su rentabilidad. En la{' '}
        <strong>gestión pasiva</strong> (la que usan los fondos indexados), no se hacen esas
        apuestas: se sigue una regla fija y transparente, la composición del índice.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Supongamos un índice compuesto por solo 3 empresas, con estos pesos:
          Empresa A (50%), Empresa B (30%) y Empresa C (20%){' '}
          <DataTag type="illustrative" />.
        </p>
        <p className="mt-2">
          Si tuvieras 1.000 € para invertir replicando ese índice, destinarías aproximadamente 500
          € a la Empresa A, 300 € a la B y 200 € a la C. Si el año siguiente la Empresa A sube 10%,
          la B sube 4% y la C baja 5%, la rentabilidad conjunta del fondo sería aproximadamente:
        </p>
        <p className="mt-2 font-mono text-xs sm:text-sm">
          0,50 × 10% + 0,30 × 4% + 0,20 × (−5%) = 5% + 1,2% − 1% = <strong>5,2%</strong>
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Cifras inventadas únicamente para ilustrar cómo se combina la rentabilidad de varios
          activos según su peso. No corresponden a ninguna empresa ni índice real.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Un fondo indexado replica un índice, no intenta batirlo.</li>
        <li>Usa gestión pasiva: sigue reglas fijas, no apuestas discrecionales.</li>
        <li>Su rentabilidad depende del índice que replica, menos una pequeña diferencia por costes.</li>
      </ul>
    </div>
  )
}
