// PublishModal.jsx — Post a listing modal with WhatsApp submission
import { useState } from 'react';
import { cities } from '../data/cities';
import { categoryBarItems } from '../data/categories';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function PublishModal({ t, open, onClose }) {
  const [form, setForm] = useState({
    category: 'vehicles',
    title: '',
    price: '',
    city: 'torreon',
    description: '',
    whatsapp: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const cityName = cities.find((c) => c.id === form.city)?.name || '';
    const catName = categoryBarItems.find((c) => c.id === form.category)?.nameKey || '';
    const msg = `🆕 Nuevo anuncio MercadoCentral\n\n📋 Categoría: ${t(catName)}\n📝 Título: ${form.title}\n💰 Precio: $${form.price} MXN\n📍 Ciudad: ${cityName}\n\n📄 Descripción:\n${form.description}\n\n📞 WhatsApp: ${form.whatsapp}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(buildWhatsAppUrl(form.whatsapp, msg), '_blank', 'noopener,noreferrer');
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const inputClass = 'w-full px-3 py-2.5 bg-ink-card2 border border-white/[.07] rounded-lg text-textmain text-[.85rem] outline-none focus:border-gold/40 transition-colors';
  const labelClass = 'block text-[.78rem] font-semibold text-muted mb-1.5';

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-up"
      onClick={onClose}
    >
      <div
        className="bg-ink-card border border-white/[.07] rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-display text-xl font-extrabold">{t('modal.title')}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-ink-card2 border border-white/[.07] flex items-center justify-center text-muted hover:text-textmain transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✅</div>
            <p className="text-accent-green font-bold text-lg">{t('modal.success')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={labelClass}>{t('modal.category')}</label>
              <select value={form.category} onChange={update('category')} className={inputClass}>
                {categoryBarItems.filter((c) => c.id !== 'all').map((cat) => (
                  <option key={cat.id} value={cat.id}>{t(cat.nameKey)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass}>{t('modal.title.label')}</label>
              <input
                type="text"
                required
                value={form.title}
                onChange={update('title')}
                placeholder={t('modal.title.ph')}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelClass}>{t('modal.price')}</label>
                <input
                  type="number"
                  required
                  min="0"
                  value={form.price}
                  onChange={update('price')}
                  placeholder="0"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>{t('modal.city')}</label>
                <select value={form.city} onChange={update('city')} className={inputClass}>
                  {cities.filter((c) => c.id !== 'global').map((city) => (
                    <option key={city.id} value={city.id}>{city.name}, {city.state}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>{t('modal.desc')}</label>
              <textarea
                required
                rows="3"
                value={form.description}
                onChange={update('description')}
                placeholder={t('modal.desc.ph')}
                className={inputClass + ' resize-none'}
              />
            </div>

            <div>
              <label className={labelClass}>{t('modal.whatsapp')}</label>
              <input
                type="tel"
                required
                value={form.whatsapp}
                onChange={update('whatsapp')}
                placeholder={t('modal.whatsapp.ph')}
                className={inputClass}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-lg border border-white/[.12] text-muted font-bold text-[.87rem] hover:bg-white/[.04] transition-colors"
              >
                {t('modal.cancel')}
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-lg bg-gold text-black font-bold text-[.87rem] hover:bg-gold-light transition-colors"
              >
                {t('modal.submit')}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
