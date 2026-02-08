
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BottomNav = () => {
    const { t } = useTranslation();

    const links = [
        { icon: Home, label: t('nav.home'), path: '/' },
        { icon: LayoutDashboard, label: t('nav.dashboard'), path: '/dashboard' },
        { icon: Settings, label: t('nav.settings'), path: '/settings' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 glass dark:glass-dark h-16 flex items-center justify-around z-50 md:hidden border-t border-white/10">
            {links.map(({ icon: Icon, label, path }) => (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) => `
                        flex flex-col items-center justify-center w-full h-full transition-all duration-300 relative
                        ${isActive ? 'text-accent-amber scale-110' : 'text-steel-400 hover:text-steel-100'}
                    `}
                >
                    {({ isActive }) => (
                        <>
                            <Icon size={24} className="mb-1" />
                            <span className="text-[10px] uppercase font-medium tracking-wide">{label}</span>
                            {isActive && (
                                <span className="absolute bottom-2 w-1 h-1 bg-accent-amber rounded-full shadow-[0_0_10px_2px_rgba(245,158,11,0.5)]" />
                            )}
                        </>
                    )}
                </NavLink>

            ))}
        </nav>
    );
};

export default BottomNav;
