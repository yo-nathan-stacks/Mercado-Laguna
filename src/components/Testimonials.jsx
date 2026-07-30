import { TESTIMONIALS } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            Lo que dice la comunidad
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Compradores, vendedores y negocios de la Laguna
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.id} className="card p-6">
              <div className="mb-3 flex gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star text-sm" />
                ))}
              </div>
              <blockquote className="mb-4 text-gray-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
