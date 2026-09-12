import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useChecklists } from '../hooks/useChecklists'
import { CHECKLIST_ITEMS } from '../data/checklistItems'

function formatDate(ts) {
  return new Date(ts).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export default function Checklists() {
  const { checklists, createChecklist, deleteChecklist } = useChecklists()
  const [newName, setNewName] = useState('')

  const handleCreate = (e) => {
    e.preventDefault()
    if (!newName.trim()) return
    createChecklist(newName)
    setNewName('')
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Qué mirar antes de invertir en un fondo</h1>
        <p className="mt-1 text-slate-600">
          Una checklist para organizar tu propia revisión de un fondo real que estés considerando.
          Guarda una checklist por cada fondo que quieras evaluar.
        </p>
      </div>

      <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
        <p className="font-bold">Esta herramienta no evalúa ni puntúa ningún fondo.</p>
        <p className="mt-1">
          Solo te ayuda a organizar qué puntos revisar. Marcar todas las casillas no significa que
          un fondo sea "bueno" ni una recomendación para invertir en él: el criterio y la decisión
          son siempre tuyos.
        </p>
      </div>

      <form onSubmit={handleCreate} className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-end">
        <label className="flex-1">
          <span className="text-sm font-medium text-slate-700">Nombre o etiqueta del fondo a evaluar</span>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder='Ej. "Fondo global que me recomendó un amigo"'
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </label>
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
        >
          Nueva checklist
        </button>
      </form>

      <div className="flex flex-col gap-3">
        {checklists.length === 0 && (
          <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
            Aún no has creado ninguna checklist.
          </p>
        )}
        {checklists.map((c) => {
          const checkedCount = CHECKLIST_ITEMS.filter((item) => c.items[item.id]).length
          return (
            <div key={c.id} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <Link to={`/checklist/${c.id}`} className="flex-1">
                <p className="font-semibold text-slate-900">{c.name}</p>
                <p className="text-sm text-slate-500">
                  {checkedCount}/{CHECKLIST_ITEMS.length} puntos revisados · actualizado el {formatDate(c.updatedAt)}
                </p>
              </Link>
              <button
                type="button"
                onClick={() => {
                  if (confirm(`¿Borrar la checklist "${c.name}"?`)) deleteChecklist(c.id)
                }}
                className="rounded-lg border border-rose-300 px-3 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50"
              >
                Borrar
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
