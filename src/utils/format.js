// format.js — Number and currency formatting utilities

export function formatNumber(num, opts = {}) {
  return (num ?? 0).toLocaleString('en-US', {
    maximumFractionDigits: opts.maxDigits ?? 0,
    minimumFractionDigits: opts.minDigits ?? 0,
  });
}

export function formatPriceMXN(price) {
  return `$${formatNumber(price)} MXN`;
}

export function formatRating(rating) {
  return rating?.toFixed(1) ?? '—';
}
