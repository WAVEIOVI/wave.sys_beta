import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Scale, FileSignature, ShieldCheck, AlertCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import DataTable from '../components/DataTable';
import { AuthorityLimitsChart } from '../components/Charts';

const DecisionsSection = () => {
  const { t } = useTranslation();

  const approvalHeaders = [
    t('company_manual.key-contacts.table-header-position'),
    t('company_manual.decisions.table-header-limit'),
    t('company_manual.decisions.table-header-emergency'),
    t('company_manual.decisions.table-header-discount'),
  ];

  const approvalRows = [
    ['Board', t('company_manual.decisions.limit-board'), t('company_manual.decisions.limit-unlimited'), '> 35%'],
    [t('company_manual.org-structure.karim-role'), t('company_manual.decisions.limit-karim'), t('company_manual.decisions.limit-karim'), '26 - 35%'],
    ['Sales/Purch Resp (Najla)', t('company_manual.decisions.limit-najla'), t('company_manual.decisions.limit-najla'), '15.1 - 25%'],
    [t('company_manual.org-structure.chraiti-role'), t('company_manual.decisions.limit-ops'), t('company_manual.decisions.limit-emergency-ops'), 'N/A'],
    ['Team Leaders', t('company_manual.decisions.limit-tl'), t('company_manual.decisions.limit-tl'), 'N/A'],
    ['Sales Representatives', t('company_manual.decisions.limit-reps-sample'), t('company_manual.decisions.limit-reps-emergency'), t('company_manual.decisions.limit-reps-discount')],
  ];

  const strategicDecisions = [
    t('company_manual.decisions.strat-business'),
    t('company_manual.decisions.strat-hiring'),
    t('company_manual.decisions.strat-policies'),
    t('company_manual.decisions.strat-financial'),
  ];

  const ethicsItems = [
    { type: 'conflict', items: [t('company_manual.decisions.conflict-prohibited'), t('company_manual.decisions.conflict-required')] },
    { type: 'gifts', items: [t('company_manual.decisions.gifts-allowed'), t('company_manual.decisions.gifts-prohibited')] },
    { type: 'conduct', items: [t('company_manual.decisions.conduct-do'), t('company_manual.decisions.conduct-dont')] },
  ];

  return (
    <section className="space-y-10">
      <SectionHeader
        id="decisions"
        icon={Scale}
        title={t('company_manual.decisions.title')}
        color="amber"
      />

      {/* Matrix Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-gradient-to-r from-accent-amber/5 to-transparent border border-accent-amber/10"
      >
        <h3 className="text-xl font-bold text-accent-amber mb-2">{t('company_manual.decisions.authority-matrix-title')}</h3>
        <p className="text-steel-500 text-sm italic">{t('company_manual.decisions.matrix-description')}</p>
      </motion.div>

      {/* Strategic Decisions */}
      <InfoCard title={t('company_manual.decisions.strategic-decisions-title')} delay={0.1}>
        <p className="text-xs font-bold text-steel-400 uppercase tracking-wider mb-4">{t('company_manual.decisions.approvers-label')}</p>
        <ul className="grid md:grid-cols-2 gap-3">
          {strategicDecisions.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-3 p-3 rounded-xl bg-steel-50 dark:bg-white/5"
            >
              <div className="w-6 h-6 rounded-full bg-accent-amber/10 text-accent-amber flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">{idx + 1}</span>
              </div>
              <span className="text-sm text-steel-600 dark:text-steel-300">{item}</span>
            </motion.li>
          ))}
        </ul>
      </InfoCard>

      {/* Authority Limits Chart */}
      <InfoCard className="!p-8" delay={0.2}>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">{t('company_manual.decisions.approval-limits-title')}</h3>
          <p className="text-sm text-steel-500">Purchase authority limits by position (TND)</p>
        </div>
        <AuthorityLimitsChart />
      </InfoCard>

      {/* Approval Limits Table */}
      <DataTable headers={approvalHeaders} rows={approvalRows} colorScheme="amber" />

      {/* Signature Authority */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title={t('company_manual.decisions.contracts-agreements-title')} delay={0.3}>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <FileSignature size={16} className="text-accent-cyan mt-0.5" />
              <span>{t('company_manual.decisions.sign-full-managers')}</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <FileSignature size={16} className="text-steel-400 mt-0.5" />
              <span>{t('company_manual.decisions.sign-limited')}</span>
            </li>
          </ul>
        </InfoCard>

        <InfoCard title={t('company_manual.decisions.financial-docs-title')} delay={0.4}>
          <ul className="space-y-2 text-sm">
            <li className="text-steel-600 dark:text-steel-300">{t('company_manual.decisions.sign-check-small')}</li>
            <li className="text-steel-600 dark:text-steel-300">{t('company_manual.decisions.sign-check-dual')}</li>
            <li className="text-steel-600 dark:text-steel-300">{t('company_manual.decisions.sign-check-board')}</li>
          </ul>
        </InfoCard>
      </div>

      {/* Ethics Section */}
      <InfoCard delay={0.5}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-danger-500/10 text-danger-500 flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <div>
            <h3 className="font-bold text-lg">{t('company_manual.decisions.ethics-conduct-title')}</h3>
            <p className="text-xs text-steel-500">{t('company_manual.decisions.ethics-intro')}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-steel-50 dark:bg-white/5">
            <h4 className="text-xs font-bold uppercase text-steel-400 mb-3">{t('company_manual.decisions.conflicts-interest-title')}</h4>
            <ul className="space-y-2 text-xs text-steel-600 dark:text-steel-300">
              {ethicsItems[0].items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <AlertCircle size={12} className={idx === 0 ? 'text-danger-500' : 'text-accent-cyan'} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-steel-50 dark:bg-white/5">
            <h4 className="text-xs font-bold uppercase text-steel-400 mb-3">{t('company_manual.decisions.gifts-entertainment-title')}</h4>
            <ul className="space-y-2 text-xs text-steel-600 dark:text-steel-300">
              {ethicsItems[1].items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <AlertCircle size={12} className={idx === 0 ? 'text-accent-cyan' : 'text-danger-500'} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-steel-50 dark:bg-white/5">
            <h4 className="text-xs font-bold uppercase text-steel-400 mb-3">{t('company_manual.decisions.professional-conduct-ethics-title')}</h4>
            <ul className="space-y-2 text-xs text-steel-600 dark:text-steel-300">
              {ethicsItems[2].items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <AlertCircle size={12} className={idx === 0 ? 'text-accent-cyan' : 'text-danger-500'} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InfoCard>
    </section>
  );
};

export default DecisionsSection;
