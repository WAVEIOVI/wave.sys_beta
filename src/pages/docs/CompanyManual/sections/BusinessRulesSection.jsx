import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Tag, DollarSign, Percent, CreditCard, Truck, Shield, AlertTriangle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';

const BusinessRulesSection = () => {
  const { t } = useTranslation();

  const pricingMethods = [
    t('company_manual.business-rules.method-fire-service'),
    t('company_manual.business-rules.method-products'),
    t('company_manual.business-rules.method-msa'),
  ];

  const discountTiers = [
    { level: 1, authority: 'Sales Reps', limit: 'Up to 15%', color: 'bg-accent-cyan' },
    { level: 2, authority: 'Sales Responsible', limit: '16-25%', color: 'bg-accent-amber' },
    { level: 3, authority: 'Manager (Karim)', limit: '26-35%', color: 'bg-orange-500' },
    { level: 4, authority: 'Board of Directors', limit: '> 35%', color: 'bg-danger-500' },
  ];

  const paymentTerms = [
    { type: t('company_manual.business-rules.terms-new-customers'), icon: DollarSign, color: 'amber' },
    { type: t('company_manual.business-rules.terms-established'), icon: CreditCard, color: 'cyan' },
    { type: t('company_manual.business-rules.terms-contract'), icon: Shield, color: 'cyan' },
  ];

  const travelZones = [
    { zone: 'Zone 0', distance: t('company_manual.business-rules.zone-0-label'), fee: t('company_manual.business-rules.zone-0-details'), color: 'bg-accent-cyan' },
    { zone: 'Zone 1', distance: t('company_manual.business-rules.zone-1-label'), fee: t('company_manual.business-rules.zone-1-details'), color: 'bg-accent-amber' },
    { zone: 'Zone 2', distance: t('company_manual.business-rules.zone-2-label'), fee: t('company_manual.business-rules.zone-2-details'), color: 'bg-orange-500' },
    { zone: 'Zone 3', distance: t('company_manual.business-rules.zone-3-label'), fee: t('company_manual.business-rules.zone-3-details'), color: 'bg-danger-500' },
  ];

  const warrantyItems = [
    t('company_manual.business-rules.product-returns'),
    t('company_manual.business-rules.defective-products'),
    t('company_manual.business-rules.service-rework-details'),
  ];

  const riskFlags = [
    t('company_manual.business-rules.risk-decline-credit'),
    t('company_manual.business-rules.risk-decline-job'),
    t('company_manual.business-rules.risk-red-flags'),
  ];

  return (
    <section className="space-y-10">
      <SectionHeader
        id="business-rules"
        icon={Tag}
        title={t('company_manual.business-rules.title')}
        color="amber"
      />

      {/* Pricing Guidelines */}
      <InfoCard title={t('company_manual.business-rules.pricing-guidelines-title')} delay={0.1}>
        <div className="space-y-4">
          <p className="text-sm text-accent-cyan font-semibold">{t('company_manual.business-rules.pricing-fairness')}</p>
          <p className="text-sm text-steel-500">{t('company_manual.business-rules.price-list-update')}</p>
          
          <div className="mt-4">
            <p className="text-xs font-bold uppercase text-steel-400 tracking-wider mb-3">{t('company_manual.business-rules.pricing-methods-label')}</p>
            <div className="grid md:grid-cols-3 gap-3">
              {pricingMethods.map((method, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-steel-50 dark:bg-white/5 text-sm text-steel-600 dark:text-steel-300">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </InfoCard>

      {/* Discount Authority Matrix */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200">
          {t('company_manual.business-rules.discount-authority-matrix-title')}
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          {discountTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl p-5 bg-white dark:bg-steel-800/50 border border-steel-200/50 dark:border-white/10 shadow-lg"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${tier.color}`} />
              <div className={`w-8 h-8 rounded-lg ${tier.color} text-white flex items-center justify-center mb-3`}>
                <span className="text-sm font-bold">{tier.level}</span>
              </div>
              <h4 className="font-bold text-sm mb-1">{tier.authority}</h4>
              <p className="text-lg font-bold text-steel-800 dark:text-white">{tier.limit}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment Terms */}
      <InfoCard title={t('company_manual.business-rules.payment-terms-credit-title')} delay={0.2}>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {paymentTerms.map((term, idx) => {
            const Icon = term.icon;
            return (
              <div key={idx} className={`p-4 rounded-xl ${
                term.color === 'cyan' ? 'bg-accent-cyan/5 border border-accent-cyan/20' : 'bg-accent-amber/5 border border-accent-amber/20'
              }`}>
                <Icon size={20} className={term.color === 'cyan' ? 'text-accent-cyan mb-2' : 'text-accent-amber mb-2'} />
                <p className="text-sm font-medium text-steel-700 dark:text-steel-200">{term.type}</p>
              </div>
            );
          })}
        </div>
        <div className="p-3 rounded-xl bg-danger-500/5 border border-danger-500/20">
          <p className="text-sm text-danger-500 flex items-center gap-2">
            <AlertTriangle size={16} />
            {t('company_manual.business-rules.late-penalties')}
          </p>
        </div>
      </InfoCard>

      {/* Travel Fees */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200 flex items-center gap-3">
          <Truck size={20} className="text-accent-amber" />
          {t('company_manual.business-rules.standardized-travel-fees-title')}
        </h3>
        <p className="text-sm text-steel-500">{t('company_manual.business-rules.travel-fees-intro')}</p>

        <div className="grid md:grid-cols-4 gap-4">
          {travelZones.map((zone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl p-5 bg-white dark:bg-steel-800/50 border border-steel-200/50 dark:border-white/10"
            >
              <div className={`absolute inset-0 opacity-5 ${zone.color}`} />
              <div className={`w-10 h-10 rounded-xl ${zone.color} text-white flex items-center justify-center mb-3`}>
                <Truck size={18} />
              </div>
              <p className="text-xs font-bold uppercase text-steel-400 tracking-wider">{zone.zone}</p>
              <p className="text-xs text-steel-500 mb-2">{zone.distance}</p>
              <p className="text-lg font-bold text-steel-800 dark:text-white">{zone.fee}</p>
            </motion.div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
          <p className="text-sm text-steel-600 dark:text-steel-300">
            <span className="font-bold text-accent-cyan">{t('company_manual.business-rules.waiver-label')}</span> {t('company_manual.business-rules.waiver-details')}
          </p>
        </div>
      </div>

      {/* Warranty & Risk */}
      <div className="grid md:grid-cols-2 gap-6">
        <InfoCard title={t('company_manual.business-rules.warranty-rework-title')} delay={0.3}>
          <ul className="space-y-3">
            {warrantyItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <Shield size={16} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                <span className="text-steel-600 dark:text-steel-300">{item}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard title={t('company_manual.business-rules.risk-management-title')} delay={0.4}>
          <ul className="space-y-3">
            {riskFlags.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <AlertTriangle size={16} className="text-danger-500 mt-0.5 flex-shrink-0" />
                <span className="text-steel-600 dark:text-steel-300">{item}</span>
              </li>
            ))}
          </ul>
        </InfoCard>
      </div>
    </section>
  );
};

export default BusinessRulesSection;
