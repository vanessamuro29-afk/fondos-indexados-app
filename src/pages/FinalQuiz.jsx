import { Link } from 'react-router-dom'
import { FINAL_QUIZ } from '../data/finalQuiz'
import { useProgress } from '../hooks/useProgress'
import Quiz from '../components/Quiz'

export default function FinalQuiz() {
  const { progress, setFinalQuizResult } = useProgress()
  const saved = progress.finalQuiz

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to="/teoria" className="text-sm text-indigo-600 hover:underline">
          ← Volver a Teoría
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">Test final acumulativo</h1>
        <p className="mt-1 text-slate-600">
          {FINAL_QUIZ.length} preguntas que combinan todos los temas del módulo de teoría.
        </p>
        {saved && (
          <p className="mt-2 text-sm text-slate-500">
            Última puntuación guardada: {saved.score}/{saved.total}
          </p>
        )}
      </div>

      <Quiz
        questions={FINAL_QUIZ}
        onComplete={(score, total) => setFinalQuizResult(score, total)}
      />
    </div>
  )
}
