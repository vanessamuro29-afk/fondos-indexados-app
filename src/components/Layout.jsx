import { NavLink, Outlet } from 'react-router-dom'
import DisclaimerBanner from './DisclaimerBanner'

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', icon: '🏠', end: true },
  { to: '/teoria', label: 'Teoría', icon: '📘' },
  { to: '/calculadora', label: 'Calculadora', icon: '🧮' },
  { to: '/simulador', label: 'Simulador', icon: '📊' },
  { to: '/progreso', label: 'Progreso', icon: '✅' },
]

function navLinkClass({ isActive }) {
  return `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'
  }`
}

function mobileNavLinkClass({ isActive }) {
  return `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-medium ${
    isActive ? 'text-indigo-600' : 'text-slate-500'
  }`
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <DisclaimerBanner />

      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-slate-900">
            <span aria-hidden="true">📈</span>
            <span>Fondos Indexados</span>
          </NavLink>
          <nav className="hidden gap-1 sm:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={navLinkClass}>
                <span aria-hidden="true">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 pb-24 sm:pb-6">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-10 flex border-t border-slate-200 bg-white sm:hidden">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={mobileNavLinkClass}>
            <span aria-hidden="true" className="text-lg">
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <footer className="hidden sm:block">
        <DisclaimerBanner compact />
      </footer>
    </div>
  )
}
