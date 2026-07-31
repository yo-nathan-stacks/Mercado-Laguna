// App.jsx — MercadoCentral dark trilingual marketplace shell
// Composes all 18 components with shared i18n / currency / search / modal state.

import { useState, useCallback } from 'react';
import { useLanguage } from './hooks/useLanguage';
import { useCurrency } from './hooks/useCurrency';

import TopBar from './components/TopBar';
import CurrencyTicker from './components/CurrencyTicker';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import Hero from './components/Hero';
import AdStrip from './components/AdStrip';
import CategoryGrid from './components/CategoryGrid';
import PaymentsSection from './components/PaymentsSection';
import InternationalSection from './components/InternationalSection';
import JobsSection from './components/JobsSection';
import AutoPartsSection from './components/AutoPartsSection';
import PetsSection from './components/PetsSection';
import SwapSection from './components/SwapSection';
import PricingSection from './components/PricingSection';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import PublishModal from './components/PublishModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  // ── Shared state ──────────────────────────────────────────────
  const { lang, changeLang, t } = useLanguage();
  const { currency, changeCurrency, formatPrice } = useCurrency();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);

  // ── Handlers ──────────────────────────────────────────────────
  const handleSearchChange = useCallback((e) => setSearch(e.target.value), []);
  const handleSelectCategory = useCallback(
    (catId) => setActiveCategory(catId),
    []
  );
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <div className="min-h-screen bg-ink text-textmain font-body antialiased selection:bg-gold/30">
      {/* Top promotional bar */}
      <TopBar t={t} />

      {/* Live currency ticker */}
      <CurrencyTicker />

      {/* Sticky navigation header */}
      <Header
        t={t}
        lang={lang}
        changeLang={changeLang}
        currency={currency}
        changeCurrency={changeCurrency}
        search={search}
        onSearchChange={handleSearchChange}
        onPost={openModal}
      />

      {/* Horizontal category filter bar */}
      <CategoryBar
        t={t}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      <main>
        {/* Hero with 3D card stack */}
        <Hero t={t} formatPrice={formatPrice} onPost={openModal} />

        {/* Sponsored ad strip */}
        <AdStrip t={t} />

        {/* 12 quick-access category cards */}
        <CategoryGrid t={t} />

        {/* Payments + transfer calculator */}
        <PaymentsSection t={t} lang={lang} />

        {/* International listings zone */}
        <InternationalSection t={t} />

        {/* Comarca Lagunera jobs board */}
        <JobsSection t={t} />

        {/* Auto parts marketplace with brand search */}
        <AutoPartsSection t={t} />

        {/* Pets section — lost/found/adoption/breeding with filter tabs */}
        <PetsSection t={t} />

        {/* Barter / swap zone */}
        <SwapSection t={t} />

        {/* 3-tier pricing plans */}
        <PricingSection t={t} />

        {/* Trust & safety cards */}
        <TrustSection t={t} />
      </main>

      {/* Footer with brand + link columns */}
      <Footer t={t} />

      {/* Floating WhatsApp contact button */}
      <FloatingWhatsApp />

      {/* Publish listing modal (conditionally rendered) */}
      {modalOpen && (
        <PublishModal t={t} lang={lang} open={modalOpen} onClose={closeModal} />
      )}
    </div>
  );
}
