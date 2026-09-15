import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'fondos-indexados-reflections-v1'

export function useReflections() {
  const [reflections, setReflections] = useLocalStorage(STORAGE_KEY, [])

  const addReflection = useCallback(
    (entry) => {
      setReflections((prev) => [
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          date: new Date().toISOString(),
          ...entry,
        },
        ...prev,
      ])
    },
    [setReflections]
  )

  const clearReflections = useCallback(() => {
    setReflections([])
  }, [setReflections])

  // Añade reflexiones importadas de un archivo exportado desde otro
  // dispositivo/navegador, sin duplicar las que ya existan (por id) ni
  // perder las que ya había en este navegador. Devuelve cuántas eran nuevas.
  const importReflections = useCallback(
    (imported) => {
      const existingIds = new Set(reflections.map((r) => r.id))
      const newOnes = imported.filter((r) => !existingIds.has(r.id))
      if (newOnes.length > 0) {
        setReflections(
          [...reflections, ...newOnes].sort((a, b) => new Date(b.date) - new Date(a.date))
        )
      }
      return newOnes.length
    },
    [reflections, setReflections]
  )

  return { reflections, addReflection, clearReflections, importReflections }
}
