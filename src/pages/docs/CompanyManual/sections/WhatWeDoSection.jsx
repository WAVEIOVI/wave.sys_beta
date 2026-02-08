import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Flame, HardHat, Shirt, AlertTriangle, HeartPulse, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';

const ServiceItem = ({ icon: Icon, text, color = 'cyan', delay = 0 }) => (
  <motion.li
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex items-start gap-3 text-sm"
  >
    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
      color === 'cyan' ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-accent-amber/10 text-accent-amber'
    }`}>
      <CheckCircle size={12} />
    </div>
    <span className="text-steel-600 dark:text-steel-300">{text}</span>
  </motion.li>
);

const WhatWeDoSection = () => {
  const { t } = useTranslation();

  const serviceCategories = [
    {
      icon: Flame,
      color: 'danger',
      title: t('company_manual.what-we-do.fire-safety-title'),
      subsections: [
        {
          title: t('company_manual.what-we-do.extinguisher-services-title'),
          items: [
            t('company_manual.what-we-do.extinguisher-types'),
            t('company_manual.what-we-do.extinguisher-sizes'),
            t('company_manual.what-we-do.installation-details'),
            t('company_manual.what-we-do.annual-inspection'),
            t('company_manual.what-we-do.hydrostatic-testing'),
          ],
        },
        {
          title: t('company_manual.what-we-do.fire-hose-reel-title'),
          items: [
            t('company_manual.what-we-do.hose-sales-installation'),
            t('company_manual.what-we-do.hose-inspection-maintenance'),
            t('company_manual.what-we-do.hose-pressure-testing'),
          ],
        },
        {
          title: t('company_manual.what-we-do.detection-alarm-title'),
          items: [
            t('company_manual.what-we-do.smoke-detector-services'),
            t('company_manual.what-we-do.alarm-installation-maintenance'),
            t('company_manual.what-we-do.alarm-emergency-repair'),
          ],
        },
      ],
    },
    {
      icon: HardHat,
      color: 'amber',
      title: t('company_manual.what-we-do.ppe-title'),
      description: t('company_manual.what-we-do.ppe-description'),
      items: [
        t('company_manual.what-we-do.head-protection'),
        t('company_manual.what-we-do.eye-face-protection'),
        t('company_manual.what-we-do.hand-protection'),
        t('company_manual.what-we-do.respiratory-protection'),
        t('company_manual.what-we-do.hearing-protection'),
        t('company_manual.what-we-do.fall-protection'),
        t('company_manual.what-we-do.foot-protection'),
      ],
    },
    {
      icon: Shirt,
      color: 'cyan',
      title: t('company_manual.what-we-do.workwear-uniforms-title'),
      items: [
        t('company_manual.what-we-do.industrial-workwear'),
        t('company_manual.what-we-do.custom-branding-services'),
        t('company_manual.what-we-do.industry-specific-workwear'),
      ],
    },
    {
      icon: AlertTriangle,
      color: 'amber',
      title: t('company_manual.what-we-do.safety-signage-title'),
      items: [
        t('company_manual.what-we-do.safety-signs'),
        t('company_manual.what-we-do.sign-production'),
      ],
    },
    {
      icon: HeartPulse,
      color: 'danger',
      title: t('company_manual.what-we-do.first-aid-emergency-title'),
      items: [
        t('company_manual.what-we-do.first-aid-kits'),
        t('company_manual.what-we-do.emergency-showers'),
        t('company_manual.what-we-do.spill-containment'),
        t('company_manual.what-we-do.emergency-stretchers'),
      ],
    },
  ];

  const colorMap = {
    danger: { bg: 'bg-danger-500/10', text: 'text-danger-500', border: 'border-danger-500/20' },
    amber: { bg: 'bg-accent-amber/10', text: 'text-accent-amber', border: 'border-accent-amber/20' },
    cyan: { bg: 'bg-accent-cyan/10', text: 'text-accent-cyan', border: 'border-accent-cyan/20' },
  };

  return (
    <section className="space-y-10">
      <SectionHeader
        id="what-we-do"
        icon={Flame}
        title={t('company_manual.what-we-do.title')}
        color="amber"
      />

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-gradient-to-r from-accent-cyan/5 via-transparent to-accent-amber/5 border border-steel-200/50 dark:border-white/10"
      >
        <p className="text-steel-600 dark:text-steel-300 leading-relaxed">
          {t('company_manual.what-we-do.description')}
        </p>
      </motion.div>

      {/* Service Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceCategories.map((category, catIdx) => {
          const colors = colorMap[category.color];
          const Icon = category.icon;

          return (
            <InfoCard key={catIdx} delay={catIdx * 0.1} className="!p-0 overflow-hidden">
              {/* Category Header */}
              <div className={`p-5 ${colors.bg} border-b ${colors.border}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center`}>
                    <Icon size={20} />
                  </div>
                  <h4 className="font-bold text-steel-800 dark:text-white text-sm">{category.title}</h4>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-5 space-y-4">
                {category.description && (
                  <p className="text-xs text-steel-500 italic">{category.description}</p>
                )}

                {category.subsections ? (
                  category.subsections.map((sub, subIdx) => (
                    <div key={subIdx} className="space-y-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-steel-400">{sub.title}</h5>
                      <ul className="space-y-2">
                        {sub.items.map((item, itemIdx) => (
                          <ServiceItem
                            key={itemIdx}
                            text={item}
                            color={category.color === 'danger' ? 'cyan' : category.color}
                            delay={itemIdx * 0.05}
                          />
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <ServiceItem
                        key={itemIdx}
                        text={item}
                        color={category.color === 'danger' ? 'cyan' : category.color}
                        delay={itemIdx * 0.05}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </InfoCard>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
