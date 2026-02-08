import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileDown, Loader2 } from 'lucide-react';

const PDFExportButton = ({ label, onClick, loading = false, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={loading}
      className={`
        relative inline-flex items-center gap-3 px-6 py-3.5
        bg-gradient-to-r from-danger-500 to-danger-600
        hover:from-danger-600 hover:to-danger-700
        text-white font-semibold text-sm
        rounded-xl shadow-lg shadow-danger-500/30
        hover:shadow-xl hover:shadow-danger-500/40
        transition-all duration-300
        disabled:opacity-70 disabled:cursor-not-allowed
        overflow-hidden group
        ${className}
      `}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      
      <span className="relative flex items-center gap-2">
        {loading ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <FileDown size={18} />
        )}
        {label}
      </span>
    </motion.button>
  );
};

export default PDFExportButton;
