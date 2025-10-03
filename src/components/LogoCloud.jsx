import React from 'react';

const logos = [
  'ApeX Trading',
  'OrbitPay',
  'NovaBank',
  'HyperLedger Labs',
  'SolForge',
  'Vela Esports',
];

const LogoCloud = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-muted mb-10">
          Trusted by scaling teams worldwide
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="glass-panel rounded-2xl px-4 py-6 flex items-center justify-center transition hover:bg-white/10"
            >
              <span className="text-sm font-medium text-muted transition hover:text-text">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
