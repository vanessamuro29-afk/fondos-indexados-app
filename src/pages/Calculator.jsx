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
import Callout from '../components/Callout'
import DataTag from '../components/DataTag'
import { simulateGrowth, formatEuros } from '../utils/compound'

const DEFAULTS = {
  initial: 1000,
  monthlyContribution: 100,
  years: 20,
  annualReturnPct: 6,
}

function useScenario(defaults) {
  const [initial, setInitial] = useState(defaults.initial)
  const [monthlyContribution, setMonthlyContribution] = useState(defaults.monthlyContribution)
  const [years, setYears] = useState(defaults.years)
  const [annualReturnPct, setAnnualReturnPct] = useState(defaults.annualReturnPct)

  const series = useMemo(
    () =>
      simulateGrowth({
        initial: Number(initial) || 0,
        monthlyContribution: Number(monthlyContribution) || 0,
        years: Number(years) || 0,
        annualReturnPct: Number(annualReturnPct) || 0,
      }),
    [initial, monthlyContribution, years, annualReturnPct]
  )

  return {
    initial,
    setInitial,
    monthlyContribution,
    setMonthlyContribution,
    years,
    setYears,
    annualReturnPct,
    setAnnualReturnPct,
    series,
  }
}

function ScenarioForm({ scenario, title }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {title && <h3 className="col-span-full font-semibold text-slate-900">{title}</h3>}
      <NumberField
        label="Aportación inicial"
        value={scenario.initial}
        onChange={scenario.setInitial}
        min={0}
        step={100}
        suffix="€"
      />
      <NumberField
        label="Aportación periódica mensual"
        value={scenario.monthlyContribution}
        onChange={scenario.setMonthlyContribution}
        min={0}
        step={10}
        suffix="€/mes"
      />
      <NumberField label="Años" value={scenario.years} onChange={scenario.setYears} min={1} max={60} step={1} />
      <NumberField
        label="Rentabilidad anual esperada"
        value={scenario.annualReturnPct}
        onChange={scenario.setAnnualReturnPct}
        min={-20}
        max={30}
        step={0.5}
        suffix="%"
        helpText="La introduces tú: no es un dato de mercado real"
      />
    </div>
  )
}

export default function Calculator() {
  const scenarioA = useScenario(DEFAULTS)
  const scenarioB = useScenario({ ...DEFAULTS, annualReturnPct: 3 })
  const [showComparison, setShowComparison] = useState(false)

  const mainChartData = scenarioA.series.map((point) => ({
    year: point.year,
    'Con aportaciones': point.withContributions,
    'Sin aportaciones': point.withoutContributions,
    'Total aportado': point.contributed,
  }))

  const lastA = scenarioA.series[scenarioA.series.length - 1]
  const lastB = scenarioB.series[scenarioB.series.length - 1]

  const comparisonData = useMemo(() => {
    const maxLen = Math.max(scenarioA.series.length, scenarioB.series.length)
    const rows = []
    for (let i = 0; i < maxLen; i++) {
      rows.push({
        year: scenarioA.series[i]?.year ?? scenarioB.series[i]?.year,
        'Escenario A': scenarioA.series[i]?.withContributions,
        'Escenario B': scenarioB.series[i]?.withContributions,
      })
    }
    return rows
  }, [scenarioA.series, scenarioB.series])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Calculadora de interés compuesto</h1>
        <p className="mt-1 text-slate-600">
          Introduce tus propios supuestos y observa cómo el interés compuesto y las aportaciones
          periódicas afectan a la evolución de un capital a lo largo del tiempo.
        </p>
      </div>

      <Callout variant="warning" title="Esto no es una predicción">
        Esta calculadora aplica fórmulas matemáticas estándar de interés compuesto. La rentabilidad
        anual es un supuesto que tú mismo introduces <DataTag type="illustrative" />: no procede de
        ningún dato de mercado real ni constituye una previsión ni recomendación de inversión.
      </Callout>

      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <ScenarioForm scenario={scenarioA} />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <SummaryCard label="Total aportado" value={formatEuros(lastA?.contributed ?? 0)} />
        <SummaryCard label="Capital final (con aportaciones)" value={formatEuros(lastA?.withContributions ?? 0)} highlight />
        <SummaryCard label="Capital final (sin aportaciones)" value={formatEuros(lastA?.withoutContributions ?? 0)} />
      </div>

      <div className="h-80 rounded-xl border border-slate-200 bg-white p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mainChartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tickFormatter={(y) => `Año ${y}`} />
            <YAxis tickFormatter={(v) => `${Math.round(v / 1000)}k€`} width={60} />
            <Tooltip formatter={(value) => formatEuros(value)} labelFormatter={(y) => `Año ${y}`} />
            <Legend />
            <Line type="monotone" dataKey="Con aportaciones" stroke="#4f46e5" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Sin aportaciones" stroke="#94a3b8" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Total aportado" stroke="#10b981" strokeDasharray="4 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowComparison((v) => !v)}
          className="rounded-lg border border-indigo-300 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
        >
          {showComparison ? 'Ocultar comparativa de escenarios' : 'Comparar con otro escenario'}
        </button>
      </div>

      {showComparison && (
        <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="text-lg font-bold text-slate-900">Comparativa entre dos escenarios</h2>
          <p className="text-sm text-slate-600">
            Ajusta el escenario B (por ejemplo, distinta rentabilidad esperada o distinto plazo) y
            compáralo con el escenario A de arriba.
          </p>
          <ScenarioForm scenario={scenarioB} title="Escenario B" />

          <div className="grid gap-3 sm:grid-cols-2">
            <SummaryCard label="Capital final — Escenario A" value={formatEuros(lastA?.withContributions ?? 0)} highlight />
            <SummaryCard label="Capital final — Escenario B" value={formatEuros(lastB?.withContributions ?? 0)} />
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={comparisonData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" tickFormatter={(y) => `Año ${y}`} />
                <YAxis tickFormatter={(v) => `${Math.round(v / 1000)}k€`} width={60} />
                <Tooltip formatter={(value) => formatEuros(value)} labelFormatter={(y) => `Año ${y}`} />
                <Legend />
                <Line type="monotone" dataKey="Escenario A" stroke="#4f46e5" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Escenario B" stroke="#ec4899" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  )
}

function SummaryCard({ label, value, highlight }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight ? 'border-indigo-300 bg-indigo-50' : 'border-slate-200 bg-white'
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-1 text-xl font-bold ${highlight ? 'text-indigo-700' : 'text-slate-900'}`}>
        {value}
      </p>
    </div>
  )
}
