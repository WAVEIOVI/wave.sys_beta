import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/**
 * Interactive Organization Chart for General Company Structure
 * Displays hierarchy: Managers -> Operations, Sales, Finance, Collections
 */
const OrgChart = () => {
  const { t } = useTranslation();
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
  };

  const lineVariants = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  // Node component for reusability
  const OrgNode = ({ id, x, y, width, height, title, subtitle, delay = 0, level = 'primary' }) => {
    const isHovered = hoveredNode === id;
    const colorClasses = {
      primary: 'from-accent-cyan/20 to-accent-cyan/5 border-accent-cyan/30',
      secondary: 'from-accent-amber/20 to-accent-amber/5 border-accent-amber/30',
      tertiary: 'from-steel-200 to-steel-100 dark:from-steel-700 dark:to-steel-800 border-steel-300 dark:border-steel-600',
    };

    return (
      <motion.g
        variants={nodeVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ delay }}
        onMouseEnter={() => setHoveredNode(id)}
        onMouseLeave={() => setHoveredNode(null)}
        className="cursor-pointer"
      >
        <foreignObject x={x} y={y} width={width} height={height}>
          <div
            className={`h-full rounded-xl border bg-gradient-to-br ${colorClasses[level]} backdrop-blur-sm p-3 flex flex-col justify-center transition-all duration-200 ${
              isHovered ? 'shadow-lg ring-2 ring-accent-cyan/40' : 'shadow-sm'
            }`}
          >
            <div className="text-center">
              <div className="font-bold text-sm text-steel-900 dark:text-white truncate">
                {title}
              </div>
              {subtitle && (
                <div className="text-xs text-steel-500 dark:text-steel-400 mt-1 truncate">
                  {subtitle}
                </div>
              )}
            </div>
          </div>
        </foreignObject>
      </motion.g>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full overflow-x-auto"
    >
      <svg
        viewBox="0 0 900 400"
        className="w-full min-w-[700px] h-auto"
        role="img"
        aria-label="Organization Structure Chart"
      >
        {/* Connection Lines */}
        <motion.g
          variants={lineVariants}
          initial="initial"
          animate="animate"
        >
          {/* Manager to departments */}
          <motion.path
            d="M 450 90 L 450 130 L 150 130 L 150 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="text-steel-300 dark:text-steel-600"
            variants={lineVariants}
          />
          <motion.path
            d="M 450 90 L 450 130 L 350 130 L 350 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="text-steel-300 dark:text-steel-600"
            variants={lineVariants}
          />
          <motion.path
            d="M 450 90 L 450 130 L 550 130 L 550 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="text-steel-300 dark:text-steel-600"
            variants={lineVariants}
          />
          <motion.path
            d="M 450 90 L 450 130 L 750 130 L 750 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="text-steel-300 dark:text-steel-600"
            variants={lineVariants}
          />

          {/* Sales to sub-departments */}
          <motion.path
            d="M 350 220 L 350 250 L 250 250 L 250 270"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="text-steel-300 dark:text-steel-600"
            variants={lineVariants}
          />
          <motion.path
            d="M 350 220 L 350 250 L 450 250 L 450 270"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="text-steel-300 dark:text-steel-600"
            variants={lineVariants}
          />

          {/* Collections to Kais */}
          <motion.path
            d="M 750 220 L 750 270"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="text-steel-300 dark:text-steel-600"
            variants={lineVariants}
          />
        </motion.g>

        {/* Managers - Top Level */}
        <OrgNode
          id="karim"
          x={325}
          y={10}
          width={250}
          height={35}
          title={t('company_manual.org-structure.karim-name')}
          subtitle={t('company_manual.org-structure.karim-role')}
          level="primary"
          delay={0}
        />
        <OrgNode
          id="najla"
          x={325}
          y={50}
          width={250}
          height={35}
          title={t('company_manual.org-structure.najla-name')}
          subtitle={t('company_manual.org-structure.najla-role')}
          level="primary"
          delay={0.1}
        />

        {/* Department Level */}
        <OrgNode
          id="operations"
          x={50}
          y={160}
          width={200}
          height={55}
          title="Operations"
          subtitle={t('company_manual.org-structure.chraiti-name')}
          level="secondary"
          delay={0.2}
        />
        <OrgNode
          id="sales"
          x={260}
          y={160}
          width={180}
          height={55}
          title="Sales"
          subtitle="Najla / Sales Reps"
          level="secondary"
          delay={0.25}
        />
        <OrgNode
          id="finance"
          x={460}
          y={160}
          width={180}
          height={55}
          title="Finance & Admin"
          subtitle={t('company_manual.org-structure.lenda-name')}
          level="secondary"
          delay={0.3}
        />
        <OrgNode
          id="collections"
          x={660}
          y={160}
          width={180}
          height={55}
          title="Collections"
          subtitle={t('company_manual.org-structure.daoud-name')}
          level="secondary"
          delay={0.35}
        />

        {/* Sub-department Level */}
        <OrgNode
          id="sfax-sales"
          x={160}
          y={270}
          width={160}
          height={45}
          title="Sfax Sales"
          subtitle={t('company_manual.org-structure.chraiti-name')}
          level="tertiary"
          delay={0.4}
        />
        <OrgNode
          id="tunis-sales"
          x={340}
          y={270}
          width={160}
          height={45}
          title="Tunis Sales"
          subtitle="Kais KHAIRALLAH"
          level="tertiary"
          delay={0.45}
        />
        <OrgNode
          id="warehouse"
          x={520}
          y={270}
          width={160}
          height={45}
          title="Warehouse/Showroom"
          subtitle="Responsible"
          level="tertiary"
          delay={0.5}
        />
        <OrgNode
          id="collection-agent"
          x={700}
          y={270}
          width={140}
          height={45}
          title="Kais KHAIRALLAH"
          subtitle="Collection (Tunis)"
          level="tertiary"
          delay={0.55}
        />
      </svg>
    </motion.div>
  );
};

export default OrgChart;
