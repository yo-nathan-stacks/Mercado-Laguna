import { waLink, DEFAULT_WA_MESSAGE } from '../utils/whatsapp'
import { formatRating } from '../utils/format'

export default function BusinessCard({ business, isFavorite, onToggleFavorite }) {
  const message = `${DEFAULT_WA_MESSAGE} Vi su negocio "${business.name}" en Mercado Laguna.`

  return (
    <article className="card card-hover group overflow-hidden hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        {business.verified && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 shadow-md backdrop-blur-sm">
            <i className="fas fa-circle-check text-xs text-laguna-600" />
            <span className="text-[10px] font-semibold text-laguna-700">
              Verificado
            </span>
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-1 font-bold text-gray-900 transition group-hover:text-laguna-600">
          {business.name}
        </h3>
        <p className="mb-2 flex items-center gap-1 text-xs text-gray-500">
          <i className="fas fa-location-dot text-laguna-600" />
          {business.category} · {business.city}
        </p>
        <p className="mb-3 line-clamp-2 text-sm text-gray-600">{business.blurb}</p>

        <div className="mb-3 flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1 font-semibold text-amber-500">
            <i className="fas fa-star" />
            {formatRating(business.rating)}
          </span>
          <span className="text-gray-400">({business.reviews} reseñas)</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <a
            href={waLink(business.whatsapp, message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-xs"
          >
            <i className="fab fa-whatsapp" />
            WhatsApp
          </a>
          <button
            onClick={() => onToggleFavorite(business.id)}
            className={`rounded-lg p-2 transition ${
              isFavorite
                ? 'bg-rose-50 text-rose-500'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
            aria-pressed={isFavorite}
          >
            <i className={`fa-heart text-sm ${isFavorite ? 'fas' : 'far'}`} />
          </button>
        </div>
      </div>
    </article>
  )
}
