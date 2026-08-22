'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Footer from './Footer';

function Segments({ segments = [] }) {
  if (!Array.isArray(segments)) return null;

  return segments.map((seg, i) => {
    if (!seg) return null;

    if (seg.link) {
      const isMail = seg.link.startsWith('mailto:');

      return (
        <a
          key={i}
          href={seg.link}
          target={isMail ? undefined : '_blank'}
          rel={isMail ? undefined : 'noopener noreferrer'}
          className="font-semibold"
          style={{ color: 'var(--brand)' }}
        >
          {seg.text}
        </a>
      );
    }

    if (seg.strong) {
      return (
        <strong key={i} className="font-semibold" style={{ color: 'var(--ink-strong)' }}>
          {seg.text}
        </strong>
      );
    }

    return <span key={i}>{seg.text}</span>;
  });
}

/**
 * Table of contents built from section headings — the left sidebar.
 * Purely visual — scrolls to the matching section on click.
 */
function TableOfContents({ sections, activeLabel }) {
  if (!Array.isArray(sections) || sections.length === 0) return null;

  return (
    <nav
      aria-label={activeLabel}
      data-reveal
      className="reveal surface-elevated hidden lg:block sticky top-28 max-h-[70vh] w-64 shrink-0 overflow-y-auto p-5 [scrollbar-width:thin] [scrollbar-color:#9BA8BC_transparent]"
    >
      <p
        className="mb-3 text-xs font-semibold uppercase"
        style={{ letterSpacing: '0.08em', color: 'var(--ink-faint)' }}
      >
        {activeLabel}
      </p>
      <ul className="flex flex-col gap-1.5">
        {sections.map((section, i) => {
          if (!section?.heading) return null;
          const anchor = `section-${i}`;
          return (
            <li key={i}>
              <a
                href={`#${anchor}`}
                className="block rounded-lg px-2.5 py-2 text-sm leading-snug transition-colors duration-150 hover:bg-white"
                style={{ color: 'var(--ink-body)' }}
              >
                {section.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * Legal-page top bar — logo + Back to Home + Contact Support.
 * Matches the sticky header used on the Terms of Service page.
 * Slides down and fades in gently on first paint.
 */
function LegalTopBar({ backHomeLabel, contactLabel }) {
  return (
    <div
      className="page-enter sticky top-0 z-20"
      style={{
        background: 'rgba(240, 241, 251, 0.78)',
        backdropFilter: 'blur(22px) saturate(160%)',
        WebkitBackdropFilter: 'blur(22px) saturate(160%)',
        borderBottom: '1px solid var(--hairline)',
        boxShadow: '0 1px 0 rgba(255,255,255,0.6), 0 8px 30px rgba(74,96,190,0.08)',
        animationDelay: '0ms',
      }}
    >
      <div className="shell-wide flex items-center justify-between gap-4 py-3.5">
        <Link href="/" className="logo shrink-0">
          <img
            src="/brand-assets/dentlora-wordmark.png"
            alt="Dentlora"
            width="1024"
            height="228"
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link href="/" className="btn btn-ghost btn-sm !w-auto">
            <svg
              className="icon icon-sm"
              aria-hidden="true"
              style={{ color: '#000', transform: 'rotate(180deg)' }}
            >
              <use href="#i-arrow-right" />
            </svg>
            <span className="hidden sm:inline">{backHomeLabel}</span>
          </Link>

          <a href="mailto:Support@dentlora.com" className="btn btn-primary btn-sm !w-auto">
            <svg className="icon icon-sm" aria-hidden="true">
              <use href="#i-mail" />
            </svg>
            <span className="hidden sm:inline">{contactLabel}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Privacy Policy Page
 *
 * Standalone page (not a modal). Content comes entirely from
 * translations.js -> t.privacyPolicy and switches automatically
 * with the active language via LanguageContext. Visual style
 * mirrors the Terms of Service page: sticky legal top bar,
 * per-section white cards, and the left table-of-contents sidebar.
 *
 * Animation:
 * - Top bar + hero title/meta: a gentle one-shot fade/slide-in on
 *   first paint (`.page-enter`, staggered via inline delays).
 * - TOC + each section card: fade/slide up as they scroll into
 *   view, staggered per card (`.reveal` from globals.css, toggled
 *   to `.is-inview` by a local IntersectionObserver below).
 */
export default function PrivacyPolicyPage() {
  const { t, lang } = useLanguage();
  const policy = t?.privacyPolicy;
  const scopeRef = useRef(null);

  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return;

    const elements = Array.from(root.querySelectorAll('.reveal'));
    if (elements.length === 0) return;

    // Prefers-reduced-motion: reveal everything immediately, no observer needed.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-inview'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -64px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [policy]);

  if (!policy) {
    return null;
  }

  const contactLabel = lang === 'ar' ? 'تواصل مع الدعم' : 'Contact Support';

  return (
    <div ref={scopeRef} className="min-h-screen" style={{ background: 'var(--surface-page)' }}>
      <LegalTopBar backHomeLabel={policy.backHome} contactLabel={contactLabel} />

      {/* =========================
          Hero / Header
      ========================== */}
      <header className="shell-wide pt-12 sm:pt-16">
        <h1 className="page-enter t-h2 mb-4" style={{ animationDelay: '80ms' }}>
          {policy.title}
        </h1>

        {Array.isArray(policy.meta) && (
          <div
            className="page-enter flex max-w-2xl flex-col gap-2.5 t-body"
            style={{ animationDelay: '160ms' }}
          >
            {policy.meta.map((item, i) => (
              <p key={i} className="m-0">
                <Segments segments={[item]} />
              </p>
            ))}
          </div>
        )}
      </header>

      <hr
        className="mt-8 mb-2 border-0 h-px shell-wide"
        style={{ background: 'var(--hairline)' }}
      />

      {/* =========================
          Body: TOC + Content
      ========================== */}
      <main className="shell-wide flex gap-10 py-10 sm:py-14">
        <TableOfContents sections={policy.sections} activeLabel={policy.title} />

        <div className="min-w-0 flex-1">
          {/* Intro */}
          {Array.isArray(policy.intro) && (
            <p className="mb-8 t-body">
              <Segments segments={policy.intro} />
            </p>
          )}

          {/* Sections — each in its own card, like the Terms page */}
          <div className="flex flex-col gap-6">
            {Array.isArray(policy.sections) &&
              policy.sections.map((section, sIdx) => {
                if (!section) return null;
                const anchor = `section-${sIdx}`;

                return (
                  <div
                    key={sIdx}
                    id={anchor}
                    data-reveal
                    className="reveal surface-elevated scroll-mt-28 p-6 transition-transform duration-300 ease-out hover:-translate-y-0.5 sm:p-8"
                    style={{ transitionDelay: `${Math.min(sIdx, 5) * 60}ms` }}
                  >
                    {/* Section Heading */}
                    {section.heading && (
                      <h2 className="t-card-title mb-3 !text-[20px] sm:!text-[22px]">
                        {section.heading}
                      </h2>
                    )}

                    {/* Paragraphs */}
                    {Array.isArray(section.paragraphs) &&
                      section.paragraphs.map((paragraph, pIdx) => (
                        <p key={pIdx} className="mb-3 last:mb-0 t-body">
                          <Segments segments={paragraph} />
                        </p>
                      ))}

                    {/* List */}
                    {Array.isArray(section.list) && section.list.length > 0 && (
                      <ul
                        className="mb-1 mt-3 grid list-disc gap-2.5 pl-[1.15em] t-body"
                        style={{ '--tw-marker-color': 'var(--ink-faint)' }}
                      >
                        {section.list.map((item, iIdx) => (
                          <li key={iIdx} className="pl-1 marker:text-[var(--ink-faint)]">
                            <Segments segments={item} />
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Closing Paragraph */}
                    {Array.isArray(section.closing) &&
                      section.closing.map((paragraph, cIdx) => (
                        <p key={cIdx} className="mb-3 last:mb-0 mt-3 t-body">
                          <Segments segments={paragraph} />
                        </p>
                      ))}

                    {/* Notice Box */}
                    {section.notice && (
                      <div
                        className="mt-4 rounded-[var(--r-md)] p-4 sm:p-5"
                        style={{
                          background: 'var(--mist)',
                          border: '1px solid var(--hairline)',
                        }}
                      >
                        {section.notice.title && (
                          <h4
                            className="mb-1 text-[15px] font-semibold"
                            style={{ color: 'var(--ink-strong)' }}
                          >
                            {section.notice.title}
                          </h4>
                        )}

                        {Array.isArray(section.notice.body) && (
                          <p className="m-0 t-small">
                            <Segments segments={section.notice.body} />
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </main>

      <Footer />

      {/*
        Local, self-contained keyframes for the one-shot page-load
        animation. Scoped to this file via styled-jsx (built into
        Next.js) so nothing in globals.css needs to change.
      */}
      <style jsx>{`
        .page-enter {
          animation: privacyPageEnter 620ms cubic-bezier(0.22, 0.61, 0.36, 1) both;
        }

        @keyframes privacyPageEnter {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        header .page-enter {
          animation-name: privacyHeroEnter;
        }

        @keyframes privacyHeroEnter {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-enter {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}