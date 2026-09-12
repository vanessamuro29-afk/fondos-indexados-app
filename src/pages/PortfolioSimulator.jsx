import { useMemo, useState } from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import NumberField from '../components/NumberField'
import DataTag from '../components/DataTag'
import { DEFAULT_SCENARIOS, simulatePortfolio } from '../utils/portfolio'
import { formatEuros } from '../utils/compound'

const SCENARIO_LABELS = {
  pesimista: { label: 'Pesimista', color: '#dc2626' },
  medio: { label: 'Medio', color: '#4f46e5' },
  optimista: { label: 'Optimista', color: '#16a34a' },
}

export default function PortfolioSimulator() {
  const [pctRentaFija, setPctRentaFija] = useState(40)
  const [initial, setInitial] = useState(5000)
  const [annualContribution, setAnnualContribution] = useState(1200)
  const [years, setYears] = useState(20)
  const [scenarios, setScenarios] = useState(DEFAULT_SCENARIOS)

  const pctRentaVariable = 100 - pctRentaFija

  const updateScenario = (assetClass, scenarioKey, value) => {
    setScenarios((prev) => ({
      ...prev,
      [assetClass]: { ...prev[assetClass], [scenarioKey]: value },
    }))
  }

  const result = useMemo(
    () =>
      simulatePortfolio({
        initial: Number(initial) || 0,
        annualContribution: Number(annualContribution) || 0,
        years: Number(years) || 0,
        pctRentaFija: Number(pctRentaFija) || 0,
        scenarios,
      }),
    [initial, annualContribution, years, pctRentaFija, scenarios]
  )

  const chartData = useMemo(() => {
    const maxLen = years + 1
    const rows = []
    for (let i = 0; i < maxLen; i++) {
      rows.push({
        year: i,
        Pesimista: result.pesimista.series[i]?.value,
        Medio: result.medio.series[i]?.value,
        Optimista: result.optimista.series[i]?.value,
      })
    }
    return rows
  }, [result, years])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Simulador de cartera Renta Fija / Renta Variable</h1>
        <p className="mt-1 text-slate-600">
          Define tu propia mezcla de activos y observa, bajo distintos supuestos de rentabilidad,
          cómo podría evolucionar una cartera a lo largo del tiempo.
        </p>
      </div>

      <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-4 text-amber-900">
        <p className="font-bold">⚠️ Esto es una simulación educativa, no una recomendación de inversión</p>
        <p className="mt-1 text-sm">
          Los porcentajes de rentabilidad de este simulador son parámetros hipotéticos que puedes
          modificar libremente <DataTag type="illustrative" />. No son datos de mercado reales, ni
          una predicción, ni un consejo sobre qué cartera deberías tener.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="font-semibold text-slate-900">Asignación de activos</h2>
        <div className="mt-3 flex items-center gap-4">
          <span className="w-24 text-sm text-slate-600">Renta fija</span>
          <input
            type="range"
            min={0}
            max={100}
            value={pctRentaFija}
            onChange={(e) => setPctRentaFija(Number(e.target.value))}
            className="flex-1 accent-indigo-600"
          />
          <span className="w-24 text-right text-sm text-slate-600">Renta variable</span>
        </div>
        <div className="mt-2 flex justify-between text-sm font-semibold text-slate-800">
          <span>{pctRentaFija}% RF</span>
          <span>{pctRentaVariable}% RV</span>
        </div>
      </div>

      <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-3">
        <NumberField label="Capital inicial" value={initial} onChange={setInitial} min={0} step={500} suffix="€" />
        <NumberField
          label="Aportación anual"
          value={annualContribution}
          onChange={setAnnualContribution}
          min={0}
          step={100}
          suffix="€/año"
        />
        <NumberField label="Horizonte temporal" value={years} onChange={setYears} min={1} max={50} step={1} suffix="años" />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="font-semibold text-slate-900">
          Rentabilidades anuales por escenario <DataTag type="illustrative" note="Valores de partida razonables definidos para este ejercicio. Puedes cambiarlos por los que tú consideres oportunos: siguen siendo hipotéticos, no datos de mercado reales." />
        </h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">Renta fija</h3>
            <div className="flex flex-col gap-2">
              {['optimista', 'medio', 'pesimista'].map((key) => (
                <NumberField
                  key={key}
                  label={SCENARIO_LABELS[key].label}
                  value={scenarios.rentaFija[key]}
                  onChange={(v) => updateScenario('rentaFija', key, v)}
                  step={0.5}
                  suffix="%"
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">Renta variable</h3>
            <div className="flex flex-col gap-2">
              {['optimista', 'medio', 'pesimista'].map((key) => (
                <NumberField
                  key={key}
                  label={SCENARIO_LABELS[key].label}
                  value={scenarios.rentaVariable[key]}
                  onChange={(v) => updateScenario('rentaVariable', key, v)}
                  step={0.5}
                  suffix="%"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {['pesimista', 'medio', 'optimista'].map((key) => (
          <div key={key} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {SCENARIO_LABELS[key].label} ({result[key].rate}% anual combinado)
            </p>
            <p className="mt-1 text-xl font-bold" style={{ color: SCENARIO_LABELS[key].color }}>
              {formatEuros(result[key].series[result[key].series.length - 1]?.value ?? 0)}
            </p>
          </div>
        ))}
      </div>

      <div className="h-80 rounded-xl border border-slate-200 bg-white p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tickFormatter={(y) => `Año ${y}`} />
            <YAxis tickFormatter={(v) => `${Math.round(v / 1000)}k€`} width={60} />
            <Tooltip formatter={(value) => formatEuros(value)} labelFormatter={(y) => `Año ${y}`} />
            <Legend />
            <Line type="monotone" dataKey="Optimista" stroke={SCENARIO_LABELS.optimista.color} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Medio" stroke={SCENARIO_LABELS.medio.color} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Pesimista" stroke={SCENARIO_LABELS.pesimista.color} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-4 text-center text-sm font-semibold text-amber-900">
        Recuerda: simulación educativa con parámetros hipotéticos definidos por ti. No es un dato de
        mercado real ni una recomendación de inversión.
      </div>
    </div>
  )
}
