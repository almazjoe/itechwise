import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden bg-ember">
          <div className="bg-[#0d0f14cc] backdrop-blur-xl p-10 sm:p-16 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1 space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Ready?</p>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Brief us today and meet vetted candidates within 48 hours
              </h2>
              <p className="text-muted max-w-xl">
                Whether you are building Web3 infrastructure, scaling fintech systems or launching AI ventures, we connect you with senior engineers and leaders who can deliver.
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand text-bg px-6 py-3 font-semibold shadow-lg shadow-brand/40 hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                Get candidates in 48 hours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
