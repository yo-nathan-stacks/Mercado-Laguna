import { useCallback, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'

const STORAGE_KEY = 'ml:favorites'

/**
 * Favorites manager backed by localStorage.
 * Works with any entity id (listings or businesses).
 */
export function useFavorites() {
  const [ids, setIds] = useLocalStorage(STORAGE_KEY, [])

  const isFavorite = useCallback((id) => ids.includes(id), [ids])

  const toggle = useCallback(
    (id) => {
      setIds((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
      )
    },
    [setIds],
  )

  const count = ids.length

  return useMemo(() => ({ ids, isFavorite, toggle, count }), [
    ids,
    isFavorite,
    toggle,
    count,
  ])
}
