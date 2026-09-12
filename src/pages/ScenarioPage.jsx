import { Link, Navigate, useParams } from 'react-router-dom'
import { getScenarioById, getNextScenario } from '../data/scenarios'
import { useProgress } from '../hooks/useProgress'
import { useReflections } from '../hooks/useReflections'
import ScenarioQuiz from '../components/ScenarioQuiz'
import ScenarioWarningBanner from '../components/ScenarioWarningBanner'

export default function ScenarioPage() {
  const { scenarioId } = useParams()
  const scenario = getScenarioById(scenarioId)
  const { progress, markScenarioComplete } = useProgress()
  const { addReflection } = useReflections()

  if (!scenario) {
    return <Navigate to="/escenarios" replace />
  }

  const nextScenario = getNextScenario(scenario.id)
  const savedProgress = progress.scenarios[scenario.id]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to="/escenarios" className="text-sm text-indigo-600 hover:underline">
          ← Volver a Escenarios
        </Link>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          {scenario.tag}
        </p>
        <h1 className="text-2xl font-bold text-slate-900">{scenario.title}</h1>
      </div>

      <ScenarioWarningBanner />

      <article className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Relato educativo ficticio
        </p>
        <p className="mt-2 whitespace-pre-line text-slate-700">{scenario.narrative}</p>
      </article>

      <hr className="border-slate-200" />

      <ScenarioQuiz
        title="Practica el razonamiento"
        questions={scenario.questions}
        onComplete={(score, total) => markScenarioComplete(scenario.id, score, total)}
        onReflection={(questionIndex, questionText, payload) =>
          addReflection({
            scenarioId: scenario.id,
            scenarioTitle: scenario.title,
            scenarioTag: scenario.tag,
            questionIndex,
            questionText,
            userReflection: payload.reflectionText,
            selectedOptionText: payload.selectedOptionText,
            isCorrect: payload.isCorrect,
            feedbackText: payload.feedbackText,
          })
        }
      />

      {savedProgress?.completed && (
        <div className="flex flex-col items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-emerald-800">
            Última puntuación guardada: {savedProgress.score}/{savedProgress.total}
          </p>
          {nextScenario ? (
            <Link
              to={`/escenarios/${nextScenario.id}`}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Siguiente escenario →
            </Link>
          ) : (
            <Link
              to="/escenarios"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Volver al listado
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
