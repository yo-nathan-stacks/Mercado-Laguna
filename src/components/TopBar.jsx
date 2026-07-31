// TopBar.jsx — Gold promo bar with sign in / register links
export default function TopBar({ t }) {
  return (
    <div className="bg-gold px-4 sm:px-10 py-[7px] flex items-center justify-between flex-wrap gap-1.5">
      <span className="text-[.78rem] font-semibold text-black">
        {t('topbar.msg')}{' '}
        <a href="#pricing" className="font-extrabold underline">{t('topbar.plansFrom')}</a>
      </span>
      <div className="flex gap-4 items-center">
        <a href="#" className="text-[.75rem] font-bold text-black opacity-70 hover:opacity-100 transition-opacity no-underline">
          {t('topbar.signIn')}
        </a>
        <a href="#" className="text-[.75rem] font-bold text-black opacity-70 hover:opacity-100 transition-opacity no-underline">
          {t('topbar.register')}
        </a>
      </div>
    </div>
  );
}
