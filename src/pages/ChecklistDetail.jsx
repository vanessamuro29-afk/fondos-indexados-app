import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useChecklists } from '../hooks/useChecklists'
import { CHECKLIST_ITEMS } from '../data/checklistItems'
import ChecklistItemRow from '../components/ChecklistItemRow'
import ProgressBar from '../components/ProgressBar'

export default function ChecklistDetail() {
  const { checklistId } = useParams()
  const { checklists, toggleItem, renameChecklist } = useChecklists()
  const checklist = checklists.find((c) => c.id === checklistId)
  const [editingName, setEditingName] = useState(false)
  const [nameDraft, setNameDraft] = useState(checklist?.name || '')

  if (!checklist) {
    return <Navigate to="/checklist" replace />
  }

  const checkedCount = CHECKLIST_ITEMS.filter((item) => checklist.items[item.id]).length

  const handleRenameSubmit = (e) => {
    e.preventDefault()
    renameChecklist(checklist.id, nameDraft)
    setEditingName(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to="/checklist" className="text-sm text-indigo-600 hover:underline">
          ← Volver a mis checklists
        </Link>
        {editingName ? (
          <form onSubmit={handleRenameSubmit} className="mt-2 flex gap-2">
            <input
              type="text"
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              autoFocus
              className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button type="submit" className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white">
              Guardar
            </button>
          </form>
        ) : (
          <h1 className="mt-1 flex items-center gap-2 text-2xl font-bold text-slate-900">
            {checklist.name}
            <button
              type="button"
              onClick={() => {
                setNameDraft(checklist.name)
                setEditingName(true)
              }}
              className="text-sm font-normal text-indigo-600 hover:underline"
            >
              renombrar
            </button>
          </h1>
        )}
      </div>

      <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-4 text-sm text-amber-900">
        Esta checklist no evalúa el fondo ni te dice si es bueno o malo: solo te ayuda a organizar
        qué revisar. Aplica tu propio criterio a cada punto.
      </div>

      <ProgressBar
        value={checkedCount}
        max={CHECKLIST_ITEMS.length}
        label={`${checkedCount} de ${CHECKLIST_ITEMS.length} puntos revisados`}
      />

      <div className="flex flex-col gap-2">
        {CHECKLIST_ITEMS.map((item) => (
          <ChecklistItemRow
            key={item.id}
            item={item}
            checked={checklist.items[item.id]}
            onToggle={() => toggleItem(checklist.id, item.id)}
          />
        ))}
      </div>
    </div>
  )
}
