import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ icon: Icon, title, color = 'cyan', id }) => {
  const colorClasses = {
    cyan: 'bg-accent-cyan/10 text-accent-cyan',
    amber: 'bg-accent-amber/10 text-accent-amber',
    danger: 'bg-danger-500/10 text-danger-500',
    steel: 'bg-steel-200/50 dark:bg-steel-700/50 text-steel-600 dark:text-steel-300',
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 scroll-mt-24"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorClasses[color]}`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold font-azonix tracking-wider text-steel-900 dark:text-white">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeader;
