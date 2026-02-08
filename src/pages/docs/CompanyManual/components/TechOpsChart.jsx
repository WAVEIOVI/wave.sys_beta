import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/**
 * Technical Operations Organization Chart
 * Shows hierarchy: Manager → Co-Manager → Ops Responsible → Team Leaders → Technicians
 */
const TechOpsChart = () => {
  const { t } = useTranslation();
  const [hoveredNode, setHoveredNode] = useState(null);

  const nodeVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  // Reusable node component
  const TechNode = ({ id, x, y, width, height, title, subtitle, delay = 0, color = 'cyan' }) => {
    const isHovered = hoveredNode === id;
    const colorClasses = {
      cyan: 'from-accent-cyan/20 to-accent-cyan/5 border-accent-cyan/30 hover:border-accent-cyan/60',
      amber: 'from-accent-amber/20 to-accent-amber/5 border-accent-amber/30 hover:border-accent-amber/60',
      emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/60',
      steel: 'from-steel-200 to-steel-100 dark:from-steel-700 dark:to-steel-800 border-steel-300 dark:border-steel-600',
    };

    return (
      <motion.g
        variants={nodeVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ delay, duration: 0.3 }}
        onMouseEnter={() => setHoveredNode(id)}
        onMouseLeave={() => setHoveredNode(null)}
        className="cursor-pointer"
      >
        <foreignObject x={x} y={y} width={width} height={height}>
          <div
            className={`h-full rounded-xl border bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm p-2 flex flex-col justify-center transition-all duration-200 ${
              isHovered ? 'shadow-lg' : 'shadow-sm'
            }`}
          >
            <div className="text-center">
              <div className="font-bold text-xs text-steel-900 dark:text-white leading-tight">
                {title}
              </div>
              {subtitle && (
                <div className="text-[10px] text-steel-500 dark:text-steel-400 mt-0.5 leading-tight">
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
        viewBox="0 0 800 380"
        className="w-full min-w-[600px] h-auto"
        role="img"
        aria-label="Technical Operations Structure Chart"
      >
        {/* Connection Lines */}
        <g className="text-steel-300 dark:text-steel-600">
          {/* Vertical chain from managers */}
          <motion.line
            x1="400" y1="45" x2="400" y2="60"
            stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.line
            x1="400" y1="100" x2="400" y2="115"
            stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />

          {/* Ops Responsible to Team Leaders */}
          <motion.path
            d="M 400 155 L 400 175 L 150 175 L 150 190"
            fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          <motion.path
            d="M 400 155 L 400 175 L 400 190"
            fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          />
          <motion.path
            d="M 400 155 L 400 175 L 650 175 L 650 190"
            fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />

          {/* Team Leaders to Technicians */}
          <motion.line
            x1="150" y1="245" x2="150" y2="270"
            stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
          <motion.line
            x1="400" y1="245" x2="400" y2="270"
            stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          />
          <motion.line
            x1="650" y1="245" x2="650" y2="270"
            stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
        </g>

        {/* Level 1: Manager */}
        <TechNode
          id="karim"
          x={280}
          y={5}
          width={240}
          height={40}
          title={t('company_manual.org-structure.karim-name')}
          subtitle={t('company_manual.org-structure.karim-role')}
          color="cyan"
          delay={0}
        />

        {/* Level 2: Co-Manager */}
        <TechNode
          id="najla"
          x={280}
          y={60}
          width={240}
          height={40}
          title={t('company_manual.org-structure.najla-name')}
          subtitle="Co-Manager"
          color="cyan"
          delay={0.1}
        />

        {/* Level 3: Operations Responsible */}
        <TechNode
          id="chraiti"
          x={280}
          y={115}
          width={240}
          height={40}
          title={t('company_manual.org-structure.chraiti-name')}
          subtitle="Operations Responsible"
          color="amber"
          delay={0.2}
        />

        {/* Level 4: Team Leaders & Workshop */}
        <TechNode
          id="team-a"
          x={50}
          y={190}
          width={200}
          height={55}
          title="Team Leader (Team A)"
          subtitle="Supervises 02 Technicians"
          color="emerald"
          delay={0.3}
        />
        <TechNode
          id="workshop"
          x={300}
          y={190}
          width={200}
          height={55}
          title="Workshop Responsible (Sfax)"
          subtitle="Workshop & Refilling"
          color="emerald"
          delay={0.35}
        />
        <TechNode
          id="team-b"
          x={550}
          y={190}
          width={200}
          height={55}
          title="Team Leader (Team B)"
          subtitle="Supervises 02 Technicians"
          color="emerald"
          delay={0.4}
        />

        {/* Level 5: Technicians */}
        <TechNode
          id="techs-a"
          x={50}
          y={270}
          width={200}
          height={50}
          title="Technician 01 · Technician 02"
          subtitle="Field Service"
          color="steel"
          delay={0.5}
        />
        <TechNode
          id="tech-workshop"
          x={300}
          y={270}
          width={200}
          height={50}
          title="Technician 05"
          subtitle="Workshop Sfax"
          color="steel"
          delay={0.55}
        />
        <TechNode
          id="techs-b"
          x={550}
          y={270}
          width={200}
          height={50}
          title="Technician 03 · Technician 04"
          subtitle="Field Service"
          color="steel"
          delay={0.6}
        />
      </svg>
    </motion.div>
  );
};

export default TechOpsChart;
