import React from 'react';
import { motion } from 'framer-motion';

const DataTable = ({ headers, rows, colorScheme = 'cyan' }) => {
  const headerColors = {
    cyan: 'from-accent-cyan/5 to-accent-cyan/10',
    amber: 'from-accent-amber/5 to-accent-amber/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-steel-200/50 dark:border-white/10 shadow-lg"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className={`bg-gradient-to-r ${headerColors[colorScheme]} dark:from-steel-800 dark:to-steel-800/80`}>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-widest text-steel-500 dark:text-steel-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-steel-100 dark:divide-white/5">
            {rows.map((row, rowIdx) => (
              <motion.tr
                key={rowIdx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIdx * 0.05 }}
                className="bg-white/50 dark:bg-steel-800/30 hover:bg-accent-cyan/5 dark:hover:bg-accent-cyan/5 transition-colors"
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`px-6 py-4 ${cellIdx === 0 ? 'font-semibold text-steel-800 dark:text-white' : 'text-steel-600 dark:text-steel-300'}`}
                  >
                    {cell}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default DataTable;
