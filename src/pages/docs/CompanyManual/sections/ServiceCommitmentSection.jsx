import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Clock, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';

const ServiceCommitmentSection = () => {
  const { t } = useTranslation();

  const commitments = [
    {
      icon: Award,
      color: 'cyan',
      title: t('company_manual.service-commitment.quality-workmanship-title'),
      items: [
        t('company_manual.service-commitment.certified-technicians'),
        t('company_manual.service-commitment.safety-standards-adherence'),
        t('company_manual.service-commitment.trusted-suppliers'),
        t('company_manual.service-commitment.proper-documentation'),
        t('company_manual.service-commitment.proven-expertise'),
      ],
    },
    {
      icon: Clock,
      color: 'amber',
      title: t('company_manual.service-commitment.quick-response-title'),
      items: [
        t('company_manual.service-commitment.inquiry-response'),
        t('company_manual.service-commitment.emergency-response'),
        t('company_manual.service-commitment.quotation-response'),
        t('company_manual.service-commitment.appointment-lead-time'),
        t('company_manual.service-commitment.dedicated-teams'),
      ],
    },
    {
      icon: Sparkles,
      color: 'cyan',
      title: t('company_manual.service-commitment.professional-service-title'),
      items: [
        t('company_manual.service-commitment.courteous-staff'),
        t('company_manual.service-commitment.clean-vehicles'),
        t('company_manual.service-commitment.professional-conduct'),
        t('company_manual.service-commitment.clear-communication'),
        t('company_manual.service-commitment.facility-respect'),
      ],
    },
    {
      icon: ShieldCheck,
      color: 'amber',
      title: t('company_manual.service-commitment.reliability-title'),
      items: [
        t('company_manual.service-commitment.honor-commitments'),
        t('company_manual.service-commitment.proactive-delays'),
        t('company_manual.service-commitment.consistent-quality'),
        t('company_manual.service-commitment.service-warranty'),
        t('company_manual.service-commitment.free-re-inspection'),
        t('company_manual.service-commitment.emergency-support-msa'),
      ],
    },
  ];

  const differentiators = [
    t('company_manual.service-commitment.diff-experience'),
    t('company_manual.service-commitment.diff-certified'),
    t('company_manual.service-commitment.diff-locations'),
    t('company_manual.service-commitment.diff-solutions'),
    t('company_manual.service-commitment.diff-products'),
    t('company_manual.service-commitment.diff-technology'),
    t('company_manual.service-commitment.diff-portal'),
  ];

  return (
    <section className="space-y-10">
      <SectionHeader
        id="service-commitment"
        icon={Award}
        title={t('company_manual.service-commitment.title')}
        color="cyan"
      />

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-lg text-steel-600 dark:text-steel-300"
      >
        {t('company_manual.service-commitment.intro')}
      </motion.p>

      {/* Commitments Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {commitments.map((commitment, idx) => {
          const Icon = commitment.icon;
          return (
            <InfoCard key={idx} delay={idx * 0.1}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  commitment.color === 'cyan' 
                    ? 'bg-accent-cyan/10 text-accent-cyan' 
                    : 'bg-accent-amber/10 text-accent-amber'
                }`}>
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-steel-800 dark:text-white">{commitment.title}</h4>
              </div>
              <ul className="space-y-2">
                {commitment.items.map((item, iIdx) => (
                  <motion.li
                    key={iIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: iIdx * 0.05 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${
                      commitment.color === 'cyan' ? 'text-accent-cyan' : 'text-accent-amber'
                    }`} />
                    <span className="text-steel-600 dark:text-steel-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </InfoCard>
          );
        })}
      </div>

      {/* What Makes SS+ Different */}
      <InfoCard className="!p-0 overflow-hidden" delay={0.4}>
        <div className="p-6 bg-gradient-to-r from-accent-cyan/10 to-accent-amber/10 border-b border-steel-200/50 dark:border-white/10">
          <h3 className="text-xl font-bold text-steel-800 dark:text-white">
            {t('company_manual.service-commitment.what-makes-ss-different-title')}
          </h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/10"
              >
                <span className="text-accent-cyan font-bold">✅</span>
                <span className="text-sm font-medium text-steel-700 dark:text-steel-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </InfoCard>
    </section>
  );
};

export default ServiceCommitmentSection;
