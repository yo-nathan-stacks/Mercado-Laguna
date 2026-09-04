import { BUSINESSES } from '../data/businesses'
import BusinessCard from './BusinessCard'

export default function BusinessesSection({ favorites }) {
  return (
    <section id="negocios" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between sm:mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Negocios destacados
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Descubre negocios verificados en tu ciudad
            </p>
          </div>
          <a
            href="#anuncios"
            className="hidden items-center gap-2 text-sm font-semibold text-laguna-600 hover:text-laguna-700 sm:flex"
          >
            Ver anuncios <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {BUSINESSES.map((biz) => (
            <BusinessCard
              key={biz.id}
              business={biz}
              isFavorite={favorites.isFavorite(biz.id)}
              onToggleFavorite={favorites.toggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
