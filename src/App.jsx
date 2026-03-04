import { useEffect } from 'react';
import { LangProvider, useLang } from './i18n/LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Solutions from './components/Solutions';
import WhoWeAre from './components/WhoWeAre';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import TrustedCustomers from './components/TrustedCustomers';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppInner() {
  const { isRtl, lang } = useLang();

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [isRtl, lang]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Solutions />
        <WhoWeAre />
        <FAQ />
        <Testimonials />
        <TrustedCustomers />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}
