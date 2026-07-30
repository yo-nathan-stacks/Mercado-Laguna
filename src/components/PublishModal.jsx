import { useEffect, useState } from 'react'
import { CATEGORIES } from '../data/categories'
import { CITIES } from '../data/cities'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { waLink } from '../utils/whatsapp'

const EMPTY = {
  title: '',
  category: '',
  city: '',
  price: '',
  description: '',
  whatsapp: '',
}

export default function PublishModal({ open, onClose }) {
  const [draft, setDraft] = useLocalStorage('ml:publish-draft', EMPTY)
  const [submitted, setSubmitted] = useState(null)
  const [errors, setErrors] = useState({})

  // lock body scroll while open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const update = (field) => (e) => {
    setDraft((d) => ({ ...d, [field]: e.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!draft.title.trim()) e.title = 'Agrega un título'
    if (!draft.category) e.category = 'Elige una categoría'
    if (!draft.city) e.city = 'Elige una ciudad'
    if (!draft.whatsapp.trim() || draft.whatsapp.replace(/\D/g, '').length < 10)
      e.whatsapp = 'Ingresa un WhatsApp válido (10+ dígitos)'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    const wa = draft.whatsapp.replace(/\D/g, '')
    const msg =
      `¡Hola! Acabo de publicar en Mercado Laguna:\n\n` +
      `📌 ${draft.title}\n` +
      `🏷️ ${draft.category}\n` +
      `📍 ${draft.city}\n` +
      (draft.price ? `💰 ${draft.price}\n` : '') +
      (draft.description ? `📝 ${draft.description}\n` : '') +
      `\nPublicado desde mercadolaguna.mx`
    setSubmitted({ wa, link: waLink(wa, msg) })
  }

  const handleReset = () => {
    setDraft(EMPTY)
    setSubmitted(null)
    setErrors({})
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-gray-900/60 p-4 backdrop-blur-sm animate-fade-in sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Publicar anuncio"
    >
      <div
        className="my-8 w-full max-w-lg rounded-2xl bg-white shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2 className="font-display text-lg font-bold text-gray-900">
            Publicar anuncio
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            aria-label="Cerrar"
          >
            <i className="fas fa-xmark text-lg" />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-laguna-100 text-3xl text-laguna-700">
              <i className="fas fa-check" />
            </div>
            <h3 className="mb-2 font-bold text-gray-900">¡Anuncio listo!</h3>
            <p className="mb-6 text-sm text-gray-600">
              Compártenos los detalles por WhatsApp para verificar y publicar tu
              anuncio en Mercado Laguna.
            </p>
            <a
              href={submitted.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full bg-[#25D366] py-3 hover:bg-[#1ebe5d]"
            >
              <i className="fab fa-whatsapp text-lg" />
              Enviar por WhatsApp
            </a>
            <button
              onClick={handleReset}
              className="mt-3 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Publicar otro anuncio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
            <Field label="Título del anuncio" error={errors.title}>
              <input
                value={draft.title}
                onChange={update('title')}
                placeholder="Ej. Bicicleta de montaña 29&quot;"
                className={inputCls(!!errors.title)}
              />
            </Field>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Categoría" error={errors.category}>
                <select
                  value={draft.category}
                  onChange={update('category')}
                  className={inputCls(!!errors.category)}
                >
                  <option value="">Selecciona…</option>
                  {CATEGORIES.filter((c) => c.slug !== 'todo').map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Ciudad" error={errors.city}>
                <select
                  value={draft.city}
                  onChange={update('city')}
                  className={inputCls(!!errors.city)}
                >
                  <option value="">Selecciona…</option>
                  {CITIES.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}, {c.state}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Precio (opcional)">
                <input
                  value={draft.price}
                  onChange={update('price')}
                  placeholder="Ej. $8,500 o A convenir"
                  className={inputCls(false)}
                />
              </Field>

              <Field label="WhatsApp de contacto" error={errors.whatsapp}>
                <input
                  value={draft.whatsapp}
                  onChange={update('whatsapp')}
                  placeholder="Ej. 871 123 4567"
                  inputMode="tel"
                  className={inputCls(!!errors.whatsapp)}
                />
              </Field>
            </div>

            <Field label="Descripción (opcional)">
              <textarea
                value={draft.description}
                onChange={update('description')}
                rows={3}
                placeholder="Cuéntanos los detalles: estado, marca, incluye accesorios, etc."
                className={inputCls(false)}
              />
            </Field>

            <div className="flex items-center gap-2 rounded-lg bg-laguna-50 px-3 py-2 text-xs text-laguna-800">
              <i className="fas fa-circle-info" />
              Tu borrador se guarda automáticamente en este navegador.
            </div>

            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onClose} className="btn-ghost flex-1">
                Cancelar
              </button>
              <button type="submit" className="btn-primary flex-1">
                <i className="fas fa-paper-plane" />
                Publicar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-rose-600">{error}</span>}
    </label>
  )
}

function inputCls(hasError) {
  return `w-full rounded-lg border px-3 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
    hasError
      ? 'border-rose-300 focus:ring-rose-400'
      : 'border-gray-200 focus:border-laguna-500 focus:ring-laguna-200'
  }`
}
