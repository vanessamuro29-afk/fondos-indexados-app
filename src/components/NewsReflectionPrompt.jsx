import { useState } from 'react'
import { useReflections } from '../hooks/useReflections'

const PROMPTS = [
  '¿Qué tipo de activos crees que podrían verse más afectados por este tipo de evento, y por qué?',
  '¿Qué conceptos de la teoría de esta app (revisa el glosario) son relevantes para entender esta noticia?',
  '¿Qué preguntas te quedan sin responder sobre esta situación?',
]

export default function NewsReflectionPrompt({ article }) {
  const { addReflection } = useReflections()
  const [answers, setAnswers] = useState(() => Array(PROMPTS.length).fill(''))
  const [saved, setSaved] = useState(false)

  const dateLabel = new Date(article.datetime).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  const handleSave = () => {
    PROMPTS.forEach((prompt, i) => {
      if (!answers[i].trim()) return
      addReflection({
        scenarioId: `noticia-${article.id}`,
        scenarioTitle: article.headline,
        scenarioTag: `Noticia real: ${article.topics.map((t) => t.label).join(', ')}`,
        questionIndex: i,
        questionText: prompt,
        userReflection: answers[i].trim(),
        selectedOptionText: null,
        isCorrect: null,
        feedbackText: `Generado a partir de una noticia real del ${dateLabel}. Fuente: ${article.source} (${article.url}). Al ser un evento real en curso, no se ofrece aquí una "respuesta correcta": este espacio es para practicar tu propio razonamiento.`,
      })
    })
    setSaved(true)
  }

  const hasAnyAnswer = answers.some((a) => a.trim())

  if (saved) {
    return (
      <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">
        Guardado en "Mis reflexiones". Puedes releerlo cuando quieras.
      </div>
    )
  }

  return (
    <div className="mt-3 flex flex-col gap-3 rounded-lg border border-indigo-200 bg-indigo-50 p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
        Practica tu razonamiento sobre esta noticia
      </p>
      {PROMPTS.map((prompt, i) => (
        <div key={i} className="flex flex-col gap-1">
          <label className="text-sm text-slate-700">{prompt}</label>
          <textarea
            value={answers[i]}
            onChange={(e) =>
              setAnswers((prev) => {
                const next = [...prev]
                next[i] = e.target.value
                return next
              })
            }
            rows={2}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Escribe tu razonamiento (opcional, puedes dejar preguntas sin responder)..."
          />
        </div>
      ))}
      <button
        type="button"
        onClick={handleSave}
        disabled={!hasAnyAnswer}
        className="self-start rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Guardar en Mis reflexiones
      </button>
    </div>
  )
}
