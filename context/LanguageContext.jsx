'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');
  const [isReady, setIsReady] = useState(false);

  // Restore saved language only after hydration
  useEffect(() => {
    const saved = window.localStorage.getItem('dentlora-lang');

    if (saved === 'ar' || saved === 'en') {
      setLangState(saved);
    }

    setIsReady(true);
  }, []);

  // Keep document language/direction in sync
  useEffect(() => {
    if (!isReady) return;

    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    window.localStorage.setItem('dentlora-lang', lang);

    window.dispatchEvent(
      new CustomEvent('dentlora:langchange', {
        detail: { lang },
      })
    );
  }, [lang, isReady]);

  const setLang = (next) => {
    if (next !== 'en' && next !== 'ar') return;

    setLangState(next);
  };

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  /*
   * Important:
   * Do not render translated content until the saved language
   * has been restored. This prevents hydration mismatch.
   */
  if (!isReady) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }

  return ctx;
}
