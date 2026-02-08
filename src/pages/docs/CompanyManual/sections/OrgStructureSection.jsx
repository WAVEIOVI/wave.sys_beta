import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, Crown, Briefcase, Wrench, HeadphonesIcon, ShoppingBag } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import DataTable from '../components/DataTable';
import OrgChart from '../components/OrgChart';
import TechOpsChart from '../components/TechOpsChart';

const OrgStructureSection = () => {
  const { t } = useTranslation();

  const orgBoxes = [
    { name: t('company_manual.org-structure.karim-name'), role: t('company_manual.org-structure.karim-role'), color: 'cyan', icon: Crown },
    { name: t('company_manual.org-structure.najla-name'), role: t('company_manual.org-structure.najla-role'), color: 'amber', icon: Crown },
  ];

  const departments = [
    {
      icon: Briefcase,
      color: 'cyan',
      title: t('company_manual.org-structure.operations-leadership-title'),
      members: [
        { name: t('company_manual.org-structure.chraiti-name'), role: t('company_manual.org-structure.chraiti-role'), desc: t('company_manual.org-structure.chraiti-description') },
      ],
    },
    {
      icon: HeadphonesIcon,
      color: 'amber',
      title: t('company_manual.org-structure.sales-customer-service-title'),
      members: [
        { name: t('company_manual.org-structure.sales-rep-sfax'), role: 'Sfax Region' },
        { name: t('company_manual.org-structure.sales-rep-tunis'), role: 'Tunis Region' },
      ],
    },
    {
      icon: Wrench,
      color: 'steel',
      title: t('company_manual.org-structure.technical-operations-title'),
      items: [
        t('company_manual.org-structure.team-leader-a'),
        t('company_manual.org-structure.team-leader-b'),
        t('company_manual.org-structure.workshop-responsible'),
        t('company_manual.org-structure.service-technicians'),
      ],
    },
    {
      icon: ShoppingBag,
      color: 'amber',
      title: t('company_manual.org-structure.support-functions-title'),
      members: [
        { name: t('company_manual.org-structure.lenda-name'), role: t('company_manual.org-structure.lenda-role'), desc: t('company_manual.org-structure.lenda-description') },
        { name: t('company_manual.org-structure.daoud-name'), role: t('company_manual.org-structure.daoud-role'), desc: t('company_manual.org-structure.daoud-description') },
      ],
    },
  ];

  const contactHeaders = [
    t('company_manual.key-contacts.table-header-name'),
    t('company_manual.key-contacts.table-header-position'),
    t('company_manual.key-contacts.table-header-phone'),
    t('company_manual.key-contacts.table-header-responsibility'),
  ];

  const contactRows = [
    [t('company_manual.org-structure.karim-name'), t('company_manual.org-structure.karim-role'), '+216 29 308 108', t('company_manual.key-contacts.karim-responsibility')],
    [t('company_manual.org-structure.najla-name'), t('company_manual.org-structure.najla-role'), '+216 28 615 020', t('company_manual.key-contacts.najla-responsibility')],
    [t('company_manual.org-structure.chraiti-name'), t('company_manual.org-structure.chraiti-role'), '+216 29 308 933', t('company_manual.key-contacts.chraiti-responsibility')],
    [t('company_manual.org-structure.lenda-name'), t('company_manual.org-structure.lenda-role'), '+216 27 888 784', t('company_manual.key-contacts.lenda-responsibility')],
    [t('company_manual.org-structure.daoud-name'), t('company_manual.org-structure.daoud-role'), '+216 22 039 026', t('company_manual.key-contacts.daoud-responsibility')],
  ];

  const colorMap = {
    cyan: 'from-accent-cyan to-accent-cyan/60',
    amber: 'from-accent-amber to-accent-amber/60',
    steel: 'from-steel-500 to-steel-400',
  };

  return (
    <section className="space-y-10">
      <SectionHeader
        id="org-structure"
        icon={Users}
        title={t('company_manual.org-structure.title')}
        color="cyan"
      />

      {/* Leadership Cards */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200">
          {t('company_manual.org-structure.management-team-title')}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {orgBoxes.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${colorMap[person.color]} text-white shadow-lg`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <person.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{person.name}</h4>
                  <p className="text-white/80 text-sm">{person.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Departments Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {departments.map((dept, idx) => {
          const Icon = dept.icon;
          return (
            <InfoCard key={idx} delay={idx * 0.1}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  dept.color === 'cyan' ? 'bg-accent-cyan/10 text-accent-cyan' :
                  dept.color === 'amber' ? 'bg-accent-amber/10 text-accent-amber' :
                  'bg-steel-200/50 dark:bg-steel-700/50 text-steel-600 dark:text-steel-300'
                }`}>
                  <Icon size={18} />
                </div>
                <h4 className="font-bold text-steel-800 dark:text-white">{dept.title}</h4>
              </div>

              {dept.members ? (
                <div className="space-y-3">
                  {dept.members.map((member, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-xl bg-steel-50 dark:bg-white/5">
                      <p className="font-semibold text-sm">{member.name}</p>
                      <p className="text-xs text-steel-500">{member.role}</p>
                      {member.desc && <p className="text-xs text-steel-400 mt-1">{member.desc}</p>}
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {dept.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-sm text-steel-600 dark:text-steel-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </InfoCard>
          );
        })}
      </div>

      {/* Organization Charts - Visual Diagrams */}
      <div className="space-y-8">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200">
          {t('company_manual.org-structure.org-charts-title', 'Organization Charts')}
        </h3>
        
        {/* General Structure Chart */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-steel-600 dark:text-steel-300">
            {t('company_manual.org-structure.general-structure-title', 'General Structure')}
          </h4>
          <div className="p-6 rounded-2xl bg-white dark:bg-steel-800/50 border border-steel-200/50 dark:border-white/10 shadow-lg">
            <OrgChart />
          </div>
        </div>

        {/* Technical Operations Structure Chart */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-steel-600 dark:text-steel-300">
            {t('company_manual.org-structure.tech-ops-structure-title', 'Technical Operations Structure')}
          </h4>
          <div className="p-6 rounded-2xl bg-white dark:bg-steel-800/50 border border-steel-200/50 dark:border-white/10 shadow-lg">
            <TechOpsChart />
          </div>
        </div>
      </div>

      {/* Key Contacts Table */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-steel-700 dark:text-steel-200">
          {t('company_manual.key-contacts.title')}
        </h3>
        <DataTable headers={contactHeaders} rows={contactRows} colorScheme="cyan" />
      </div>
    </section>
  );
};

export default OrgStructureSection;
