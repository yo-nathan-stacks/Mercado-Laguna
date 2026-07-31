// CategoryGrid.jsx — Quick browse category grid (12 cards)
import { gridCategories } from '../data/categories';

const colorClasses = {
  red: 'hover:border-accent-red/30',
  blue: 'hover:border-accent-blue/30',
  gold: 'hover:border-gold/30',
  green: 'hover:border-accent-green/30',
  teal: 'hover:border-teal/30',
  orange: 'hover:border-accent-orange/30',
  purple: 'hover:border-accent-purple/30',
};

const glowClasses = {
  red: 'group-hover:opacity-100 opacity-0',
  blue: 'group-hover:opacity-100 opacity-0',
  gold: 'group-hover:opacity-100 opacity-0',
  green: 'group-hover:opacity-100 opacity-0',
  teal: 'group-hover:opacity-100 opacity-0',
  orange: 'group-hover:opacity-100 opacity-0',
  purple: 'group-hover:opacity-100 opacity-0',
};

const glowBg = {
  red: 'bg-gradient-to-br from-accent-red/[.08] to-transparent',
  blue: 'bg-gradient-to-br from-accent-blue/[.08] to-transparent',
  gold: 'bg-gradient-to-br from-gold/[.08] to-transparent',
  green: 'bg-gradient-to-br from-accent-green/[.08] to-transparent',
  teal: 'bg-gradient-to-br from-teal/[.08] to-transparent',
  orange: 'bg-gradient-to-br from-accent-orange/[.08] to-transparent',
  purple: 'bg-gradient-to-br from-accent-purple/[.08] to-transparent',
};

export default function CategoryGrid({ t }) {
  return (
    <section className="px-4 sm:px-10 pt-0 pb-12">
      <div className="mb-6">
        <div className="font-display text-[1.45rem] font-extrabold tracking-[-.5px]">
          {t('catGrid.title')} <span className="text-gold">{t('catGrid.titleAccent')}</span>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-2.5">
        {gridCategories.map((cat, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden bg-ink-card border border-white/[.07] rounded-xl px-2.5 py-4 text-center cursor-pointer transition-all hover:-translate-y-1 ${colorClasses[cat.color] || ''}`}
          >
            <div className={`absolute inset-0 ${glowBg[cat.color]} ${glowClasses[cat.color]} transition-opacity`} />
            <div className="relative">
              <div className="text-[1.7rem] mb-[7px]">{cat.icon}</div>
              <div className="text-[.74rem] font-bold">{t(cat.nameKey)}</div>
              <div className="text-[.65rem] text-muted mt-0.5">{t(cat.countKey)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
