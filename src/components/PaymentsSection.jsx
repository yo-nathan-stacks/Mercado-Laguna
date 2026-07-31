// PaymentsSection.jsx — Payment methods + transfer calculator widget
import { paymentMethods } from '../data/payments';
import { currencies, paymentFees } from '../data/fxRates';
import { useTransferCalc } from '../hooks/useTransferCalc';

const badgeClassMap = {
  intl: 'bg-accent-purple text-white',
  local: 'bg-gold text-black',
  dig: 'bg-teal text-black',
};

export default function PaymentsSection({ t, lang }) {
  const calc = useTransferCalc();

  return (
    <section id="pagos" className="px-4 sm:px-10 py-13">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left — Payment methods */}
        <div>
          <h2 className="font-display text-2xl font-extrabold mb-3">
            {t('pay.title1')} <span className="text-gold">{t('pay.title2')}</span>
          </h2>
          <p className="text-muted text-[.83rem] leading-relaxed mb-5">{t('pay.subtitle')}</p>

          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center gap-3 bg-ink-card border border-white/[.07] rounded-xl p-3.5 hover:border-gold/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-ink-card2 border border-white/[.07] flex items-center justify-center text-2xl shrink-0">
                  {method.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[.92rem]">{method.name}</div>
                  <div className="text-muted text-[.78rem] leading-snug">{t(method.descKey)}</div>
                </div>
                <span className={`text-[.62rem] font-extrabold px-2 py-1 rounded uppercase tracking-wide shrink-0 ${badgeClassMap[method.badgeClass]}`}>
                  {t(method.badgeKey)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Transfer calculator widget */}
        <div className="bg-ink-card border border-white/[.07] rounded-2xl p-5 h-fit">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">💱</span>
            <span className="font-display font-extrabold text-[.95rem]">{t('tw.title')}</span>
          </div>

          {/* You send */}
          <div className="mb-3">
            <label className="block text-[.78rem] text-muted mb-1.5">{t('tw.youSend')}</label>
            <div className="flex">
              <input
                type="number"
                value={calc.sendAmount}
                onChange={(e) => calc.setSendAmount(parseFloat(e.target.value) || 0)}
                className="flex-1 px-3 py-2.5 bg-ink-card2 border border-white/[.07] rounded-l-lg text-textmain text-[.9rem] outline-none focus:border-gold/40"
              />
              <select
                value={calc.fromCurr}
                onChange={(e) => calc.setFromCurr(e.target.value)}
                className="px-3 bg-ink-card2 border border-l-0 border-white/[.07] rounded-r-lg text-textmain text-[.85rem] outline-none cursor-pointer"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>{c.code} {c.flag}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Arrow */}
          <div className="text-center text-gold text-xl mb-3">⇅</div>

          {/* They receive */}
          <div className="mb-4">
            <label className="block text-[.78rem] text-muted mb-1.5">{t('tw.theyReceive')}</label>
            <div className="flex">
              <input
                type="text"
                readOnly
                value={calc.formattedResult}
                className="flex-1 px-3 py-2.5 bg-ink-card2 border border-white/[.07] rounded-l-lg text-textmain text-[.9rem] outline-none opacity-80"
              />
              <select
                value={calc.toCurr}
                onChange={(e) => calc.setToCurr(e.target.value)}
                className="px-3 bg-ink-card2 border border-l-0 border-white/[.07] rounded-r-lg text-textmain text-[.85rem] outline-none cursor-pointer"
              >
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>{c.code} {c.flag}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          <div className="bg-ink-card2 rounded-lg p-3 mb-4">
            <div className="font-display font-black text-lg text-gold">
              = ${calc.formattedResult} {calc.toCurr}
            </div>
            <div className="text-[.72rem] text-muted mt-1">
              {t('tw.rate')}: {calc.rateLabel} · {t('tw.updatedNow')}
            </div>
          </div>

          {/* Method select */}
          <select
            value={calc.method}
            onChange={(e) => calc.setMethod(e.target.value)}
            className="w-full px-3 py-2.5 bg-ink-card2 border border-white/[.07] rounded-lg text-textmain text-[.85rem] outline-none cursor-pointer mb-3"
          >
            {Object.entries(paymentFees).map(([key, val]) => (
              <option key={key} value={key}>{val.label[lang] || val.label.es}</option>
            ))}
          </select>

          {/* Send button */}
          <button className="w-full py-3 rounded-lg bg-gold text-black font-bold text-[.88rem] hover:bg-gold-light transition-colors">
            {t('tw.send')}
          </button>

          <div className="text-[.7rem] text-muted text-center mt-2">{t('tw.feesNote')}</div>
        </div>
      </div>
    </section>
  );
}
