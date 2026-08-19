'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();
  const f = t.features;

  return (
    <section className="section" id="features">
      <div className="section-art features-art feathered-art"></div>

      <div className="shell-wide">
        <div className="text-center">
          <span className="pill pill-tag reveal">{f.badge}</span>

          <h2 className="t-h2-center mt-7 reveal" style={{ transitionDelay: '60ms' }}>
            <span data-for="patients">{f.title.patients.line1}<br /><span className="accent">{f.title.patients.accent}</span></span>
            <span data-for="clinics">{f.title.clinics.line1}<br /><span className="accent">{f.title.clinics.accent}</span></span>
          </h2>

          <p className="t-sub mt-6 mx-auto max-w-[600px] reveal" style={{ transitionDelay: '120ms' }}>
            <span data-for="patients">{f.sub.patients}</span>
            <span data-for="clinics">{f.sub.clinics}</span>
          </p>
        </div>

        <div className="mt-[76px] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 01 */}
          <article className="feature-card reveal">
            <p className="feature-card__num">01</p>
            <h3 className="t-card-title"><span data-for="patients">{f.card1.title.patients}</span><span data-for="clinics">{f.card1.title.clinics}</span></h3>
            <p className="feature-card__body">
              <span data-for="patients">{f.card1.body.patients}</span>
              <span data-for="clinics">{f.card1.body.clinics}</span>
            </p>

            <div className="mock">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[14.5px] font-medium text-navy">{f.card1.mock.label}</span>
                <span className="text-[13.5px] font-semibold text-brand">75%</span>
              </div>

              <div className="progress-track mt-3.5">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>

              <ul className="mt-5 flex flex-col gap-3">
                <li className="mock-row">
                  <svg className="icon icon-sm text-brand" aria-hidden="true"><use href="#i-check-circle" /></svg>
                  {f.card1.mock.steps[0]}
                </li>
                <li className="mock-row">
                  <svg className="icon icon-sm text-brand" aria-hidden="true"><use href="#i-check-circle" /></svg>
                  {f.card1.mock.steps[1]}
                </li>
                <li className="mock-row">
                  <svg className="icon icon-sm" style={{ color: '#F0A93B' }} aria-hidden="true"><use href="#i-activity" /></svg>
                  {f.card1.mock.steps[2]}
                </li>
                <li className="mock-row" style={{ color: 'var(--ink-faint)' }}>
                  <svg className="icon icon-sm" style={{ color: '#C3CCDB' }} aria-hidden="true"><use href="#i-circle" /></svg>
                  {f.card1.mock.steps[3]}
                </li>
              </ul>

              <span className="mock-badge"><svg className="icon icon-xs" aria-hidden="true"><use href="#i-chart" /></svg></span>
            </div>
          </article>

          {/* 02 */}
          <article className="feature-card reveal" style={{ transitionDelay: '80ms' }}>
            <p className="feature-card__num">02</p>
            <h3 className="t-card-title"><span data-for="patients">{f.card2.title.patients}</span><span data-for="clinics">{f.card2.title.clinics}</span></h3>
            <p className="feature-card__body">
              <span data-for="patients">{f.card2.body.patients}</span>
              <span data-for="clinics">{f.card2.body.clinics}</span>
            </p>

            <div className="mock">
              <ol className="flex flex-col gap-5">
                <li className="timeline-item is-current">
                  <p className="text-[12.5px] font-medium text-brand">{f.card2.mock.timeline[0].date}</p>
                  <p className="text-[14.5px] font-medium text-navy mt-0.5">{f.card2.mock.timeline[0].label}</p>
                </li>
                <li className="timeline-item">
                  <p className="text-[12.5px] text-faint">{f.card2.mock.timeline[1].date}</p>
                  <p className="text-[14.5px] font-medium text-navy mt-0.5">{f.card2.mock.timeline[1].label}</p>
                </li>
                <li className="timeline-item">
                  <p className="text-[12.5px] text-faint">{f.card2.mock.timeline[2].date}</p>
                  <p className="text-[14.5px] font-medium text-navy mt-0.5">{f.card2.mock.timeline[2].label}</p>
                </li>
              </ol>

              <span className="mock-badge"><svg className="icon icon-xs" aria-hidden="true"><use href="#i-activity" /></svg></span>
            </div>
          </article>

          {/* 03 */}
          <article className="feature-card reveal" style={{ transitionDelay: '160ms' }}>
            <p className="feature-card__num">03</p>
            <h3 className="t-card-title"><span data-for="patients">{f.card3.title.patients}</span><span data-for="clinics">{f.card3.title.clinics}</span></h3>
            <p className="feature-card__body">
              <span data-for="patients">{f.card3.body.patients}</span>
              <span data-for="clinics">{f.card3.body.clinics}</span>
            </p>

            <div className="mock">
              <ul className="flex flex-col gap-3">
                <li className="mock-file">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-file" /></svg></span>
                  <span className="text-[14.5px] font-medium text-navy flex-1">{f.card3.mock.files[0]}</span>
                  <span className="text-[12px] font-semibold tracking-wider text-faint">{f.card3.mock.fileType}</span>
                </li>
                <li className="mock-file">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-plan" /></svg></span>
                  <span className="text-[14.5px] font-medium text-navy flex-1">{f.card3.mock.files[1]}</span>
                  <span className="text-[12px] font-semibold tracking-wider text-faint">{f.card3.mock.fileType}</span>
                </li>
                <li className="mock-file">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-file" /></svg></span>
                  <span className="text-[14.5px] font-medium text-navy flex-1">{f.card3.mock.files[2]}</span>
                  <span className="text-[12px] font-semibold tracking-wider text-faint">{f.card3.mock.fileType}</span>
                </li>
              </ul>

              <span className="mock-badge"><svg className="icon icon-xs" aria-hidden="true"><use href="#i-shield" /></svg></span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
