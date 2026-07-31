// useCurrency.js — Currency toggle (MXN/USD) with live price conversion
import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { heroRates } from '../data/fxRates';

export function useCurrency() {
  const [currency, setCurrency] = useLocalStorage('mc-currency', 'MXN');

  const changeCurrency = useCallback(
    (newCurr) => {
      setCurrency(newCurr);
    },
    [setCurrency]
  );

  // Convert a price from MXN to the active currency
  const convertPrice = useCallback(
    (priceMXN) => {
      const rate = heroRates[currency] ?? 1;
      const converted = Math.round(priceMXN * rate);
      return converted.toLocaleString('en-US', { maximumFractionDigits: 0 });
    },
    [currency]
  );

  // Format a price with the active currency symbol/code
  const formatPrice = useCallback(
    (priceMXN, opts = {}) => {
      const { prefix = '', suffix = '' } = opts;
      const converted = convertPrice(priceMXN);
      const symbol = currency === 'MXN' ? '$' : '$';
      return `${prefix}${symbol}${converted} ${currency}${suffix}`;
    },
    [convertPrice, currency]
  );

  return { currency, changeCurrency, convertPrice, formatPrice };
}
