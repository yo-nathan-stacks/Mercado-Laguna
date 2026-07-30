/** Truncate a string to `n` characters with an ellipsis. */
export function truncate(str, n = 80) {
  if (!str) return ''
  return str.length > n ? `${str.slice(0, n).trimEnd()}…` : str
}

/** Format a star rating like "4.8" with one decimal. */
export function formatRating(rating) {
  return Number(rating || 0).toFixed(1)
}

/** Render an array of full stars for a 0–5 rating. */
export function starArray(rating) {
  const full = Math.round(rating)
  return Array.from({ length: 5 }, (_, i) => i < full)
}
