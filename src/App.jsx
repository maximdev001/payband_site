import { useEffect } from 'react';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import TrustedCustomers from './components/TrustedCustomers';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import { LangProvider, useLang } from './i18n/LangContext';

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
          <Contact />
        <CTABanner />
   
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
