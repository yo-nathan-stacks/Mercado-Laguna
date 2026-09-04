import { CITIES } from '../data/cities'

const COLS = {
  Explorar: ['Inicio', 'Categorías', 'Negocios', 'Anuncios', 'Cómo funciona'],
  Soporte: ['Centro de ayuda', 'Seguridad', 'Términos y condiciones', 'Privacidad', 'Contacto'],
  Negocios: ['Registrar negocio', 'Planes y precios', 'Panel de control', 'Recursos'],
}

const PAYMENTS = [
  { label: 'Visa', icon: 'fab fa-cc-visa', cls: 'text-blue-900' },
  { label: 'Mastercard', icon: 'fab fa-cc-mastercard', cls: 'text-red-600' },
  { label: 'PayPal', icon: 'fab fa-paypal', cls: 'text-blue-700' },
  { label: 'SPEI', text: 'SPEI' },
  { label: 'OXXO', text: 'OXXO', cls: 'text-red-600' },
]

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-laguna-600 to-laguna-500 font-bold text-white">
                ML
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  MercadoLaguna
                </h3>
                <p className="text-xs text-gray-400">Tu mercado local</p>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-400">
              La plataforma #1 de negocios locales en la Comarca Lagunera.
            </p>
            <div className="flex gap-3">
              {['facebook-f', 'instagram', 'whatsapp', 'tiktok'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 transition hover:bg-laguna-600"
                >
                  <i className={`fab fa-${s}`} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(COLS).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-bold text-white">{title}</h4>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-laguna-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cities served */}
        <div className="mb-8 border-t border-gray-800 pt-8">
          <h4 className="mb-3 text-sm font-bold text-white">
            Ciudades que atendemos
          </h4>
          <div className="flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <span
                key={c.name}
                className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300"
              >
                {c.emoji} {c.name}, {c.state}
              </span>
            ))}
          </div>
        </div>

        {/* Payments */}
        <div className="mb-8 border-t border-gray-800 pt-8">
          <h4 className="mb-3 text-sm font-bold text-white">Métodos de pago</h4>
          <div className="flex flex-wrap gap-2">
            {PAYMENTS.map((p) => (
              <div
                key={p.label}
                className="flex items-center rounded bg-white px-2 py-1.5"
              >
                {p.icon && <i className={`${p.icon} ${p.cls} text-lg`} />}
                {p.text && (
                  <span className={`text-xs font-bold ${p.cls ?? 'text-gray-800'}`}>
                    {p.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Mercado Laguna. Todos los derechos
            reservados. Hecho con ❤️ en la Comarca Lagunera · Torreón, Gómez
            Palacio, Lerdo, Matamoros.
          </p>
        </div>
      </div>
    </footer>
  )
}
