
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatIsKeymap from '../components/WhatIsKeymap';
import WhyKanata from '../components/WhyKanata';
import WhatToolDoes from '../components/WhatToolDoes';
import Features from '../components/Features';
import WhyItMatters from '../components/WhyItMatters';
import HowItWorks from '../components/HowItWorks';
import Roadmap from '../components/Roadmap';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import WhatIsZMK from '../components/WhatIsZMK';
import HomeRowMods from '../components/HomeRowMods';
import MacEnhancementGrid from '../components/MacEnhancementGrid';
import WhoMadeThis from '../components/WhoMadeThis';

const Index = () => {
  // Smooth scroll to anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset for header
          behavior: 'smooth'
        });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-keyboard-dark text-keyboard-text antialiased">
      <Header />
      <main>
        <Hero />
        <WhatToolDoes />
        <Features />
        <WhyItMatters />
        <HowItWorks />
        <WhatIsKeymap />
        <WhatIsZMK />
        <HomeRowMods />
        <WhyKanata />
        <MacEnhancementGrid />
        <WhoMadeThis />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
