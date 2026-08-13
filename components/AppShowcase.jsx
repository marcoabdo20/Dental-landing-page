'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AppShowcase() {
  const { t } = useLanguage();
  const n = t.appShowcase.notes;

  return (
    <section className="section app-showcase" id="patient-app" aria-labelledby="app-showcase-title">
      <div className="shell">
        <div className="showcase-scroll">
          <div className="phone-stage reveal" style={{ transitionDelay: '180ms' }}>
            <div className="app-showcase-head">
              <span className="pill pill-tag">
                <svg className="icon icon-xs" aria-hidden="true"><use href="#i-sparkles" /></svg>
                {t.appShowcase.badge}
              </span>

              <h2 className="t-h2 mt-7" id="app-showcase-title">
                {t.appShowcase.titlePrefix}<span className="accent">{t.appShowcase.titleAccent}</span>
              </h2>

              <p className="t-sub mt-6">{t.appShowcase.sub}</p>

              <div className="role-toggle phone-tabs mt-10" id="app-tabs" role="tablist" aria-label={t.appShowcase.tabsAria}>
                <button type="button" className="btn btn-primary role-opt" id="app-tab-book" role="tab" aria-selected="true" aria-controls="app-panel-book" tabIndex={0}>
                  <svg className="icon" aria-hidden="true"><use href="#i-calendar" /></svg>{t.appShowcase.tabs.book}
                </button>
                <button type="button" className="btn btn-ghost role-opt" id="app-tab-track" role="tab" aria-selected="false" aria-controls="app-panel-track" tabIndex={-1}>
                  <svg className="icon" aria-hidden="true"><use href="#i-chart" /></svg>{t.appShowcase.tabs.track}
                </button>
                <button type="button" className="btn btn-ghost role-opt" id="app-tab-records" role="tab" aria-selected="false" aria-controls="app-panel-records" tabIndex={-1}>
                  <svg className="icon" aria-hidden="true"><use href="#i-file" /></svg>{t.appShowcase.tabs.records}
                </button>
                <button type="button" className="btn btn-ghost role-opt" id="app-tab-download" role="tab" aria-selected="false" aria-controls="app-panel-download" tabIndex={-1}>
                  <svg className="icon" aria-hidden="true"><use href="#i-download" /></svg>{t.appShowcase.tabs.download}
                </button>
              </div>
            </div>

            <div className="phone-media">
              <dl className="phone-notes" data-notes-for="book" id="app-panel-book" role="tabpanel" aria-labelledby="app-tab-book" data-active="true">
                <div className="phone-note" data-side="left" data-slot="1">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-check-circle" /></svg></span>
                  <div><dt>{n.book[0].title}</dt><dd>{n.book[0].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="right" data-slot="2">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-globe" /></svg></span>
                  <div><dt>{n.book[1].title}</dt><dd>{n.book[1].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="left" data-slot="3" data-depth="far">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-bell" /></svg></span>
                  <div><dt>{n.book[2].title}</dt><dd>{n.book[2].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="right" data-slot="4" data-depth="far">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-star" /></svg></span>
                  <div><dt>{n.book[3].title}</dt><dd>{n.book[3].desc}</dd></div>
                </div>
              </dl>

              <dl className="phone-notes" data-notes-for="track" id="app-panel-track" role="tabpanel" aria-labelledby="app-tab-track" data-active="false">
                <div className="phone-note" data-side="left" data-slot="1">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-activity" /></svg></span>
                  <div><dt>{n.track[0].title}</dt><dd>{n.track[0].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="right" data-slot="2">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-calendar" /></svg></span>
                  <div><dt>{n.track[1].title}</dt><dd>{n.track[1].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="left" data-slot="3" data-depth="far">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-trending" /></svg></span>
                  <div><dt>{n.track[2].title}</dt><dd>{n.track[2].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="right" data-slot="4" data-depth="far">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-pill" /></svg></span>
                  <div><dt>{n.track[3].title}</dt><dd>{n.track[3].desc}</dd></div>
                </div>
              </dl>

              <dl className="phone-notes" data-notes-for="records" id="app-panel-records" role="tabpanel" aria-labelledby="app-tab-records" data-active="false">
                <div className="phone-note" data-side="left" data-slot="1">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-file" /></svg></span>
                  <div><dt>{n.records[0].title}</dt><dd>{n.records[0].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="right" data-slot="2">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-pill" /></svg></span>
                  <div><dt>{n.records[1].title}</dt><dd>{n.records[1].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="left" data-slot="3" data-depth="far">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-folder" /></svg></span>
                  <div><dt>{n.records[2].title}</dt><dd>{n.records[2].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="right" data-slot="4" data-depth="far">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-shield" /></svg></span>
                  <div><dt>{n.records[3].title}</dt><dd>{n.records[3].desc}</dd></div>
                </div>
              </dl>

              <dl className="phone-notes" data-notes-for="download" id="app-panel-download" role="tabpanel" aria-labelledby="app-tab-download" data-active="false">
                <div className="phone-note phone-note-cta" data-side="left" data-slot="1">
                  <span className="icon-circle"><svg className="icon icon-sm icon-brand" aria-hidden="true"><use href="#i-apple" /></svg></span>
                  <div><dt>{n.download[0].title}</dt><dd>{n.download[0].desc}</dd></div>
                  <span className="soon-tag">{t.appShowcase.soon}</span>
                </div>
                <div className="phone-note phone-note-cta" data-side="right" data-slot="2">
                  <span className="icon-circle"><svg className="icon icon-sm icon-brand" aria-hidden="true"><use href="#i-google-play" /></svg></span>
                  <div><dt>{n.download[1].title}</dt><dd>{n.download[1].desc}</dd></div>
                  <span className="soon-tag">{t.appShowcase.soon}</span>
                </div>
                <div className="phone-note" data-side="left" data-slot="3" data-depth="far">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-zap" /></svg></span>
                  <div><dt>{n.download[2].title}</dt><dd>{n.download[2].desc}</dd></div>
                </div>
                <div className="phone-note" data-side="right" data-slot="4" data-depth="far">
                  <span className="icon-circle"><svg className="icon icon-sm" aria-hidden="true"><use href="#i-shield" /></svg></span>
                  <div><dt>{n.download[3].title}</dt><dd>{n.download[3].desc}</dd></div>
                </div>
              </dl>

              <img
                className="phone-shot"
                src="/brand-assets/book-phone.png"
                width="900"
                height="1126"
                loading="lazy"
                decoding="async"
                alt={t.appShowcase.bookingAlt}
              />

              <img className="phone-shot phone-shot-alt" data-shot-for="track" data-active="false" src="/brand-assets/track-phone.png" width="900" height="1126" loading="lazy" decoding="async" alt="" />
              <img className="phone-shot phone-shot-alt" data-shot-for="records" data-active="false" src="/brand-assets/medical-phone.png" width="900" height="1126" loading="lazy" decoding="async" alt="" />
              <img className="phone-shot phone-shot-alt" data-shot-for="download" data-active="false" src="/brand-assets/download-phone.png" width="900" height="1126" loading="lazy" decoding="async" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
