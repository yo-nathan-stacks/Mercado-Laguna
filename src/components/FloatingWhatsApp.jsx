import { waLink, DEFAULT_WA_MESSAGE } from '../utils/whatsapp'

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink('528710000000', DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
      aria-label="Contáctanos por WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  )
}
