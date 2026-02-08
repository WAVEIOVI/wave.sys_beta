
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { 
        y: -5,
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1), 0 0 20px -5px rgba(255,255,255,0.1)",
        rotateX: 2,
        rotateY: 2 
      } : {}}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={`glass dark:glass-dark rounded-2xl p-6 relative overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
};

export default Card;
