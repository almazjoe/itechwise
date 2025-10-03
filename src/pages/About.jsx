import React from 'react';
import CTABanner from '../components/CTABanner.jsx';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-5xl mx-auto px-6 space-y-12">
        <header className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">About</p>
          <h1 className="text-4xl font-semibold">Your global partner for technical hiring</h1>
          <p className="text-muted max-w-3xl">
            ITechWise is built by operators who have scaled engineering teams across venture-backed startups and enterprise innovation groups. We blend automation, market intelligence and human judgement to deliver talent that ships.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-muted leading-relaxed">
          <p>
            Our talent graph spans 7 million candidates across 120+ countries. We speak 18 languages and maintain active communities in blockchain, trading, fintech, iGaming and AI. This reach enables us to move faster than traditional search firms.
          </p>
          <p>
            Engagements are transparent and collaborative. Expect weekly reporting, calibration loops, interview support and compensation guidance. We operate as an extension of your talent function with incentives aligned to successful hires.
          </p>
          <p>
            The team includes ex-founders, engineers and recruiters who understand the nuances of technical evaluation. Every shortlist includes technical deep-dives, narrative summaries and cultural observations to accelerate decision making.
          </p>
          <p>
            From stealth startups to public companies, clients trust ITechWise to deliver scarce talent in competitive markets. Our goal is to make hiring predictable, data-driven and human.
          </p>
        </div>
      </section>
      <CTABanner />
    </div>
  );
};

export default About;
