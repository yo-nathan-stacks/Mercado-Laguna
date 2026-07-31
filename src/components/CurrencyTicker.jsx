// CurrencyTicker.jsx — Scrollable FX currency rate ticker bar
import { tickerItems } from '../data/fxRates';

export default function CurrencyTicker() {
  return (
    <div className="bg-[#0d1220] border-b border-white/[.07] py-1.5 px-4 sm:px-10 flex gap-7 overflow-x-auto items-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <span className="text-[.68rem] font-extrabold text-muted uppercase tracking-wider whitespace-nowrap">💱</span>
      {tickerItems.map((item, i) => (
        <div key={i} className="flex gap-2 items-center whitespace-nowrap">
          <span className="text-[.75rem] font-bold text-textmain">{item.pair}</span>
          <span className="text-[.75rem] text-gold">{item.rate}</span>
          {item.type === 'up' && (
            <span className="text-[.68rem] px-1.5 py-0.5 rounded bg-accent-green/[.12] text-accent-green font-bold">
              ▲ {item.change}%
            </span>
          )}
          {item.type === 'down' && (
            <span className="text-[.68rem] px-1.5 py-0.5 rounded bg-accent-red/[.1] text-accent-red font-bold">
              ▼ {Math.abs(item.change)}%
            </span>
          )}
          {item.type === 'fee' && (
            <span className="text-[.68rem] px-1.5 py-0.5 rounded bg-accent-red/[.1] text-accent-red font-bold">
              ▼ {item.feeLabel}
            </span>
          )}
          {item.type === 'active' && (
            <span className="text-[.68rem] px-1.5 py-0.5 rounded bg-accent-green/[.12] text-accent-green font-bold">
              ✓ Activo
            </span>
          )}
          {i < tickerItems.length - 1 && <span className="text-white/[.07]">|</span>}
        </div>
      ))}
    </div>
  );
}
