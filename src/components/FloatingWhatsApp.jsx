// FloatingWhatsApp.jsx — Floating WhatsApp contact button
import { buildWhatsAppUrl, generalContactMessage } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(null, generalContactMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-[500] w-14 h-14 rounded-full bg-accent-green shadow-lg flex items-center justify-center text-2xl transition-transform hover:scale-110 no-underline"
      style={{ boxShadow: '0 8px 30px rgba(34,208,122,0.4)' }}
    >
      💬
    </a>
  );
}
