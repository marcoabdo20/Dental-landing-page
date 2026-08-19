'use client';

import { useEffect } from 'react';
import { translations } from '@/lib/translations';

/**
 * Ports the original page's vanilla-JS behavior 1:1. It runs once after the
 * whole page has mounted (all sections render server ids/classes that this
 * effect then wires up), exactly mirroring the logic of the source <script>
 * tag. Nothing here changes what the site does — only where it runs.
 */
export default function useSiteInteractions() {
  useEffect(() => {
    /* ---- sticky header ---- */
    const header = document.getElementById('site-header');
    const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---- mobile nav ---- */
    const toggle = document.getElementById('nav-toggle');
    const panel = document.getElementById('mobile-nav');
    const toggleIcon = document.getElementById('nav-toggle-icon').querySelector('use');

    const setMenu = (open) => {
      panel.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggleIcon.setAttribute('href', open ? '#i-close' : '#i-menu');
      document.body.style.overflow = open ? 'hidden' : '';
    };

    const onToggleClick = () => setMenu(!panel.classList.contains('is-open'));
    const onPanelClick = (e) => { if (e.target.tagName === 'A') setMenu(false); };
    const onKeydownEscape = (e) => { if (e.key === 'Escape') setMenu(false); };

    toggle.addEventListener('click', onToggleClick);
    panel.addEventListener('click', onPanelClick);
    document.addEventListener('keydown', onKeydownEscape);

    /* ---- tablist keyboard behaviour ----
       Shared by the hero role toggle and the app-showcase tabs so both keep the same
       pattern. Arrow keys move focus; Enter and Space select, which a native <button>
       already does on its own. */
    const tablistCleanups = [];
    const bindTablistKeys = (container, tabs) => {
      if (!container) return;
      const handler = (e) => {
        const i = tabs.indexOf(document.activeElement);
        if (i < 0) return;
        let next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') next = tabs[0];
        else if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) {
          e.preventDefault();
          next.focus();
        }
      };
      container.addEventListener('keydown', handler);
      tablistCleanups.push(() => container.removeEventListener('keydown', handler));
    };

    /* ---- hero role toggle ---- */
    const roleTabs = [...document.querySelectorAll('#hero-role-toggle .role-opt')];
    const rolePanel = document.getElementById('hero-role-panel');
    const roleTabCleanups = [];

    let onLangChangeForHero = null;

    if (roleTabs.length && rolePanel) {
      // Reads the current language straight off <html data-lang="...">, kept in
      // sync by LanguageContext, so the same copy object always matches whatever
      // language is currently selected — no separate state to fall out of sync.
      const getHeroCopy = (role) => {
        const lang = document.documentElement.dataset.lang === 'ar' ? 'ar' : 'en';
        const hero = translations[lang].hero;
        return {
          headline: hero.headline[role],
          sub: hero.sub[role],
          primary: hero.ctaPrimary[role],
          secondary: hero.ctaSecondary[role],
        };
      };

      const heroEls = {
        headline: document.getElementById('hero-headline'),
        sub: document.getElementById('hero-sub'),
        primary: document.querySelector('#hero-cta-primary .btn-label'),
        secondary: document.querySelector('#hero-cta-secondary .btn-label'),
      };

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      let currentRole =
        (roleTabs.find((t) => t.getAttribute('aria-selected') === 'true') || roleTabs[0]).dataset.role;

      const applyCopy = (role) => {
        const copy = getHeroCopy(role);
        heroEls.headline.innerHTML = copy.headline;
        heroEls.sub.textContent = copy.sub;
        heroEls.primary.textContent = copy.primary;
        heroEls.secondary.textContent = copy.secondary;
      };

      const selectRole = (tab) => {
        if (tab.getAttribute('aria-selected') === 'true') return;
        roleTabs.forEach((t) => {
          const on = t === tab;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.tabIndex = on ? 0 : -1;
          t.classList.toggle('btn-primary', on);
          t.classList.toggle('btn-ghost', !on);
        });
        document.documentElement.dataset.role = tab.dataset.role;
        currentRole = tab.dataset.role;
        rolePanel.setAttribute('aria-labelledby', tab.id);

        if (reducedMotion.matches) {
          applyCopy(currentRole);
          return;
        }
        rolePanel.classList.add('is-swapping');
        setTimeout(() => {
          applyCopy(currentRole);
          rolePanel.classList.remove('is-swapping');
        }, 180);
      };

      roleTabs.forEach((t) => {
        const handler = () => selectRole(t);
        t.addEventListener('click', handler);
        roleTabCleanups.push(() => t.removeEventListener('click', handler));
      });
      bindTablistKeys(document.getElementById('hero-role-toggle'), roleTabs);
      document.documentElement.dataset.role = currentRole;
      applyCopy(currentRole);

      // Re-apply the currently selected role's copy whenever the language
      // toggle in the footer changes languages, so the hero text updates
      // immediately without needing a role change to trigger it.
      onLangChangeForHero = () => applyCopy(currentRole);
      window.addEventListener('dentlora:langchange', onLangChangeForHero);
    }

    /* ---- patient app showcase tabs ---- */
    const appTabs = [...document.querySelectorAll('.phone-tabs .role-opt')];
    const appTabCleanups = [];
    let onShowcaseScroll = null;
    let onShowcaseResize = null;

    if (appTabs.length) {
      const selectAppTab = (tab) => {
        if (tab.getAttribute('aria-selected') === 'true') return;
        appTabs.forEach((t) => {
          const on = t === tab;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.tabIndex = on ? 0 : -1;
          t.classList.toggle('btn-primary', on);
          t.classList.toggle('btn-ghost', !on);
          const panelEl = document.getElementById(t.getAttribute('aria-controls'));
          if (panelEl) panelEl.dataset.active = on ? 'true' : 'false';
        });
        const key = tab.id.replace('app-tab-', '');
        document.querySelectorAll('.phone-notes').forEach((g) => {
          g.dataset.active = g.dataset.notesFor === key ? 'true' : 'false';
        });
        document.querySelectorAll('.phone-shot-alt').forEach((s) => {
          s.dataset.active = s.dataset.shotFor === key ? 'true' : 'false';
        });
      };

      const runway = document.querySelector('.showcase-scroll');
      const desktop = window.matchMedia('(min-width: 1024px)');
      const scrollDriven = () => desktop.matches && runway.offsetHeight > window.innerHeight * 1.5;

      const tabIndexFromScroll = () => {
        const total = runway.offsetHeight - window.innerHeight;
        if (total <= 0) return 0;
        const passed = Math.min(Math.max(-runway.getBoundingClientRect().top, 0), total);
        return Math.min(appTabs.length - 1, Math.floor((passed / total) * appTabs.length));
      };

      let ticking = false;
      onShowcaseScroll = () => {
        if (ticking || !scrollDriven()) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          selectAppTab(appTabs[tabIndexFromScroll()]);
        });
      };
      onShowcaseResize = onShowcaseScroll;
      window.addEventListener('scroll', onShowcaseScroll, { passive: true });
      window.addEventListener('resize', onShowcaseResize);

      appTabs.forEach((t, i) => {
        const handler = () => {
          if (scrollDriven()) {
            const total = runway.offsetHeight - window.innerHeight;
            const target = runway.getBoundingClientRect().top + window.scrollY +
              (total * (i + 0.5)) / appTabs.length;
            window.scrollTo({
              top: target,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            });
          } else {
            selectAppTab(t);
          }
        };
        t.addEventListener('click', handler);
        appTabCleanups.push(() => t.removeEventListener('click', handler));
      });

      bindTablistKeys(document.querySelector('.phone-tabs'), appTabs);
    }

    /* ---- scroll reveal (transform + opacity only) ---- */
    const pending = [...document.querySelectorAll('.reveal, .mock')];

    const revealCheck = () => {
      const h = window.innerHeight;
      for (let i = pending.length - 1; i >= 0; i--) {
        const r = pending[i].getBoundingClientRect();
        if (r.bottom <= 0 || r.top < h * 0.92) {
          pending[i].classList.add('is-inview');
          pending.splice(i, 1);
        }
      }
    };

    const stopReveal = () => {
      window.removeEventListener('scroll', onScrollReveal);
      window.removeEventListener('resize', onScrollReveal);
      clearInterval(sweep);
    };

    const onScrollReveal = () => {
      revealCheck();
      if (!pending.length) stopReveal();
    };

    const sweep = setInterval(onScrollReveal, 250);

    revealCheck();
    window.addEventListener('scroll', onScrollReveal, { passive: true });
    window.addEventListener('resize', onScrollReveal);
    if (!pending.length) stopReveal();

    /* ---- active nav link on scroll ---- */
    const links = [...document.querySelectorAll('.nav-desktop .nav-link')];
    const sections = links
      .map((l) => document.querySelector(l.getAttribute('href')))
      .filter(Boolean);

    let spy = null;
    if ('IntersectionObserver' in window && sections.length) {
      spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((l) =>
              l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id)
            );
          });
        },
        { rootMargin: '-45% 0px -50% 0px' }
      );
      sections.forEach((s) => spy.observe(s));
    }

    /* ---- cleanup on unmount ---- */
    return () => {
      window.removeEventListener('scroll', onScroll);
      toggle.removeEventListener('click', onToggleClick);
      panel.removeEventListener('click', onPanelClick);
      document.removeEventListener('keydown', onKeydownEscape);
      tablistCleanups.forEach((fn) => fn());
      roleTabCleanups.forEach((fn) => fn());
      appTabCleanups.forEach((fn) => fn());
      if (onLangChangeForHero) window.removeEventListener('dentlora:langchange', onLangChangeForHero);
      if (onShowcaseScroll) window.removeEventListener('scroll', onShowcaseScroll);
      if (onShowcaseResize) window.removeEventListener('resize', onShowcaseResize);
      window.removeEventListener('scroll', onScrollReveal);
      window.removeEventListener('resize', onScrollReveal);
      clearInterval(sweep);
      if (spy) spy.disconnect();
    };
  }, []);
}
