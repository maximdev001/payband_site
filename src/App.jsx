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
import NezolaDetails from './components/NezolaDetails';
import EduBandDetails from './components/EduBandDetails';
import EduFeatures from './components/EduFeatures';
import OurSoftware from './components/OurSoftware';

import EndEdu from './components/EndEdu';
import { LangProvider, useLang } from './i18n/LangContext';
// routing
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function AppInner() {
  const { isRtl, lang } = useLang();

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [isRtl, lang]);

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {/* homepage with all main sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhatWeDo />
                <Solutions />
                <WhoWeAre />
                <FAQ />
                <Testimonials />
                <TrustedCustomers />
                <CTABanner />
                <Contact />
              </>
            }
          />

          {/* edu band dedicated page */}
          <Route
            path="/edu"
            element={
              <>
                <EduBandDetails />
                <EduFeatures />
                <OurSoftware/>
                <EndEdu />
              </>
            }
          />

          {/* nezoola dedicated page */}
          <Route path="/nezola" element={<NezolaDetails />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}
