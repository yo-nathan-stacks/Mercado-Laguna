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
- [x] Remove junk files (saved-page artifacts, .download, .vs, stray html, template assets)
- [x] Update .gitignore to prevent recurrence
- [x] Bump deploy workflow to current action versions

### 2. Fix project foundation
- [x] Write src/main.jsx (render App into #root)
- [x] Rewrite index.html (es-MX, SEO meta, JSON-LD, emerald favicon, fonts)
- [x] Replace generic favicon with branded ML favicon
- [x] Rewrite tailwind.config.js (emerald theme, fonts, animations)
- [x] Rewrite src/index.css (reset + Tailwind layers, no template cruft)
- [x] Remove src/App.css template cruft
- [x] Remove unused template assets

### 3. Build data layer
- [x] src/data/categories.js
- [x] src/data/businesses.js
- [x] src/data/listings.js
- [x] src/data/testimonials.js
- [x] src/data/cities.js

### 4. Build hooks / utils
- [x] src/hooks/useLocalStorage.js
- [x] src/hooks/useFavorites.js
- [x] src/utils/whatsapp.js
- [x] src/utils/format.js

### 5. Build components
- [x] src/components/TopBar.jsx
- [x] src/components/Header.jsx
- [x] src/components/Hero.jsx
- [x] src/components/TrustBar.jsx
- [x] src/components/CategoryGrid.jsx
- [x] src/components/BusinessCard.jsx
- [x] src/components/BusinessesSection.jsx
- [x] src/components/ListingCard.jsx
- [x] src/components/ListingsSection.jsx (search + filter + carousel)
- [x] src/components/HowItWorks.jsx
- [x] src/components/Testimonials.jsx
- [x] src/components/CTASection.jsx
- [x] src/components/PublishModal.jsx (publish-anuncio flow)
- [x] src/components/Footer.jsx
- [x] src/components/FloatingWhatsApp.jsx

### 6. Build the App shell
- [x] src/App.jsx — compose views, state, modal, favorites wiring

### 7. Docs & polish
- [x] Rewrite README.md (real project README)
- [x] LICENSE (MIT)
- [x] Verify build passes (npm run build) + eslint

### 8. Ship to GitHub
- [x] Create feature branch
- [x] Commit + push
- [x] Open pull request with description (#2)
