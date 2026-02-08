
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming we create a utils file, otherwise inline

// Inline utility for now if lib/utils doesn't exist yet
const classNames = (...classes) => classes.filter(Boolean).join(' ');

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";
  
  const variants = {
    primary: "bg-accent-cyan text-white shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40",
    secondary: "bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20",
    danger: "bg-danger-600 text-white shadow-lg shadow-danger-600/20 hover:shadow-danger-600/40",
    ghost: "text-steel-600 dark:text-steel-300 hover:bg-black/5 dark:hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={classNames(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </motion.button>
  );
};

export default Button;
