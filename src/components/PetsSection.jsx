// PetsSection.jsx — Pets & animals with lost/found alert strip and filter tabs
import { useState } from 'react';
import { pets, petFilters } from '../data/pets';

const badgeClassMap = {
  red: 'bg-accent-red text-white',
  green: 'bg-accent-green text-black',
  blue: 'bg-accent-blue text-white',
  gold: 'bg-gold text-black',
  orange: 'bg-accent-orange text-white',
};

const alertClassMap = {
  lost: { bg: 'bg-accent-red/[.08]', border: 'border-accent-red/20', text: 'text-accent-red' },
  found: { bg: 'bg-accent-green/[.08]', border: 'border-accent-green/20', text: 'text-accent-green' },
  adopt: { bg: 'bg-accent-blue/[.08]', border: 'border-accent-blue/20', text: 'text-accent-blue' },
};

const actionClassMap = {
  lost: 'bg-accent-red/15 text-accent-red',
  found: 'bg-accent-green/15 text-accent-green',
  default: 'bg-gold/10 text-gold',
};

export default function PetsSection({ t }) {
  const [filter, setFilter] = useState('all');

  const filteredPets = filter === 'all' ? pets : pets.filter((p) => p.type === filter);

  return (
    <section id="mascotas" className="px-4 sm:px-10 py-13">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-2.5">
        <div>
          <div className="font-display text-[1.45rem] font-extrabold tracking-[-.5px]">
            {t('pets.title1')} <span className="text-gold">{t('pets.title2')}</span>
          </div>
          <div className="text-muted text-[.83rem] mt-1">{t('pets.subtitle')}</div>
        </div>
        <a href="#" className="text-gold text-[.8rem] font-bold no-underline border border-gold/30 px-3 py-1.5 rounded-md hover:bg-gold/[.08] transition-colors whitespace-nowrap">
          {t('pets.seeAll')}
        </a>
      </div>

      {/* Alert strip */}
      <div className="grid sm:grid-cols-2 gap-3 mb-6">
        {/* Lost */}
        <div className="bg-accent-red/[.07] border border-accent-red/30 rounded-xl px-5 py-4 flex items-center gap-3.5 cursor-pointer transition-colors hover:border-accent-red/60">
          <span className="text-[2rem]">🚨</span>
          <div>
            <div className="font-extrabold text-[.95rem] text-accent-red">{t('pets.lostReport')}</div>
            <div className="text-[.78rem] text-muted">{t('pets.lostDesc')}</div>
          </div>
        </div>
        {/* Found */}
        <div className="bg-accent-green/[.07] border border-accent-green/30 rounded-xl px-5 py-4 flex items-center gap-3.5 cursor-pointer transition-colors hover:border-accent-green/60">
          <span className="text-[2rem]">✅</span>
          <div>
            <div className="font-extrabold text-[.95rem] text-accent-green">{t('pets.foundReport')}</div>
            <div className="text-[.78rem] text-muted">{t('pets.foundDesc')}</div>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mb-5">
        {petFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-[7px] rounded-full font-bold text-[.78rem] cursor-pointer font-body transition-all border ${
              filter === f.id
                ? 'bg-gold text-black border-none'
                : 'bg-ink-card2 text-muted border-white/[.07] hover:text-textmain'
            }`}
          >
            {f.icon} {t(f.labelKey)}
          </button>
        ))}
      </div>

      {/* Pet cards grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3.5">
        {filteredPets.map((pet) => {
          const alertStyle = alertClassMap[pet.alertClass] || alertClassMap.adopt;
          return (
            <div
              key={pet.id}
              className="bg-ink-card border border-white/[.07] rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:border-gold/25"
            >
              <div className="h-[140px] flex items-center justify-center text-[2.6rem] relative" style={{ background: pet.bg }}>
                {pet.icon}
                <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                  <span className={`text-[.62rem] font-extrabold px-[7px] py-[3px] rounded uppercase tracking-wide ${badgeClassMap[pet.badge.class]}`}>
                    {pet.badge.text}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <div className="text-[.68rem] font-bold text-muted uppercase tracking-wide mb-1">{pet.category}</div>
                <div className="font-bold text-[.88rem] mb-1.5 leading-snug">{pet.title}</div>
                <div className="text-[.78rem] text-muted my-1.5 leading-relaxed">{pet.desc}</div>

                {/* Alert box */}
                {pet.alertText && (
                  <div className={`${alertStyle.bg} ${alertStyle.border} ${alertStyle.text} border rounded-md px-2.5 py-[7px] text-[.8rem] font-bold mb-2`}>
                    {pet.alertText}
                  </div>
                )}

                {/* Price */}
                {pet.price != null && (
                  <div className="font-display font-black text-[1.05rem] text-gold mt-1.5">
                    ${pet.price.toLocaleString('en-US')} MXN{pet.priceUnit ? ` ${pet.priceUnit}` : ''}
                  </div>
                )}

                {/* Meta */}
                <div className="flex gap-2 mt-[7px] text-muted text-[.7rem] flex-wrap">
                  {pet.meta.map((m, i) => <span key={i}>{m}</span>)}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/[.07]">
                  <span className="text-[.73rem] text-muted">{pet.seller}</span>
                  <button className={`text-[.7rem] font-bold px-2.5 py-1 rounded cursor-pointer border-none font-body transition-opacity hover:opacity-80 ${actionClassMap[pet.actionClass] || actionClassMap.default}`}>
                    {pet.actionText}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Emergency tip */}
      <div className="mt-5 bg-gold/[.05] border border-dashed border-gold/25 rounded-[10px] px-4 py-3.5 flex items-center gap-3 flex-wrap">
        <span className="text-[1.4rem]">💡</span>
        <div className="flex-1">
          <strong className="text-[.85rem]">{t('pets.tipTitle')}</strong>
          <p className="text-[.78rem] text-muted mt-0.5">{t('pets.tipDesc')}</p>
        </div>
        <button className="bg-gold text-black border-none px-4 py-2 rounded-lg font-bold text-[.82rem] cursor-pointer font-body hover:bg-gold-light transition-colors whitespace-nowrap">
          {t('pets.postNow')}
        </button>
      </div>
    </section>
  );
}
