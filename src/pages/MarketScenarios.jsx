import { SCENARIOS } from '../data/scenarios'
import { useProgress } from '../hooks/useProgress'
import ScenarioCard from '../components/ScenarioCard'
import ScenarioWarningBanner from '../components/ScenarioWarningBanner'
import ProgressBar from '../components/ProgressBar'

export default function MarketScenarios() {
  const { progress } = useProgress()
  const completedCount = Object.values(progress.scenarios).filter((s) => s.completed).length

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Interpretación de escenarios de mercado</h1>
        <p className="mt-1 text-slate-600">
          Practica cómo razonar sobre situaciones de mercado típicas (tipos de interés, inflación,
          volatilidad) aplicando lo aprendido en la teoría — sin que ninguna respuesta te diga qué
          hacer con tu dinero.
        </p>
      </div>

      <ScenarioWarningBanner />

      <ProgressBar
        value={completedCount}
        max={SCENARIOS.length}
        label={`${completedCount} de ${SCENARIOS.length} escenarios completados`}
      />

      <div className="flex flex-col gap-3">
        {SCENARIOS.map((scenario) => (
          <ScenarioCard key={scenario.id} scenario={scenario} progress={progress.scenarios[scenario.id]} />
        ))}
      </div>
    </div>
  )
}
