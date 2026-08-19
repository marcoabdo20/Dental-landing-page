'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  // restore a previously chosen language, if any
  useEffect(() => {
    const saved = window.localStorage.getItem('dentlora-lang');
    if (saved === 'en' || saved === 'ar') setLangState(saved);
  }, []);

  // keep <html dir="..." lang="..." data-lang="..."> and localStorage in
  // sync, and tell any imperative (non-React) code that the language changed.
  // Setting `dir` is what flips the whole page to RTL for Arabic (text starts
  // from the right) and back to LTR for English — no CSS file needs to change
  // for this, the browser handles text direction natively from this attribute.
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    window.localStorage.setItem('dentlora-lang', lang);
    window.dispatchEvent(new CustomEvent('dentlora:langchange', { detail: { lang } }));
  }, [lang]);

  const setLang = (next) => {
    if (next !== 'en' && next !== 'ar') return;
    setLangState(next);
  };

  const value = { lang, setLang, t: translations[lang] };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
