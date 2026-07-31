// CategoryBar.jsx — Horizontal scrolling category filter
import { categoryBarItems } from '../data/categories';

const colorMap = {
  gold: 'hover:border-gold/30',
  blue: 'hover:border-accent-blue/30',
  orange: 'hover:border-accent-orange/30',
  green: 'hover:border-accent-green/30',
  teal: 'hover:border-teal/30',
  red: 'hover:border-accent-red/30',
  purple: 'hover:border-accent-purple/30',
};

export default function CategoryBar({ t, activeCategory, onSelectCategory }) {
  return (
    <div id="categorias" className="border-b border-white/[.07] bg-ink/95 backdrop-blur-md sticky top-16 z-[150]">
      <div className="flex gap-1 px-4 sm:px-10 py-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {categoryBarItems.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[.8rem] font-semibold whitespace-nowrap transition-all border ${
              activeCategory === cat.id
                ? 'bg-gold/10 text-gold border-gold/30'
                : `text-muted border-transparent hover:bg-white/[.04] ${colorMap[cat.color] || ''}`
            }`}
          >
            <span>{cat.icon}</span>
            <span>{t(cat.nameKey)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
