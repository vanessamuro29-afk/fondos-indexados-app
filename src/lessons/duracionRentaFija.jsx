import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function DuracionRentaFija() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        La <strong>duración</strong> es uno de los conceptos más importantes (y a veces menos
        intuitivos) de la renta fija. De forma simplificada, mide{' '}
        <strong>cuánto se espera que varíe el precio de un bono ante un cambio en los tipos de
        interés</strong>.
      </p>

      <Callout variant="definition" title="Duración (versión simplificada)">
        No es exactamente "años hasta el vencimiento", aunque están relacionados: la duración
        combina el tiempo hasta cada pago (cupones y devolución del principal) con su importe, para
        estimar la sensibilidad total del precio del bono a los tipos de interés.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">La relación inversa precio-tipos</h3>
      <p>
        Cuando suben los tipos de interés de referencia, los bonos que se emiten nuevos ofrecen
        cupones más altos. Esto hace que los bonos antiguos, con cupones más bajos, resulten menos
        atractivos en el mercado secundario, por lo que su precio tiende a bajar. Cuando los tipos
        bajan, ocurre lo contrario: los bonos antiguos con cupones más altos se vuelven más
        atractivos y su precio tiende a subir.
      </p>

      <Callout variant="example" title="Ejemplo numérico">
        <p>
          Dos fondos de renta fija, uno con duración media de 2 años y otro de 15 años{' '}
          <DataTag type="illustrative" />. Si los tipos de interés subieran, de forma aproximada,
          1 punto porcentual:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>El fondo de duración 2: variación aproximada de -2% en su precio</li>
          <li>El fondo de duración 15: variación aproximada de -15% en su precio</li>
        </ul>
        <p className="mt-2 text-xs text-slate-500">
          Esta es una simplificación pedagógica (duración × variación de tipos) que ignora otros
          efectos de segundo orden. No corresponde a ningún fondo real; sirve solo para ilustrar la
          idea de que a mayor duración, mayor sensibilidad.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">¿Por qué importa para tu cartera?</h3>
      <p>
        Si eliges un fondo de renta fija con duración larga, debes esperar más oscilaciones de
        precio ante cambios en los tipos de interés (para bien o para mal) que con uno de duración
        corta. Es una forma más de entender el "riesgo" dentro de la propia renta fija, que no es
        un bloque homogéneo.
      </p>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>La duración mide la sensibilidad del precio de un bono a los tipos de interés.</li>
        <li>A mayor duración, mayor sensibilidad (en ambas direcciones).</li>
        <li>Los fondos de renta fija publican una duración media de su cartera.</li>
      </ul>
    </div>
  )
}
