import { SOURCE_CATEGORIES } from '../data/sources'

export default function Sources() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Fuentes fiables</h1>
        <p className="mt-1 text-slate-600">
          Enlaces externos a organismos y sitios de referencia para consultar datos reales y
          verificables. Esta app no importa ni reproduce sus datos: son enlaces para que los abras
          tú misma en tu navegador.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        Enlazamos siempre a la página principal de cada organización, porque las rutas internas de
        estos sitios cambian con el tiempo. Una vez dentro, usa el buscador de cada web para
        encontrar la sección o el fondo concreto que te interese.
      </div>

      {SOURCE_CATEGORIES.map((category) => (
        <section key={category.id} className="flex flex-col gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{category.title}</h2>
            <p className="text-sm text-slate-600">{category.description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {category.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex items-center gap-2 font-semibold text-indigo-700">
                  {source.name}
                  <span aria-hidden="true" className="text-xs text-slate-400">
                    ↗ enlace externo
                  </span>
                </span>
                <span className="text-xs text-slate-400">{source.url}</span>
                <p className="mt-1 text-sm text-slate-600">{source.note}</p>
              </a>
            ))}
          </div>
        </section>
      ))}

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Estos enlaces se ofrecen como punto de partida para buscar información por tu cuenta. No
        implican ningún respaldo por parte de estas organizaciones hacia esta app, ni de esta app
        hacia ningún producto concreto que encuentres en ellas.
      </div>
    </div>
  )
}
