import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const cardVariants = {
  initial: { y: 0, rotateX: 0 },
  hover: { y: -8, rotateX: 3 },
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pb-28">
      <div className="absolute inset-0 opacity-60 bg-sunset" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 text-sm text-muted">
            <Sparkles className="h-4 w-4 text-brand" />
            Predictable hiring for Web3, FinTech, iGaming and AI.
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            Unlock elite engineering talent with <span className="text-gradient-gold">ITechWise</span>
          </h1>
          <p className="text-lg text-muted max-w-xl">
            We deliver vetted specialists across blockchain, trading, payments, and AI. Get a shortlist within 48 hours, backed by deep technical screening and global reach.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand text-bg font-semibold px-6 py-3 shadow-lg shadow-brand/40 hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Get candidates in 48 hours
            </Link>
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-text/80 hover:text-text"
            >
              See case studies
            </Link>
          </div>
          <dl className="grid sm:grid-cols-3 gap-6 text-sm text-muted">
            <div>
              <dt className="font-semibold text-text">7M+ candidate graph</dt>
              <dd>48-hour shortlist from a multilingual pool.</dd>
            </div>
            <div>
              <dt className="font-semibold text-text">Deep technical vetting</dt>
              <dd>Rust, Go, backend, DevOps, mobile, C-level.</dd>
            </div>
            <div>
              <dt className="font-semibold text-text">Global reach</dt>
              <dd>Coverage across EU, MENA, APAC, LATAM, US.</dd>
            </div>
          </dl>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative glass-panel rounded-3xl p-6 border border-white/10">
            <motion.div
              variants={cardVariants}
              whileHover={prefersReducedMotion ? undefined : 'hover'}
              initial="initial"
              className="rounded-2xl bg-[#14161d] border border-white/5 p-6 shadow-glass"
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=200&q=80"
                  alt="Candidate"
                  className="h-16 w-16 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">Maria Iglesias</p>
                  <p className="text-sm text-muted">Senior Rust Engineer · Spain</p>
                </div>
              </div>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-muted">Status</dt>
                  <dd className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                    Shortlisted
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted">Experience</dt>
                  <dd className="text-text">10+ years · Web3, DeFi, Payments</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted">Highlights</dt>
                  <dd className="flex items-center gap-2 text-text">
                    <ShieldCheck className="h-4 w-4 text-brand" />
                    Polyglot · Team Lead
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-muted flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Mobility
                  </dt>
                  <dd className="text-text">Remote | EU timezones</dd>
                </div>
              </dl>
            </motion.div>
            <motion.div
              className="absolute -top-10 -right-12 hidden sm:block"
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <div className="rounded-2xl bg-[#0f1016] border border-white/10 px-6 py-4 shadow-lg shadow-black/40">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Process</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {['Briefing', 'Sourcing', 'Interviews', 'Offer'].map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${index < 3 ? 'bg-brand' : 'bg-white/20'}`} />
                      <span className={index < 3 ? 'text-text' : 'text-muted'}>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
