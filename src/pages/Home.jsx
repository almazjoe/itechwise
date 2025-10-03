import React from 'react';
import Hero from '../components/Hero.jsx';
import LogoCloud from '../components/LogoCloud.jsx';
import ValueGrid from '../components/ValueGrid.jsx';
import ProcessStepper from '../components/ProcessStepper.jsx';
import CaseCarousel from '../components/CaseCarousel.jsx';
import PricingTeaser from '../components/PricingTeaser.jsx';
import CTABanner from '../components/CTABanner.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <LogoCloud />
      <ValueGrid />
      <ProcessStepper />
      <CaseCarousel />
      <PricingTeaser />
      <CTABanner />
    </div>
  );
};

export default Home;
