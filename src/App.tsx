/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash;
      if (!hash) hash = '#home';
      setCurrentHash(hash);
      window.scrollTo(0, 0); // Reset scroll position when switching views
    };

    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    const baseHash = currentHash.split('?')[0];
    switch (baseHash) {
      case '#home':
        return (
          <>
            <Hero />
            <Testimonials />
          </>
        );
      case '#services':
        return (
          <div className="pt-20">
            <Services />
          </div>
        );
      case '#portfolio':
        return (
          <div className="pt-20">
            <Portfolio />
          </div>
        );
      case '#about':
        return (
          <div className="pt-20">
            <About />
          </div>
        );
      case '#pricing':
        return (
          <div className="pt-20">
            <Pricing />
          </div>
        );
      case '#contact':
        return (
          <div className="pt-20">
            <Contact />
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

