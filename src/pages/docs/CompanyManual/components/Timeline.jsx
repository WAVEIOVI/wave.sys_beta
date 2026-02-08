import React from 'react';
import { motion } from 'framer-motion';
import { FileText, RefreshCw, CheckCircle2 } from 'lucide-react';

const Timeline = ({ items }) => {
  const defaultItems = [
    { version: '0.1', date: '2025-06', label: 'Initial Draft', icon: FileText, status: 'complete' },
    { version: '0.2', date: '2025-08', label: 'Team Review', icon: RefreshCw, status: 'complete' },
    { version: '0.3', date: '2025-10', label: 'Policy Update', icon: RefreshCw, status: 'complete' },
    { version: '0.4', date: '2025-11', label: 'Current Release', icon: CheckCircle2, status: 'current' },
  ];

  const timelineData = items || defaultItems;

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-amber to-steel-300 dark:to-steel-600" />
      
      <div className="space-y-6">
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          const isCurrent = item.status === 'current';
          
          return (
            <motion.div
              key={item.version}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 pl-2"
            >
              <div className={`
                relative z-10 w-8 h-8 rounded-full flex items-center justify-center
                ${isCurrent 
                  ? 'bg-accent-cyan text-white shadow-lg shadow-accent-cyan/40 ring-4 ring-accent-cyan/20' 
                  : 'bg-steel-100 dark:bg-steel-700 text-steel-500 dark:text-steel-400'
                }
              `}>
                <Icon size={14} />
              </div>
              
              <div className={`flex-1 pb-6 ${isCurrent ? '' : 'opacity-70'}`}>
                <div className="flex items-center gap-3 mb-1">
                  <span className={`
                    text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full
                    ${isCurrent 
                      ? 'bg-accent-cyan/10 text-accent-cyan' 
                      : 'bg-steel-100 dark:bg-steel-700 text-steel-500'
                    }
                  `}>
                    v{item.version}
                  </span>
                  <span className="text-xs text-steel-400">{item.date}</span>
                </div>
                <p className={`text-sm font-medium ${isCurrent ? 'text-steel-800 dark:text-white' : 'text-steel-600 dark:text-steel-400'}`}>
                  {item.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
