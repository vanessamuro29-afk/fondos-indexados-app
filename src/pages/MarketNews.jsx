import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NewsReflectionPrompt from '../components/NewsReflectionPrompt'

function formatDateTime(iso) {
  return new Date(iso).toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function MarketNews() {
  const [data, setData] = useState(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}market-news.json`, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('not found')
        return res.json()
      })
      .then(setData)
      .catch(() => setLoadError(true))
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Mercado hoy</h1>
        <p className="mt-1 text-slate-600">
          Resumen de titulares financieros recientes relacionados con fondos indexados, renta fija
          y renta variable, con los conceptos de la teoría que ayudan a entender por qué importan.
        </p>
      </div>

      <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-bold">⚠️ Esto es un análisis educativo, no un consejo de inversión.</p>
        <p className="mt-1">
          Para cada noticia solo explicamos qué factores o conceptos son relevantes para
          entenderla, basándonos en la teoría de esta app. En ningún caso decimos qué comprar,
          vender o hacer con dinero real. Cada noticia enlaza a su fuente original — contrástala
          allí antes de dar nada por hecho.
        </p>
      </div>

      {loadError && (
        <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
          Todavía no se ha generado ningún resumen de noticias en este despliegue. Vuelve a
          comprobarlo más tarde.
        </div>
      )}

      {!loadError && !data && (
        <p className="text-center text-sm text-slate-400">Cargando...</p>
      )}

      {data && data.status === 'error_al_obtener_noticias' && (
        <div className="rounded-xl border border-dashed border-rose-300 p-6 text-center text-sm text-rose-500">
          No se pudieron obtener noticias en la última actualización programada. Se reintentará en
          la siguiente actualización automática.
        </div>
      )}

      {data && data.status === 'ok' && (
        <>
          <p className="text-xs text-slate-400">
            Última actualización: {formatDateTime(data.generatedAt)} · se actualiza automáticamente
            cada pocas horas, no en cada visita.
          </p>

          {data.articles.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
              No hay noticias relevantes de fondos indexados, renta fija o renta variable en las
              últimas 48 horas.
            </div>
          )}

          <div className="flex flex-col gap-4">
            {data.articles.map((article) => (
              <article key={article.id} className="rounded-xl border border-slate-200 bg-white p-4">
                {article.isNewScenarioCandidate && (
                  <div className="mb-3 rounded-lg border-2 border-rose-300 bg-rose-50 p-3 text-sm text-rose-900">
                    <p className="font-bold">
                      🆕 Hemos detectado un escenario nuevo que no habías practicado todavía.
                    </p>
                    <p className="mt-1">
                      Este tipo de situación no está cubierto por los escenarios educativos
                      existentes en la app.
                    </p>
                  </div>
                )}

                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-700 hover:underline"
                >
                  {article.headline}
                </a>
                <p className="mt-1 text-xs text-slate-400">
                  Fuente: {article.source} · {formatDateTime(article.datetime)}
                </p>
                {article.summary && <p className="mt-2 text-sm text-slate-600">{article.summary}</p>}

                <div className="mt-3 flex flex-col gap-2">
                  {article.topics.map((topic) => (
                    <div key={topic.id} className="rounded-lg bg-slate-50 p-3 text-sm">
                      <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700">
                        {topic.label}
                      </span>
                      <p className="mt-1 text-slate-700">{topic.note}</p>
                      <div className="mt-1 flex flex-wrap gap-3">
                        {topic.glossaryTerms.map((term) => (
                          <Link
                            key={term}
                            to={`/glosario?q=${encodeURIComponent(term)}`}
                            className="text-xs font-medium text-indigo-600 hover:underline"
                          >
                            Ver en el glosario: {term} →
                          </Link>
                        ))}
                        {topic.scenarioTag && (
                          <Link to="/escenarios" className="text-xs font-medium text-indigo-600 hover:underline">
                            Practicar escenarios de "{topic.scenarioTag}" →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {article.isNewScenarioCandidate && <NewsReflectionPrompt article={article} />}
              </article>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
