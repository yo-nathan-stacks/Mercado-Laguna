/**
 * Build a WhatsApp click-to-chat URL.
 * @param {string} phone   international number, digits only (e.g. "528711234567")
 * @param {string} message pre-filled message body
 */
export function waLink(phone, message = '') {
  const clean = (phone || '').replace(/\D/g, '')
  const text = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${clean}${text}`
}

export const DEFAULT_WA_MESSAGE =
  '¡Hola! Te contacto desde Mercado Laguna. Me interesa tu publicación.'
