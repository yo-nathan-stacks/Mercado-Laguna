// JobsSection.jsx — Comarca Lagunera job listings
import { jobs } from '../data/jobs';

export default function JobsSection({ t }) {
  return (
    <section id="empleos" className="px-4 sm:px-10 py-13">
      <div className="flex items-end justify-between mb-6 flex-wrap gap-2.5">
        <div>
          <div className="font-display text-[1.45rem] font-extrabold tracking-[-.5px]">
            {t('jobs.title1')} <span className="text-gold">{t('jobs.title2')}</span>
          </div>
          <div className="text-muted text-[.83rem] mt-1">{t('jobs.subtitle')}</div>
        </div>
        <a href="#" className="text-gold text-[.8rem] font-bold no-underline border border-gold/30 px-3 py-1.5 rounded-md hover:bg-gold/[.08] transition-colors whitespace-nowrap">
          {t('jobs.seeAll')}
        </a>
      </div>

      <div className="flex flex-col gap-2.5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-ink-card border border-white/[.07] rounded-2xl px-5 py-4 flex gap-4 items-center cursor-pointer transition-all hover:border-accent-blue/30 hover:translate-x-1"
          >
            {/* Logo */}
            <div className="w-12 h-12 rounded-[10px] bg-ink-card2 flex items-center justify-center text-2xl shrink-0">
              {job.logo}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="font-bold text-[.92rem] mb-[3px]">{job.title}</div>
              <div className="text-[.8rem] text-muted mb-[7px]">{job.company}</div>
              <div className="flex gap-1.5 flex-wrap">
                {job.tags.map((tag, i) => (
                  <span key={i} className="bg-ink-card2 border border-white/[.07] text-muted text-[.68rem] font-semibold px-2 py-[3px] rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="text-right shrink-0">
              <div className={`font-display font-black text-[.95rem] ${job.payUnit === 'USD' ? 'text-accent-blue' : 'text-accent-blue'}`}>
                {job.pay}
              </div>
              <div className="text-[.7rem] text-muted mt-[3px]">{job.postedAgo}</div>
              <button className="mt-[7px] bg-accent-blue text-white border-none px-3.5 py-1.5 rounded-lg font-bold text-[.76rem] cursor-pointer font-body hover:opacity-85 transition-opacity">
                {t('jobs.apply')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
