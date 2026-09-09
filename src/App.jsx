import { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Theory from './pages/Theory'
import LessonPage from './pages/LessonPage'
import FinalQuiz from './pages/FinalQuiz'
import Progress from './pages/Progress'
import LegalNotice from './pages/LegalNotice'

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
          <Route path="/aviso-legal" element={<LegalNotice />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
