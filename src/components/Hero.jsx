// Hero.jsx — Hero section with eyebrow, headline, zone chips, CTAs, stats, card stack
import { heroZoneChips } from '../data/cities';

export default function Hero({ t, formatPrice, onPost }) {
  const heroPriceMXN = 185000;
  const stats = [
    { num: '5.8K+', labelKey: 'hero.stats.listings' },
    { num: '1.4K+', labelKey: 'hero.stats.sellers' },
    { num: '320+', labelKey: 'hero.stats.jobs' },
    { num: '40+', labelKey: 'hero.stats.countries' },
  ];

  return (
    <section className="relative px-4 sm:px-10 pt-12 pb-8 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 0%, rgba(240,165,0,.07), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(0,201,177,.05), transparent 60%)',
        }}
      />

      <div className="relative grid lg:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/[.06] mb-5">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow" />
            <span className="text-[.78rem] font-semibold text-gold-light">{t('hero.eyebrow')}</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl font-black leading-[1.05] tracking-[-1px] mb-4">
            {t('hero.title1')}<br />
            <span className="text-gold">{t('hero.title2')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted text-[.88rem] leading-relaxed max-w-xl mb-5">{t('hero.subtitle')}</p>

          {/* Zone chips */}
          <div className="flex gap-2 flex-wrap mb-6">
            {heroZoneChips.map((chip, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full bg-ink-card border border-white/[.07] text-[.72rem] font-semibold text-muted"
              >
                {chip.label}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap mb-8">
            <button
              onClick={onPost}
              className="bg-gold text-black border-none px-6 py-3 rounded-xl font-bold text-[.9rem] cursor-pointer font-body hover:bg-gold-light transition-colors"
            >
              {t('hero.cta1')}
            </button>
            <a
              href="#pricing"
              className="border border-gold/30 text-gold px-6 py-3 rounded-xl font-bold text-[.9rem] no-underline hover:bg-gold/[.08] transition-colors flex items-center"
            >
              {t('hero.cta2')}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3">
            {stats.map((stat) => (
              <div key={stat.labelKey}>
                <div className="font-display text-2xl font-black text-textmain">{stat.num}</div>
                <div className="text-[.7rem] text-muted mt-0.5">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Card stack */}
        <div className="hidden lg:flex items-center justify-center relative h-[420px]">
          <div className="relative" style={{ width: '280px', height: '360px' }}>
            {/* Back card 3 */}
            <div
              className="absolute rounded-2xl bg-ink-card border border-white/[.07] flex items-center justify-center text-6xl"
              style={{ width: '240px', height: '300px', top: '40px', left: '60px', transform: 'rotate(8deg)', opacity: 0.4 }}
            >
              🔧
            </div>
            {/* Mid card 2 */}
            <div
              className="absolute rounded-2xl bg-ink-card border border-white/[.07] flex items-center justify-center text-6xl"
              style={{ width: '250px', height: '310px', top: '25px', left: '30px', transform: 'rotate(-5deg)', opacity: 0.7 }}
            >
              📱
            </div>
            {/* Front card 1 */}
            <div
              className="absolute rounded-2xl bg-ink-card border border-gold/20 overflow-hidden"
              style={{ width: '280px', height: '360px', top: '0', left: '0', boxShadow: '0 20px 60px rgba(0,0,0,.5)' }}
            >
              <span className="absolute top-3 left-3 z-10 text-[.62rem] font-extrabold px-[7px] py-[3px] rounded uppercase tracking-wide bg-teal text-black">
                {t('hero.featured')}
              </span>
              <div className="h-[180px] bg-ink-card2 flex items-center justify-center text-7xl">🚙</div>
              <div className="p-3.5">
                <div className="font-bold text-[.88rem] leading-snug mb-2">Nissan Tsuru 2017 — Excelente estado</div>
                <div className="flex justify-between items-center">
                  <div className="font-display font-black text-lg text-gold">{formatPrice(heroPriceMXN)}</div>
                  <div className="text-[.7rem] text-muted">📍 Torreón, Coah.</div>
                </div>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/[.07]">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold text-sm">R</div>
                  <div>
                    <div className="text-[.73rem] font-semibold">Roberto C.</div>
                    <div className="text-[.68rem] text-muted">⭐ 4.9 · Torreón</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
