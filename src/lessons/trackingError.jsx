import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function TrackingError() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Ya sabes que un fondo indexado intenta replicar un índice. Pero en la práctica, ningún
        fondo lo consigue de forma absolutamente perfecta. A esa pequeña diferencia entre la
        rentabilidad del fondo y la de su índice de referencia se le llama{' '}
        <strong>tracking error</strong> (error de seguimiento).
      </p>

      <h3 className="text-lg font-semibold text-slate-900">¿Por qué ocurre?</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Las comisiones del fondo (TER) restan una parte de la rentabilidad.</li>
        <li>
          A veces no es posible comprar exactamente todos los activos del índice en las mismas
          proporciones (por ejemplo, si algunos son poco líquidos).
        </li>
        <li>Los costes de comprar y vender activos cuando el índice cambia su composición.</li>
        <li>Diferencias de tiempo (horario) entre mercados, en fondos que replican índices internacionales.</li>
      </ul>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Un índice sube un 8,00% en un año y el fondo indexado que lo replica sube un 7,85%{' '}
          <DataTag type="illustrative" />. El tracking error de ese año sería:
        </p>
        <p className="mt-2 font-mono text-xs sm:text-sm">
          8,00% − 7,85% = <strong>0,15 puntos porcentuales</strong>
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Cifras inventadas para el ejemplo. El tracking error real de un fondo concreto se
          consulta en sus informes periódicos.
        </p>
      </Callout>

      <Callout variant="info" title="Cuanto menor, mejor">
        Un tracking error bajo y estable es una señal de que el fondo está replicando bien su
        índice. Es un dato que aparece habitualmente en los informes periódicos de los fondos
        indexados, junto con el TER y otros datos técnicos.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>El tracking error mide la desviación entre fondo e índice.</li>
        <li>Nunca suele ser exactamente cero en la práctica.</li>
        <li>Comisiones y dificultades de replicación son sus causas principales.</li>
      </ul>
    </div>
  )
}
