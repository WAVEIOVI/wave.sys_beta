
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import LoadingScreen from '@/components/ui/LoadingScreen';

import { useAuth } from '@/contexts/AuthContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('admin@wave.io');
    const [password, setPassword] = useState('admin123');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            if (email === 'admin@wave.io' && password === 'admin123') {
                login();
                navigate('/dashboard', { state: { hasLoaded: true } });
            } else {
                setError('Invalid credentials. Try admin@wave.io / admin123');
                setIsLoading(false);
            }
        }, 1500); 
    };

    if (isLoading) return <LoadingScreen />;

    return (
        <div className="min-h-screen bg-steel-900 flex items-center justify-center p-6 bg-grid-pattern relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 via-transparent to-accent-amber/10 pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-8">
                    <img 
                        src="/logos/logo-wave-io.png" 
                        alt="Wave IO" 
                        className="h-12 mx-auto mb-4 invert dark:invert-0" 
                    />
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-cyan to-accent-amber bg-clip-text text-transparent">
                        Sign In
                    </h2>
                    <p className="text-steel-400 mt-2 text-sm">Access the SS PLUS Management System</p>
                </div>

                <Card className="bg-steel-800/50 backdrop-blur-xl border border-white/10">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-steel-400 mb-1">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-steel-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-600 focus:outline-none focus:border-accent-cyan transition-colors"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-steel-400 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-steel-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-steel-600 focus:outline-none focus:border-accent-cyan transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-danger-500 text-sm bg-danger-500/10 p-3 rounded-lg border border-danger-500/20"
                            >
                                {error}
                            </motion.div>
                        )}

                        <Button type="submit" variant="primary" className="w-full justify-center py-3">
                            Login into Dashboard
                        </Button>
                        
                        <div className="text-center mt-4">
                            <span className="text-steel-500 text-xs">
                                Don't have an account? <span className="text-accent-cyan cursor-pointer hover:underline">Register (Unavailable)</span>
                            </span>
                        </div>
                    </form>
                </Card>
            </motion.div>
        </div>
    );
};

export default LoginPage;
