// AutoPartsSection.jsx — Auto parts with brand search and parts grid
import { useState } from 'react';
import { autoParts, autoBrands, autoPartsStats, conditionConfig } from '../data/autoparts';

const badgeColorMap = {
  orange: 'bg-accent-orange text-white',
  green: 'bg-accent-green text-black',
  blue: 'bg-accent-blue text-white',
};

export default function AutoPartsSection({ t }) {
  const [brand, setBrand] = useState(autoBrands[0]);
  const [query, setQuery] = useState('');

  return (
    <section id="autopartes" className="px-4 sm:px-10 py-13 bg-gradient-to-br from-[#0a1020] to-[#0d1830]">
      {/* Hero */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-9">
        <div>
          <h2 className="font-display text-[1.8rem] font-black mb-2.5">
            {t('ap.title1')} <span className="text-accent-orange">{t('ap.title2')}</span>
          </h2>
          <p className="text-muted text-[.85rem] leading-relaxed">{t('ap.desc')}</p>

          {/* Search */}
          <div className="flex mt-4">
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="px-3.5 py-2.5 bg-ink-card2 border border-r-0 border-white/[.07] rounded-l-lg text-textmain text-[.83rem] outline-none cursor-pointer"
            >
              {autoBrands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('ap.searchPlaceholder')}
              className="flex-1 px-3.5 py-2.5 bg-ink-card2 border border-r-0 border-white/[.07] text-textmain text-[.83rem] outline-none"
            />
            <button className="bg-accent-orange text-white border-none px-4 py-2.5 rounded-r-lg font-bold cursor-pointer font-body">
              {t('ap.searchBtn')}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-3.5 flex-wrap">
          {autoPartsStats.map((stat, i) => (
            <div
              key={i}
              className="bg-accent-orange/[.08] border border-accent-orange/20 rounded-[10px] px-4 py-3 text-center"
            >
              <div className="font-display text-[1.3rem] font-black text-accent-orange">{stat.num}</div>
              <div className="text-[.7rem] text-muted mt-0.5">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Parts grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3">
        {autoParts.map((part) => {
          const cond = conditionConfig[part.condition];
          return (
            <div
              key={part.id}
              className="bg-ink-card border border-white/[.07] rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:border-accent-orange/30"
            >
              <div className="h-[120px] bg-ink-card2 flex items-center justify-center text-[2.3rem] relative">
                {part.icon}
                <span className={`absolute top-[7px] left-[7px] text-[.62rem] font-extrabold px-[7px] py-[3px] rounded uppercase tracking-wide ${badgeColorMap[cond.badgeClass]}`}>
                  {cond.badgeText}
                </span>
              </div>
              <div className="p-3">
                <div className="text-[.66rem] text-accent-orange font-bold uppercase tracking-wide mb-[3px]">{part.compat}</div>
                <div className="font-bold text-[.85rem] mb-1">{part.name}</div>
                <div className="font-display font-black text-[.95rem] text-gold">${part.price.toLocaleString('en-US')} MXN</div>
                <div className={`text-[.68rem] mt-[3px] ${cond.condClass === 'cond-used' ? 'text-accent-orange' : cond.condClass === 'cond-new' ? 'text-accent-green' : 'text-accent-blue'}`}>
                  {part.condText}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
