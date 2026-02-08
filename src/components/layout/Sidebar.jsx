
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, Settings, ChevronLeft, ChevronRight, Shield, BookOpen, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const mainLinks = [
    { icon: LayoutDashboard, label: 'Docs Hub', path: '/dashboard' },
  ];

  const docLayers = [
    {
        label: 'Layer 01: Foundation',
        icon: Shield,
        items: [
            { label: 'Company Manual', path: '/docs/company-manual' }
        ]
    },
    {
        label: 'Layer 02: Playbooks',
        icon: BookOpen,
        items: [
            { label: 'Sales & Customer', path: '/docs/sales' },
            { label: 'Service Delivery', path: '/docs/service' },
            { label: 'Products & Inventory', path: '/docs/products' },
            { label: 'People & Admin', path: '/docs/people' },
            { label: 'Money & Finance', path: '/docs/money' }
        ]
    },
    {
        label: 'Support Docs',
        icon: HelpCircle,
        items: [
            { label: 'Employee Handbook', path: '/docs/handbook' }
        ]
    }
  ];

  return (
    <motion.aside
      initial={{ width: 280 }}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="hidden md:flex flex-col h-screen glass border-r border-white/10 dark:border-white/5 sticky top-0 z-50 overflow-hidden"
    >
      <div className="flex items-center justify-between p-4 h-16 border-b border-white/10 shrink-0">
        <AnimatePresence mode='wait'>
            {!collapsed && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-amber bg-clip-text text-transparent font-azonix tracking-wider"
                >
                    wave.sys
                </motion.div>
            )}
        </AnimatePresence>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none p-4 pb-10">
        {/* Main Navigation */}
        <nav className="space-y-2 mb-8">
            {mainLinks.map(({ icon: Icon, label, path }) => (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) => `
                    flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group
                    ${isActive ? 'bg-accent-cyan/20 text-accent-cyan active' : 'text-steel-600 dark:text-steel-400 hover:bg-white/5 hover:text-steel-100'}
                    `}
                >
                    <Icon size={22} className="shrink-0" />
                    {!collapsed && <span className="font-semibold">{label}</span>}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-accent-cyan rounded-r-full transition-all duration-300 group-[.active]:h-8" />
                </NavLink>
            ))}
        </nav>

        {/* Documentation Layers */}
        {!collapsed && (
            <div className="space-y-6">
                <div className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-steel-500 mb-2">
                    Documentation Layers
                </div>
                {docLayers.map((layer, idx) => (
                    <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2 px-3 py-1 text-xs font-semibold text-steel-400">
                            <layer.icon size={14} className="text-accent-cyan/50" />
                            <span>{layer.label}</span>
                        </div>
                        <div className="ps-6 space-y-1">
                            {layer.items.map((item, itemIdx) => (
                                <NavLink
                                    key={itemIdx}
                                    to={item.path}
                                    className={({ isActive }) => `
                                        block px-3 py-2 text-sm rounded-lg transition-colors
                                        ${isActive ? 'text-accent-cyan bg-accent-cyan/10' : 'text-steel-500 dark:text-steel-400 hover:text-white hover:bg-white/5'}
                                    `}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )}
        
        {collapsed && (
             <div className="flex flex-col items-center gap-6 mt-4 opacity-40">
                {docLayers.map((layer, idx) => (
                    <layer.icon key={idx} size={20} />
                ))}
             </div>
        )}
      </div>

      {/* Footer Settings */}
      <div className="p-4 border-t border-white/10 shrink-0">
          <NavLink
            to="/settings"
            className={({ isActive }) => `
                flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-300
                ${isActive ? 'bg-white/10 text-white' : 'text-steel-500 dark:text-steel-400 hover:bg-white/5'}
            `}
          >
            <Settings size={22} className="shrink-0" />
            {!collapsed && <span className="font-semibold text-sm">Settings</span>}
          </NavLink>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
