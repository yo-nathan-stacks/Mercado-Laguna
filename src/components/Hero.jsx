export default function Hero({ onOpenPublish }) {
  const stats = [
    { value: '+100', label: 'Negocios registrados' },
    { value: '+1,000', label: 'Productos publicados' },
    { value: '4', label: 'Ciudades de la Laguna' },
  ]

  return (
    <section
      id="inicio"
      className="relative overflow-hidden text-white"
      style={{
        background:
          'linear-gradient(135deg, rgba(4,78,59,0.92) 0%, rgba(6,95,70,0.88) 100%), url(https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop) center/cover no-repeat',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="chip bg-white/15 text-emerald-50 ring-1 ring-white/20">
            <i className="fas fa-location-dot" /> Comarca Lagunera, México
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Tu mercado local.
            <br />
            Sin fronteras.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-emerald-50 sm:text-xl">
            Conecta con más de 100 negocios verificados en Torreón, Gómez Palacio,
            Lerdo y Matamoros. Compra, vende y encuentra todo lo que necesitas,
            con contacto directo por WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/20 bg-white/15 px-5 py-3 backdrop-blur-sm"
              >
                <div className="text-2xl font-bold sm:text-3xl">{s.value}</div>
                <div className="text-xs text-emerald-50 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              onClick={onOpenPublish}
              className="flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-laguna-700 shadow-xl transition hover:bg-emerald-50 sm:text-base"
            >
              <i className="fas fa-plus-circle" />
              Publicar anuncio
            </button>
            <a
              href="#negocios"
              className="flex items-center gap-2 rounded-lg border-2 border-white/30 bg-laguna-500 px-8 py-3.5 text-sm font-bold text-white shadow-xl transition hover:bg-laguna-400 sm:text-base"
            >
              <i className="fab fa-whatsapp text-xl" />
              Explorar negocios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
