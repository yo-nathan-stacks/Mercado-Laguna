// Header.jsx — Navigation with logo, search, links, currency & language toggles, post button
export default function Header({ t, lang, changeLang, currency, changeCurrency, search, onSearchChange, onPost }) {
  const langButtons = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
  ];

  const navLinks = [
    { href: '#categorias', key: 'nav.home' },
    { href: '#empleos', key: 'nav.jobs' },
    { href: '#autopartes', key: 'nav.autoParts' },
    { href: '#intercambios', key: 'nav.swaps' },
    { href: '#pagos', key: 'nav.payments' },
    { href: '#internacional', key: 'nav.international' },
  ];

  return (
    <nav className="flex items-center gap-4 px-4 sm:px-10 h-16 bg-ink/[.97] backdrop-blur-xl border-b border-white/[.07] sticky top-0 z-[200]">
      {/* Logo */}
      <div className="font-display text-[1.45rem] font-black tracking-[-1px] whitespace-nowrap mr-1">
        Mercado<em className="text-gold not-italic">Central</em>
        <small className="block text-[.55rem] text-muted font-normal tracking-[.5px] -mt-1 uppercase">
          Torreón · Gómez · Lerdo · Matamoros
        </small>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-[400px] relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">🔍</span>
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t('nav.searchPlaceholder')}
          className="w-full py-2 pl-10 pr-4 bg-ink-card2 border border-white/[.07] rounded-lg text-textmain text-[.85rem] outline-none focus:border-gold/40 transition-colors placeholder:text-muted"
        />
      </div>

      {/* Nav Links */}
      <div className="hidden lg:flex gap-4">
        {navLinks.map((link) => (
          <a key={link.key} href={link.href} className="text-[.82rem] font-semibold text-muted hover:text-gold transition-colors no-underline whitespace-nowrap">
            {t(link.key)}
          </a>
        ))}
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-2 ml-auto">
        {/* Currency toggle */}
        <div className="flex bg-ink-card2 rounded-md p-0.5 border border-white/[.07]">
          {['MXN', 'USD'].map((c) => (
            <button
              key={c}
              onClick={() => changeCurrency(c)}
              className={`px-2 py-1 rounded text-[.7rem] font-bold transition-colors ${
                currency === c ? 'bg-gold text-black' : 'text-muted hover:text-textmain'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Language toggle */}
        <div className="flex bg-ink-card2 rounded-md p-0.5 border border-white/[.07]">
          {langButtons.map((l) => (
            <button
              key={l.code}
              onClick={() => changeLang(l.code)}
              className={`px-2 py-1 rounded text-[.7rem] font-bold transition-colors ${
                lang === l.code ? 'bg-teal text-black' : 'text-muted hover:text-textmain'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Post button */}
        <button
          onClick={onPost}
          className="bg-gold text-black border-none px-3.5 py-2 rounded-lg font-bold text-[.82rem] cursor-pointer font-body whitespace-nowrap hover:bg-gold-light transition-colors"
        >
          {t('nav.post')}
        </button>
      </div>
    </nav>
  );
}
