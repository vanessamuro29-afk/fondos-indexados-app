import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LESSONS } from '../data/lessons'
import { useProgress } from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'

export default function Progress() {
  const { progress, resetProgress } = useProgress()
  const [confirmingReset, setConfirmingReset] = useState(false)

  const completedLessons = LESSONS.filter((l) => progress.lessons[l.id]?.completed)

  const handleReset = () => {
    resetProgress()
    setConfirmingReset(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tu progreso</h1>
        <p className="mt-1 text-slate-600">
          Este progreso se guarda únicamente en el almacenamiento local de tu navegador (no se
          envía a ningún servidor ni requiere cuenta de usuario). Si cambias de navegador o de
          dispositivo, no se conservará.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <ProgressBar
          value={completedLessons.length}
          max={LESSONS.length}
          label={`Lecciones completadas: ${completedLessons.length} de ${LESSONS.length}`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-slate-900">Detalle por lección</h2>
        {LESSONS.map((lesson) => {
          const lp = progress.lessons[lesson.id]
          return (
            <Link
              key={lesson.id}
              to={`/teoria/${lesson.id}`}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm hover:bg-slate-50"
            >
              <span className="font-medium text-slate-800">
                {lesson.order}. {lesson.title}
              </span>
              {lp?.completed ? (
                <span className="text-emerald-700">
                  ✅ {lp.score}/{lp.total}
                </span>
              ) : (
                <span className="text-slate-400">Pendiente</span>
              )}
            </Link>
          )
        })}
      </div>

      <div className="rounded-lg border border-slate-200 bg-white px-4 py-3">
        <h2 className="font-semibold text-slate-900">Test final</h2>
        {progress.finalQuiz ? (
          <p className="mt-1 text-sm text-emerald-700">
            ✅ {progress.finalQuiz.score}/{progress.finalQuiz.total}
          </p>
        ) : (
          <p className="mt-1 text-sm text-slate-400">Aún no lo has realizado.</p>
        )}
        <Link to="/quiz-final" className="mt-2 inline-block text-sm text-indigo-600 hover:underline">
          Ir al test final →
        </Link>
      </div>

      <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
        <h2 className="font-semibold text-rose-900">Borrar progreso</h2>
        <p className="mt-1 text-sm text-rose-800">
          Esto eliminará permanentemente tus lecciones completadas y resultados de tests
          guardados en este navegador.
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
            Borrar progreso
          </button>
        )}
      </div>
    </div>
  )
}
