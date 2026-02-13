/**
 * NovaSphere Landing Page — Test Script
 *
 * Validates file structure, HTML integrity, CSS rules, JavaScript logic,
 * SVG assets, and cross-file consistency using only Node.js built-in modules.
 *
 * Usage:  node tests.js
 */

const fs = require('fs');
const path = require('path');

// ─── Minimal Test Runner ────────────────────────────────────────────────────

const results = { passed: 0, failed: 0, errors: [] };

function describe(suite, fn) {
  console.log(`\n\x1b[1m  ${suite}\x1b[0m`);
  fn();
}

function it(description, fn) {
  try {
    fn();
    results.passed++;
    console.log(`    \x1b[32m✓\x1b[0m ${description}`);
  } catch (err) {
    results.failed++;
    const msg = `    \x1b[31m✗\x1b[0m ${description}\n      \x1b[31m${err.message}\x1b[0m`;
    console.log(msg);
    results.errors.push({ description, message: err.message });
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message || 'Assertion failed');
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const ROOT = __dirname;
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf-8');
const exists = (rel) => fs.existsSync(path.join(ROOT, rel));

// ─── 1. File Existence ─────────────────────────────────────────────────────

describe('File Existence', () => {
  const expected = [
    'header.html',
    'team.html',
    'script.js',
    'main.js',
    'styles.css',
    'README.md',
    'images/logo.svg',
    'images/product.svg',
  ];

  expected.forEach((file) => {
    it(`${file} exists`, () => {
      assert(exists(file), `Missing file: ${file}`);
    });
  });
});

// ─── 2. HTML Validation — header.html ───────────────────────────────────────

describe('HTML Validation — header.html', () => {
  const html = read('header.html');

  it('contains a DOCTYPE declaration', () => {
    assert(/<!DOCTYPE html>/i.test(html), 'Missing <!DOCTYPE html>');
  });

  it('has <html lang="en">', () => {
    assert(/<html\s[^>]*lang=["']en["']/i.test(html), 'Missing lang attribute on <html>');
  });

  it('includes charset meta tag', () => {
    assert(/<meta\s[^>]*charset=["']UTF-8["']/i.test(html), 'Missing charset meta');
  });

  it('includes viewport meta tag', () => {
    assert(/<meta\s[^>]*name=["']viewport["']/i.test(html), 'Missing viewport meta');
  });

  it('has a <title> element', () => {
    assert(/<title>[^<]+<\/title>/i.test(html), 'Missing <title>');
  });

  it('links to styles.css', () => {
    assert(/href=["']styles\.css["']/i.test(html), 'Missing link to styles.css');
  });

  it('contains the enhanced-header element', () => {
    assert(/class=["'][^"']*enhanced-header[^"']*["']/i.test(html), 'Missing .enhanced-header');
  });

  it('contains the NovaSphere logo image', () => {
    assert(/src=["']images\/logo\.svg["']/i.test(html), 'Missing logo image src');
  });

  it('has navigation with dropdown menus', () => {
    assert(/class=["'][^"']*dropdown[^"']*["']/i.test(html), 'Missing dropdown class');
    assert(/class=["'][^"']*dropdown-content[^"']*["']/i.test(html), 'Missing dropdown-content class');
  });

  it('has a mobile menu toggle button', () => {
    assert(/class=["'][^"']*mobile-menu-toggle[^"']*["']/i.test(html), 'Missing mobile-menu-toggle');
  });

  it('has breadcrumb navigation', () => {
    assert(/class=["'][^"']*breadcrumb[^"']*["']/i.test(html), 'Missing breadcrumb');
  });

  it('contains a <footer> element', () => {
    assert(/<footer[\s>]/i.test(html), 'Missing <footer>');
  });

  it('includes inline JavaScript for mobile menu toggle', () => {
    assert(/function\s+toggleMobileMenu/i.test(html), 'Missing toggleMobileMenu function');
  });

  it('has alt attributes on images for accessibility', () => {
    const imgs = html.match(/<img\s[^>]*>/gi) || [];
    assert(imgs.length > 0, 'No <img> tags found');
    imgs.forEach((tag) => {
      assert(/alt=["'][^"']*["']/i.test(tag), `Image missing alt attribute: ${tag.substring(0, 60)}`);
    });
  });
});

// ─── 3. HTML Validation — team.html ─────────────────────────────────────────

describe('HTML Validation — team.html', () => {
  const html = read('team.html');

  it('contains a DOCTYPE declaration', () => {
    assert(/<!DOCTYPE html>/i.test(html), 'Missing <!DOCTYPE html>');
  });

  it('has <html lang="en">', () => {
    assert(/<html\s[^>]*lang=["']en["']/i.test(html), 'Missing lang attribute');
  });

  it('includes charset and viewport meta tags', () => {
    assert(/<meta\s[^>]*charset=["']UTF-8["']/i.test(html), 'Missing charset meta');
    assert(/<meta\s[^>]*name=["']viewport["']/i.test(html), 'Missing viewport meta');
  });

  it('has a <title> element', () => {
    assert(/<title>[^<]+<\/title>/i.test(html), 'Missing <title>');
  });

  it('links to styles.css', () => {
    assert(/href=["']styles\.css["']/i.test(html), 'Missing link to styles.css');
  });

  it('contains the team section', () => {
    assert(/class=["'][^"']*team-section[^"']*["']/i.test(html), 'Missing .team-section');
  });

  it('contains a team grid', () => {
    assert(/class=["'][^"']*team-grid[^"']*["']/i.test(html), 'Missing .team-grid');
  });

  it('lists exactly 4 team members', () => {
    const members = (html.match(/class=["'][^"']*team-member[^"']*["']/gi) || []);
    assert(members.length === 4, `Expected 4 team members, found ${members.length}`);
  });

  it('each team member has a name, position, and bio', () => {
    const blocks = html.split(/class=["']team-member["']/i).slice(1);
    blocks.forEach((block, i) => {
      assert(/<h3>/i.test(block), `Team member ${i + 1} missing <h3> name`);
      assert(/class=["']position["']/i.test(block), `Team member ${i + 1} missing .position`);
      assert(/class=["']bio["']/i.test(block), `Team member ${i + 1} missing .bio`);
    });
  });

  it('contains a <header> with logo', () => {
    assert(/<header[\s>]/i.test(html), 'Missing <header>');
    assert(/class=["'][^"']*logo[^"']*["']/i.test(html), 'Missing .logo in header');
  });

  it('contains a <footer> element', () => {
    assert(/<footer[\s>]/i.test(html), 'Missing <footer>');
  });

  it('footer contains copyright notice', () => {
    assert(/©\s*2025\s*NovaSphere/i.test(html), 'Missing copyright notice');
  });
});

// ─── 4. CSS Validation — styles.css ─────────────────────────────────────────

describe('CSS Validation — styles.css', () => {
  const css = read('styles.css');

  it('contains a universal box-sizing reset', () => {
    assert(/box-sizing:\s*border-box/i.test(css), 'Missing box-sizing: border-box');
  });

  it('sets the Montserrat font family on body', () => {
    assert(/font-family:.*Montserrat/i.test(css), 'Missing Montserrat font-family');
  });

  it('defines .btn-primary styles', () => {
    assert(/\.btn-primary\s*\{/i.test(css), 'Missing .btn-primary rule');
  });

  it('defines .btn-secondary styles', () => {
    assert(/\.btn-secondary\s*\{/i.test(css), 'Missing .btn-secondary rule');
  });

  it('defines header styles with fixed positioning', () => {
    assert(/header\s*\{[^}]*position:\s*fixed/is.test(css), 'Missing fixed header positioning');
  });

  it('defines .hero section styles', () => {
    assert(/\.hero\s*\{/i.test(css), 'Missing .hero rule');
  });

  it('defines .features section styles', () => {
    assert(/\.features\s*\{/i.test(css), 'Missing .features rule');
  });

  it('defines .feature-card styles', () => {
    assert(/\.feature-card\s*\{/i.test(css), 'Missing .feature-card rule');
  });

  it('defines .pricing section styles', () => {
    assert(/\.pricing\s*\{/i.test(css), 'Missing .pricing rule');
  });

  it('defines .pricing-card styles', () => {
    assert(/\.pricing-card\s*\{/i.test(css), 'Missing .pricing-card rule');
  });

  it('defines .contact section styles', () => {
    assert(/\.contact\s*\{/i.test(css), 'Missing .contact rule');
  });

  it('defines footer styles', () => {
    assert(/footer\s*\{/i.test(css), 'Missing footer rule');
  });

  it('defines .footer-links grid', () => {
    assert(/\.footer-links\s*\{[^}]*display:\s*grid/is.test(css), 'Missing .footer-links grid');
  });

  it('includes a float keyframe animation', () => {
    assert(/@keyframes\s+float/i.test(css), 'Missing @keyframes float');
  });

  it('has responsive media query for max-width 992px', () => {
    assert(/@media\s*\(\s*max-width:\s*992px\s*\)/i.test(css), 'Missing 992px media query');
  });

  it('has responsive media query for max-width 768px', () => {
    assert(/@media\s*\(\s*max-width:\s*768px\s*\)/i.test(css), 'Missing 768px media query');
  });

  it('defines Product & Vision section styles (.product-vision)', () => {
    assert(/\.product-vision\s*\{/i.test(css), 'Missing .product-vision rule');
  });

  it('defines .about section styles', () => {
    assert(/\.about\s*\{/i.test(css), 'Missing .about rule');
  });
});

// ─── 5. JavaScript Validation — script.js ───────────────────────────────────

describe('JavaScript Validation — script.js', () => {
  const js = read('script.js');

  it('registers a DOMContentLoaded event listener', () => {
    assert(/addEventListener\s*\(\s*['"]DOMContentLoaded['"]/i.test(js), 'Missing DOMContentLoaded listener');
  });

  it('implements smooth scrolling for anchor links', () => {
    assert(/querySelectorAll\s*\(\s*['"]a\[href\^=["']?#["']?\]['"]\s*\)/i.test(js), 'Missing anchor querySelectorAll');
    assert(/scrollTo/i.test(js), 'Missing window.scrollTo call');
    assert(/behavior:\s*['"]smooth['"]/i.test(js), 'Missing smooth scroll behavior');
  });

  it('handles contact form submission', () => {
    assert(/querySelector\s*\(\s*['"]\.contact-form['"]\s*\)/i.test(js), 'Missing .contact-form selector');
    assert(/addEventListener\s*\(\s*['"]submit['"]/i.test(js), 'Missing submit event listener');
    assert(/preventDefault/i.test(js), 'Missing preventDefault call');
  });

  it('reads form field values (name, email, message)', () => {
    assert(/getElementById\s*\(\s*['"]name['"]\s*\)/i.test(js), 'Missing #name field');
    assert(/getElementById\s*\(\s*['"]email['"]\s*\)/i.test(js), 'Missing #email field');
    assert(/getElementById\s*\(\s*['"]message['"]\s*\)/i.test(js), 'Missing #message field');
  });

  it('resets the form after submission', () => {
    assert(/\.reset\s*\(\s*\)/i.test(js), 'Missing form reset() call');
  });

  it('implements scroll-based animation for feature cards', () => {
    assert(/animateOnScroll/i.test(js), 'Missing animateOnScroll function');
    assert(/getBoundingClientRect/i.test(js), 'Missing getBoundingClientRect call');
    assert(/addEventListener\s*\(\s*['"]scroll['"]/i.test(js), 'Missing scroll event listener');
  });

  it('sets initial opacity and transform on feature cards', () => {
    assert(/opacity.*['"]0['"]/i.test(js), 'Missing initial opacity 0');
    assert(/translateY/i.test(js), 'Missing translateY transform');
  });
});

// ─── 6. JavaScript Validation — main.js ────────────────────────────────────

describe('JavaScript Validation — main.js', () => {
  const js = read('main.js');

  it('creates a DOM element', () => {
    assert(/document\.createElement/i.test(js), 'Missing document.createElement');
  });

  it('sets innerHTML content', () => {
    assert(/\.innerHTML\s*=/i.test(js), 'Missing innerHTML assignment');
  });

  it('appends the element to document.body', () => {
    assert(/document\.body\.appendChild/i.test(js), 'Missing document.body.appendChild');
  });
});

// ─── 7. SVG Asset Validation ────────────────────────────────────────────────

describe('SVG Asset Validation — logo.svg', () => {
  const svg = read('images/logo.svg');

  it('is a valid SVG with <svg> root element', () => {
    assert(/<svg\s/i.test(svg), 'Missing <svg> root element');
    assert(/xmlns=["']http:\/\/www\.w3\.org\/2000\/svg["']/i.test(svg), 'Missing SVG namespace');
  });

  it('defines gradient elements in <defs>', () => {
    assert(/<defs>/i.test(svg), 'Missing <defs> section');
    assert(/<linearGradient/i.test(svg), 'Missing linearGradient');
  });

  it('contains circle elements for the sphere design', () => {
    const circles = (svg.match(/<circle/gi) || []);
    assert(circles.length >= 3, `Expected at least 3 circles, found ${circles.length}`);
  });

  it('includes an animation (animateTransform)', () => {
    assert(/<animateTransform/i.test(svg), 'Missing animateTransform');
  });
});

describe('SVG Asset Validation — product.svg', () => {
  const svg = read('images/product.svg');

  it('is a valid SVG with <svg> root element', () => {
    assert(/<svg\s/i.test(svg), 'Missing <svg> root element');
  });

  it('has a viewBox attribute', () => {
    assert(/viewBox=["'][^"']+["']/i.test(svg), 'Missing viewBox attribute');
  });

  it('contains the holographic sphere (circle with holoGradient)', () => {
    assert(/holoGradient/i.test(svg), 'Missing holoGradient reference');
  });

  it('contains projection ray lines', () => {
    const lines = (svg.match(/<line/gi) || []);
    assert(lines.length >= 4, `Expected at least 4 projection lines, found ${lines.length}`);
  });

  it('includes pulse animation', () => {
    assert(/<animate\b/i.test(svg), 'Missing <animate> element');
  });

  it('defines multiple gradients', () => {
    const gradients = (svg.match(/<(linear|radial)Gradient/gi) || []);
    assert(gradients.length >= 3, `Expected at least 3 gradients, found ${gradients.length}`);
  });
});

// ─── 8. Cross-File Consistency ──────────────────────────────────────────────

describe('Cross-File Consistency', () => {
  const css = read('styles.css');
  const teamHtml = read('team.html');
  const headerHtml = read('header.html');

  it('team.html references classes defined in styles.css (logo, btn-primary, footer)', () => {
    const teamClasses = ['logo', 'btn-primary', 'container', 'footer-content', 'footer-links', 'link-group', 'copyright'];
    teamClasses.forEach((cls) => {
      assert(
        new RegExp(`\\.${cls.replace('-', '\\-')}\\s*[{,]`, 'i').test(css) ||
        new RegExp(`\\.${cls.replace('-', '\\-')}\\s*\\.`, 'i').test(css) ||
        new RegExp(`\\.${cls.replace('-', '\\-')}\\b`, 'i').test(css),
        `Class .${cls} used in team.html but not found in styles.css`
      );
    });
  });

  it('header.html links to styles.css', () => {
    assert(/href=["']styles\.css["']/i.test(headerHtml), 'header.html missing styles.css link');
  });

  it('team.html links to styles.css', () => {
    assert(/href=["']styles\.css["']/i.test(teamHtml), 'team.html missing styles.css link');
  });

  it('both HTML pages reference the logo SVG', () => {
    assert(/images\/logo\.svg/i.test(headerHtml), 'header.html missing logo.svg reference');
    assert(/images\/logo\.svg/i.test(teamHtml), 'team.html missing logo.svg reference');
  });

  it('Google Fonts (Montserrat) is loaded in both HTML pages', () => {
    assert(/fonts\.googleapis\.com.*Montserrat/i.test(headerHtml), 'header.html missing Montserrat font link');
    assert(/fonts\.googleapis\.com.*Montserrat/i.test(teamHtml), 'team.html missing Montserrat font link');
  });

  it('navigation links are consistent across pages', () => {
    assert(/index\.html#features/i.test(headerHtml), 'header.html missing features link');
    assert(/index\.html#features/i.test(teamHtml), 'team.html missing features link');
    assert(/team\.html/i.test(headerHtml), 'header.html missing team.html link');
  });
});

// ─── Summary ────────────────────────────────────────────────────────────────

console.log('\n' + '─'.repeat(60));
console.log(`\n  \x1b[1mResults:\x1b[0m  \x1b[32m${results.passed} passed\x1b[0m  \x1b[31m${results.failed} failed\x1b[0m  (${results.passed + results.failed} total)\n`);

if (results.failed > 0) {
  console.log('  \x1b[31mFailing tests:\x1b[0m');
  results.errors.forEach((e, i) => {
    console.log(`    ${i + 1}. ${e.description}`);
    console.log(`       ${e.message}`);
  });
  console.log('');
  process.exit(1);
} else {
  console.log('  \x1b[32mAll tests passed!\x1b[0m\n');
  process.exit(0);
}
