// PricingSection.jsx — Seller subscription plan tiers
import { pricingPlans } from '../data/pricing';

const btnClassMap = {
  out: 'bg-transparent border border-gold/35 text-gold hover:bg-gold/[.07]',
  sol: 'bg-gold text-black hover:bg-gold-light',
  teal: 'bg-teal text-black hover:opacity-90',
};

export default function PricingSection({ t }) {
  return (
    <div id="pricing" className="bg-ink-2 px-4 sm:px-10 py-16">
      <div className="text-center">
        <div className="font-display text-[1.45rem] font-extrabold tracking-[-.5px]">
          {t('pricing.title1')} <span className="text-gold">{t('pricing.title2')}</span>
        </div>
        <p className="text-muted text-[.85rem] mt-1.5">{t('pricing.subtitle')}</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 max-w-[920px] mx-auto mt-9">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-ink-card border rounded-2xl px-5 py-6 transition-all hover:-translate-y-1 ${
              plan.popular ? 'border-gold shadow-[0_0_50px_rgba(240,165,0,.1)]' : 'border-white/[.07]'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-[.66rem] font-extrabold px-3 py-[3px] rounded-full uppercase tracking-wide whitespace-nowrap">
                {t(plan.popularKey)}
              </div>
            )}

            <div className="text-[.72rem] font-bold text-muted uppercase tracking-wider mb-[7px]">{t(plan.nameKey)}</div>
            <div className="font-display text-[2.4rem] font-black text-textmain">
              <sup className="text-base align-super">$</sup>{plan.price}
              <span className="text-[.85rem] text-muted font-normal"> {t('pricing.perMonth')} {plan.priceSuffix}</span>
            </div>
            <div className="text-muted text-[.8rem] my-[7px] mb-4">{t(plan.descKey)}</div>

            <ul className="list-none mb-5">
              {plan.features.map((feat, i) => (
                <li
                  key={i}
                  className={`py-[5px] text-[.82rem] border-b border-white/[.07] flex items-center gap-[7px] ${
                    feat.included ? '' : 'text-muted'
                  }`}
                >
                  <span className={feat.included ? 'text-accent-green font-extrabold' : 'text-muted'}>{feat.included ? '✓' : '✕'}</span>
                  {t(feat.key)}
                </li>
              ))}
            </ul>

            <button className={`w-full py-2.5 rounded-lg border-none font-bold text-[.87rem] cursor-pointer font-body transition-colors ${btnClassMap[plan.btnClass]}`}>
              {t(plan.btnKey)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
