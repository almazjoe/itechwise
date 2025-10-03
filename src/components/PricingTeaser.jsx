import React from 'react';
import { Check } from 'lucide-react';

const bullets = [
  'Success fee only. No retainers.',
  '2–3-month replacement guarantee.',
  'Flexible engagement: embedded or project-based.',
  'Transparent weekly reporting and talent market insights.',
];

const PricingTeaser = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-12 text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Success-based fees with built-in guarantees
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Partner with a recruitment squad that aligns incentives with your hiring roadmap. We operate as an extension of your talent team, providing velocity and market intelligence.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 text-left text-sm">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-muted leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
