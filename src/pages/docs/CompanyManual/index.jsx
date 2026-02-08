import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReactToPrint } from 'react-to-print';
import {
  Shield,
  BookOpen,
  CheckCircle2,
  Tag,
  Hash,
  Flame,
  Users,
  Award,
} from 'lucide-react';

// Layout Components
import DocsLayout from '@/components/layout/DocsLayout';
import PrintLayout from '@/components/print/PrintLayout';

// Section Components
import AboutCompanySection from './sections/AboutCompanySection';
import WhatWeDoSection from './sections/WhatWeDoSection';
import OrgStructureSection from './sections/OrgStructureSection';
import DecisionsSection from './sections/DecisionsSection';
import StandardsSection from './sections/StandardsSection';
import BusinessRulesSection from './sections/BusinessRulesSection';
import AppendixSection from './sections/AppendixSection';
import ServiceCommitmentSection from './sections/ServiceCommitmentSection';

// Template processor utilities
import { processTemplate, markdownToHtml } from '@/utils/templateProcessor';

// Print styles
import '@/styles/print.css';

const CompanyManual = () => {
  const { t } = useTranslation();
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const [processedContent, setProcessedContent] = useState('');
  const printRef = useRef(null);

  // Load and process the markdown template
  useEffect(() => {
    const loadTemplate = async () => {
      try {
        const response = await fetch('/templates/docs/company-manual-full.template.md');
        if (!response.ok) {
          throw new Error(`Failed to fetch template: ${response.status}`);
        }
        const template = await response.text();
        
        // Process template with i18n keys
        const processed = processTemplate(template, t);
        
        // Convert markdown to HTML
        const html = markdownToHtml(processed);
        
        setProcessedContent(html);
      } catch (error) {
        console.error('Error loading template:', error);
        // Fallback to basic content
        setProcessedContent(`<h1 class="print-h1">${t('company_manual.intro.main-title')}</h1>`);
      }
    };

    loadTemplate();
  }, [t]);

  // Table of Contents / "On This Page" navigation data
  const tocData = [
    { id: 'about-company', icon: Shield, label: t('company_manual.toc.section-1'), color: 'cyan' },
    { id: 'what-we-do', icon: Flame, label: 'What We Do', color: 'amber' },
    { id: 'service-commitment', icon: Award, label: 'Service Commitment', color: 'cyan' },
    { id: 'org-structure', icon: Users, label: 'Organization', color: 'amber' },
    { id: 'decisions', icon: BookOpen, label: t('company_manual.toc.section-2'), color: 'amber' },
    { id: 'standards', icon: CheckCircle2, label: t('company_manual.toc.section-3'), color: 'cyan' },
    { id: 'business-rules', icon: Tag, label: t('company_manual.toc.section-4'), color: 'amber' },
    { id: 'appendix', icon: Hash, label: t('company_manual.toc.appendix'), color: 'steel' },
  ];

  // React-to-print handler
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: t('company_manual.intro.main-title'),
    onBeforeGetContent: () => {
      setIsPdfLoading(true);
      return new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
    },
    onAfterPrint: () => {
      setIsPdfLoading(false);
    },
    onPrintError: (error) => {
      console.error('Print error:', error);
      setIsPdfLoading(false);
    },
  });

  // Print content component - renders content from template
  const PrintContent = (
    <PrintLayout
      ref={printRef}
      title={t('company_manual.intro.main-title')}
      subtitle="Policies, Procedures & Values"
      author={t('company_manual.intro.author-name')}
      authorTitle="Manager"
      version={t('company_manual.intro.version-value')}
      date={t('company_manual.intro.date-value')}
      companyName="Sécurité Services Plus (SS+)"
      logoUrl="/logos/logo-ss-plus-hor.png"
      phone="+216 74 45 30 27"
      email="contact@ssplus.tn"
      website="www.ssplus.tn"
      address="Route de Gabès Km 3.5, Sfax, Tunisia"
      copyrightNotice={t('company_manual.control.copyright-notice')}
      proprietaryNotice={t('company_manual.control.proprietary-notice')}
      content={
        <div 
          className="print-content-inner"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      }
    />
  );

  return (
    <>
      <DocsLayout
        title={t('company_manual.intro.main-title')}
        description={t('company_manual.what-we-do.description')}
        tocData={tocData}
        onDownloadPdf={handlePrint}
        isPdfLoading={isPdfLoading}
        version={t('company_manual.intro.version-value')}
        author={t('company_manual.intro.author-name')}
        date={t('company_manual.intro.date-value')}
        backLink="/dashboard"
        backLabel={t('company_manual.intro.home')}
        proprietaryNotice={t('company_manual.control.proprietary-notice')}
        copyrightNotice={t('company_manual.control.copyright-notice')}
      >
        <AboutCompanySection />
        <WhatWeDoSection />
        <ServiceCommitmentSection />
        <OrgStructureSection />
        <DecisionsSection />
        <StandardsSection />
        <BusinessRulesSection />
        <AppendixSection />
      </DocsLayout>

      {/* Hidden print content */}
      <div style={{ display: 'none' }}>
        {PrintContent}
      </div>
    </>
  );
};

export default CompanyManual;
