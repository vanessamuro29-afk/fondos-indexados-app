import { Link } from 'react-router-dom'

export default function DisclaimerBanner({ compact = false }) {
  if (compact) {
    return (
      <p className="border-t border-slate-800 bg-slate-900 px-4 py-2 text-center text-xs text-slate-300">
        Contenido con fines exclusivamente educativos. No constituye asesoramiento financiero ni
        recomendación de inversión.{' '}
        <Link to="/aviso-legal" className="underline hover:text-white">
          Aviso legal completo
        </Link>
      </p>
    )
  }

  return (
    <div className="border-b border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <p className="mx-auto max-w-4xl">
        <strong>Aviso:</strong> esta aplicación es un recurso educativo para aprender conceptos de
        inversión en fondos indexados. Ninguna cifra, ejemplo o simulación aquí mostrada constituye
        asesoramiento financiero, una recomendación de inversión ni una promesa de rentabilidad
        futura. Antes de invertir dinero real, contrasta la información con fuentes oficiales o
        consulta con un profesional cualificado.
      </p>
    </div>
  )
}
