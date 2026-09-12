import { Link, Navigate, useParams } from 'react-router-dom'
import { getLessonById, getNextLesson } from '../data/lessons'
import { LESSON_CONTENT } from '../lessons'
import { useProgress } from '../hooks/useProgress'
import Quiz from '../components/Quiz'

export default function LessonPage() {
  const { lessonId } = useParams()
  const lesson = getLessonById(lessonId)
  const { progress, markLessonComplete } = useProgress()

  if (!lesson) {
    return <Navigate to="/teoria" replace />
  }

  const Content = LESSON_CONTENT[lesson.id]
  const nextLesson = getNextLesson(lesson.id)
  const savedProgress = progress.lessons[lesson.id]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to="/teoria" className="text-sm text-indigo-600 hover:underline">
          ← Volver a Teoría
        </Link>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          Lección {lesson.order} de 11 · ⏱ {lesson.estimatedMinutes} min
        </p>
        <h1 className="text-2xl font-bold text-slate-900">{lesson.title}</h1>
      </div>

      <article>{Content && <Content />}</article>

      <hr className="border-slate-200" />

      <Quiz
        title="Comprueba lo que has aprendido"
        questions={lesson.quiz}
        onComplete={(score, total) => markLessonComplete(lesson.id, score, total)}
      />

      {savedProgress?.completed && (
        <div className="flex flex-col items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-emerald-800">
            Última puntuación guardada: {savedProgress.score}/{savedProgress.total}
          </p>
          {nextLesson ? (
            <Link
              to={`/teoria/${nextLesson.id}`}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Siguiente lección →
            </Link>
          ) : (
            <Link
              to="/quiz-final"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Ir al test final →
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
