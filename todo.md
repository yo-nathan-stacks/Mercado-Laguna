# MercadoCentral — Dark Trilingual Marketplace Rebuild

## Phase 1: Planning & Branch Setup
- [x] Read & analyze full uploaded HTML file (mercado-central-optimized-2)
- [x] Audit existing repo state and PR #2 status
- [x] Create new feature branch `feat/mercado-central-dark-trilingual`
- [x] Set up Tailwind dark theme config (gold/teal/dark palette, Syne+DM Sans fonts)

## Phase 2: Data Layer
- [x] Create i18n translations file (es/en/zh) for all UI strings
- [x] Create cities.js (4 Comarca Lagunera cities + Global)
- [x] Create categories.js (12 categories with icons/counts/colors)
- [x] Create listings.js (international + regular listings)
- [x] Create jobs.js (5 Comarca Lagunera job listings)
- [x] Create autoparts.js (6 auto parts with compatibility)
- [x] Create pets.js (8 pet listings: lost/found/adopt/breed/horse/farm)
- [x] Create swaps.js (4 barter/exchange listings)
- [x] Create services.js (service providers)
- [x] Create pricing.js (3 seller plan tiers)
- [x] Create payments.js (PayPal/CoDi/Nubank methods)
- [x] Create fxRates.js (currency exchange rate table)
- [x] Create trust.js (6 trust feature cards)

## Phase 3: Hooks & Utils
- [x] Create useLocalStorage.js (persist favorites, language, currency)
- [x] Create useLanguage.js (trilingual ES/EN/ZH state + translation function)
- [x] Create useCurrency.js (MXN/USD toggle + price conversion)
- [x] Create useTransferCalc.js (multi-currency transfer calculator logic)
- [x] Create format.js (currency formatting, number formatting)
- [x] Create whatsapp.js (WhatsApp deep links with prefilled messages)

## Phase 4: Components
- [x] TopBar (gold promo bar + sign in/register)
- [x] CurrencyTicker (scrollable FX rate ticker)
- [x] Header/Nav (logo, search, nav links, currency toggle, lang toggle, post button)
- [x] CategoryBar (horizontal scrolling category filter)
- [x] Hero (eyebrow, headline, sub, zone chips, CTAs, stats, card stack)
- [x] AdStrip (sponsored ad banner)
- [x] CategoryGrid (12 quick category cards)
- [x] PaymentsSection (PayPal/CoDi/Nubank + transfer calculator widget)
- [x] InternationalSection (global listings with flags)
- [x] JobsSection (job cards with pay/tags/apply)
- [x] AutoPartsSection (brand search + parts grid with condition badges)
- [x] PetsSection (lost/found alert strip + filter tabs + pet cards grid)
- [x] SwapSection (3-step banner + swap listings)
- [x] PricingSection (3 plan tiers with features)
- [x] TrustSection (6 trust cards)
- [x] Footer (brand, explore/payments/cities columns, social, copyright)
- [x] PublishModal (post listing modal)
- [x] FloatingWhatsApp (floating contact button)

## Phase 5: App Shell & Entry
- [x] Rewrite App.jsx composing all components with shared i18n/currency/favorites state
- [x] Update main.jsx (entry point)
- [x] Update index.css (dark theme utilities, custom scrollbar, animations)
- [x] Update index.html (SEO meta, JSON-LD, Syne+DM Sans fonts, theme-color dark)
- [x] Update tailwind.config.js (dark theme colors, fonts, animations)
- [x] Create favicon.svg (MC dark/gold branded)

## Phase 6: Build, Verify & Ship
- [x] Run `npm run build` — verify clean production build
- [x] Run `npm run lint` — verify no lint errors
- [x] Run dev server + visual smoke test via browser
- [x] Test trilingual toggle (ES/EN/ZH) switches all text
- [x] Test currency toggle (MXN/USD) converts hero price
- [x] Test transfer calculator computes correctly
- [x] Test pet filter tabs filter correctly
- [x] Update README.md for MercadoCentral dark trilingual edition
- [ ] Commit & push to new branch
- [ ] Open PR #3 with detailed description
- [ ] Deploy live preview
- [ ] Final verification & completion
