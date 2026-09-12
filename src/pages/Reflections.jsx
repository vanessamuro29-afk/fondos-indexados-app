import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReflections } from '../hooks/useReflections'

function formatDate(iso) {
  return new Date(iso).toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function Reflections() {
  const { reflections, clearReflections } = useReflections()
  const [confirmingReset, setConfirmingReset] = useState(false)

  const distinctScenarios = new Set(reflections.map((r) => r.scenarioId)).size
  const byTag = reflections.reduce((acc, r) => {
    acc[r.scenarioTag] = (acc[r.scenarioTag] || 0) + 1
    return acc
  }, {})

  const handleReset = () => {
    clearReflections()
    setConfirmingReset(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Mis reflexiones</h1>
        <p className="mt-1 text-slate-600">
          Aquí se guarda lo que has escrito antes de ver el feedback en el módulo de escenarios de
          mercado, para que puedas releer cómo razonaste en cada momento.
        </p>
      </div>

      {reflections.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
          Todavía no has completado ningún ejercicio de{' '}
          <Link to="/escenarios" className="text-indigo-600 hover:underline">
            escenarios de mercado
          </Link>
          .
        </div>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Ejercicios respondidos</p>
              <p className="mt-1 text-xl font-bold text-slate-900">{reflections.length}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Escenarios distintos practicados</p>
              <p className="mt-1 text-xl font-bold text-slate-900">{distinctScenarios}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Por tipo de escenario</p>
              <ul className="mt-1 text-sm text-slate-700">
                {Object.entries(byTag).map(([tag, count]) => (
                  <li key={tag}>
                    {tag}: <strong>{count}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {reflections.map((r) => (
              <div key={r.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700">
                    {r.scenarioTag}
                  </span>
                  <span className="text-xs text-slate-400">{formatDate(r.date)}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-800">{r.scenarioTitle}</p>
                <p className="mt-1 text-sm text-slate-600">{r.questionText}</p>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Tu razonamiento
                    </p>
                    <p className="whitespace-pre-line text-sm text-slate-700">
                      {r.userReflection || <span className="italic text-slate-400">No escribiste nada en este ejercicio.</span>}
                    </p>
                  </div>
                  <div
                    className={`rounded-lg p-3 ${r.isCorrect ? 'bg-emerald-50' : 'bg-rose-50'}`}
                  >
                    <p
                      className={`mb-1 text-xs font-semibold uppercase tracking-wide ${
                        r.isCorrect ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      Feedback de la app {r.isCorrect ? '(tu opción coincidía con la correcta)' : '(tu opción no era la correcta)'}
                    </p>
                    <p className="text-sm text-slate-700">{r.feedbackText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
            <h2 className="font-semibold text-rose-900">Borrar mis reflexiones</h2>
            <p className="mt-1 text-sm text-rose-800">
              Esto eliminará permanentemente todo tu historial de reflexiones guardado en este
              navegador. No afecta a tu progreso de lecciones ni de escenarios.
            </p>
            {confirmingReset ? (
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-lg bg-rose-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-rose-700"
                >
                  Sí, borrar todo
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmingReset(false)}
                  className="rounded-lg border border-rose-300 px-3 py-1.5 text-sm font-semibold text-rose-700 hover:bg-rose-100"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmingReset(true)}
                className="mt-3 rounded-lg border border-rose-300 px-3 py-1.5 text-sm font-semibold text-rose-700 hover:bg-rose-100"
              >
                Borrar reflexiones
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
