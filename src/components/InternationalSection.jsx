// InternationalSection.jsx — International zone with global listings
import { internationalListings, intlFlags } from '../data/listings';

export default function InternationalSection({ t }) {
  return (
    <section id="internacional" className="px-4 sm:px-10 py-13">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-2.5">
        <div>
          <div className="font-display text-[1.45rem] font-extrabold tracking-[-.5px]">
            {langEs(t) ? 'Zona ' : ''}<span className="text-gold">{t('intl.title2')}</span>
          </div>
          <div className="text-muted text-[.83rem] mt-1">{t('intl.subtitle')}</div>
        </div>
        <a href="#" className="text-gold text-[.8rem] font-bold no-underline border border-gold/30 px-3 py-1.5 rounded-md hover:bg-gold/[.08] transition-colors whitespace-nowrap">
          {t('intl.seeAll')}
        </a>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-br from-accent-purple/[.1] to-teal/[.07] border border-accent-purple/25 rounded-xl px-6 py-5 flex items-center gap-5 mb-7 flex-wrap">
        <div className="text-[1.6rem] tracking-[4px]">{intlFlags}</div>
        <div className="flex-1">
          <strong className="text-[.95rem] font-bold">{t('intl.bannerTitle')}</strong>
          <p className="text-[.8rem] text-muted mt-[3px]">{t('intl.bannerDesc')}</p>
        </div>
        <button className="bg-accent-purple text-white border-none px-5 py-2.5 rounded-lg font-bold text-[.83rem] cursor-pointer font-body whitespace-nowrap hover:opacity-85 transition-opacity">
          {t('intl.postIntl')}
        </button>
      </div>

      {/* Listings grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3.5">
        {internationalListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-ink-card border border-white/[.07] rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:border-gold/25 hover:shadow-[0_16px_48px_rgba(0,0,0,.5)]"
          >
            <div
              className="h-[140px] flex items-center justify-center text-[2.6rem] relative"
              style={{ background: listing.bg }}
            >
              {listing.icon}
              <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                <span className="text-[.62rem] font-extrabold px-[7px] py-[3px] rounded uppercase tracking-wide bg-accent-purple text-white">
                  {listing.badge.text}
                </span>
              </div>
            </div>
            <div className="p-3">
              <div className="text-[.68rem] font-bold text-muted uppercase tracking-wide mb-1">{listing.category}</div>
              <div className="font-bold text-[.88rem] mb-1.5 leading-snug">{listing.title}</div>
              <div className="font-display font-black text-[1.05rem] text-gold">
                {listing.pricePrefix ? `${listing.pricePrefix} ` : ''}${listing.priceMXN.toLocaleString('en-US')} MXN
                {listing.priceAlt && (
                  <small className="text-muted text-[.7rem] font-normal"> {listing.priceAlt}</small>
                )}
              </div>
              <div className="flex gap-2 mt-[7px] text-muted text-[.7rem] flex-wrap">
                {listing.meta.map((m, i) => <span key={i}>{m}</span>)}
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/[.07]">
                <span className="text-[.73rem] text-muted">{listing.seller} ⭐{listing.rating}</span>
                <button className="bg-gold/10 text-gold text-[.7rem] font-bold px-2.5 py-1 rounded cursor-pointer border-none font-body hover:bg-gold/20 transition-colors">
                  {t('intl.contact')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Detect if current language is Spanish (for the "Zona" prefix)
function langEs(t) {
  return t('intl.title1') !== '';
}
