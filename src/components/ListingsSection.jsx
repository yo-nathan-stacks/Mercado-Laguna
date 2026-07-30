import { useMemo, useRef } from 'react'
import { LISTINGS } from '../data/listings'
import { CATEGORIES } from '../data/categories'
import ListingCard from './ListingCard'

export default function ListingsSection({
  search,
  activeCategory,
  favorites,
  onClearFilters,
}) {
  const gridRef = useRef(null)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return LISTINGS.filter((item) => {
      const matchesCat =
        activeCategory === 'todo' || item.categorySlug === activeCategory
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      return matchesCat && matchesQuery
    })
  }, [search, activeCategory])

  const activeCatName =
    CATEGORIES.find((c) => c.slug === activeCategory)?.name ?? 'Todo'

  const scroll = (dir) => {
    gridRef.current?.scrollBy({
      left: dir === 'left' ? -340 : 340,
      behavior: 'smooth',
    })
  }

  return (
    <section id="anuncios" className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between sm:mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Anuncios recientes
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {search || activeCategory !== 'todo' ? (
                <>
                  {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
                  {activeCategory !== 'todo' ? ` en ${activeCatName}` : ''}
                  {search && ` para “${search}”`}
                </>
              ) : (
                'Últimos productos y servicios publicados en la Laguna'
              )}
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white transition hover:bg-laguna-50"
              aria-label="Anterior"
            >
              <i className="fas fa-chevron-left text-gray-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white transition hover:bg-laguna-50"
              aria-label="Siguiente"
            >
              <i className="fas fa-chevron-right text-gray-700" />
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white py-16 text-center">
            <i className="fas fa-magnifying-glass mb-3 text-4xl text-gray-300" />
            <p className="font-semibold text-gray-700">No encontramos anuncios</p>
            <p className="mb-4 text-sm text-gray-500">
              Prueba con otra búsqueda o categoría.
            </p>
            <button onClick={onClearFilters} className="btn-ghost">
              <i className="fas fa-rotate-left" /> Limpiar filtros
            </button>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="scrollbar-hide flex gap-4 scroll-smooth overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {filtered.map((item) => (
              <ListingCard
                key={item.id}
                listing={item}
                isFavorite={favorites.isFavorite(item.id)}
                onToggleFavorite={favorites.toggle}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
