'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="site-header" id="site-header">
      <div className="shell flex items-center justify-between gap-6">
        <a
          href="#home"
          className="logo shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
          aria-label={t.nav.logoAria}
        >
          <img src="/brand-assets/dentlora-wordmark.png" alt="Dentlora" width="1024" height="228" />
        </a>

        <nav className="nav-desktop items-center gap-8" aria-label={t.nav.primaryAria}>
          <a href="#home" className="nav-link is-active">{t.nav.home}</a>
          <a href="#features" className="nav-link">{t.nav.features}</a>
          <a href="#for-patients" className="nav-link">{t.nav.forPatients}</a>
          <a href="#about" className="nav-link">{t.nav.about}</a>
          <a href="#how-it-works" className="nav-link">{t.nav.howItWorks}</a>
        </nav>

        <a href="#for-patients" className="header-cta btn btn-primary btn-sm shrink-0">
          {t.nav.findDentist}
          <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow-right" /></svg>
        </a>

        <button
          className="nav-toggle"
          id="nav-toggle"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobile-nav"
        >
          <svg className="icon" id="nav-toggle-icon" aria-hidden="true"><use href="#i-menu" /></svg>
        </button>
      </div>
    </header>
  );
}
