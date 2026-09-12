import { useState } from 'react'

/**
 * Etiqueta obligatoria para cualquier cifra que pueda sonar a dato de
 * mercado real. Distingue explícitamente entre:
 *  - "illustrative": un valor inventado para el ejercicio, sin relación
 *    con ningún índice o producto real.
 *  - "real": un dato real, que debe incluir fuente y fecha verificables.
 *  - "uncertain": cuando no se puede garantizar que la cifra sea exacta
 *    o esté actualizada, se declara así en vez de darla por buena.
 */
export default function DataTag({ type = 'illustrative', source, date, note }) {
  const [open, setOpen] = useState(false)

  const styles = {
    illustrative: 'bg-amber-100 text-amber-800 border-amber-300',
    real: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    uncertain: 'bg-rose-100 text-rose-800 border-rose-300',
  }

  const labels = {
    illustrative: 'Valor ilustrativo',
    real: 'Dato real',
    uncertain: 'Sin verificar',
  }

  const defaultNote = {
    illustrative:
      'Este número es un ejemplo pedagógico definido para el ejercicio. No es un dato de mercado real ni una previsión.',
    real: source
      ? `Dato real. Fuente: ${source}${date ? ` (${date})` : ''}.`
      : 'Dato real (fuente no especificada).',
    uncertain:
      'No hay forma de verificar con certeza esta cifra en este contexto, así que no debe tratarse como un hecho confirmado.',
  }

  return (
    <span className="relative inline-block align-middle">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setOpen(false)}
        className={`ml-1 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${styles[type]}`}
        aria-expanded={open}
      >
        {labels[type]}
        <span aria-hidden="true">ⓘ</span>
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute left-0 top-full z-20 mt-1 w-64 rounded-lg border border-slate-200 bg-white p-3 text-xs leading-snug text-slate-700 shadow-lg"
        >
          {note || defaultNote[type]}
        </span>
      )}
    </span>
  )
}
