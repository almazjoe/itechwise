import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Cpu, Globe2, ShieldCheck } from 'lucide-react';

const ValueGrid = () => {
  const { t } = useTranslation();
  const iconMap = {
    clock: Clock,
    cpu: Cpu,
    globe: Globe2,
    shield: ShieldCheck,
  };
  const values = t('valueGrid.items', { returnObjects: true }) || [];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ title, description, icon: IconKey }) => {
            const IconComponent = typeof IconKey === 'string' ? iconMap[IconKey] : IconKey;
            const ResolvedIcon = IconComponent || Clock;

            return (
              <article key={title} className="glass-panel rounded-3xl p-6 flex flex-col gap-4 border border-white/10">
              <div className="h-12 w-12 rounded-2xl bg-white/5 text-brand flex items-center justify-center">
                <ResolvedIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-text">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;
