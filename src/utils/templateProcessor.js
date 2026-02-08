/**
 * Template Processor Utility
 * Reads template files with {{key}} placeholders and replaces them with i18n values
 */

/**
 * Process a template string by replacing {{key}} placeholders with translated values
 * @param {string} template - Template string with {{key}} placeholders
 * @param {Function} t - i18next translation function
 * @returns {string} Processed template with translations injected
 */
export const processTemplate = (template, t) => {
  if (!template || typeof template !== 'string') {
    return '';
  }

  // Match all {{key}} patterns
  const keyPattern = /\{\{([^}]+)\}\}/g;
  
  return template.replace(keyPattern, (match, key) => {
    const trimmedKey = key.trim();
    const translation = t(trimmedKey, { defaultValue: match });
    return translation;
  });
};

/**
 * Fetch and process a markdown template file
 * @param {string} templatePath - Path to the template file
 * @param {Function} t - i18next translation function
 * @returns {Promise<string>} Processed content
 */
export const fetchAndProcessTemplate = async (templatePath, t) => {
  try {
    const response = await fetch(templatePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch template: ${response.status}`);
    }
    const template = await response.text();
    return processTemplate(template, t);
  } catch (error) {
    console.error('Error processing template:', error);
    return '';
  }
};

/**
 * Simple markdown to HTML converter for print layout
 * Handles basic markdown syntax
 * @param {string} markdown - Markdown content
 * @returns {string} HTML content
 */
export const markdownToHtml = (markdown) => {
  if (!markdown) return '';

  let html = markdown;
  const placeholders = [];
  
  // 1. Extract HTML blocks to prevent markdown processing inside them
  // We look for block-level tags that might contain complex content
  // Note: This is a simple extractor and assumes balanced tags for these specific elements
  
  // Extract <svg>...</svg> blocks
  html = html.replace(/<svg[\s\S]*?<\/svg>/gi, (match) => {
    const id = `__HTML_BLOCK_${placeholders.length}__`;
    placeholders.push(match);
    return id;
  });

  // Extract <div...>...</div> blocks (specifically for charts wrappers)
  html = html.replace(/<div[\s\S]*?<\/div>/gi, (match) => {
    const id = `__HTML_BLOCK_${placeholders.length}__`;
    placeholders.push(match);
    return id;
  });

  // 2. Tables
  // Find table blocks: lines starting with | followed by separator line |---|
  // Robust regex for CRLF or LF
  html = html.replace(/^\|(.+)\|\r?\n\|([-:| ]+)\|\r?\n((?:\|.*\|\r?\n?)*)/gm, (match, header, separator, body) => {
    const headers = header.split('|').filter(h => h.trim() !== '').map(h => `<th>${h.trim()}</th>`).join('');
    const rows = body.split(/\r?\n/).filter(r => r.trim() !== '').map(row => {
      const cells = row.split('|').filter(c => c.trim() !== '').map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    });
    return `<table><thead><tr>${headers}</tr></thead><tbody>${rows.join('')}</tbody></table>`;
  });

  // 3. Headers
  html = html.replace(/^#### (.+)$/gm, '<h4 class="print-h4">$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="print-h3">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="print-h2">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="print-h1">$1</h1>');

  // 4. Formatting
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="print-link">$1</a>');

  // 5. Lists
  // Unordered
  html = html.replace(/^\s*-\s+(.+)$/gm, '<li class="print-list-item">$1</li>');
  html = html.replace(/(<li class="print-list-item">.+<\/li>\n?)+/g, '<ul class="print-list">$&</ul>');
  
  // 6. Horizontal Rules
  html = html.replace(/^---$/gm, '<hr class="print-hr" />');
  
  // 7. Paragraphs
  // Split by double newlines to handle paragraphs
  const lines = html.split('\n');
  const processedLines = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    
    // Check if line is a placeholder
    if (trimmed.match(/^__HTML_BLOCK_\d+__$/)) return line;
    
    // Check if line looks like HTML tag (block level)
    if (trimmed.match(/^<(h[1-6]|ul|li|table|tr|td|th|p|hr|blockquote|pre)/i)) {
      return line;
    }
    
    return `<p class="print-p">${line}</p>`;
  });
  
  html = processedLines.join('\n');

  // Clean up empty lines
  html = html.replace(/<p class="print-p">\s*<\/p>/g, '');
  
  // 8. Restore HTML blocks (in reverse order to handle nesting)
  for (let i = placeholders.length - 1; i >= 0; i--) {
    const content = placeholders[i];
    const id = `__HTML_BLOCK_${i}__`;
    // Use function replacer to prevent special replacement patterns (like $&) in content from being processed
    html = html.replace(id, () => content);
  }
  
  return html;
};

/**
 * Get current date formatted for documents
 * @param {string} locale - Locale for date formatting
 * @returns {string} Formatted date
 */
export const getFormattedDate = (locale = 'en-US') => {
  return new Date().toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default {
  processTemplate,
  fetchAndProcessTemplate,
  markdownToHtml,
  getFormattedDate,
};
