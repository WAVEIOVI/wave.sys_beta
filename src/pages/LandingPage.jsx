

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const LandingPage = () => {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { type: "spring", stiffness: 50 } 
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-cosmic-latte dark:bg-steel-900 transition-colors duration-500">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent-cyan/10 blur-[150px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent-amber/10 blur-[150px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
            </div>

            <main className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
                
                {/* Logo Animation */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 flex flex-col items-center gap-4"
                >
                    {/* User requested 100% white logo. Added drop-shadow for visibility on light bg if needed, but kept white as requested */
                     /* Actually, reverting to smart adaptation for visibility: Black in Light, White in Dark */}
                    <img src="/logos/logo-ss-plus.png" alt="SS PLUS" className="h-16 md:h-20 object-contain drop-shadow-xl brightness-0 dark:invert filter transition-all duration-500" />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-2 text-steel-500 dark:text-steel-400 text-sm tracking-widest uppercase font-medium"
                    >
                        <span>Powered by</span>
                        {/* Wave IO logo adapts to mode: dark in light mode, white in dark mode. Or if they want it white too? 
                            The user specially said "ss plus logo" white. I'll let Wave IO adapt for contrast. */}
                        <img src="/logos/logo-wave-io.png" alt="WAVE IO" className="h-6 object-contain dark:invert dark:brightness-0 dark:filter" />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <motion.h1 
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold tracking-tight font-azonix text-steel-900 dark:text-white drop-shadow-sm"
                    >
                        wave.sys
                    </motion.h1>
                    
                    <motion.p 
                        variants={itemVariants}
                        className="text-lg md:text-xl text-steel-700 dark:text-steel-300 max-w-2xl mx-auto leading-relaxed font-sans"
                    >
                        SS PLUS Management System. Comprehensive documentation and procedures for all company operations. Access policies, guidelines, and templates in one centralized platform.
                    </motion.p>
                    
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                    >
                        <Link to="/login">
                            <Button variant="primary" className="text-lg px-10 py-4 w-full sm:w-auto shadow-accent-cyan/20 hover:shadow-accent-cyan/40">
                                Login <ArrowRight size={20} />
                            </Button>
                        </Link>
                        {/* Removed "Get Started" as requested by user to only have Login navigation, 
                            but user said "make both of 'login' and 'get started' btn navigate to login page". 
                            So I keep both but point to /login. */}
                        <Link to="/login">
                            <Button 
                                className="text-lg px-10 py-4 w-full sm:w-auto bg-white/80 dark:bg-white/10 text-steel-900 dark:text-white hover:bg-white dark:hover:bg-white/20 border border-steel-200 dark:border-white/10 shadow-sm transition-all"
                            >
                                Get Started
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Feature Pills */}
                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 justify-center pt-12"
                    >
                        {[
                            { icon: ShieldCheck, text: "Secure Access" },
                            { icon: Globe, text: "Multi-language" },
                            { icon: Zap, text: "High Performance" },
                        ].map(({ icon: Icon, text }, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 dark:bg-white/5 border border-steel-200 dark:border-white/10 text-sm text-steel-700 dark:text-steel-300 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-white/10 transition-colors cursor-default shadow-sm">
                                <Icon size={16} className="text-accent-cyan" />
                                {text}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="absolute bottom-6 w-full text-center text-steel-500 dark:text-steel-600 text-xs">
                © {new Date().getFullYear()} WAVE IO. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;

