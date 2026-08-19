'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function MobileNav({ onTermsClick }) {
  const { t } = useLanguage();

  return (
    <div className="mobile-nav" id="mobile-nav" aria-label={t.nav.mobileNavAria}>
      <a href="#home">{t.nav.home}</a>
      <a href="#features">{t.nav.features}</a>
      <a href="#for-patients">{t.nav.forPatients}</a>
      <a href="#about">{t.nav.about}</a>
      <a href="#how-it-works">{t.nav.howItWorks}</a>
      <a href="#contact">{t.nav.contact}</a>
      <button
        type="button"
        className="nav-link"
        onClick={onTermsClick}
      >
        {t.nav.TermsModal}
      </button>
      <a
        href="#for-patients"
        className="btn btn-primary mt-7 !border-transparent"
      >
        {t.nav.findDentist}
        <svg className="icon icon-sm" aria-hidden="true">
          <use href="#i-arrow-right" />
        </svg>
      </a>
    </div>
  );
}