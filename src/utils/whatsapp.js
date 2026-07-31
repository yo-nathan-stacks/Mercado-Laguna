// whatsapp.js — WhatsApp deep-link helpers with prefilled messages

const DEFAULT_PHONE = '5218710000000'; // Placeholder Comarca Lagunera area code (871)

export function buildWhatsAppUrl(phone, message) {
  const cleanPhone = (phone || DEFAULT_PHONE).replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message || '');
  return `https://wa.me/${cleanPhone}${encodedMsg ? `?text=${encodedMsg}` : ''}`;
}

export function listingInquiryMessage({ title, price, seller }) {
  return `¡Hola ${seller || ''}! Estoy interesado en tu anuncio "${title}"${price ? ` por ${price}` : ''} en MercadoCentral. ¿Sigue disponible?`;
}

export function jobApplicationMessage({ title, company }) {
  return `¡Hola! Me gustaría aplicar al puesto "${title}" en ${company} publicado en MercadoCentral. ¿Podrían darme más información?`;
}

export function generalContactMessage() {
  return '¡Hola! Me gustaría más información sobre MercadoCentral — La Comarca Lagunera.';
}
