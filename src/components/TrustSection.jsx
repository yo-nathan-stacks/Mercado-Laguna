// TrustSection.jsx — "Why MercadoCentral?" trust feature cards
import { trustCards } from '../data/payments';

export default function TrustSection({ t }) {
  return (
    <div className="px-4 sm:px-10 py-13 bg-ink-2">
      <div className="text-center">
        <div className="font-display text-[1.45rem] font-extrabold tracking-[-.5px]">
          {t('trust.title1')} <span className="text-gold">{t('trust.title2')}</span>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-4 mt-7">
        {trustCards.map((card, i) => (
          <div key={i} className="bg-ink-card border border-white/[.07] rounded-2xl px-4 py-5">
            <div className="text-[1.9rem] mb-2.5">{card.icon}</div>
            <div className="font-bold text-[.92rem] mb-1">{t(card.titleKey)}</div>
            <div className="text-muted text-[.8rem] leading-relaxed">{t(card.descKey)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
