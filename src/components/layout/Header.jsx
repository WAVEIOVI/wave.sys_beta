
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Search, User, Globe, LogOut } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { i18n } = useTranslation();
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    const changeLanguage = () => {
        const currentLang = i18n.language.split('-')[0];
        const nextLang = currentLang === 'en' ? 'fr' : currentLang === 'fr' ? 'ar' : 'en';
        i18n.changeLanguage(nextLang);
    };

    return (
        <header className="sticky top-0 w-full h-16 glass dark:glass-dark z-40 flex items-center justify-between px-6 md:px-12 border-b border-white/10 transition-all duration-300">
            {/* Left side spacer or mobile menu trigger (future) */}
            <div className="flex items-center gap-4">
                {/* Logo moved to Sidebar, keeping this empty for potential mobile menu trigger */}
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex items-center relative w-96 group">
                <Search className="absolute left-3 text-steel-400 group-focus-within:text-accent-cyan transition-colors" size={18} />
                <input 
                    type="text" 
                    placeholder="Search commands... (Cmd+K)" 
                    className="w-full bg-steel-100 dark:bg-steel-800/50 border border-transparent focus:border-accent-cyan/50 rounded-xl py-2 pl-10 pr-4 outline-none transition-all placeholder:text-steel-400 text-sm"
                />
                <kbd className="absolute right-3 text-xs bg-white/10 px-1.5 py-0.5 rounded text-steel-400">⌘K</kbd>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                <Button variant="ghost" onClick={changeLanguage} className="p-2 aspect-square rounded-full relative">
                    <Globe size={20} />
                    <span className="sr-only">{i18n.language.toUpperCase()}</span>
                    <span className="text-[10px] font-bold absolute -bottom-1 -right-1 bg-accent-amber text-black px-1 rounded-sm shadow-sm leading-none">
                        {i18n.language.split('-')[0].toUpperCase()}
                    </span>
                </Button>

                <Button variant="ghost" onClick={toggleTheme} className="p-2 aspect-square rounded-full">
                    {theme === 'dark' ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-steel-600" />}
                </Button>

                <div className="w-px h-6 bg-white/10 mx-2 hidden md:block" />

                <Button variant="ghost" className="hidden md:flex p-2 aspect-square rounded-full text-danger-500 hover:bg-danger-500/10" onClick={handleLogout} title="Logout">
                    <LogOut size={20} />
                </Button>

                 <Button variant="ghost" className="md:hidden p-2 aspect-square rounded-full">

                    <User size={20} />
                </Button>
            </div>
        </header>
    );
};

export default Header;
