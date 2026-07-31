// fxRates.js — Currency exchange rates & ticker data

// Exchange rates relative to MXN (used for hero price conversion)
export const heroRates = { MXN: 1, USD: 0.0574, EUR: 0.0528, CAD: 0.0783, GBP: 0.0451 };

// Full FX rate matrix for the transfer calculator
export const fxRates = {
  MXN: { USD: 0.0574, EUR: 0.0528, CAD: 0.0783, GBP: 0.0451, MXN: 1 },
  USD: { MXN: 17.42, EUR: 0.920, CAD: 1.364, GBP: 0.786, USD: 1 },
  EUR: { MXN: 18.91, USD: 1.087, CAD: 1.483, GBP: 0.854, EUR: 1 },
  CAD: { MXN: 12.76, USD: 0.733, EUR: 0.674, GBP: 0.576, CAD: 1 },
  GBP: { MXN: 22.12, USD: 1.272, EUR: 1.170, CAD: 1.736, GBP: 1 },
};

// Currencies available in the transfer calculator
export const currencies = [
  { code: 'MXN', flag: '🇲🇽', symbol: '$' },
  { code: 'USD', flag: '🇺🇸', symbol: '$' },
  { code: 'EUR', flag: '🇪🇺', symbol: '€' },
  { code: 'CAD', flag: '🇨🇦', symbol: '$' },
  { code: 'GBP', flag: '🇬🇧', symbol: '£' },
];

// Currency ticker items (the scrolling FX ticker bar)
export const tickerItems = [
  { pair: 'USD/MXN', rate: '$17.42', change: -0.12, type: 'down' },
  { pair: 'EUR/MXN', rate: '$18.91', change: 0.08, type: 'up' },
  { pair: 'USD/CAD', rate: '$1.364', change: 0.04, type: 'up' },
  { pair: 'MXN/USD', rate: '$0.0574', change: -0.09, type: 'down' },
  { pair: 'PayPal MXN', rate: '$17.20', change: null, type: 'fee', feeLabel: 'fee: 3.9%' },
  { pair: 'Nu USD', rate: 'Disponible', change: null, type: 'active', activeLabel: '✓ Activo' },
];

// Payment method fees for the transfer calculator
export const paymentFees = {
  paypal: { rate: 0.039, label: { es: 'PayPal — comisión ~3.9%', en: 'PayPal — fee ~3.9%', zh: 'PayPal — 手续费~3.9%' } },
  codi: { rate: 0, label: { es: 'CoDi/SPEI — Sin comisión (MXN)', en: 'CoDi/SPEI — No fee (MXN)', zh: 'CoDi/SPEI — 无手续费(MXN)' } },
  nubank: { rate: 0, label: { es: 'Nubank — Sin comisión entre usuarios Nu', en: 'Nubank — No fee between Nu users', zh: 'Nubank — Nu用户间无手续费' } },
};
