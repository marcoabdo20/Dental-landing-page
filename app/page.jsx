'use client';

import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import AppShowcase from '@/components/AppShowcase';
import Features from '@/components/Features';
import Journey from '@/components/Journey';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import useSiteInteractions from '@/hooks/useSiteInteractions';
import { LanguageProvider } from '@/context/LanguageContext';

function PageContent() {
  useSiteInteractions();

  return (
    <>
      <Header />
      <MobileNav />

      <main>
        <Hero />
        <AppShowcase />
        <Features />
        <Journey />
        <Problem />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}

export default function Page() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
