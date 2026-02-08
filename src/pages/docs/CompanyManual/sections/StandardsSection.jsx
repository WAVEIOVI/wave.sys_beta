import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Clock, Zap, Star, MessageCircle, AlertTriangle, ThumbsUp } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import DataTable from '../components/DataTable';
import ComplaintFlowchart from '../components/ComplaintFlowchart';

const StandardsSection = () => {
  const { t } = useTranslation();

  const responseHeaders = [
    t('company_manual.standards.table-header-priority'),
    t('company_manual.standards.table-header-definition'),
    t('company_manual.standards.table-header-phone'),
    t('company_manual.standards.table-header-arrival'),
    t('company_manual.standards.table-header-resolution'),
  ];

  const responseRows = [
    [t('company_manual.standards.p1-critical'), t('company_manual.standards.p1-definition'), t('company_manual.standards.time-2-hours'), t('company_manual.standards.time-4-hours'), t('company_manual.standards.time-12-hours')],
    [t('company_manual.standards.p2-urgent'), t('company_manual.standards.p2-definition'), t('company_manual.standards.time-4-hours'), t('company_manual.standards.time-8-hours'), t('company_manual.standards.time-24-hours')],
    [t('company_manual.standards.p3-standard'), t('company_manual.standards.p3-definition'), t('company_manual.standards.time-8-hours'), t('company_manual.standards.time-24-hours'), t('company_manual.standards.time-48-hours')],
  ];

  const serviceCommitments = [
    { icon: Star, text: t('company_manual.standards.respect-responsiveness'), color: 'cyan' },
    { icon: Zap, text: t('company_manual.standards.expertise-quality'), color: 'amber' },
    { icon: ThumbsUp, text: t('company_manual.standards.transparency-reliability'), color: 'cyan' },
  ];

  const techStandards = [
    t('company_manual.standards.extinguisher-inspection'),
    t('company_manual.standards.co2-standards'),
    t('company_manual.standards.installation-standards'),
  ];

  const qualityGuarantees = [
    t('company_manual.standards.workmanship-warranty-details'),
    t('company_manual.standards.re-inspection-window'),
    t('company_manual.standards.rework-commitment-details'),
  ];

  const complaintSteps = [
    { step: 1, title: 'Receive & Acknowledge', desc: t('company_manual.standards.complaint-step-1'), icon: MessageCircle },
    { step: 2, title: 'Investigate', desc: t('company_manual.standards.complaint-step-2'), icon: AlertTriangle },
    { step: 3, title: 'Resolve', desc: t('company_manual.standards.complaint-step-3'), icon: CheckCircle2 },
    { step: 4, title: 'Follow-Up', desc: t('company_manual.standards.complaint-step-4'), icon: ThumbsUp },
  ];

  return (
    <section className="space-y-10">
      <SectionHeader
        id="standards"
        icon={CheckCircle2}
        title={t('company_manual.standards.title')}
        color="cyan"
      />

      {/* Customer Service Commitments */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200">
          {t('company_manual.standards.customer-service-commitments-title')}
        </h3>
        <p className="text-steel-500 text-sm">{t('company_manual.standards.customer-service-intro')}</p>

        <div className="grid md:grid-cols-3 gap-4">
          {serviceCommitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-5 rounded-2xl text-center ${
                  item.color === 'cyan' 
                    ? 'bg-accent-cyan/5 border border-accent-cyan/20' 
                    : 'bg-accent-amber/5 border border-accent-amber/20'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                  item.color === 'cyan' ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-accent-amber/10 text-accent-amber'
                }`}>
                  <Icon size={24} />
                </div>
                <p className="font-semibold text-sm text-steel-700 dark:text-steel-200">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Response Time Standards */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200">
          {t('company_manual.standards.response-time-standards-title')}
        </h3>
        <DataTable headers={responseHeaders} rows={responseRows} colorScheme="cyan" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 flex items-start gap-3"
        >
          <Clock size={18} className="text-accent-cyan flex-shrink-0 mt-0.5" />
          <p className="text-xs text-steel-500">{t('company_manual.standards.response-times-note')}</p>
        </motion.div>
      </div>

      {/* Technical Service Standards */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title={t('company_manual.standards.extinguisher-services-subtitle')} delay={0.1}>
          <ul className="space-y-3">
            {techStandards.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <CheckCircle2 size={16} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                <span className="text-steel-600 dark:text-steel-300">{item}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard title={t('company_manual.standards.quality-assurance-title')} delay={0.2}>
          <ul className="space-y-3 text-sm">
            <li className="text-steel-600 dark:text-steel-300">{t('company_manual.standards.qa-process')}</li>
            <li className="text-steel-600 dark:text-steel-300">{t('company_manual.standards.rework-policy-short')}</li>
          </ul>
        </InfoCard>
      </div>

      {/* Quality Guarantees */}
      <InfoCard title={t('company_manual.standards.quality-guarantees-title')} delay={0.3}>
        <div className="grid md:grid-cols-3 gap-4">
          {qualityGuarantees.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-xl bg-gradient-to-br from-accent-cyan/5 to-accent-amber/5 border border-steel-200/50 dark:border-white/10"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 text-accent-cyan flex items-center justify-center mb-3">
                <CheckCircle2 size={16} />
              </div>
              <p className="text-sm text-steel-600 dark:text-steel-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </InfoCard>

      {/* Complaint Handling Process */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200">
          {t('company_manual.standards.complaint-handling-process-title')}
        </h3>

        {/* Interactive Complaint Flowchart */}
        <ComplaintFlowchart />
      </div>
    </section>
  );
};

export default StandardsSection;
