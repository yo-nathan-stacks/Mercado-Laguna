import { CATEGORIES } from '../data/categories'

export default function CategoryGrid({ active, onSelect }) {
  return (
    <section id="categorias" className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Explora por categoría
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Encuentra lo que buscas en la Comarca Lagunera
            </p>
          </div>
          {active !== 'todo' && (
            <button
              onClick={() => onSelect('todo')}
              className="text-sm font-semibold text-laguna-600 hover:text-laguna-700"
            >
              Limpiar filtro
            </button>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:grid-cols-12">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.slug
            return (
              <button
                key={cat.slug}
                onClick={() => onSelect(cat.slug)}
                className={`group flex flex-col items-center justify-center rounded-xl p-3 transition sm:p-4 ${
                  isActive
                    ? 'bg-laguna-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 shadow-sm hover:bg-laguna-50 hover:text-laguna-700'
                }`}
                aria-pressed={isActive}
              >
                <i className={`fas ${cat.icon} mb-2 text-xl sm:text-2xl`} />
                <span className="text-center text-[10px] font-medium leading-tight sm:text-xs">
                  {cat.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
