// AdStrip.jsx — Sponsored advertisement banner
export default function AdStrip({ t }) {
  return (
    <div className="mx-4 sm:mx-10 mb-9 bg-gradient-to-br from-ink-card2 to-[#182038] border border-dashed border-gold/[.22] rounded-xl px-5 py-3.5 flex items-center gap-3 flex-wrap">
      <span className="text-[.6rem] text-muted uppercase tracking-wider bg-white/[.06] px-[7px] py-0.5 rounded shrink-0">
        {t('ad.label')}
      </span>
      <div className="flex-1">
        <strong className="text-gold-light text-[.88rem]">{t('ad.elTaller.title')}</strong>
        <p className="text-[.8rem] text-muted">{t('ad.elTaller.desc')}</p>
      </div>
      <button className="bg-gold text-black border-none px-3.5 py-[7px] rounded-md font-bold text-[.76rem] cursor-pointer font-body shrink-0 hover:bg-gold-light transition-colors">
        {t('ad.seeOffer')}
      </button>
    </div>
  );
}
