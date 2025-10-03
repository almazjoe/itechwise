import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: '01. Discovery call',
    description: 'Align on your stack, hiring velocity and compensation bands.',
  },
  {
    title: '02. Market mapping',
    description: 'Activate the 7M+ candidate graph and outbound researchers.',
  },
  {
    title: '03. Shortlist in 48h',
    description: 'Receive a curated slate with video notes, code samples and cultural fit.',
  },
  {
    title: '04. Hiring support',
    description: 'Interview coordination, offer negotiation and 2–3-month replacement guarantee.',
  },
];

const ProcessStepper = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-12">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Process</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">How we deliver predictable hiring</h2>
            </div>
            <div className="grid gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex items-center gap-4 sm:min-w-[240px]">
                    <span className="h-10 w-10 rounded-full bg-brand/20 text-brand flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-lg font-medium">{step.title}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed flex-1">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessStepper;
