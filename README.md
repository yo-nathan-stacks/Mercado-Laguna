# 🌮 MercadoCentral — Marketplace Trilingüe de la Comarca Lagunera

> **Compra, vende, trabaja e intercambia** desde Torreón, Gómez Palacio, Lerdo y Matamoros hacia todo el mundo.
> Dark-themed, trilingual (ES / EN / 中文) marketplace built with React 19 + Vite + Tailwind CSS.

![MercadoCentral](https://img.shields.io/badge/MercadoCentral-Dark%20Edition-F0A500?style=for-the-badge)
![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38BDF8?style=for-the-badge&logo=tailwindcss)
![Trilingual](https://img.shields.io/badge/i18n-ES%20%20EN%20%20中文-00C9B1?style=for-the-badge)

---

## ✨ Features

### 🌐 Trilingual Support (ES / EN / 中文)
Full internationalization system with 120+ translation keys. Switch languages instantly — UI text, labels, descriptions, and section headings all update in real time. Language preference persists in `localStorage`.

### 💱 Live Currency Toggle (MXN / USD)
Toggle between Mexican Pesos and US Dollars. All prices convert on the fly using live exchange rates. The hero card price, listings, and calculator all respond to the currency switch.

### 📊 Currency Ticker Bar
Scrolling ticker showing real-time FX pairs: USD/MXN, EUR/MXN, USD/CAD, MXN/USD, PayPal MXN rate, and Nubank USD status — with up/down indicators.

### 🧮 Transfer Calculator
Interactive widget in the Payments section. Select source currency (MXN/USD/EUR/CAD/GBP), target currency, amount, and payment method (PayPal 3.9% fee / CoDi 0% / Nubank 0%). See the exact amount received after fees, with the live exchange rate displayed.

### 💳 Payment Methods
- **PayPal** — International, buyer protection, MXN & USD, Visa/MC accepted
- **CoDi / SPEI** — Instant bank transfer via Banxico, zero fees, 24/7
- **Nubank (Nu México)** — 100% digital bank, free transfers between Nu users

### 🌍 International Zone
Listings from around the world with country flags: MacBook from Texas 🇺🇸, PS5 from Spain 🇪🇸, artesanías from Torreón 🇲🇽, ropa from China 🇨🇳.

### 💼 Jobs Board
5 Comarca Lagunera job listings: CNC operator, delivery driver, web developer, waiter, agricultural technician — with company logos, tags, pay ranges, and WhatsApp apply buttons.

### 🔧 Auto Parts Marketplace
Brand search (Nissan, Ford, Chevrolet, Honda, Toyota, VW) with 6 part listings. Condition badges (Used / New / OEM), compatibility info, and live filtering.

### 🐾 Pets Section
The most interactive section — 7 filter tabs:
- 🐶 Todo (All)
- 🚨 Perdidos (Lost)
- ✅ Encontrados (Found)
- 🏠 Adopción (Adoption)
- 🐾 Cría & Venta (Breeding)
- 🐎 Caballos (Horses)
- 🐂 Ganado (Cattle)

8 pet listings with alert boxes, badges, prices, and WhatsApp contact. Lost/found alert strip with red and green call-to-action cards.

### 🔄 Swap Zone
Barter marketplace with 3-step guide and 4 swap listings (bicycle, TV, tools, rims). Each shows what's offered and what's wanted.

### 💰 Pricing Plans
- **Gratis** — $0, perfect for getting started
- **Pro** — $149/mo (most popular), unlimited listings + priority placement
- **Business** — $349/mo, API access + analytics + dedicated support

### 🛡️ Trust Section
6 trust cards: Secure Payments, 4 Cities 1 Market, Global Reach, Multi-Currency, Verified Sellers, 100% Mobile.

### 📱 Publish Modal
Post a listing directly through WhatsApp. Select category, enter title, price, city, description, and WhatsApp number — the modal generates a pre-filled WhatsApp deep link.

---

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `gold` | `#F0A500` | Primary accent, CTAs, highlights |
| `gold-light` | `#FFD060` | Hover states, gradients |
| `teal` | `#00C9B1` | Secondary accent, featured badges |
| `ink` | `#0A0E14` | Background base |
| `ink-2` | `#0F1520` | Elevated background |
| `ink-card` | `#141C28` | Card background |
| `ink-card2` | `#1B2540` | Interactive elements |
| `textmain` | `#EDF0F4` | Primary text |
| `muted` | `#7A8899` | Secondary text |

### Typography
- **Display**: Syne (600/700/800) — headings, logos, prices
- **Body**: DM Sans (400/500/700) — body text, UI labels, buttons

### Animations
- `fade-up` — Section entrance animation
- `ticker-scroll` — Currency ticker horizontal scroll
- `pulse-slow` — Attention indicators

---

## 🏗️ Architecture

```
src/
├── data/                    # Content & data layer (12 files)
│   ├── i18n.js              # Trilingual translation dictionary (120+ keys)
│   ├── categories.js        # 16 categories, 12 grid items, 11 bar items
│   ├── cities.js            # 4 Comarca Lagunera cities + global zone
│   ├── fxRates.js           # FX rate matrix, currencies, ticker, payment fees
│   ├── payments.js          # Payment methods + trust cards
│   ├── pricing.js           # 3-tier pricing plans
│   ├── listings.js          # International listings + flags
│   ├── jobs.js              # 5 job listings
│   ├── autoparts.js         # Brands, stats, 6 parts, condition config
│   ├── pets.js              # 7 filter tabs, 8 pet listings
│   └── swaps.js             # 4 swap listings
├── hooks/                   # State management (4 hooks)
│   ├── useLocalStorage.js   # Generic persisted state
│   ├── useLanguage.js       # Trilingual language state (mc-lang)
│   ├── useCurrency.js       # Currency toggle (mc-currency)
│   └── useTransferCalc.js   # Transfer calculator state
├── utils/                   # Helpers (2 files)
│   ├── format.js            # Number/price/rating formatting
│   └── whatsapp.js          # WhatsApp deep link builders
├── components/              # UI components (18 files)
│   ├── TopBar.jsx           # Gold promo bar
│   ├── CurrencyTicker.jsx   # Scrolling FX ticker
│   ├── Header.jsx           # Nav + search + toggles + post button
│   ├── CategoryBar.jsx      # Horizontal category filter
│   ├── Hero.jsx             # Hero with 3D card stack
│   ├── AdStrip.jsx          # Sponsored banner
│   ├── CategoryGrid.jsx     # 12 category cards
│   ├── PaymentsSection.jsx  # Payment methods + transfer calculator
│   ├── InternationalSection.jsx  # Global listings
│   ├── JobsSection.jsx      # Jobs board
│   ├── AutoPartsSection.jsx # Auto parts + brand search
│   ├── PetsSection.jsx      # Pets with filter tabs
│   ├── SwapSection.jsx      # Barter zone
│   ├── PricingSection.jsx   # 3-tier plans
│   ├── TrustSection.jsx     # Trust cards
│   ├── Footer.jsx           # Footer with link columns
│   ├── PublishModal.jsx     # Post listing modal
│   └── FloatingWhatsApp.jsx # Floating contact button
├── App.jsx                  # App shell composing all components
├── main.jsx                 # React 19 entry point
└── index.css                # Dark theme base + utilities
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
git clone https://github.com/yo-nathan-stacks/Mercado-Laguna.git
cd Mercado-Laguna
npm install
```

### Development

```bash
npm run dev
```

The dev server starts on `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2 | UI library |
| Vite | 8.0 | Build tool & dev server |
| Tailwind CSS | 3.4 | Styling framework |
| ESLint | 10.3 | Code linting |
| Syne + DM Sans | Google Fonts | Typography |

---

## 🌐 Deployment

This project is configured for GitHub Pages deployment via GitHub Actions. The workflow is in `.github/workflows/deploy.yml`.

The build output in `dist/` is deployed to: `https://yo-nathan-stacks.github.io/Mercado-Laguna/`

---

## 📍 Coverage Area

**Comarca Lagunera** — a metropolitan area spanning Coahuila and Durango, Mexico:

| City | State | Role |
|------|-------|------|
| Torreón | Coahuila | Largest city, commercial hub |
| Gómez Palacio | Durango | Industrial center |
| Lerdo | Durango | Agricultural gateway |
| Matamoros | Coahuila | Border-adjacent trade zone |

Plus a **Global Zone** 🌐 for international listings.

---

## 📄 License

This is a personal project. All rights reserved.

---

## 🙏 Acknowledgments

Built as a production-grade rebuild of the MercadoCentral dark trilingual HTML artifact, reimagined as a modern React component architecture with full i18n support, live currency conversion, and interactive marketplace features.

---

**MercadoCentral** — *Tu Mercado, Sin Fronteras.* 🌮
