'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TermsModal from './TermsModal';

export default function Footer() {
  const { t, lang, setLang } = useLanguage();
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="section-art footer-art"></div>

      <div className="shell-wide">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          <div className="max-w-[420px]">
            <img src="/brand-assets/dentlora-wordmark.png" alt="Dentlora" width="1024" height="228" className="logo-mark h-[54px] w-auto" />
            <p className="t-overline mt-5" style={{ color: '#63A2D5' }}>{t.footer.tagline}</p>
            <p className="t-body mt-3">{t.footer.description}</p>

            <a href="mailto:Support@dentlora.com" className="footer-email mt-6">
              <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-mail" /></svg></span>
              Support@dentlora.com
            </a>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <nav className="flex flex-wrap gap-x-9 gap-y-3 lg:pt-2" aria-label={t.footer.footerNavAria}>
              <a href="#home" className="footer-link">{t.nav.home}</a>
              <a href="#features" className="footer-link">{t.nav.features}</a>
              <a href="#how-it-works" className="footer-link">{t.nav.howItWorks}</a>
              <a href="#contact" className="footer-link">{t.nav.contact}</a>
            </nav>

            <div className="flex flex-col gap-3.5 lg:items-end">
              <p className="t-overline" style={{ color: '#63A2D5' }}>{t.footer.followUs}</p>

              {/* TODO: replace each href with the real Dentlora profile URL before going live */}
              <ul className="social-row">
                <li>
                  <a href="#" className="social-link" aria-label={t.footer.social.instagram} rel="noopener noreferrer">
                    <svg className="icon icon-sm" aria-hidden="true"><use href="#i-instagram" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link" aria-label={t.footer.social.linkedin} rel="noopener noreferrer">
                    <svg className="icon icon-sm" aria-hidden="true"><use href="#i-linkedin" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link" aria-label={t.footer.social.facebook} rel="noopener noreferrer">
                    <svg className="icon icon-sm" aria-hidden="true"><use href="#i-facebook" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link" aria-label={t.footer.social.tiktok} rel="noopener noreferrer">
                    <svg className="icon icon-sm" aria-hidden="true"><use href="#i-tiktok" /></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="mt-11 border-0 h-px" style={{ background: 'var(--hairline)' }} />

        <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-[15px]" style={{ color: 'var(--ink-faint)' }}>{t.footer.copyright}</p>
            <button
              type="button"
              className="footer-link text-[15px] underline-offset-4 hover:underline"
              onClick={() => setIsTermsOpen(true)}
            >
              {t.footer.termsLink}
            </button>
          </div>

          <div className="lang-switch">
            <svg className="icon icon-sm" style={{ color: 'var(--brand)' }} aria-hidden="true"><use href="#i-globe" /></svg>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              English
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              lang="ar"
              className={lang === 'ar' ? 'is-active' : ''}
              onClick={() => setLang('ar')}
              aria-pressed={lang === 'ar'}
            >
              العربية
            </button>
          </div>
        </div>
      </div>

      <TermsModal open={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
}