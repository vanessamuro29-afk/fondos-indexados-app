import { useState } from 'react'

export default function QuizQuestion({ number, question, onAnswered }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (index) => {
    if (selected !== null) return
    setSelected(index)
    onAnswered?.(index === question.correctIndex)
  }

  const answered = selected !== null

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-3 font-semibold text-slate-900">
        {number != null && <span className="text-slate-400">{number}. </span>}
        {question.question}
      </p>
      <div className="flex flex-col gap-2">
        {question.options.map((option, index) => {
          const isCorrect = index === question.correctIndex
          const isSelected = index === selected

          let style = 'border-slate-200 hover:border-indigo-400 hover:bg-indigo-50'
          if (answered) {
            if (isCorrect) {
              style = 'border-emerald-400 bg-emerald-50 text-emerald-900'
            } else if (isSelected) {
              style = 'border-rose-400 bg-rose-50 text-rose-900'
            } else {
              style = 'border-slate-200 opacity-60'
            }
          }

          return (
            <button
              key={index}
              type="button"
              disabled={answered}
              onClick={() => handleSelect(index)}
              className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors disabled:cursor-default ${style}`}
            >
              {option}
              {answered && isCorrect && <span className="ml-2">✅</span>}
              {answered && isSelected && !isCorrect && <span className="ml-2">❌</span>}
            </button>
          )
        })}
      </div>
      {answered && (
        <div
          className={`mt-3 rounded-lg p-3 text-sm ${
            selected === question.correctIndex
              ? 'bg-emerald-50 text-emerald-900'
              : 'bg-rose-50 text-rose-900'
          }`}
        >
          <p className="mb-1 font-semibold">
            {selected === question.correctIndex ? '¡Correcto!' : 'No es correcto'}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  )
}
