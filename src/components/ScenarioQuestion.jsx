import { useState } from 'react'

export default function ScenarioQuestion({ number, question, onAnswered, onReflectionSubmit }) {
  const [selected, setSelected] = useState(null)
  const [reflection, setReflection] = useState('')
  const [revealed, setRevealed] = useState(false)

  const handleReveal = () => {
    if (selected === null || revealed) return
    const isCorrect = selected === question.correctIndex
    setRevealed(true)
    onAnswered?.(isCorrect)
    onReflectionSubmit?.({
      selectedIndex: selected,
      selectedOptionText: question.options[selected],
      isCorrect,
      reflectionText: reflection.trim(),
      feedbackText: question.explanation,
    })
  }

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
          if (revealed) {
            if (isCorrect) {
              style = 'border-emerald-400 bg-emerald-50 text-emerald-900'
            } else if (isSelected) {
              style = 'border-rose-400 bg-rose-50 text-rose-900'
            } else {
              style = 'border-slate-200 opacity-60'
            }
          } else if (isSelected) {
            style = 'border-indigo-400 bg-indigo-50'
          }

          return (
            <button
              key={index}
              type="button"
              disabled={revealed}
              onClick={() => setSelected(index)}
              className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors disabled:cursor-default ${style}`}
            >
              {option}
              {revealed && isCorrect && <span className="ml-2">✅</span>}
              {revealed && isSelected && !isCorrect && <span className="ml-2">❌</span>}
            </button>
          )
        })}
      </div>

      {!revealed && selected !== null && (
        <div className="mt-3 flex flex-col gap-2">
          <label className="text-xs font-medium text-slate-500" htmlFor={`reflection-${number}`}>
            Tu razonamiento (antes de ver el feedback) — opcional pero recomendado
          </label>
          <textarea
            id={`reflection-${number}`}
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            rows={3}
            placeholder="Escribe aquí qué crees que pasaría y por qué, antes de ver la respuesta..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="button"
            onClick={handleReveal}
            className="self-start rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Ver feedback
          </button>
        </div>
      )}

      {revealed && (
        <div className="mt-3 flex flex-col gap-2">
          {reflection.trim() && (
            <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
              <p className="mb-1 font-semibold text-slate-500">Tu razonamiento (guardado en "Mis reflexiones"):</p>
              <p className="whitespace-pre-line">{reflection.trim()}</p>
            </div>
          )}
          <div
            className={`rounded-lg p-3 text-sm ${
              selected === question.correctIndex ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'
            }`}
          >
            <p className="mb-1 font-semibold">
              {selected === question.correctIndex ? '¡Correcto!' : 'No es correcto'}
            </p>
            <p>{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  )
}
