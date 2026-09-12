import Callout from '../components/Callout'
import DataTag from '../components/DataTag'

export default function Kid() {
  return (
    <div className="flex flex-col gap-4 text-slate-700">
      <p>
        Antes de invertir en cualquier fondo, existe un documento breve y estandarizado que estás
        en tu derecho de consultar: el <strong>KID</strong> (Key Information Document), en España
        también llamado <strong>Documento de Datos Fundamentales</strong> (DFI). Su objetivo es
        resumir en pocas páginas lo esencial de un producto financiero, con un formato parecido
        para todos los fondos, de modo que puedas compararlos entre sí.
      </p>

      <Callout variant="definition" title="¿Por qué existe este documento?">
        En la Unión Europea, la normativa conocida como PRIIPs obliga a que ciertos productos de
        inversión (entre ellos, la mayoría de fondos) entreguen este documento a la persona
        inversora antes de contratarlo. No es opcional ni un extra: es un derecho del inversor.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Qué apartados suele tener</h3>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>¿Qué es este producto?</strong> Explica el objetivo del fondo y su política de
          inversión (por ejemplo, "replica el índice X" o "invierte en bonos de gobierno de la
          eurozona").
        </li>
        <li>
          <strong>Nivel de riesgo (indicador SRI):</strong> una escala del 1 (menor riesgo) al 7
          (mayor riesgo) que resume, de forma simplificada, el riesgo del producto.
        </li>
        <li>
          <strong>Escenarios de rentabilidad:</strong> muestra estimaciones en varios escenarios
          (favorable, moderado, desfavorable y de tensión) a distintos plazos.
        </li>
        <li>
          <strong>Costes:</strong> desglosa los costes de entrada, de salida, corrientes (donde
          está el TER) y, si aplica, incidentales.
        </li>
        <li>
          <strong>Periodo de mantenimiento recomendado:</strong> el horizonte temporal para el que
          está pensado el producto.
        </li>
        <li>
          <strong>Cómo reclamar:</strong> el procedimiento si tienes una queja sobre el producto o
          quien te lo vendió.
        </li>
      </ul>

      <Callout variant="warning" title="Importante sobre los escenarios de rentabilidad">
        Los "escenarios de rentabilidad" del KID se calculan con metodologías estandarizadas
        basadas en datos históricos del propio producto o de productos similares, pero{' '}
        <strong>no son una promesa ni una predicción</strong> de lo que ganarás o perderás. Es
        exactamente el mismo principio que ya vimos: rentabilidad pasada no garantiza rentabilidad
        futura.
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">
        Ejemplo paso a paso: cómo leer un KID (ficticio)
      </h3>
      <Callout variant="example" title="KID de ejemplo — Fondo Indexado Ficticio Global 100">
        <p className="mb-2 text-xs font-semibold text-slate-500">
          Todo el contenido de esta tabla es inventado para el ejercicio{' '}
          <DataTag
            type="illustrative"
            note="Este KID es completamente ficticio, creado solo para practicar cómo se lee un documento real. No corresponde a ningún fondo que exista."
          />
          . No busques este fondo, no existe.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-3 font-semibold">Objetivo</td>
                <td className="py-2">Replicar un índice global de renta variable</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-3 font-semibold">Nivel de riesgo (SRI)</td>
                <td className="py-2">5 de 7</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-3 font-semibold">Coste corriente (TER)</td>
                <td className="py-2">0,25% anual</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-3 font-semibold">Coste de entrada/salida</td>
                <td className="py-2">0%</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-2 pr-3 font-semibold">Periodo recomendado</td>
                <td className="py-2">Al menos 5 años</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold">Escenario moderado a 5 años (10.000 €)</td>
                <td className="py-2">≈ 13.400 € (valor de ejemplo)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Con estos datos ficticios podrías razonar: es un fondo de riesgo medio-alto (5/7, propio
          de renta variable), con un coste bajo típico de gestión pasiva (0,25%), sin comisiones de
          entrada/salida, pensado para mantenerse varios años — coherente con que la renta variable
          necesita horizonte temporal largo para amortiguar su volatilidad.
        </p>
      </Callout>

      <h3 className="text-lg font-semibold text-slate-900">Ideas clave</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>El KID es un documento breve y obligatorio antes de contratar un fondo.</li>
        <li>Resume objetivo, riesgo (SRI 1-7), escenarios de rentabilidad, costes y horizonte recomendado.</li>
        <li>Los escenarios de rentabilidad no son una promesa: se basan en cálculos estandarizados sobre datos pasados.</li>
      </ul>
    </div>
  )
}
