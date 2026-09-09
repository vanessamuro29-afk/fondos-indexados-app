import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'fondos-indexados-progress-v1'

const EMPTY_PROGRESS = {
  lessons: {},
  finalQuiz: null,
}

export function useProgress() {
  const [progress, setProgress] = useLocalStorage(STORAGE_KEY, EMPTY_PROGRESS)

  const markLessonComplete = useCallback(
    (lessonId, score, total) => {
      setProgress((prev) => ({
        ...prev,
        lessons: {
          ...prev.lessons,
          [lessonId]: { completed: true, score, total, updatedAt: Date.now() },
        },
      }))
    },
    [setProgress]
  )

  const setFinalQuizResult = useCallback(
    (score, total) => {
      setProgress((prev) => ({
        ...prev,
        finalQuiz: { score, total, updatedAt: Date.now() },
      }))
    },
    [setProgress]
  )

  const resetProgress = useCallback(() => {
    setProgress(EMPTY_PROGRESS)
  }, [setProgress])

  return { progress, markLessonComplete, setFinalQuizResult, resetProgress }
}
