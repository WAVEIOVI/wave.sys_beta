import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Calendar,
  Menu,
  X,
  Clock,
  Download,
  Loader2,
} from 'lucide-react';
import Header from './Header';
import Sidebar from './Sidebar';

/**
 * DocsLayout - Reusable documentation layout component
 * 
 * @param {Object} props
 * @param {string} props.title - Document title
 * @param {string} props.description - Document description/intro text
 * @param {Array} props.tocData - Array of {id, icon, label, color} for navigation
 * @param {Function} props.onDownloadPdf - Callback for PDF download
 * @param {boolean} props.isPdfLoading - Loading state for PDF generation
 * @param {string} props.version - Document version
 * @param {string} props.author - Document author
 * @param {string} props.date - Document date
 * @param {string} props.backLink - Link for back button (default: /dashboard)
 * @param {string} props.backLabel - Label for back button
 * @param {React.ReactNode} props.children - Document content sections
 * @param {React.ReactNode} props.printContent - Content for print mode (optional)
 */
const DocsLayout = ({
  title,
  description,
  tocData = [],
  onDownloadPdf,
  isPdfLoading = false,
  version,
  author,
  date,
  backLink = '/dashboard',
  backLabel = 'Home',
  children,
  printContent,
  proprietaryNotice,
  copyrightNotice,
}) => {
  const { i18n, t } = useTranslation();
  const [activeSection, setActiveSection] = useState(tocData[0]?.id || '');
  const [isMobileToCOpen, setIsMobileToCOpen] = useState(false);
  const mainContentRef = useRef(null);
  const printRef = useRef(null);

  // Intersection Observer for active section tracking
  useEffect(() => {
    if (tocData.length === 0 || !mainContentRef.current) return;

    const mainEl = mainContentRef.current;

    const handleScroll = () => {
      const sectionElements = tocData.map((s) => document.getElementById(s.id));
      const scrollPosition = mainEl.scrollTop + 150;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          // Get element position relative to the scroll container
          const elTop = el.offsetTop - mainEl.offsetTop;
          if (elTop <= scrollPosition) {
            setActiveSection(tocData[i].id);
            break;
          }
        }
      }
    };

    mainEl.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial active section
    handleScroll();
    return () => mainEl.removeEventListener('scroll', handleScroll);
  }, [tocData]);

  // Smooth scroll to section within the main content container
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    const mainEl = mainContentRef.current;
    
    if (element && mainEl) {
      const offset = 24; // Some padding from top
      const elementTop = element.offsetTop - mainEl.offsetTop;
      
      mainEl.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth',
      });
      setIsMobileToCOpen(false);
    }
  }, []);

  const isRtl = i18n.dir() === 'rtl';

  return (
    <>
      {/* Main Layout (visible on screen, hidden when printing) */}
      <div className="flex bg-cosmic-latte dark:bg-steel-900 min-h-screen text-steel-900 dark:text-steel-50 font-sans transition-colors duration-500 print:hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col relative h-screen overflow-hidden">
          <Header />

          <div className="flex flex-1 overflow-hidden relative">
            {/* Desktop "On This Page" Sidebar */}
            <aside className="hidden lg:flex flex-col w-80 border-r border-steel-200/50 dark:border-white/5 bg-white/60 dark:bg-steel-900/60 backdrop-blur-xl overflow-hidden">
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* ToC Header */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-steel-400 ps-2">
                    {t('company_manual.toc.title', 'On This Page')}
                  </h3>

                  <nav className="space-y-1">
                    {tocData.map((section) => {
                      const isActive = activeSection === section.id;
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-accent-cyan/10 text-accent-cyan shadow-sm ring-1 ring-accent-cyan/20'
                              : 'text-steel-600 dark:text-steel-400 hover:bg-white/80 dark:hover:bg-white/5'
                          }`}
                        >
                          {Icon && (
                            <Icon
                              size={18}
                              className={isActive ? 'stroke-[2px]' : 'opacity-60'}
                            />
                          )}
                          <span className="truncate text-left flex-1">{section.label}</span>
                          {isActive && (
                            <motion.div
                              layoutId="docsActiveIndicator"
                              className="w-1.5 h-5 bg-accent-cyan rounded-full"
                            />
                          )}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-steel-200/50 dark:border-white/5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-steel-100 to-steel-200/50 dark:from-white/5 dark:to-white/10 space-y-3">
                  {version && (
                    <div className="flex items-center gap-2 text-xs font-bold text-steel-500 uppercase tracking-wider">
                      <Clock size={12} />
                      Version {version}
                    </div>
                  )}
                  {proprietaryNotice && (
                    <div className="text-[10px] text-steel-400 leading-relaxed">
                      {proprietaryNotice}
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main 
              ref={mainContentRef}
              className="flex-1 overflow-y-auto scroll-smooth p-4 md:p-8 lg:p-12"
            >
              <div className="max-w-5xl mx-auto space-y-20 pb-32">
                {/* Header Section */}
                <section className="space-y-8">
                  {/* Back Link */}
                  <Link
                    to={backLink}
                    className="inline-flex items-center gap-2 text-steel-500 hover:text-accent-cyan transition-colors group"
                  >
                    <ArrowLeft
                      size={18}
                      className="group-hover:-translate-x-1 transition-transform"
                    />
                    {backLabel}
                  </Link>

                  {/* Title & Meta */}
                  <div className="space-y-6">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-steel-900 dark:text-white leading-tight"
                    >
                      {title}
                    </motion.h1>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-wrap items-center gap-4"
                    >
                      {author && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-steel-800/50 border border-steel-200/50 dark:border-white/10 shadow-sm">
                          <User size={14} className="text-accent-cyan" />
                          <span className="text-sm font-medium">{author}</span>
                        </div>
                      )}
                      {date && (
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-steel-800/50 border border-steel-200/50 dark:border-white/10 shadow-sm">
                          <Calendar size={14} className="text-accent-amber" />
                          <span className="text-sm font-medium">{date}</span>
                        </div>
                      )}

                      {onDownloadPdf && (
                        <button
                          onClick={onDownloadPdf}
                          disabled={isPdfLoading}
                          className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-cyan/80 text-white font-medium shadow-lg shadow-accent-cyan/30 hover:shadow-accent-cyan/50 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isPdfLoading ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : (
                            <Download size={16} />
                          )}
                          <span>{t('company_manual.intro.download-pdf', 'Download PDF')}</span>
                        </button>
                      )}
                    </motion.div>
                  </div>

                  {/* Intro Description */}
                  {description && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="relative p-[2px] rounded-2xl bg-gradient-to-r from-accent-cyan via-accent-amber to-accent-cyan overflow-hidden"
                    >
                      <div className="bg-white/95 dark:bg-steel-800/95 backdrop-blur-sm p-6 md:p-8 rounded-[14px]">
                        <p className="text-steel-600 dark:text-steel-300 text-lg leading-relaxed italic">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </section>

                {/* Content Sections */}
                {children}

                {/* Footer */}
                <footer className="pt-16 border-t border-steel-200/50 dark:border-white/10 text-center space-y-4">
                  {proprietaryNotice && (
                    <div className="text-xs text-steel-500 font-medium uppercase tracking-[0.3em]">
                      {proprietaryNotice}
                    </div>
                  )}
                  {copyrightNotice && (
                    <p className="text-[10px] text-steel-400">
                      {copyrightNotice}
                    </p>
                  )}
                  {date && (
                    <div className="text-xs text-steel-400">
                      Last Updated: {date}
                    </div>
                  )}
                </footer>
              </div>
            </main>

            {/* Mobile ToC Toggle */}
            <button
              onClick={() => setIsMobileToCOpen(!isMobileToCOpen)}
              className="lg:hidden fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-cyan/80 text-white shadow-xl shadow-accent-cyan/40 z-50 flex items-center justify-center"
            >
              {isMobileToCOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile ToC Drawer */}
            <AnimatePresence>
              {isMobileToCOpen && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMobileToCOpen(false)}
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
                  />

                  {/* Drawer */}
                  <motion.div
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="lg:hidden fixed inset-x-0 bottom-0 z-[60] p-6 bg-white dark:bg-steel-900 border-t border-steel-200/50 dark:border-white/10 rounded-t-[32px] shadow-2xl max-h-[70vh] overflow-y-auto"
                  >
                    <div className="w-12 h-1 bg-steel-200 dark:bg-steel-700 rounded-full mx-auto mb-6" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-steel-400 mb-6 px-2">
                      On This Page
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {tocData.map((section) => {
                        const Icon = section.icon;
                        return (
                          <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                              activeSection === section.id
                                ? 'bg-accent-cyan/10 ring-1 ring-accent-cyan/30'
                                : 'bg-steel-100 dark:bg-white/5 active:scale-95'
                            }`}
                          >
                            {Icon && (
                              <Icon
                                size={22}
                                className={
                                  activeSection === section.id
                                    ? 'text-accent-cyan'
                                    : 'text-steel-500'
                                }
                              />
                            )}
                            <span
                              className={`text-[10px] font-bold text-center uppercase leading-tight ${
                                activeSection === section.id
                                  ? 'text-accent-cyan'
                                  : 'text-steel-600 dark:text-steel-400'
                              }`}
                            >
                              {section.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Print Layout (hidden on screen, visible when printing) */}
      {printContent && (
        <div ref={printRef} className="hidden print:block">
          {printContent}
        </div>
      )}
    </>
  );
};

export default DocsLayout;
