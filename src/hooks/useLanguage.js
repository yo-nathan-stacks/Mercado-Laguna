// useLanguage.js — Trilingual (ES/EN/ZH) language state hook
import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { t as translate, defaultLang, languages } from '../data/i18n';

export function useLanguage() {
  const [lang, setLang] = useLocalStorage('mc-lang', defaultLang);

  const changeLang = useCallback(
    (newLang) => {
      setLang(newLang);
    },
    [setLang]
  );

  // Translate function bound to current language
  const t = useCallback(
    (key) => translate(key, lang),
    [lang]
  );

  return { lang, changeLang, t, languages };
}
