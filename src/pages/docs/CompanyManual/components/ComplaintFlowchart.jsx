import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  MessageSquare, 
  Search, 
  CheckCircle, 
  ThumbsUp,
  AlertTriangle,
  ArrowRight,
  ArrowDown,
  Users,
} from 'lucide-react';

/**
 * Complaint Handling Process Flowchart
 * Vertical timeline/flowchart showing the 4-step complaint resolution process
 */
const ComplaintFlowchart = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: 'step-1',
      number: '1',
      title: 'Receive & Acknowledge',
      description: 'Listen, apologize, document, assign reference number',
      timeframe: 'Immediate',
      icon: MessageSquare,
      color: 'cyan',
    },
    {
      id: 'step-2',
      number: '2',
      title: 'Investigate',
      description: 'Review records, interview staff, gather facts',
      timeframe: '24 hours',
      icon: Search,
      color: 'amber',
    },
    {
      id: 'step-3',
      number: '3',
      title: 'Resolve',
      description: 'Determine fault, take action, communicate result',
      timeframe: '48-72 hours',
      icon: CheckCircle,
      color: 'emerald',
      hasBranching: true,
    },
    {
      id: 'step-4',
      number: '4',
      title: 'Follow-Up & Learn',
      description: 'Confirm satisfaction, document, review, improve',
      timeframe: '1 week',
      icon: ThumbsUp,
      color: 'violet',
    },
  ];

  const escalationLevels = [
    { level: 1, role: 'Tech / Sales Rep' },
    { level: 2, role: 'Team Leader' },
    { level: 3, role: 'Ops / Sales Responsible' },
    { level: 4, role: 'Manager / Co-Manager' },
  ];

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.4 },
    }),
  };

  const colorClasses = {
    cyan: {
      bg: 'bg-accent-cyan/10',
      border: 'border-accent-cyan/30',
      text: 'text-accent-cyan',
      ring: 'ring-accent-cyan/20',
      gradient: 'from-accent-cyan to-accent-cyan/60',
    },
    amber: {
      bg: 'bg-accent-amber/10',
      border: 'border-accent-amber/30',
      text: 'text-accent-amber',
      ring: 'ring-accent-amber/20',
      gradient: 'from-accent-amber to-accent-amber/60',
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-500',
      ring: 'ring-emerald-500/20',
      gradient: 'from-emerald-500 to-emerald-400',
    },
    violet: {
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      text: 'text-violet-500',
      ring: 'ring-violet-500/20',
      gradient: 'from-violet-500 to-violet-400',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Timeline */}
        <div className="flex-1 relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-amber to-violet-500" />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color];
              
              return (
                <motion.div
                  key={step.id}
                  custom={index}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                  >
                    {step.number}
                  </div>

                  {/* Step Card */}
                  <div
                    className={`p-5 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-xl ${colors.bg} ${colors.text}`}>
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <h4 className="font-bold text-steel-900 dark:text-white">
                            {step.title}
                          </h4>
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                            {step.timeframe}
                          </span>
                        </div>
                        <p className="text-sm text-steel-600 dark:text-steel-400">
                          {step.description}
                        </p>

                        {/* Branching for Step 3 */}
                        {step.hasBranching && (
                          <div className="mt-4 grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-1">
                                <CheckCircle size={14} />
                                SS+ Fault
                              </div>
                              <p className="text-xs text-steel-500 dark:text-steel-400">
                                Free rework, credit, apology
                              </p>
                            </div>
                            <div className="p-3 rounded-xl bg-steel-100 dark:bg-steel-800/50 border border-steel-200 dark:border-steel-700">
                              <div className="flex items-center gap-2 text-steel-600 dark:text-steel-400 font-medium text-sm mb-1">
                                <AlertTriangle size={14} />
                                Not SS+ Fault
                              </div>
                              <p className="text-xs text-steel-500 dark:text-steel-400">
                                Explain, educate
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 -bottom-3 transform -translate-x-1/2">
                      <ArrowDown size={16} className="text-steel-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Escalation Path Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="lg:w-64 shrink-0"
        >
          <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Users size={18} className="text-red-500" />
              <h4 className="font-bold text-steel-900 dark:text-white">
                Escalation Path
              </h4>
            </div>
            
            <div className="space-y-3">
              {escalationLevels.map((item, index) => (
                <div key={item.level} className="relative">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center text-xs font-bold text-red-600 dark:text-red-400">
                      {item.level}
                    </div>
                    <span className="text-sm text-steel-700 dark:text-steel-300">
                      {item.role}
                    </span>
                  </div>
                  {index < escalationLevels.length - 1 && (
                    <div className="absolute left-3.5 top-8 h-3 w-px bg-red-500/30" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-red-500/20">
              <p className="text-xs text-steel-500 dark:text-steel-400 italic">
                Escalate if customer remains unsatisfied after resolution attempt
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComplaintFlowchart;
