'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;
  const icons = ['i-calendar', 'i-plan', 'i-activity', 'i-pill', 'i-heart'];

  return (
    <section className="section" id="how-it-works">
      <div className="section-art steps-art"></div>

      <div className="shell-wide">
        <div className="text-center">
          <span className="pill pill-tag reveal">
            <svg className="icon icon-xs" aria-hidden="true"><use href="#i-sparkles" /></svg>
            {h.badge}
          </span>

          <h2 className="t-h2-center mt-7 reveal" style={{ transitionDelay: '60ms' }}>
            <span data-for="patients">{h.title.patients.line1}<br />{h.title.patients.line2Prefix}<span className="accent">{h.title.patients.accent}</span></span>
            <span data-for="clinics">{h.title.clinics.line1}<br />{h.title.clinics.line2Prefix}<span className="accent">{h.title.clinics.accent}</span></span>
          </h2>

          <p className="t-sub mt-6 mx-auto max-w-[520px] reveal" style={{ transitionDelay: '120ms' }}>
            <span data-for="patients">{h.sub.patients}</span>
            <span data-for="clinics">{h.sub.clinics}</span>
          </p>
        </div>

        <div className="steps-panel mt-[70px]">
          <ol className="steps-grid">
            {h.steps.map((step, i) => (
              <li
                className="step reveal"
                key={i}
                style={{ transitionDelay: `${200 + i * 110}ms` }}
              >
                <span className="icon-orb"><svg className="icon icon-lg" aria-hidden="true"><use href={`#${icons[i]}`} /></svg></span>
                <div className="step-body">
                  <p className="step-num">{String(i + 1).padStart(2, '0')}</p>
                  <div className="step-card">
                    <h3><span data-for="patients">{step.title.patients}</span><span data-for="clinics">{step.title.clinics}</span></h3>
                    <p><span data-for="patients">{step.desc.patients}</span><span data-for="clinics">{step.desc.clinics}</span></p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA banner */}
        <div className="cta-card mt-10 reveal" id="contact">
          <div className="cta-copy">
            <h2 className="t-h3">
              <span data-for="patients">{h.cta.title.patients.prefix}<span className="accent">{h.cta.title.patients.accent}</span></span>
              <span data-for="clinics">{h.cta.title.clinics.prefix}<span className="accent">{h.cta.title.clinics.accent}</span></span>
            </h2>

            <p className="t-lead mt-7 max-w-[600px]">
              <span data-for="patients">{h.cta.sub.patients}</span>
              <span data-for="clinics">{h.cta.sub.clinics}</span>
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-4">
              <a href="#for-patients" className="btn btn-primary">
                <span className="btn-label" data-for="patients">{h.cta.primary.patients}</span>
                <span className="btn-label" data-for="clinics">{h.cta.primary.clinics}</span>
                <svg className="icon icon-sm" aria-hidden="true"><use href="#i-arrow-right" /></svg>
              </a>
              <a href="#how-it-works" className="btn btn-ghost">
                <span className="btn-play"><svg className="icon icon-xs" aria-hidden="true"><use href="#i-play" /></svg></span>
                <span className="btn-label" data-for="patients">{h.cta.secondary.patients}</span>
                <span className="btn-label" data-for="clinics">{h.cta.secondary.clinics}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}