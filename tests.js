/**
 * NovaSphere Landing Page — Test Script
 *
 * Validates file existence, HTML structure, CSS integrity,
 * JavaScript logic, SVG assets, and cross-file consistency.
 *
 * Run:  node tests.js
 * Requires: Node.js ≥ 14 (uses built-in modules only)
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// ─── Minimal Test Runner ────────────────────────────────────────────────────

const results = { passed: 0, failed: 0, errors: [] };

function describe(suite, fn) {
  console.log(`\n\x1b[1m  ${suite}\x1b[0m`);
  fn();
}

function it(name, fn) {
  try {
    fn();
    results.passed++;
    console.log(`    \x1b[32m✓\x1b[0m ${name}`);
  } catch (err) {
    results.failed++;
    const msg = err.message || String(err);
    results.errors.push({ suite: name, message: msg });
    console.log(`    \x1b[31m✗\x1b[0m ${name}`);
    console.log(`      \x1b[31m${msg}\x1b[0m`);
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const ROOT = __dirname;
const readFile = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf-8');
const fileExists = (rel) => fs.existsSync(path.join(ROOT, rel));

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
    '.gitignore',
  ];

  expected.forEach((file) => {
    it(`${file} exists`, () => {
      assert.ok(fileExists(file), `Missing file: ${file}`);
    });
  });
});

// ─── 2. HTML Validation — header.html ───────────────────────────────────────

describe('HTML Validation — header.html', () => {
  const html = readFile('header.html');

  it('contains <!DOCTYPE html>', () => {
    assert.ok(/<!DOCTYPE html>/i.test(html));
  });

  it('has <html lang="en">', () => {
    assert.ok(/<html\s[^>]*lang=["']en["']/i.test(html));
  });

  it('has charset meta tag', () => {
    assert.ok(/<meta\s[^>]*charset=["']UTF-8["']/i.test(html));
  });

  it('has viewport meta tag', () => {
    assert.ok(/<meta\s[^>]*name=["']viewport["']/i.test(html));
  });

  it('has a <title> element', () => {
    assert.ok(/<title>[^<]+<\/title>/i.test(html));
  });

  it('links to styles.css', () => {
    assert.ok(/href=["']styles\.css["']/i.test(html));
  });

  it('contains <header> element', () => {
    assert.ok(/<header[\s>]/i.test(html));
  });

  it('contains <nav> element', () => {
    assert.ok(/<nav[\s>]/i.test(html));
  });

  it('contains <footer> element', () => {
    assert.ok(/<footer[\s>]/i.test(html));
  });

  it('has the enhanced-header class', () => {
    assert.ok(/class=["'][^"']*enhanced-header[^"']*["']/i.test(html));
  });

  it('has mobile menu toggle button', () => {
    assert.ok(/class=["'][^"']*mobile-menu-toggle[^"']*["']/i.test(html));
  });

  it('has breadcrumb navigation', () => {
    assert.ok(/class=["'][^"']*breadcrumb[^"']*["']/i.test(html));
  });

  it('has dropdown menus', () => {
    assert.ok(/class=["'][^"']*dropdown[^"']*["']/i.test(html));
  });

  it('has dropdown content sections', () => {
    assert.ok(/class=["'][^"']*dropdown-content[^"']*["']/i.test(html));
  });

  it('references logo.svg image', () => {
    assert.ok(/src=["']images\/logo\.svg["']/i.test(html));
  });

  it('has alt attribute on logo image', () => {
    assert.ok(/<img[^>]*alt=["'][^"']+["'][^>]*src=["']images\/logo\.svg["']|<img[^>]*src=["']images\/logo\.svg["'][^>]*alt=["'][^"']+["']/i.test(html));
  });

  it('contains toggleMobileMenu function', () => {
    assert.ok(/function\s+toggleMobileMenu/i.test(html));
  });

  it('has navigation links (Home, Products, Company)', () => {
    assert.ok(/Home/i.test(html));
    assert.ok(/Products/i.test(html));
    assert.ok(/Company/i.test(html));
  });

  it('links to team.html', () => {
    assert.ok(/href=["']team\.html["']/i.test(html));
  });
});

// ─── 3. HTML Validation — team.html ─────────────────────────────────────────

describe('HTML Validation — team.html', () => {
  const html = readFile('team.html');

  it('contains <!DOCTYPE html>', () => {
    assert.ok(/<!DOCTYPE html>/i.test(html));
  });

  it('has <html lang="en">', () => {
    assert.ok(/<html\s[^>]*lang=["']en["']/i.test(html));
  });

  it('has charset meta tag', () => {
    assert.ok(/<meta\s[^>]*charset=["']UTF-8["']/i.test(html));
  });

  it('has viewport meta tag', () => {
    assert.ok(/<meta\s[^>]*name=["']viewport["']/i.test(html));
  });

  it('has a <title> element', () => {
    assert.ok(/<title>[^<]+<\/title>/i.test(html));
  });

  it('links to styles.css', () => {
    assert.ok(/href=["']styles\.css["']/i.test(html));
  });

  it('contains <header> element', () => {
    assert.ok(/<header[\s>]/i.test(html));
  });

  it('contains <footer> element', () => {
    assert.ok(/<footer[\s>]/i.test(html));
  });

  it('has team-section class', () => {
    assert.ok(/class=["'][^"']*team-section[^"']*["']/i.test(html));
  });

  it('has team-grid class', () => {
    assert.ok(/class=["'][^"']*team-grid[^"']*["']/i.test(html));
  });

  it('has exactly 4 team members', () => {
    const members = html.match(/class=["'][^"']*team-member[^"']*["']/gi);
    assert.ok(members, 'No team-member elements found');
    assert.strictEqual(members.length, 4, `Expected 4 team members, found ${members.length}`);
  });

  it('lists Sarah Chen', () => {
    assert.ok(/Sarah Chen/i.test(html));
  });

  it('lists Marcus Rodriguez', () => {
    assert.ok(/Marcus Rodriguez/i.test(html));
  });

  it('lists Dr. Aisha Patel', () => {
    assert.ok(/Dr\.\s*Aisha Patel/i.test(html));
  });

  it('lists James Wilson', () => {
    assert.ok(/James Wilson/i.test(html));
  });

  it('each team member has a position', () => {
    const positions = html.match(/class=["'][^"']*position[^"']*["']/gi);
    assert.ok(positions && positions.length >= 4, 'Expected at least 4 position elements');
  });

  it('each team member has a bio', () => {
    const bios = html.match(/class=["'][^"']*bio[^"']*["']/gi);
    assert.ok(bios && bios.length >= 4, 'Expected at least 4 bio elements');
  });

  it('references logo.svg in header', () => {
    assert.ok(/src=["']images\/logo\.svg["']/i.test(html));
  });

  it('has copyright notice', () => {
    assert.ok(/©\s*2025\s*NovaSphere/i.test(html) || /&copy;\s*2025\s*NovaSphere/i.test(html));
  });
});

// ─── 4. CSS Validation — styles.css ─────────────────────────────────────────

describe('CSS Validation — styles.css', () => {
  const css = readFile('styles.css');

  it('has universal box-sizing reset', () => {
    assert.ok(/box-sizing:\s*border-box/i.test(css));
  });

  it('sets body font-family to Montserrat', () => {
    assert.ok(/font-family:.*Montserrat/i.test(css));
  });

  it('defines .btn-primary styles', () => {
    assert.ok(/\.btn-primary\s*\{/i.test(css));
  });

  it('defines .btn-secondary styles', () => {
    assert.ok(/\.btn-secondary\s*\{/i.test(css));
  });

  it('defines header styles', () => {
    assert.ok(/header\s*\{/i.test(css));
  });

  it('defines .hero section', () => {
    assert.ok(/\.hero\s*\{/i.test(css));
  });

  it('defines .features section', () => {
    assert.ok(/\.features\s*\{/i.test(css));
  });

  it('defines .feature-card styles', () => {
    assert.ok(/\.feature-card\s*\{/i.test(css));
  });

  it('defines .pricing section', () => {
    assert.ok(/\.pricing\s*\{/i.test(css));
  });

  it('defines .pricing-card styles', () => {
    assert.ok(/\.pricing-card\s*\{/i.test(css));
  });

  it('defines .pricing-card.featured styles', () => {
    assert.ok(/\.pricing-card\.featured\s*\{/i.test(css));
  });

  it('defines .contact section', () => {
    assert.ok(/\.contact\s*\{/i.test(css));
  });

  it('defines .contact-form styles', () => {
    assert.ok(/\.contact-form\s*\{/i.test(css));
  });

  it('defines footer styles', () => {
    assert.ok(/footer\s*\{/i.test(css));
  });

  it('defines .footer-content styles', () => {
    assert.ok(/\.footer-content\s*\{/i.test(css));
  });

  it('defines .about section', () => {
    assert.ok(/\.about\s*\{/i.test(css));
  });

  it('defines product-vision section', () => {
    assert.ok(/\.product-vision\s*\{/i.test(css));
  });

  it('has @keyframes float animation', () => {
    assert.ok(/@keyframes\s+float/i.test(css));
  });

  it('has responsive breakpoint at 992px', () => {
    assert.ok(/@media\s*\(\s*max-width:\s*992px\s*\)/i.test(css));
  });

  it('has responsive breakpoint at 768px', () => {
    assert.ok(/@media\s*\(\s*max-width:\s*768px\s*\)/i.test(css));
  });

  it('uses gradient on .btn-primary', () => {
    // gradient should appear somewhere near .btn-primary
    const btnBlock = css.match(/\.btn-primary\s*\{[^}]+\}/i);
    assert.ok(btnBlock, '.btn-primary block not found');
    assert.ok(/linear-gradient/i.test(btnBlock[0]), 'No gradient in .btn-primary');
  });

  it('header is fixed position', () => {
    const headerBlock = css.match(/header\s*\{[^}]+\}/i);
    assert.ok(headerBlock, 'header block not found');
    assert.ok(/position:\s*fixed/i.test(headerBlock[0]));
  });

  it('defines .container with max-width', () => {
    const containerBlock = css.match(/\.container\s*\{[^}]+\}/i);
    assert.ok(containerBlock, '.container block not found');
    assert.ok(/max-width/i.test(containerBlock[0]));
  });
});

// ─── 5. JavaScript Validation — script.js ───────────────────────────────────

describe('JavaScript Validation — script.js', () => {
  const js = readFile('script.js');

  it('registers DOMContentLoaded listener', () => {
    assert.ok(/addEventListener\s*\(\s*['"]DOMContentLoaded['"]/i.test(js));
  });

  it('implements smooth scrolling for anchor links', () => {
    assert.ok(/querySelectorAll\s*\(\s*['"]a\[href\^=["']?#["']?\]['"]\s*\)/i.test(js));
    assert.ok(/scrollTo/i.test(js));
    assert.ok(/behavior:\s*['"]smooth['"]/i.test(js));
  });

  it('handles contact form submission', () => {
    assert.ok(/\.contact-form/i.test(js));
    assert.ok(/addEventListener\s*\(\s*['"]submit['"]/i.test(js));
    assert.ok(/preventDefault/i.test(js));
  });

  it('reads form fields (name, email, message)', () => {
    assert.ok(/getElementById\s*\(\s*['"]name['"]\s*\)/i.test(js));
    assert.ok(/getElementById\s*\(\s*['"]email['"]\s*\)/i.test(js));
    assert.ok(/getElementById\s*\(\s*['"]message['"]\s*\)/i.test(js));
  });

  it('resets form after submission', () => {
    assert.ok(/\.reset\s*\(\s*\)/i.test(js));
  });

  it('implements scroll animation for feature cards', () => {
    assert.ok(/\.feature-card/i.test(js));
    assert.ok(/getBoundingClientRect/i.test(js));
  });

  it('sets initial opacity and transform for animation', () => {
    assert.ok(/opacity.*['"]0['"]/i.test(js));
    assert.ok(/translateY/i.test(js));
  });

  it('attaches scroll event listener', () => {
    assert.ok(/addEventListener\s*\(\s*['"]scroll['"]/i.test(js));
  });
});

// ─── 6. JavaScript Validation — main.js ────────────────────────────────────

describe('JavaScript Validation — main.js', () => {
  const js = readFile('main.js');

  it('creates a DOM element', () => {
    assert.ok(/document\.createElement/i.test(js));
  });

  it('sets innerHTML content', () => {
    assert.ok(/\.innerHTML\s*=/i.test(js));
  });

  it('appends element to document body', () => {
    assert.ok(/document\.body\.appendChild/i.test(js));
  });

  it('contains NovaSphere branding text', () => {
    assert.ok(/NovaSphere/i.test(js));
  });
});

// ─── 7. SVG Asset Validation ────────────────────────────────────────────────

describe('SVG Asset Validation — logo.svg', () => {
  const svg = readFile('images/logo.svg');

  it('is a valid SVG (has <svg> root)', () => {
    assert.ok(/<svg[\s>]/i.test(svg));
  });

  it('has xmlns attribute', () => {
    assert.ok(/xmlns=["']http:\/\/www\.w3\.org\/2000\/svg["']/i.test(svg));
  });

  it('contains gradient definitions', () => {
    assert.ok(/<defs>/i.test(svg));
    assert.ok(/<linearGradient/i.test(svg));
  });

  it('has animated orbiting element', () => {
    assert.ok(/<animateTransform/i.test(svg));
  });

  it('contains circle elements', () => {
    const circles = svg.match(/<circle/gi);
    assert.ok(circles && circles.length >= 3, 'Expected at least 3 circle elements');
  });
});

describe('SVG Asset Validation — product.svg', () => {
  const svg = readFile('images/product.svg');

  it('is a valid SVG (has <svg> root)', () => {
    assert.ok(/<svg[\s>]/i.test(svg));
  });

  it('has xmlns attribute', () => {
    assert.ok(/xmlns=["']http:\/\/www\.w3\.org\/2000\/svg["']/i.test(svg));
  });

  it('contains gradient definitions', () => {
    assert.ok(/<defs>/i.test(svg));
    assert.ok(/<linearGradient/i.test(svg) || /<radialGradient/i.test(svg));
  });

  it('has animated elements', () => {
    assert.ok(/<animateTransform/i.test(svg) || /<animate[\s>]/i.test(svg));
  });

  it('contains the holographic sphere', () => {
    assert.ok(/holoGradient/i.test(svg));
  });

  it('contains the device base', () => {
    assert.ok(/deviceGradient/i.test(svg));
  });

  it('has pulse animation', () => {
    assert.ok(/<animate[\s>]/i.test(svg));
  });
});

// ─── 8. Cross-File Consistency ──────────────────────────────────────────────

describe('Cross-File Consistency', () => {
  const css = readFile('styles.css');
  const headerHtml = readFile('header.html');
  const teamHtml = readFile('team.html');

  it('team.html team-section class exists in its inline styles', () => {
    assert.ok(/\.team-section\s*\{/i.test(teamHtml));
  });

  it('team.html team-grid class exists in its inline styles', () => {
    assert.ok(/\.team-grid\s*\{/i.test(teamHtml));
  });

  it('team.html team-member class exists in its inline styles', () => {
    assert.ok(/\.team-member\s*\{/i.test(teamHtml));
  });

  it('header.html enhanced-header class exists in its inline styles', () => {
    assert.ok(/\.enhanced-header\s*\{/i.test(headerHtml));
  });

  it('header.html breadcrumb class exists in its inline styles', () => {
    assert.ok(/\.breadcrumb\s*\{/i.test(headerHtml));
  });

  it('header.html dropdown-content class exists in its inline styles', () => {
    assert.ok(/\.dropdown-content/i.test(headerHtml));
  });

  it('styles.css .logo class is used in team.html', () => {
    assert.ok(/class=["'][^"']*logo[^"']*["']/i.test(teamHtml));
  });

  it('styles.css footer styles are used in both HTML pages', () => {
    assert.ok(/<footer[\s>]/i.test(headerHtml));
    assert.ok(/<footer[\s>]/i.test(teamHtml));
  });

  it('styles.css .container class is used in both HTML pages', () => {
    assert.ok(/class=["'][^"']*container[^"']*["']/i.test(headerHtml));
    assert.ok(/class=["'][^"']*container[^"']*["']/i.test(teamHtml));
  });

  it('both HTML pages link to styles.css', () => {
    assert.ok(/href=["']styles\.css["']/i.test(headerHtml));
    assert.ok(/href=["']styles\.css["']/i.test(teamHtml));
  });

  it('both HTML pages reference logo.svg', () => {
    assert.ok(/images\/logo\.svg/i.test(headerHtml));
    assert.ok(/images\/logo\.svg/i.test(teamHtml));
  });

  it('both HTML pages include Google Fonts link', () => {
    assert.ok(/fonts\.googleapis\.com/i.test(headerHtml));
    assert.ok(/fonts\.googleapis\.com/i.test(teamHtml));
  });

  it('copyright year is consistent across pages', () => {
    const yearHeader = headerHtml.match(/(?:©|&copy;)\s*(\d{4})/i);
    const yearTeam = teamHtml.match(/(?:©|&copy;)\s*(\d{4})/i);
    assert.ok(yearHeader, 'No copyright year in header.html');
    assert.ok(yearTeam, 'No copyright year in team.html');
    assert.strictEqual(yearHeader[1], yearTeam[1], 'Copyright years do not match');
  });
});

// ─── 9. README Validation ───────────────────────────────────────────────────

describe('README Validation', () => {
  const readme = readFile('README.md');

  it('contains project name NovaSphere', () => {
    assert.ok(/NovaSphere/i.test(readme));
  });

  it('has a markdown heading', () => {
    assert.ok(/^#\s+/m.test(readme));
  });

  it('mentions holographic interfaces', () => {
    assert.ok(/holographic/i.test(readme));
  });
});

// ─── 10. .gitignore Validation ──────────────────────────────────────────────

describe('.gitignore Validation', () => {
  const gi = readFile('.gitignore');

  it('ignores node_modules/', () => {
    assert.ok(/node_modules/i.test(gi));
  });

  it('ignores log files', () => {
    assert.ok(/\*\.log/i.test(gi));
  });

  it('ignores build output', () => {
    assert.ok(/build\/?/i.test(gi) || /dist\/?/i.test(gi));
  });
});

// ─── Summary ────────────────────────────────────────────────────────────────

console.log('\n' + '─'.repeat(60));
const total = results.passed + results.failed;
console.log(`\n  \x1b[1mResults: ${total} tests\x1b[0m`);
console.log(`  \x1b[32m${results.passed} passing\x1b[0m`);
if (results.failed > 0) {
  console.log(`  \x1b[31m${results.failed} failing\x1b[0m\n`);
  process.exit(1);
} else {
  console.log('');
  process.exit(0);
}
