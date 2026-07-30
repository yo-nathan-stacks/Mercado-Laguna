import { useState } from 'react'

const NAV = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Categorías', href: '#categorias' },
  { label: 'Negocios', href: '#negocios' },
  { label: 'Anuncios', href: '#anuncios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Para negocios', href: '#para-negocios' },
]

export default function Header({ favoritesCount, onOpenPublish, search, setSearch, onSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    onSearch?.()
    document.getElementById('anuncios')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="text-gray-700 lg:hidden"
              aria-label="Abrir menú"
            >
              <i className="fas fa-bars text-xl" />
            </button>
            <a href="#inicio" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-laguna-600 to-laguna-500 text-lg font-bold text-white">
                ML
              </span>
              <span className="hidden sm:block">
                <span className="block text-lg font-bold leading-none text-laguna-700 font-display">
                  MercadoLaguna
                </span>
                <span className="block text-[10px] leading-none text-gray-500">
                  Tu mercado local
                </span>
              </span>
            </a>
          </div>

          <form onSubmit={submit} className="hidden max-w-2xl flex-1 md:flex">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar productos, servicios, negocios…"
              className="flex-1 rounded-l-lg border-2 border-r-0 border-gray-200 px-4 py-2.5 text-sm focus:border-laguna-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r-lg bg-laguna-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-laguna-700"
            >
              <i className="fas fa-search sm:mr-1.5" />
              <span className="hidden sm:inline">Buscar</span>
            </button>
          </form>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#favoritos"
              className="relative hidden items-center gap-1.5 text-gray-700 transition hover:text-laguna-600 sm:flex"
            >
              <i className="far fa-heart text-lg" />
              <span className="hidden text-sm font-medium lg:inline">Favoritos</span>
              {favoritesCount > 0 && (
                <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-laguna-600 px-1 text-[10px] font-bold text-white">
                  {favoritesCount}
                </span>
              )}
            </a>
            <button className="hidden items-center gap-1.5 text-gray-700 transition hover:text-laguna-600 sm:flex">
              <i className="far fa-user text-lg" />
              <span className="hidden text-sm font-medium lg:inline">Iniciar sesión</span>
            </button>
            <button onClick={onOpenPublish} className="btn-primary text-xs shadow-md sm:text-sm">
              <i className="fas fa-plus sm:mr-1.5" />
              <span className="hidden sm:inline">Publicar</span>
            </button>
          </div>
        </div>

        <form onSubmit={submit} className="flex pb-3 md:hidden">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar productos, servicios…"
            className="flex-1 rounded-l-lg border-2 border-r-0 border-gray-200 px-4 py-2 text-sm focus:border-laguna-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-r-lg bg-laguna-600 px-5 py-2 text-sm font-semibold text-white"
          >
            <i className="fas fa-search" />
          </button>
        </form>
      </div>

      <nav className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="hidden items-center gap-1 text-sm font-medium lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-t px-4 py-3 text-gray-700 transition hover:bg-white hover:text-laguna-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white shadow-lg lg:hidden">
          <div className="space-y-2 px-4 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 font-medium text-gray-700 hover:bg-laguna-50 hover:text-laguna-700"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 space-y-2 border-t pt-2">
              <a href="#favoritos" className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-gray-700 hover:bg-laguna-50">
                <i className="far fa-heart" /> <span>Favoritos{favoritesCount > 0 ? ` (${favoritesCount})` : ''}</span>
              </a>
              <a href="#login" className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-gray-700 hover:bg-laguna-50">
                <i className="far fa-user" /> <span>Iniciar sesión</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
