const ITEMS = [
  { icon: 'fa-shield-halved', text: 'Negocios verificados' },
  { icon: 'fa-whatsapp', text: 'Contacto directo por WhatsApp' },
  { icon: 'fa-lock', text: 'Compras seguras' },
  { icon: 'fa-circle-plus', text: 'Publica gratis' },
  { icon: 'fa-hand-holding-heart', text: 'Apoyo local' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:justify-between sm:gap-6 sm:text-sm">
          {ITEMS.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-gray-700">
              <i className={`fas ${item.icon} text-laguna-600`} />
              <span className="whitespace-nowrap font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
