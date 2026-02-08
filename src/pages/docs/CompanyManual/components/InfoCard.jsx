import React from 'react';
import { motion } from 'framer-motion';

const InfoCard = ({ title, children, className = '', gradient = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`
        relative overflow-hidden rounded-2xl p-6
        bg-white/80 dark:bg-steel-800/60
        backdrop-blur-xl
        border border-steel-200/50 dark:border-white/10
        shadow-lg shadow-steel-200/20 dark:shadow-black/20
        hover:shadow-xl hover:shadow-accent-cyan/10 dark:hover:shadow-accent-cyan/5
        transition-all duration-300
        ${gradient ? 'bg-gradient-to-br from-white/90 to-steel-50/90 dark:from-steel-800/80 dark:to-steel-900/80' : ''}
        ${className}
      `}
    >
      {/* Glassmorphism shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
      
      {title && (
        <h3 className="relative font-bold text-lg text-steel-800 dark:text-white mb-4 pb-3 border-b border-steel-100 dark:border-white/10">
          {title}
        </h3>
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
};

export default InfoCard;
