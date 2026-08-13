'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-art" role="img" aria-label="Translucent glass tooth with soft light ribbons"></div>
      <div className="hero-wash"></div>

      <div className="shell">
        <div className="hero-copy">
          <span className="pill pill-hero reveal">
            <span className="pill-dot"></span>
            {t.hero.badge}
          </span>

          <div
            className="role-toggle mt-[22px] reveal"
            id="hero-role-toggle"
            role="tablist"
            aria-label={t.hero.roleToggleAria}
            style={{ transitionDelay: '40ms' }}
          >
            <button
              type="button"
              className="btn btn-primary role-opt"
              id="role-tab-patients"
              role="tab"
              aria-selected="true"
              aria-controls="hero-role-panel"
              tabIndex={0}
              data-role="patients"
            >
              {t.hero.rolePatients}
            </button>
            <button
              type="button"
              className="btn btn-ghost role-opt"
              id="role-tab-clinics"
              role="tab"
              aria-selected="false"
              aria-controls="hero-role-panel"
              tabIndex={-1}
              data-role="clinics"
            >
              {t.hero.roleClinics}
            </button>
          </div>

          {/* The headline, sub-copy and CTA labels below are updated imperatively
              by useSiteInteractions (hooks/useSiteInteractions.js) whenever the
              role or language changes — this markup is only the initial paint. */}
          <div className="hero-variant" id="hero-role-panel" role="tabpanel" aria-labelledby="role-tab-patients">
            <h1 className="t-display mt-[33px] reveal" id="hero-headline" style={{ transitionDelay: '60ms' }}>
              Care for<br />
              your smile.<br />
              <span className="accent">Confidently.</span>
            </h1>

            <p className="t-lead mt-[21px] max-w-[522px] reveal" id="hero-sub" style={{ transitionDelay: '120ms' }}>
              Find trusted dentists, book appointments, follow your treatment plan, and keep all your
              dental records organized.
            </p>

            <div className="mt-[44px] flex flex-wrap items-center gap-4 reveal" style={{ transitionDelay: '180ms' }}>
              <a href="#for-patients" className="btn btn-primary" id="hero-cta-primary">
                <span className="btn-label">Find a Dentist</span>
                <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </a>
              <a href="#how-it-works" className="btn btn-ghost" id="hero-cta-secondary">
                <span className="btn-play">
                  <svg className="icon icon-xs" aria-hidden="true"><use href="#i-play" /></svg>
                </span>
                <span className="btn-label">How Dentlora Works</span>
              </a>
            </div>
          </div>

          <dl className="mt-[45px] flex flex-wrap gap-x-[31px] gap-y-6 reveal" style={{ transitionDelay: '240ms' }}>
            <div className="trust-item">
              <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-shield" /></svg></span>
              <div>
                <dt>{t.hero.trust[0].title}</dt>
                <dd>{t.hero.trust[0].desc}</dd>
              </div>
            </div>
            <div className="trust-item">
              <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-star" /></svg></span>
              <div>
                <dt>{t.hero.trust[1].title}</dt>
                <dd>{t.hero.trust[1].desc}</dd>
              </div>
            </div>
            <div className="trust-item">
              <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-heart" /></svg></span>
              <div>
                <dt>{t.hero.trust[2].title}</dt>
                <dd>{t.hero.trust[2].desc}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
