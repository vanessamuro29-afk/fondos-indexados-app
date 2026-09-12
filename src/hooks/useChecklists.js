import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'fondos-indexados-checklists-v1'

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

export function useChecklists() {
  const [checklists, setChecklists] = useLocalStorage(STORAGE_KEY, [])

  const createChecklist = useCallback(
    (name) => {
      const id = makeId()
      const newChecklist = {
        id,
        name: name.trim() || 'Fondo sin nombre',
        items: {},
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
      setChecklists((prev) => [newChecklist, ...prev])
      return id
    },
    [setChecklists]
  )

  const toggleItem = useCallback(
    (checklistId, itemId) => {
      setChecklists((prev) =>
        prev.map((c) =>
          c.id === checklistId
            ? { ...c, items: { ...c.items, [itemId]: !c.items[itemId] }, updatedAt: Date.now() }
            : c
        )
      )
    },
    [setChecklists]
  )

  const renameChecklist = useCallback(
    (checklistId, name) => {
      setChecklists((prev) =>
        prev.map((c) => (c.id === checklistId ? { ...c, name: name.trim() || c.name, updatedAt: Date.now() } : c))
      )
    },
    [setChecklists]
  )

  const deleteChecklist = useCallback(
    (checklistId) => {
      setChecklists((prev) => prev.filter((c) => c.id !== checklistId))
    },
    [setChecklists]
  )

  return { checklists, createChecklist, toggleItem, renameChecklist, deleteChecklist }
}
