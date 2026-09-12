import { Link } from 'react-router-dom'
import { LESSONS } from '../data/lessons'
import { useProgress } from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'

const SECTIONS = [
  {
    to: '/teoria',
    icon: '📘',
    title: 'Teoría',
    description: '16 lecciones cortas, de básico a intermedio, con ejemplos numéricos y tests.',
  },
  {
    to: '/escenarios',
    icon: '🧭',
    title: 'Escenarios de mercado',
    description: 'Practica cómo razonar ante situaciones típicas: subidas de tipos, inflación, correcciones bursátiles.',
  },
  {
    to: '/calculadora',
    icon: '🧮',
    title: 'Calculadora de interés compuesto',
    description: 'Simula la evolución de un capital con aportaciones periódicas.',
  },
  {
    to: '/simulador',
    icon: '📊',
    title: 'Simulador de cartera RF/RV',
    description: 'Explora escenarios optimista, medio y pesimista según tu asignación de activos.',
  },
  {
    to: '/progreso',
    icon: '✅',
    title: 'Tu progreso',
    description: 'Consulta las lecciones completadas y los resultados de tus tests.',
  },
  {
    to: '/reflexiones',
    icon: '📝',
    title: 'Mis reflexiones',
    description: 'Relee lo que escribiste al practicar cada escenario de mercado, junto al feedback recibido.',
  },
  {
    to: '/checklist',
    icon: '☑️',
    title: 'Checklist antes de invertir',
    description: 'Organiza qué revisar (comisiones, réplica, liquidez...) en un fondo real que estés evaluando.',
  },
  {
    to: '/glosario',
    icon: '🔤',
    title: 'Glosario',
    description: 'Busca cualquier término explicado en la app, con enlace directo a su lección.',
  },
  {
    to: '/fuentes',
    icon: '🔗',
    title: 'Fuentes fiables',
    description: 'Enlaces curados a Morningstar, CNMV, Banco de España, BCE y educación financiera oficial.',
  },
]

export default function Home() {
  const { progress } = useProgress()
  const completedCount = Object.values(progress.lessons).filter((l) => l.completed).length

  return (
    <div className="flex flex-col gap-8">
      <section className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 text-white sm:p-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Aprende a invertir en fondos indexados</h1>
        <p className="mt-2 max-w-2xl text-indigo-100">
          Una guía práctica y en español para dar tus primeros pasos en renta fija y renta
          variable: conceptos clave, tests con feedback inmediato y calculadoras para entender el
          interés compuesto.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/teoria"
            className="rounded-lg bg-white px-4 py-2 font-semibold text-indigo-700 hover:bg-indigo-50"
          >
            Empezar a aprender
          </Link>
          <Link
            to="/calculadora"
            className="rounded-lg border border-white/60 px-4 py-2 font-semibold text-white hover:bg-white/10"
          >
            Probar la calculadora
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4">
        <ProgressBar
          value={completedCount}
          max={LESSONS.length}
          label={`Progreso en la teoría: ${completedCount} de ${LESSONS.length} lecciones`}
        />
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-900">Explora la app</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {SECTIONS.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden="true">
                {s.icon}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <p>
          <strong>Recuerda:</strong> todo el contenido de esta aplicación tiene fines educativos.
          Las cifras de rentabilidad que no citen una fuente concreta son ejemplos ilustrativos, no
          datos de mercado reales ni recomendaciones de inversión.
        </p>
      </section>
    </div>
  )
}
