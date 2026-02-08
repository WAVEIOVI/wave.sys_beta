
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, Search, Globe, Shield, BookOpen, HelpCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';

import Sidebar from '@/components/layout/Sidebar';
import BottomNav from '@/components/layout/BottomNav';

const DashboardPage = () => {
    const { t } = useTranslation();

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex bg-cosmic-latte dark:bg-steel-900 min-h-screen text-steel-900 dark:text-steel-50 font-sans transition-colors duration-500">
            <Sidebar />
            <div className="flex-1 flex flex-col relative h-screen overflow-hidden">
                <Header />
                <main className="flex-1 p-6 md:p-12 pb-24 md:pb-12 overflow-y-auto scrollbar-thin scrollbar-thumb-steel-300 dark:scrollbar-thumb-steel-700 scrollbar-track-transparent">
                    {/* Page Title */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight">Documentation Hub</h1>
                        <p className="text-steel-600 dark:text-steel-400 mt-2">Centralized access to all company procedures and guidelines.</p>
                    </div>

                    {/* Dashboard Grid */}
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div variants={item}>
                                <Card className="bg-white dark:bg-steel-800 border-steel-200 dark:border-steel-700 flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">7</div>
                                        <div className="text-sm text-steel-500">Total Documents</div>
                                    </div>
                                </Card>
                            </motion.div>
                            <motion.div variants={item}>
                                <Card className="bg-white dark:bg-steel-800 border-steel-200 dark:border-steel-700 flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-accent-amber/10 text-accent-amber">
                                        <Search size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">100%</div>
                                        <div className="text-sm text-steel-500">Searchable Content</div>
                                    </div>
                                </Card>
                            </motion.div>
                            <motion.div variants={item}>
                                <Card className="bg-white dark:bg-steel-800 border-steel-200 dark:border-steel-700 flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold">3</div>
                                        <div className="text-sm text-steel-500">Supported Languages</div>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Layer 1: Foundation */}
                        <motion.section variants={item}>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 font-azonix tracking-wider">
                                <Shield size={20} className="text-accent-cyan" />
                                Layer 01: Foundation Documents
                            </h2>
                            <Link to="/docs/company-manual">
                                <Card className="bg-gradient-to-br from-steel-800 to-steel-950 border-accent-cyan/30 hover:border-accent-cyan/60 cursor-pointer group shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Shield size={120} />
                                    </div>
                                    <div className="flex items-start justify-between relative z-10">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[10px] font-bold uppercase tracking-widest bg-accent-cyan/20 text-accent-cyan px-2 py-0.5 rounded">Core Reference</span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-steel-500">v1.1.0</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">Company Manual: Policies & Values</h3>
                                            <p className="text-steel-300 mt-2 max-w-2xl leading-relaxed">
                                                The master blueprint of SS PLUS operations. Contains our organizational hierarchy, 
                                                core behavioral values, and global compliance policies.
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all">
                                            <ArrowRightIcon className="text-steel-400 group-hover:text-accent-cyan transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.section>

                        {/* Layer 2: Core Modules */}
                        <motion.section variants={item}>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 font-azonix tracking-wider">
                                <BookOpen size={20} className="text-accent-amber" />
                                Layer 02: Core Modules (Playbooks)
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: 'SALES & CUSTOMER MANAGEMENT PLAYBOOK', desc: 'SS PLUS Revenue & Client Acquisition Standards' },
                                    { title: 'SERVICE DELIVERY PLAYBOOK', desc: 'Operational Workflow & Technical Standards' },
                                    { title: 'PRODUCTS & INVENTORY PLAYBOOK', desc: 'Supply Chain & Stock Management' },
                                    { title: 'PEOPLE & ADMIN PLAYBOOK', desc: 'Human Resources & Document Control' },
                                    { title: 'MONEY & FINANCE PLAYBOOK', desc: 'Accounting & Expenditure Control' }
                                ].map((doc, i) => (
                                    <Card key={i} className="bg-white dark:bg-steel-800/80 border-steel-200 dark:border-white/5 hover:border-accent-amber/50 cursor-pointer group transition-all hover:shadow-lg dark:hover:bg-steel-800">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber font-bold">
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <span className="text-[10px] font-bold bg-steel-100 dark:bg-white/5 text-steel-500 dark:text-steel-400 px-2 py-1 rounded">PLAYBOOK</span>
                                        </div>
                                        <h3 className="font-bold text-sm mb-2 group-hover:text-accent-amber transition-colors uppercase tracking-tight">{doc.title}</h3>
                                        <p className="text-xs text-steel-600 dark:text-steel-400 leading-snug">{doc.desc}</p>
                                    </Card>
                                ))}
                            </div>
                        </motion.section>

                         {/* Layer 3: Support Documents */}
                         <motion.section variants={item}>
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 font-azonix tracking-wider">
                                <HelpCircle size={20} className="text-purple-400" />
                                Support Documents
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Card className="bg-white dark:bg-steel-800 border-steel-200 dark:border-white/5 hover:border-purple-400/50 cursor-pointer">
                                    <h3 className="font-bold mb-2">Employee Handbook</h3>
                                    <p className="text-sm text-steel-500">Essential guide for daily life at SS PLUS.</p>
                                </Card>
                                {[1, 2].map((i) => (
                                    <Card key={i} className="bg-steel-50 dark:bg-steel-800/50 border-dashed border-steel-300 dark:border-steel-700 opacity-60">
                                        <div className="h-full flex flex-col items-center justify-center text-center py-8">
                                            <div className="w-12 h-12 rounded-full bg-steel-200 dark:bg-steel-700 mb-3" />
                                            <div className="text-sm font-medium">Coming Soon</div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </motion.section>
                    </motion.div>
                </main>
                <BottomNav />
            </div>
        </div>
    );
};

const ArrowRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default DashboardPage;
