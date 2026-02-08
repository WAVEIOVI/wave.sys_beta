import React, { forwardRef } from 'react';

/**
 * PrintLayout - Print-specific layout component for PDF generation
 * 
 * This component renders content specifically for printing, including:
 * - Cover page (Logo, Title, Date, Version)
 * - Title page (Author, details)
 * - Content area
 * - Back cover (Contact info, branding)
 */
const PrintLayout = forwardRef(({
  title = 'Document',
  subtitle,
  author,
  authorTitle,
  date,
  version,
  companyName = 'Sécurité Services Plus (SS+)',
  logoUrl = '/logos/logo-ss-plus-hor.png',
  phone,
  email,
  website,
  address,
  content,
  copyrightNotice,
  proprietaryNotice,
}, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <div ref={ref} className="print-layout">
      {/* ===== COVER PAGE ===== */}
      <div className="print-page print-cover">
        <div className="print-cover-content">
          {/* Logo */}
          <div className="print-logo-container">
            <img 
              src={logoUrl} 
              alt={companyName} 
              className="print-logo"
            />
          </div>

          {/* Title */}
          <div className="print-cover-title-section">
            <h1 className="print-cover-title">{title}</h1>
            {subtitle && (
              <p className="print-cover-subtitle">{subtitle}</p>
            )}
          </div>

          {/* Version & Date */}
          <div className="print-cover-meta">
            {version && (
              <div className="print-cover-version">Version {version}</div>
            )}
            {date && (
              <div className="print-cover-date">{date}</div>
            )}
          </div>

          {/* Company Name */}
          <div className="print-cover-company">
            {companyName}
          </div>
        </div>
      </div>

      {/* ===== TITLE PAGE ===== */}
      <div className="print-page print-title-page">
        <div className="print-title-content">
          <h2 className="print-title-heading">{title}</h2>
          
          <div className="print-title-details">
            {author && (
              <div className="print-title-row">
                <span className="print-title-label">Prepared By:</span>
                <span className="print-title-value">{author}</span>
              </div>
            )}
            {authorTitle && (
              <div className="print-title-row">
                <span className="print-title-label">Title:</span>
                <span className="print-title-value">{authorTitle}</span>
              </div>
            )}
            {version && (
              <div className="print-title-row">
                <span className="print-title-label">Version:</span>
                <span className="print-title-value">{version}</span>
              </div>
            )}
            {date && (
              <div className="print-title-row">
                <span className="print-title-label">Date:</span>
                <span className="print-title-value">{date}</span>
              </div>
            )}
          </div>

          <div className="print-title-footer">
            {proprietaryNotice && (
              <p className="print-proprietary">{proprietaryNotice}</p>
            )}
          </div>
        </div>
      </div>

      {/* ===== CONTENT PAGES ===== */}
      <div className="print-page print-content">
        {content}
      </div>

      {/* ===== BACK COVER ===== */}
      <div className="print-page print-back-cover">
        <div className="print-back-content">
          {/* Logo */}
          <div className="print-back-logo-container">
            <img 
              src={logoUrl} 
              alt={companyName} 
              className="print-back-logo"
            />
          </div>

          {/* Contact Information */}
          <div className="print-contact-section">
            <h3 className="print-contact-title">Contact Us</h3>
            
            <div className="print-contact-info">
              {phone && (
                <div className="print-contact-row">
                  <span className="print-contact-icon">📞</span>
                  <span>{phone}</span>
                </div>
              )}
              {email && (
                <div className="print-contact-row">
                  <span className="print-contact-icon">✉️</span>
                  <span>{email}</span>
                </div>
              )}
              {website && (
                <div className="print-contact-row">
                  <span className="print-contact-icon">🌐</span>
                  <span>{website}</span>
                </div>
              )}
              {address && (
                <div className="print-contact-row">
                  <span className="print-contact-icon">📍</span>
                  <span>{address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Copyright */}
          <div className="print-back-footer">
            {copyrightNotice ? (
              <p className="print-copyright">{copyrightNotice}</p>
            ) : (
              <p className="print-copyright">
                © {currentYear} {companyName}. All Rights Reserved.
              </p>
            )}
            {proprietaryNotice && (
              <p className="print-proprietary-small">{proprietaryNotice}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

PrintLayout.displayName = 'PrintLayout';

export default PrintLayout;
