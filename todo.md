# Mercado Laguna — Personal Project Rebuild

## Goal
Rebuild the Mercado Laguna repo as a production-grade personal project: a local
marketplace web app for the Comarca Lagunera (Torreón, Gómez Palacio, Lerdo,
Matamoros). Fix the empty main.jsx, resolve the identity crisis (Laguna Beach CA
artisan store → Comarca Lagunera MX marketplace), remove junk, ship clean code.

## Architecture decisions
- Stack: React 19 + Vite + Tailwind CSS 3 (already in package.json)
- Single-page app with lightweight client-side view state (Home / Listings /
  Business detail / Publish / About) — no router dependency, keep it lean
- Emerald/green identity from the uploaded artifact (Comarca Lagunera theme)
- Data: typed seed data module (businesses, listings, categories, testimonials)
- Reusable component architecture under src/components/
- Spanish (es-MX) UI, proper SEO meta + JSON-LD in index.html
- Forms: publish-anuncio flow with localStorage persistence + WhatsApp deep link
- Search + category filter that actually filter the listings grid
- Favorites with localStorage

## Tasks

### 1. Clean up the repo
- [x] Inspect repo state and understand problems
- [ ] Remove junk files (saved-page artifacts, .download, .vs, stray html, template assets)
- [ ] Update .gitignore to prevent recurrence
- [ ] Bump deploy workflow to current action versions

### 2. Fix project foundation
- [ ] Write src/main.jsx (render App into #root)
- [ ] Rewrite index.html (es-MX, SEO meta, JSON-LD, emerald favicon, fonts)
- [ ] Replace generic favicon with branded ML favicon
- [ ] Rewrite tailwind.config.js (emerald theme, fonts, animations)
- [ ] Rewrite src/index.css (reset + Tailwind layers, no template cruft)
- [ ] Remove src/App.css template cruft
- [ ] Remove unused template assets

### 3. Build data layer
- [ ] src/data/categories.js
- [ ] src/data/businesses.js
- [ ] src/data/listings.js
- [ ] src/data/testimonials.js
- [ ] src/data/cities.js

### 4. Build hooks / utils
- [ ] src/hooks/useLocalStorage.js
- [ ] src/hooks/useFavorites.js
- [ ] src/utils/whatsapp.js
- [ ] src/utils/format.js

### 5. Build components
- [ ] src/components/TopBar.jsx
- [ ] src/components/Header.jsx
- [ ] src/components/Hero.jsx
- [ ] src/components/TrustBar.jsx
- [ ] src/components/CategoryGrid.jsx
- [ ] src/components/BusinessCard.jsx
- [ ] src/components/BusinessesSection.jsx
- [ ] src/components/ListingCard.jsx
- [ ] src/components/ListingsSection.jsx (search + filter + carousel)
- [ ] src/components/StatsSection.jsx
- [ ] src/components/HowItWorks.jsx
- [ ] src/components/Testimonials.jsx
- [ ] src/components/CTASection.jsx
- [ ] src/components/PublishModal.jsx (publish-anuncio flow)
- [ ] src/components/Footer.jsx
- [ ] src/components/FloatingWhatsApp.jsx

### 6. Build the App shell
- [ ] src/App.jsx — compose views, state, modal, favorites wiring

### 7. Docs & polish
- [ ] Rewrite README.md (real project README)
- [ ] LICENSE (MIT)
- [ ] CONTRIBUTING / structure note (optional, fold into README)
- [ ] Verify build passes (npm run build)

### 8. Ship to GitHub
- [ ] Create feature branch
- [ ] Commit + push
- [ ] Open pull request with description
