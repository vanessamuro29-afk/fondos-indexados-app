import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { GLOSSARY, GLOSSARY_CATEGORIES, searchGlossary } from '../data/glossary'
import { getLessonById } from '../data/lessons'
import { getScenarioById } from '../data/scenarios'

function LinkToSource({ link }) {
  if (!link) return null
  if (link.type === 'lesson') {
    const lesson = getLessonById(link.id)
    if (!lesson) return null
    return (
      <Link to={`/teoria/${lesson.id}`} className="text-sm font-medium text-indigo-600 hover:underline">
        Ver lección: {lesson.title} →
      </Link>
    )
  }
  if (link.type === 'scenario') {
    const scenario = getScenarioById(link.id)
    if (!scenario) return null
    return (
      <Link to={`/escenarios/${scenario.id}`} className="text-sm font-medium text-indigo-600 hover:underline">
        Ver escenario: {scenario.title} →
      </Link>
    )
  }
  return null
}

export default function Glossary() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState('Todas')

  const results = useMemo(() => searchGlossary(query, category), [query, category])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Glosario</h1>
        <p className="mt-1 text-slate-600">
          Consulta rápida de los términos usados en las lecciones de esta app, sin tener que
          navegar por ellas.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar un término..."
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="Todas">Todas las categorías</option>
          {GLOSSARY_CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-slate-500">
        {results.length} de {GLOSSARY.length} términos
      </p>

      <div className="flex flex-col gap-3">
        {results.map((entry) => (
          <div key={entry.term} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold text-slate-900">{entry.term}</h3>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                {entry.category}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-600">{entry.definition}</p>
            {entry.link && <div className="mt-2">
              <LinkToSource link={entry.link} />
            </div>}
          </div>
        ))}

        {results.length === 0 && (
          <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-400">
            No se encontró ningún término con ese filtro.
          </p>
        )}
      </div>
    </div>
  )
}
