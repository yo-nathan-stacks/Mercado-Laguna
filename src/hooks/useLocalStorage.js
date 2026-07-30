import { useCallback, useEffect, useState } from 'react'

/**
 * Persisted state synced to localStorage.
 * @param {string} key   storage key
 * @param {*}      initial  default value when nothing is stored
 */
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initial
    try {
      const raw = window.localStorage.getItem(key)
      return raw !== null ? JSON.parse(raw) : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* ignore write errors (quota / private mode) */
    }
  }, [key, value])

  const reset = useCallback(() => setValue(initial), [initial])

  return [value, setValue, reset]
}
