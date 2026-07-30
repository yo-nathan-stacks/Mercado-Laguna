const STEPS = [
  {
    icon: 'fa-pen-to-square',
    title: 'Publica gratis',
    desc: 'Crea tu anuncio en segundos con foto, precio y ciudad. Sin comisiones ni costos ocultos.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Verificamos el negocio',
    desc: 'Los negocios verificados tienen un sello que confirma su identidad y ubicación en la Laguna.',
  },
  {
    icon: 'fa-comments',
    title: 'Contacto directo por WhatsApp',
    desc: 'Negocia, pregunta y cierra el trato directamente con el vendedor. Sin intermediarios.',
  },
  {
    icon: 'fa-handshake',
    title: 'Cierra el trato',
    desc: 'Acuerda la entrega o el servicio en persona. Apoyas el comercio local de tu ciudad.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            Cómo funciona Mercado Laguna
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Comprar y vender en la Comarca Lagunera nunca fue tan fácil
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative rounded-xl border border-gray-100 bg-gray-50 p-6 text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-laguna-600 px-3 py-0.5 text-xs font-bold text-white">
                Paso {i + 1}
              </span>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-laguna-100 text-2xl text-laguna-700">
                <i className={`fas ${step.icon}`} />
              </div>
              <h3 className="mb-2 font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
