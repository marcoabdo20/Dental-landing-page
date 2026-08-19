"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Journey() {
  const { t } = useLanguage();
  const j = t.journey;

  const pillIcons = [
    "i-calendar",
    "i-plan",
    "i-trending",
    "i-bell",
    "i-folder",
  ];

  const rowIcons = [
    "i-calendar",
    "i-plan",
    "i-trending",
    "i-pill",
    "i-folder",
    "i-bell",
  ];

  return (
    <section className="journey" id="for-patients">
      <div
        className="journey-art feathered-art"
        role="img"
        aria-label="Pearl-white tooth surrounded by glowing orbital light rings"
      ></div>

      <div className="shell-wide">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-10 items-center">
          <div className="journey-stage" aria-hidden="true">
            {j.pills.map((pill, i) => (
              <span className={`float-pill fp-${i + 1}`} key={i}>
                <span className="icon-circle">
                  <svg className="icon icon-sm" aria-hidden="true">
                    <use href={`#${pillIcons[i]}`} />
                  </svg>
                </span>

                <span data-for="patients">{pill.patients}</span>

                <span data-for="clinics">{pill.clinics}</span>
              </span>
            ))}
          </div>

          <div>
            <span className="pill pill-tag reveal">
              <svg className="icon icon-xs" aria-hidden="true">
                <use href="#i-zap" />
              </svg>

              <span data-for="patients">{j.tag.patients}</span>

              <span data-for="clinics">{j.tag.clinics}</span>
            </span>

            <h2
              className="t-h2 mt-6 reveal"
              style={{ transitionDelay: "60ms" }}
            >
              <span data-for="patients">
                {j.title.patients.line1}
                <br />
                {j.title.patients.line2Prefix}
                <span className="accent">{j.title.patients.accent}</span>
              </span>

              <span data-for="clinics">
                {j.title.clinics.line1}
                <br />
                {j.title.clinics.line2Prefix}
                <span className="accent">{j.title.clinics.accent}</span>
              </span>
            </h2>

            <p
              className="t-sub mt-6 max-w-[625px] reveal"
              style={{ transitionDelay: "120ms" }}
            >
              <span data-for="patients">{j.sub.patients}</span>

              <span data-for="clinics">{j.sub.clinics}</span>
            </p>

            <div
              className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-7 reveal"
              style={{ transitionDelay: "180ms" }}
            >
              {j.rows.map((row, i) => (
                <div
                  className="feature-row reveal"
                  key={i}
                  style={{
                    transitionDelay: `${240 + i * 100}ms`,
                  }}
                >
                  <span className="icon-tile">
                    <svg className="icon" aria-hidden="true">
                      <use href={`#${rowIcons[i]}`} />
                    </svg>
                  </span>

                  <div>
                    <h3>
                      <span data-for="patients">{row.title.patients}</span>

                      <span data-for="clinics">{row.title.clinics}</span>
                    </h3>

                    <p>
                      <span data-for="patients">{row.desc.patients}</span>

                      <span data-for="clinics">{row.desc.clinics}</span>
                    </p>
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
