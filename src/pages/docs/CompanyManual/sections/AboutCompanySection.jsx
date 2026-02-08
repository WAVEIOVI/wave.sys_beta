import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, Building2, MapPin, Phone, Mail, Globe, Users } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import { CompanyValuesRadar } from '../components/Charts';

const AboutCompanySection = () => {
  const { t } = useTranslation();

  return (
    <section className="space-y-10">
      <SectionHeader
        id="about-company"
        icon={Shield}
        title={t('company_manual.about-company.title')}
        color="cyan"
      />

      {/* Company Profile */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200">
          {t('company_manual.about-company.profile-title')}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Identity Card */}
          <InfoCard title={t('company_manual.about-company.identity-title')} delay={0.1}>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center py-2 border-b border-steel-100 dark:border-white/5">
                <span className="text-steel-500">{t('company_manual.about-company.official-name-label')}</span>
                <span className="font-bold text-accent-cyan">{t('company_manual.about-company.official-name-value')}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-steel-100 dark:border-white/5">
                <span className="text-steel-500">{t('company_manual.about-company.legal-name-label')}</span>
                <span className="font-semibold">{t('company_manual.about-company.legal-name-value')}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-steel-100 dark:border-white/5">
                <span className="text-steel-500">{t('company_manual.about-company.founded-label')}</span>
                <span className="font-semibold">{t('company_manual.about-company.founded-value')}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-steel-100 dark:border-white/5">
                <span className="text-steel-500">{t('company_manual.about-company.legal-structure-label')}</span>
                <span className="font-medium">{t('company_manual.about-company.legal-structure-value')}</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-steel-500">{t('company_manual.about-company.tax-id-label')}</span>
                <span className="font-mono text-xs bg-steel-100 dark:bg-steel-700 px-2 py-1 rounded">{t('company_manual.about-company.tax-id-value')}</span>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-accent-cyan/5 to-accent-amber/5 border border-accent-cyan/10">
              <p className="text-sm font-medium text-steel-600 dark:text-steel-300">
                <span className="text-accent-cyan font-bold">{t('company_manual.about-company.experience-label')}</span>{' '}
                {t('company_manual.about-company.experience-value')}
              </p>
            </div>
          </InfoCard>

          {/* Contact Info Card */}
          <InfoCard title={t('company_manual.about-company.contact-info-title')} delay={0.2}>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 p-3 rounded-xl bg-steel-50 dark:bg-white/5">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
                  <Globe size={18} className="text-accent-cyan" />
                </div>
                <div>
                  <span className="text-xs text-steel-400 uppercase tracking-wide">{t('company_manual.about-company.website-label')}</span>
                  <p className="font-semibold text-accent-cyan">www.ssplus.tn</p>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl bg-steel-50 dark:bg-white/5">
                <div className="w-10 h-10 rounded-xl bg-accent-amber/10 flex items-center justify-center">
                  <Mail size={18} className="text-accent-amber" />
                </div>
                <div>
                  <span className="text-xs text-steel-400 uppercase tracking-wide">{t('company_manual.about-company.email-label')}</span>
                  <p className="font-semibold">contact@ssplus.tn</p>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl bg-steel-50 dark:bg-white/5">
                <div className="w-10 h-10 rounded-xl bg-steel-200/50 dark:bg-steel-700/50 flex items-center justify-center">
                  <Phone size={18} className="text-steel-600 dark:text-steel-300" />
                </div>
                <div>
                  <span className="text-xs text-steel-400 uppercase tracking-wide">{t('company_manual.about-company.phone-label')}</span>
                  <p className="font-medium text-sm">{t('company_manual.about-company.phone-value')}</p>
                </div>
              </li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Locations */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200 flex items-center gap-3">
          <MapPin size={20} className="text-accent-amber" />
          {t('company_manual.about-company.locations-title')}
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sfax Facility */}
          <InfoCard gradient delay={0.3}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-cyan/60 flex items-center justify-center text-white shadow-lg shadow-accent-cyan/30">
                <Building2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{t('company_manual.about-company.sfax-facility-title')}</h4>
                <p className="text-sm text-steel-500">{t('company_manual.about-company.sfax-address')}</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-xs font-bold uppercase text-steel-400 tracking-wider">{t('company_manual.about-company.facilities-label')}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  t('company_manual.about-company.facility-corporate-office'),
                  t('company_manual.about-company.facility-showroom'),
                  t('company_manual.about-company.facility-workshop'),
                  t('company_manual.about-company.facility-warehouse'),
                ].map((facility, idx) => (
                  <span key={idx} className="px-3 py-1.5 text-xs font-medium bg-accent-cyan/10 text-accent-cyan rounded-full">
                    {facility}
                  </span>
                ))}
              </div>
            </div>
          </InfoCard>

          {/* Tunis Facility */}
          <InfoCard gradient delay={0.4}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-amber to-accent-amber/60 flex items-center justify-center text-white shadow-lg shadow-accent-amber/30">
                <Building2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{t('company_manual.about-company.tunis-facility-title')}</h4>
                <p className="text-sm text-steel-500">{t('company_manual.about-company.tunis-address')}</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              <p className="text-xs font-bold uppercase text-steel-400 tracking-wider">{t('company_manual.about-company.facilities-label')}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  t('company_manual.about-company.facility-branch-office'),
                  t('company_manual.about-company.facility-secondary-workshop'),
                  t('company_manual.about-company.facility-secondary-warehouse'),
                ].map((facility, idx) => (
                  <span key={idx} className="px-3 py-1.5 text-xs font-medium bg-accent-amber/10 text-accent-amber rounded-full">
                    {facility}
                  </span>
                ))}
              </div>
            </div>
          </InfoCard>
        </div>
      </div>

      {/* Service Commitment Values Chart */}
      <InfoCard className="!p-8" delay={0.5}>
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-2">{t('company_manual.service-commitment.what-makes-ss-different-title')}</h3>
          <p className="text-sm text-steel-500">Company performance metrics across key areas</p>
        </div>
        <CompanyValuesRadar />
      </InfoCard>
    </section>
  );
};

export default AboutCompanySection;
