'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Problem() {
  const { t } = useLanguage();
  const p = t.problem;
  const itemIcons = [
    'i-calendar',
    'i-pill',
    'i-plan',
    'i-folder',
    'i-bell',
  ];

  return (
    <section className="section" id="about">
      <div className="section-art problem-art"></div>

      <div className="shell-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          <div className="problem-stage problem-stage--mobile flex flex-col gap-4 md:block">
            <span className="problem-thread" aria-hidden="true"></span>

            <div className="problem-photo reveal">
              <img
                src="/brand-assets/clinic-photo.png"
                alt={p.photoAlt}
                loading="lazy"
              />
            </div>

            <div
              className="float-card fc-1 reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="icon icon-xs text-brand"
                  aria-hidden="true"
                >
                  <use href="#i-calendar" />
                </svg>

                <h4>{p.cards[0].title}</h4>
              </div>

              <p className="mt-2.5">
                <span className="text-navy font-medium">
                  {p.cards[0].date}
                </span>
                &nbsp;
                {p.cards[0].time}
              </p>

              <p className="mt-1">
                {p.cards[0].desc}
              </p>
            </div>

            <div
              className="float-card fc-2 reveal"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="icon icon-xs text-brand"
                  aria-hidden="true"
                >
                  <use href="#i-pill" />
                </svg>

                <h4>{p.cards[1].title}</h4>
              </div>

              <p className="mt-2.5">
                {p.cards[1].desc}
              </p>

              <span className="chip mt-2.5">
                <svg
                  className="icon icon-xs"
                  aria-hidden="true"
                >
                  <use href="#i-file" />
                </svg>

                {p.cards[1].chip}
              </span>
            </div>

            <div
              className="float-card fc-3 reveal"
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="icon icon-xs text-brand"
                  aria-hidden="true"
                >
                  <use href="#i-plan" />
                </svg>

                <h4>{p.cards[2].title}</h4>
              </div>

              <p className="mt-2.5">
                {p.cards[2].desc}
              </p>

              <span className="chip mt-2.5">
                {p.cards[2].chip}
              </span>
            </div>

            <div
              className="float-card fc-4 reveal"
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="icon icon-xs text-brand"
                  aria-hidden="true"
                >
                  <use href="#i-folder" />
                </svg>

                <h4>{p.cards[3].title}</h4>
              </div>

              <div className="flex items-center gap-2 mt-2.5">
                <svg
                  className="icon icon-xs text-brand"
                  aria-hidden="true"
                >
                  <use href="#i-file" />
                </svg>

                <div>
                  <p className="!text-navy">
                    {p.cards[3].line1}
                  </p>

                  <p className="!text-[11.5px]">
                    {p.cards[3].line2}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="float-card fc-5 reveal"
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="icon icon-xs text-brand"
                  aria-hidden="true"
                >
                  <use href="#i-bell" />
                </svg>

                <h4>{p.cards[4].title}</h4>
              </div>

              <p className="mt-2.5">
                {p.cards[4].desc}
              </p>
            </div>
          </div>

          <div>
            <p className="t-overline reveal">
              {p.overline}
            </p>

            <h2
              className="t-h2 mt-4 reveal"
              style={{ transitionDelay: '60ms' }}
            >
              {p.title.line1}
              <br />
              {p.title.line2Prefix}
              <span className="accent">
                {p.title.accent}
              </span>
            </h2>

            <p
              className="t-sub mt-6 max-w-[610px] reveal"
              style={{ transitionDelay: '120ms' }}
            >
              {p.sub}
            </p>

            <hr
              className="mt-9 border-0 h-px"
              style={{ background: 'var(--hairline)' }}
            />

            <div
              className="problem-list mt-9 flex flex-col gap-8"
            >
              {p.items.map((item, i) => (
                <div
                  className="problem-item reveal"
                  key={i}
                  style={{
                    transitionDelay: `${240 + i * 100}ms`,
                  }}
                >
                  <span className="icon-tile icon-tile-lg">
                    <svg
                      className="icon icon-lg"
                      aria-hidden="true"
                    >
                      <use href={`#${itemIcons[i]}`} />
                    </svg>
                  </span>

                  <div className="pt-1.5">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}