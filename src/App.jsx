import { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Theory from './pages/Theory'
import LessonPage from './pages/LessonPage'
import FinalQuiz from './pages/FinalQuiz'
import Progress from './pages/Progress'
import LegalNotice from './pages/LegalNotice'
import Sources from './pages/Sources'
import MarketScenarios from './pages/MarketScenarios'
import ScenarioPage from './pages/ScenarioPage'
import Glossary from './pages/Glossary'
import Reflections from './pages/Reflections'
import Checklists from './pages/Checklists'
import ChecklistDetail from './pages/ChecklistDetail'

const Calculator = lazy(() => import('./pages/Calculator'))
const PortfolioSimulator = lazy(() => import('./pages/PortfolioSimulator'))

function PageLoading() {
  return <p className="p-6 text-center text-slate-400">Cargando…</p>
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/teoria" element={<Theory />} />
          <Route path="/teoria/:lessonId" element={<LessonPage />} />
          <Route path="/quiz-final" element={<FinalQuiz />} />
          <Route
            path="/calculadora"
            element={
              <Suspense fallback={<PageLoading />}>
                <Calculator />
              </Suspense>
            }
          />
          <Route
            path="/simulador"
            element={
              <Suspense fallback={<PageLoading />}>
                <PortfolioSimulator />
              </Suspense>
            }
          />
          <Route path="/progreso" element={<Progress />} />
          <Route path="/fuentes" element={<Sources />} />
          <Route path="/escenarios" element={<MarketScenarios />} />
          <Route path="/escenarios/:scenarioId" element={<ScenarioPage />} />
          <Route path="/reflexiones" element={<Reflections />} />
          <Route path="/glosario" element={<Glossary />} />
          <Route path="/checklist" element={<Checklists />} />
          <Route path="/checklist/:checklistId" element={<ChecklistDetail />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
