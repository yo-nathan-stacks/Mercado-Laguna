// SwapSection.jsx — Barter / exchange zone with 3-step guide
import { swaps } from '../data/swaps';

export default function SwapSection({ t }) {
  return (
    <section id="intercambios" className="px-4 sm:px-10 py-13">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-2.5">
        <div>
          <div className="font-display text-[1.45rem] font-extrabold tracking-[-.5px]">
            {t('swap.title1')} <span className="text-gold">{t('swap.title2')}</span>
          </div>
          <div className="text-muted text-[.83rem] mt-1">{t('swap.subtitle')}</div>
        </div>
        <a href="#" className="text-gold text-[.8rem] font-bold no-underline border border-gold/30 px-3 py-1.5 rounded-md hover:bg-gold/[.08] transition-colors whitespace-nowrap">
          {t('swap.seeAll')}
        </a>
      </div>

      {/* 3-step banner */}
      <div className="bg-gradient-to-br from-accent-green/[.07] to-teal/[.04] border border-accent-green/20 rounded-xl px-5 py-4 flex items-center gap-3.5 mb-6 flex-wrap">
        <div className="flex items-center gap-2.5 flex-1 flex-wrap">
          {[
            { num: '1', text: t('swap.step1') },
            { num: '2', text: t('swap.step2') },
            { num: '3', text: t('swap.step3') },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex items-center gap-[7px]">
                <div className="w-6 h-6 rounded-full bg-accent-green text-black flex items-center justify-center font-extrabold text-[.75rem] shrink-0">
                  {step.num}
                </div>
                <span className="text-[.8rem] font-semibold">{step.text}</span>
              </div>
              {i < 2 && <span className="text-accent-green font-bold">→</span>}
            </div>
          ))}
        </div>
        <button className="bg-accent-green text-black border-none px-4 py-2 rounded-lg font-bold text-[.82rem] cursor-pointer font-body whitespace-nowrap hover:opacity-90 transition-opacity">
          {t('swap.postBtn')}
        </button>
      </div>

      {/* Swap listings grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3.5">
        {swaps.map((swap) => (
          <div
            key={swap.id}
            className="bg-ink-card border border-white/[.07] rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:border-accent-green/30"
          >
            <div className="h-[140px] flex items-center justify-center text-[2.6rem] relative" style={{ background: swap.bg }}>
              {swap.icon}
              <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                <span className="text-[.62rem] font-extrabold px-[7px] py-[3px] rounded uppercase tracking-wide bg-accent-green text-black">
                  {swap.badge.text}
                </span>
              </div>
            </div>
            <div className="p-3">
              <div className="text-[.68rem] font-bold text-muted uppercase tracking-wide mb-1">{swap.category}</div>
              <div className="font-bold text-[.88rem] mb-1.5 leading-snug">{swap.title}</div>
              <div className="font-display font-black text-[1.05rem] text-accent-green">{swap.wants}</div>
              <div className="flex gap-2 mt-[7px] text-muted text-[.7rem] flex-wrap">
                {swap.meta.map((m, i) => <span key={i}>{m}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
