import { Link } from 'react-router-dom'

export default function LessonCard({ lesson, progress }) {
  const completed = progress?.completed
  const score = progress?.score

  return (
    <Link
      to={`/teoria/${lesson.id}`}
      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
          Lección {lesson.order}
        </p>
        <h3 className="font-semibold text-slate-900">{lesson.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{lesson.description}</p>
        <p className="mt-2 text-xs text-slate-400">⏱ {lesson.estimatedMinutes} min</p>
      </div>
      <div className="flex flex-col items-end gap-1 text-right">
        {completed ? (
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
            ✅ Completada
          </span>
        ) : (
          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
            Pendiente
          </span>
        )}
        {typeof score === 'number' && (
          <span className="text-xs text-slate-500">
            Test: {score}/{lesson.quiz.length}
          </span>
        )}
      </div>
    </Link>
  )
}
