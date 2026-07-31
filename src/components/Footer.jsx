// Footer.jsx — Site footer with brand, columns, social, copyright
import { buildWhatsAppUrl, generalContactMessage } from '../utils/whatsapp';

export default function Footer({ t }) {
  return (
    <footer className="px-4 sm:px-10 pt-11 pb-6 border-t border-white/[.07]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)] gap-9 mb-9">
        {/* Brand */}
        <div>
          <div className="font-display text-[1.45rem] font-black tracking-[-1px] mb-2.5">
            Mercado<em className="text-gold not-italic">Central</em>
          </div>
          <p className="text-muted text-[.82rem] leading-relaxed max-w-[220px]">{t('footer.tagline')}</p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-bold text-[.83rem] mb-3 text-textmain">{t('footer.explore')}</h4>
          <a href="#empleos" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">{t('footer.explore.jobs')}</a>
          <a href="#autopartes" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">{t('footer.explore.autoParts')}</a>
          <a href="#intercambios" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">{t('footer.explore.swaps')}</a>
          <a href="#internacional" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">{t('footer.explore.intl')}</a>
          <a href="#categorias" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">{t('footer.explore.services')}</a>
        </div>

        {/* Payments */}
        <div>
          <h4 className="font-bold text-[.83rem] mb-3 text-textmain">{t('footer.payments')}</h4>
          <a href="#pagos" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">{t('footer.payments.paypal')}</a>
          <a href="#pagos" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">{t('footer.payments.codi')}</a>
          <a href="#pagos" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">{t('footer.payments.nu')}</a>
          <a href="#pagos" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">{t('footer.payments.calc')}</a>
        </div>

        {/* Cities */}
        <div>
          <h4 className="font-bold text-[.83rem] mb-3 text-textmain">{t('footer.cities')}</h4>
          <a href="#" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">Torreón, Coah.</a>
          <a href="#" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">Gómez Palacio, Dgo.</a>
          <a href="#" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">Lerdo, Dgo.</a>
          <a href="#" className="block text-muted text-[.8rem] mb-[7px] no-underline hover:text-gold transition-colors">Matamoros, Coah.</a>
        </div>
      </div>

      <div className="flex justify-between items-center pt-[18px] border-t border-white/[.07] flex-wrap gap-2.5">
        <span className="text-muted text-[.75rem]">{t('footer.copyright')}</span>
        <div className="flex gap-2">
          {['📩', '📸', '🐦', '💬'].map((icon, i) => (
            <a
              key={i}
              href={i === 3 ? buildWhatsAppUrl(null, generalContactMessage()) : '#'}
              target={i === 3 ? '_blank' : undefined}
              rel={i === 3 ? 'noopener noreferrer' : undefined}
              className="w-[30px] h-[30px] rounded-lg bg-ink-card border border-white/[.07] flex items-center justify-center text-[.85rem] cursor-pointer hover:border-gold transition-all hover:-translate-y-0.5 no-underline"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
