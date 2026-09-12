import { Link } from 'react-router-dom'

export default function ScenarioCard({ scenario, progress }) {
  const completed = progress?.completed
  const score = progress?.score

  return (
    <Link
      to={`/escenarios/${scenario.id}`}
      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{scenario.tag}</p>
        <h3 className="font-semibold text-slate-900">{scenario.title}</h3>
      </div>
      <div className="flex flex-col items-end gap-1 text-right">
        {completed ? (
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
            ✅ Completado
          </span>
        ) : (
          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
            Pendiente
          </span>
        )}
        {typeof score === 'number' && (
          <span className="text-xs text-slate-500">
            {score}/{scenario.questions.length}
          </span>
        )}
      </div>
    </Link>
  )
}
