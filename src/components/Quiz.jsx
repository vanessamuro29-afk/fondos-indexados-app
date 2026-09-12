import { useState } from 'react'
import QuizQuestion from './QuizQuestion'
import ProgressBar from './ProgressBar'

export default function Quiz({ title, questions, onComplete }) {
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(null))
  const [finished, setFinished] = useState(false)

  const answeredCount = answers.filter((a) => a !== null).length
  const correctCount = answers.filter((a) => a === true).length
  const allAnswered = answeredCount === questions.length

  const handleAnswered = (index, isCorrect) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[index] = isCorrect
      return next
    })
  }

  const handleFinish = () => {
    setFinished(true)
    onComplete?.(correctCount, questions.length)
  }

  return (
    <div className="flex flex-col gap-4">
      {title && <h2 className="text-xl font-bold text-slate-900">{title}</h2>}
      <ProgressBar value={answeredCount} max={questions.length} label="Progreso del test" />

      {questions.map((q, i) => (
        <QuizQuestion
          key={i}
          number={i + 1}
          question={q}
          onAnswered={(isCorrect) => handleAnswered(i, isCorrect)}
        />
      ))}

      {allAnswered && !finished && (
        <button
          type="button"
          onClick={handleFinish}
          className="self-start rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
        >
          Ver resultado final
        </button>
      )}

      {finished && (
        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-indigo-900">
          <p className="text-lg font-bold">
            Resultado: {correctCount} / {questions.length} correctas
          </p>
          <p className="text-sm">
            {correctCount === questions.length
              ? '¡Perfecto! Dominas estos conceptos.'
              : 'Puedes repasar la lección y volver a intentarlo cuando quieras.'}
          </p>
        </div>
      )}
    </div>
  )
}
