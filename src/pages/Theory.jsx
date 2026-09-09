import { Link } from 'react-router-dom'
import { LESSONS } from '../data/lessons'
import { useProgress } from '../hooks/useProgress'
import LessonCard from '../components/LessonCard'
import ProgressBar from '../components/ProgressBar'

export default function Theory() {
  const { progress } = useProgress()
  const completedCount = Object.values(progress.lessons).filter((l) => l.completed).length
  const allCompleted = completedCount === LESSONS.length

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Módulo de teoría</h1>
        <p className="mt-1 text-slate-600">
          11 lecciones cortas (5-10 min cada una) para ir de lo básico a lo intermedio. Cada
          lección incluye un test con feedback inmediato.
        </p>
      </div>

      <ProgressBar
        value={completedCount}
        max={LESSONS.length}
        label={`${completedCount} de ${LESSONS.length} lecciones completadas`}
      />

      <div className="flex flex-col gap-3">
        {LESSONS.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} progress={progress.lessons[lesson.id]} />
        ))}
      </div>

      <div
        className={`rounded-xl border p-4 ${
          allCompleted
            ? 'border-indigo-300 bg-indigo-50'
            : 'border-slate-200 bg-slate-50 text-slate-500'
        }`}
      >
        <h3 className="font-semibold text-slate-900">Test final acumulativo</h3>
        <p className="mt-1 text-sm">
          Mezcla preguntas de todas las lecciones para comprobar tu comprensión global.{' '}
          {!allCompleted && 'Recomendamos completar todas las lecciones antes de hacerlo.'}
        </p>
        <Link
          to="/quiz-final"
          className="mt-3 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Ir al test final
        </Link>
      </div>
    </div>
  )
}
