import { waLink, DEFAULT_WA_MESSAGE } from '../utils/whatsapp'

export default function ListingCard({ listing, isFavorite, onToggleFavorite }) {
  const message = `${DEFAULT_WA_MESSAGE} Me interesa "${listing.title}".`

  return (
    <article className="card card-hover group flex-none overflow-hidden hover:shadow-xl w-[280px] sm:w-[320px]">
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-laguna-600 px-2.5 py-1 text-xs font-semibold text-white">
          {listing.category}
        </span>
        <button
          onClick={() => onToggleFavorite(listing.id)}
          className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full shadow-md transition ${
            isFavorite ? 'bg-rose-500 text-white' : 'bg-white/95 text-gray-700 hover:bg-white'
          }`}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          aria-pressed={isFavorite}
        >
          <i className={`fa-heart text-sm ${isFavorite ? 'fas' : 'far'}`} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 min-h-[48px] font-bold text-gray-900">
          {listing.title}
        </h3>
        <div className="mb-2 text-2xl font-bold text-laguna-700">{listing.price}</div>
        <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <i className="fas fa-location-dot text-laguna-600" />
            {listing.city}
          </span>
          <span className="flex items-center gap-1">
            <i className="far fa-clock" />
            {listing.time}
          </span>
        </div>
        <a
          href={waLink(listing.whatsapp, message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-sm"
        >
          <i className="fab fa-whatsapp" />
          Contactar por WhatsApp
        </a>
      </div>
    </article>
  )
}
