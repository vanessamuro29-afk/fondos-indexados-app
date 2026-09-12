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

  return { reflections, addReflection, clearReflections }
}
