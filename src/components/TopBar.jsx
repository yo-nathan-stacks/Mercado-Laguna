import { useState } from 'react'
import { CITIES, DEFAULT_CITY } from '../data/cities'

export default function TopBar() {
  const [city, setCity] = useState(DEFAULT_CITY)
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-laguna-800 text-white text-xs sm:text-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold">
            La plataforma #1 de negocios locales en la Comarca Lagunera
          </span>
          <div className="relative">
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-1 rounded-md bg-laguna-900 px-3 py-1 transition hover:bg-laguna-950"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              <i className="fas fa-location-dot text-[11px]" />
              <span>{city}</span>
              <i
                className={`fas fa-chevron-down text-[10px] transition-transform ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </button>
            {open && (
              <ul
                role="menu"
                className="absolute left-0 top-full z-50 mt-1 min-w-[180px] rounded-md bg-white py-1 text-gray-800 shadow-lg"
              >
                <li role="none">
                  <button
                    role="menuitem"
                    onClick={() => {
                      setCity(DEFAULT_CITY)
                      setOpen(false)
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    {DEFAULT_CITY} (todas)
                  </button>
                </li>
                {CITIES.map((c) => (
                  <li key={c.name} role="none">
                    <button
                      role="menuitem"
                      onClick={() => {
                        setCity(c.name)
                        setOpen(false)
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      {c.emoji} {c.name}, {c.state}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="hidden items-center gap-4 text-xs sm:flex">
          <a href="#ayuda" className="hover:underline">Ayuda</a>
          <a href="#seguridad" className="hover:underline">Centro de seguridad</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </div>
      </div>
    </div>
  )
}
