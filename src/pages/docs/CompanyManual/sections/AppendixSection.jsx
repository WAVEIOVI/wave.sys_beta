import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Hash, Phone, Zap, BookOpen, FileText, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import Timeline from '../components/Timeline';

const AppendixSection = () => {
  const { t } = useTranslation();

  const quickContacts = [
    { label: t('company_manual.appendix.general-contact'), icon: Phone, color: 'cyan' },
    { label: t('company_manual.appendix.emergency-contact'), icon: Zap, color: 'danger' },
  ];

  const cheatSheetItems = [
    t('company_manual.appendix.spend-cheat-sheet'),
    t('company_manual.appendix.discount-cheat-sheet'),
    t('company_manual.appendix.travel-fees-cheat-sheet'),
    t('company_manual.appendix.service-warranty-cheat-sheet'),
    t('company_manual.appendix.co2-tolerance-cheat-sheet'),
  ];

  const relatedDocs = [
    { label: t('company_manual.control.doc-handbook'), path: '/docs/handbook', icon: BookOpen },
    { label: t('company_manual.control.doc-sales-guide'), path: '/docs/sales-customer', icon: FileText },
    { label: t('company_manual.control.doc-service-manual'), path: '/docs/service-delivery', icon: FileText },
  ];

  return (
    <section className="space-y-10">
      <SectionHeader
        id="appendix"
        icon={Hash}
        title={t('company_manual.appendix.title')}
        color="steel"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {/* Quick Contacts */}
        <InfoCard title={t('company_manual.appendix.key-contacts-subtitle')} delay={0.1}>
          <div className="space-y-3">
            {quickContacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div key={idx} className={`flex items-center gap-3 p-4 rounded-xl ${
                  contact.color === 'cyan' 
                    ? 'bg-accent-cyan/5 border border-accent-cyan/20' 
                    : 'bg-danger-500/5 border border-danger-500/20'
                }`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    contact.color === 'cyan' ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-danger-500/10 text-danger-500'
                  }`}>
                    <Icon size={18} />
                  </div>
                  <p className="text-sm font-medium text-steel-700 dark:text-steel-200">{contact.label}</p>
                </div>
              );
            })}
          </div>
        </InfoCard>

        {/* Decision Cheat Sheet */}
        <InfoCard title={t('company_manual.appendix.decision-cheat-sheet-subtitle')} delay={0.2}>
          <ul className="space-y-2">
            {cheatSheetItems.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-steel-50 dark:bg-white/5 text-sm"
              >
                <div className="w-5 h-5 rounded-full bg-accent-amber/10 text-accent-amber flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold">{idx + 1}</span>
                </div>
                <span className="text-steel-600 dark:text-steel-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </InfoCard>
      </div>

      {/* Document Control & Timeline */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title={t('company_manual.control.title')} delay={0.3}>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-steel-50 dark:bg-white/5">
              <p className="text-xs font-bold uppercase text-steel-400 tracking-wider mb-2">{t('company_manual.control.distribution-label')}</p>
              <p className="text-sm text-steel-600 dark:text-steel-300">{t('company_manual.control.distribution-details')}</p>
            </div>
            <div className="p-4 rounded-xl bg-steel-50 dark:bg-white/5">
              <p className="text-xs font-bold uppercase text-steel-400 tracking-wider mb-2">{t('company_manual.control.updates-label')}</p>
              <p className="text-sm text-steel-600 dark:text-steel-300">{t('company_manual.control.updates-details')}</p>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="Version History" delay={0.4}>
          <Timeline />
        </InfoCard>
      </div>

      {/* Related Documents */}
      <InfoCard title={t('company_manual.control.related-documents-title')} delay={0.5}>
        <div className="grid md:grid-cols-3 gap-4">
          {relatedDocs.map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <Link
                key={idx}
                to={doc.path}
                className="group flex items-center gap-3 p-4 rounded-xl bg-steel-50 dark:bg-white/5 border border-transparent hover:border-accent-cyan/20 hover:bg-accent-cyan/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 text-accent-cyan flex items-center justify-center group-hover:bg-accent-cyan group-hover:text-white transition-colors">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-steel-700 dark:text-steel-200 group-hover:text-accent-cyan transition-colors">{doc.label}</p>
                </div>
                <LinkIcon size={14} className="text-steel-400 group-hover:text-accent-cyan transition-colors" />
              </Link>
            );
          })}
        </div>
      </InfoCard>
    </section>
  );
};

export default AppendixSection;
