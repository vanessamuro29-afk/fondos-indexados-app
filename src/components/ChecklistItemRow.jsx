import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getLessonById } from '../data/lessons'

function InfoLink({ link }) {
  if (!link) return null
  if (link.type === 'lesson') {
    const lesson = getLessonById(link.id)
    if (!lesson) return null
    return (
      <Link to={`/teoria/${lesson.id}`} className="text-xs font-medium text-indigo-600 hover:underline">
        Ver lección: {lesson.title} →
      </Link>
    )
  }
  if (link.type === 'glossary') {
    return (
      <Link
        to={`/glosario?q=${encodeURIComponent(link.term)}`}
        className="text-xs font-medium text-indigo-600 hover:underline"
      >
        Ver en el glosario: {link.term} →
      </Link>
    )
  }
  return null
}

export default function ChecklistItemRow({ item, checked, onToggle }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={!!checked}
          onChange={onToggle}
          className="mt-1 h-4 w-4 shrink-0 accent-indigo-600"
        />
        <div className="flex-1">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex w-full items-center justify-between gap-2 text-left"
          >
            <span className={`text-sm font-medium ${checked ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
              {item.label}
            </span>
            <span className="text-slate-400" aria-hidden="true">
              {open ? '▲' : '▼'}
            </span>
          </button>
          {open && (
            <div className="mt-2 flex flex-col gap-1 text-sm text-slate-600">
              <p>{item.tooltip}</p>
              <InfoLink link={item.link} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
