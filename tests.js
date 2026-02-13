/**
 * NovaSphere Landing Page — Test Suite
 *
 * Zero-dependency test script that validates file structure, HTML integrity,
 * CSS completeness, JavaScript correctness, asset validity, and cross-file
 * consistency for the NovaSphere static site.
 *
 * Usage:  node tests.js
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// ─── Minimal Test Runner ────────────────────────────────────────────────────

const ROOT = __dirname;
let passed = 0;
let failed = 0;
const failures = [];

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  \x1b[32m✓\x1b[0m ${name}`);
  } catch (err) {
    failed++;
    failures.push({ name, message: err.message });
    console.log(`  \x1b[31m✗\x1b[0m ${name}`);
    console.log(`    \x1b[31m${err.message}\x1b[0m`);
  }
}

function suite(title, fn) {
  console.log(`\n\x1b[1m\x1b[36m● ${title}\x1b[0m`);
  fn();
}

// Helper: read a project file as UTF-8
function readFile(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf-8');
}

// Helper: check file exists
function fileExists(relPath) {
  return fs.existsSync(path.join(ROOT, relPath));
}

// ─── 1. File Structure Tests ────────────────────────────────────────────────

suite('File Structure', () => {
  const expectedFiles = [
    'header.html',
    'team.html',
    'styles.css',
    'script.js',
    'main.js',
    'README.md',
    'images/logo.svg',
    'images/product.svg',
    '.gitignore',
  ];

  expectedFiles.forEach((file) => {
    test(`${file} exists`, () => {
      assert.ok(fileExists(file), `Missing file: ${file}`);
    });
  });

  test('images/ directory exists and is a directory', () => {
    const stat = fs.statSync(path.join(ROOT, 'images'));
    assert.ok(stat.isDirectory(), 'images/ is not a directory');
  });
});

// ─── 2. HTML Validation — header.html ───────────────────────────────────────

suite('HTML Validation — header.html', () => {
  const html = readFile('header.html');

  test('contains DOCTYPE declaration', () => {
    assert.ok(/<!DOCTYPE html>/i.test(html), 'Missing <!DOCTYPE html>');
  });

  test('has <html lang="en"> attribute', () => {
    assert.ok(/<html\s[^>]*lang=["']en["']/i.test(html), 'Missing lang="en"');
  });

  test('has charset meta tag', () => {
    assert.ok(/<meta\s[^>]*charset=["']UTF-8["']/i.test(html), 'Missing charset meta');
  });

  test('has viewport meta tag', () => {
    assert.ok(/<meta\s[^>]*name=["']viewport["']/i.test(html), 'Missing viewport meta');
  });

  test('has <title> tag', () => {
    assert.ok(/<title>[^<]+<\/title>/i.test(html), 'Missing or empty <title>');
  });

  test('title contains NovaSphere', () => {
    const match = html.match(/<title>([^<]+)<\/title>/i);
    assert.ok(match && /novasphere/i.test(match[1]), 'Title does not mention NovaSphere');
  });

  test('links to styles.css', () => {
    assert.ok(/href=["']styles\.css["']/i.test(html), 'Missing link to styles.css');
  });

  test('contains <header> element', () => {
    assert.ok(/<header[\s>]/i.test(html), 'Missing <header> element');
  });

  test('contains <nav> element', () => {
    assert.ok(/<nav[\s>]/i.test(html), 'Missing <nav> element');
  });

  test('contains <footer> element', () => {
    assert.ok(/<footer[\s>]/i.test(html), 'Missing <footer> element');
  });

  test('contains logo image reference', () => {
    assert.ok(/images\/logo\.svg/i.test(html), 'Missing logo image reference');
  });

  test('has navigation links (Home, Products, Company)', () => {
    assert.ok(/Home/i.test(html), 'Missing Home nav link');
    assert.ok(/Products/i.test(html), 'Missing Products nav link');
    assert.ok(/Company/i.test(html), 'Missing Company nav link');
  });

  test('has dropdown menus', () => {
    assert.ok(/class=["'][^"']*dropdown/i.test(html), 'Missing dropdown class');
    assert.ok(/class=["'][^"']*dropdown-content/i.test(html), 'Missing dropdown-content class');
  });

  test('has breadcrumb navigation', () => {
    assert.ok(/class=["'][^"']*breadcrumb/i.test(html), 'Missing breadcrumb class');
  });

  test('has mobile menu toggle button', () => {
    assert.ok(/class=["'][^"']*mobile-menu-toggle/i.test(html), 'Missing mobile-menu-toggle');
  });

  test('contains toggleMobileMenu function', () => {
    assert.ok(/function\s+toggleMobileMenu/i.test(html), 'Missing toggleMobileMenu function');
  });

  test('has link to team.html', () => {
    assert.ok(/href=["']team\.html["']/i.test(html), 'Missing link to team.html');
  });

  test('has Contact CTA button', () => {
    assert.ok(/Contact/i.test(html) && /btn-primary/i.test(html), 'Missing Contact CTA');
  });
});

// ─── 3. HTML Validation — team.html ─────────────────────────────────────────

suite('HTML Validation — team.html', () => {
  const html = readFile('team.html');

  test('contains DOCTYPE declaration', () => {
    assert.ok(/<!DOCTYPE html>/i.test(html), 'Missing <!DOCTYPE html>');
  });

  test('has <html lang="en"> attribute', () => {
    assert.ok(/<html\s[^>]*lang=["']en["']/i.test(html), 'Missing lang="en"');
  });

  test('has charset and viewport meta tags', () => {
    assert.ok(/<meta\s[^>]*charset=["']UTF-8["']/i.test(html), 'Missing charset meta');
    assert.ok(/<meta\s[^>]*name=["']viewport["']/i.test(html), 'Missing viewport meta');
  });

  test('title contains NovaSphere', () => {
    const match = html.match(/<title>([^<]+)<\/title>/i);
    assert.ok(match && /novasphere/i.test(match[1]), 'Title does not mention NovaSphere');
  });

  test('links to styles.css', () => {
    assert.ok(/href=["']styles\.css["']/i.test(html), 'Missing link to styles.css');
  });

  test('contains <header> with logo', () => {
    assert.ok(/<header[\s>]/i.test(html), 'Missing <header>');
    assert.ok(/images\/logo\.svg/i.test(html), 'Missing logo in header');
  });

  test('contains <footer> element', () => {
    assert.ok(/<footer[\s>]/i.test(html), 'Missing <footer>');
  });

  test('has team section', () => {
    assert.ok(/class=["'][^"']*team-section/i.test(html), 'Missing team-section class');
  });

  test('has team grid', () => {
    assert.ok(/class=["'][^"']*team-grid/i.test(html), 'Missing team-grid class');
  });

  test('lists all four team members', () => {
    assert.ok(/Sarah Chen/i.test(html), 'Missing team member: Sarah Chen');
    assert.ok(/Marcus Rodriguez/i.test(html), 'Missing team member: Marcus Rodriguez');
    assert.ok(/Aisha Patel/i.test(html), 'Missing team member: Dr. Aisha Patel');
    assert.ok(/James Wilson/i.test(html), 'Missing team member: James Wilson');
  });

  test('each team member has a position', () => {
    const positions = ['CEO & Founder', 'Chief Technology Officer', 'Head of Research', 'Design Director'];
    positions.forEach((pos) => {
      assert.ok(html.includes(pos), `Missing position: ${pos}`);
    });
  });

  test('each team member has a bio paragraph', () => {
    const bioCount = (html.match(/class=["']bio["']/g) || []).length;
    assert.strictEqual(bioCount, 4, `Expected 4 bio paragraphs, found ${bioCount}`);
  });

  test('has navigation links back to index.html', () => {
    assert.ok(/href=["']index\.html/i.test(html), 'Missing link back to index.html');
  });

  test('footer contains copyright notice', () => {
    assert.ok(/©\s*2025\s*NovaSphere/i.test(html), 'Missing copyright notice');
  });
});

// ─── 4. CSS Validation — styles.css ─────────────────────────────────────────

suite('CSS Validation — styles.css', () => {
  const css = readFile('styles.css');

  test('contains reset rules (box-sizing)', () => {
    assert.ok(/box-sizing:\s*border-box/i.test(css), 'Missing box-sizing reset');
  });

  test('sets body font-family to Montserrat', () => {
    assert.ok(/font-family:.*Montserrat/i.test(css), 'Missing Montserrat font-family');
  });

  test('defines .btn-primary styles', () => {
    assert.ok(/\.btn-primary\s*\{/i.test(css), 'Missing .btn-primary rule');
  });

  test('defines .btn-secondary styles', () => {
    assert.ok(/\.btn-secondary\s*\{/i.test(css), 'Missing .btn-secondary rule');
  });

  test('defines header styles (fixed positioning)', () => {
    assert.ok(/header\s*\{[^}]*position:\s*fixed/is.test(css), 'Header not fixed positioned');
  });

  test('defines .hero section', () => {
    assert.ok(/\.hero\s*\{/i.test(css), 'Missing .hero rule');
  });

  test('defines .features section', () => {
    assert.ok(/\.features\s*\{/i.test(css), 'Missing .features rule');
  });

  test('defines .feature-card styles', () => {
    assert.ok(/\.feature-card\s*\{/i.test(css), 'Missing .feature-card rule');
  });

  test('defines .pricing section', () => {
    assert.ok(/\.pricing\s*\{/i.test(css), 'Missing .pricing rule');
  });

  test('defines .pricing-card styles', () => {
    assert.ok(/\.pricing-card\s*\{/i.test(css), 'Missing .pricing-card rule');
  });

  test('defines .contact section', () => {
    assert.ok(/\.contact\s*\{/i.test(css), 'Missing .contact rule');
  });

  test('defines footer styles', () => {
    assert.ok(/footer\s*\{/i.test(css), 'Missing footer rule');
  });

  test('defines .footer-links grid', () => {
    assert.ok(/\.footer-links\s*\{/i.test(css), 'Missing .footer-links rule');
  });

  test('has responsive media queries', () => {
    const mqCount = (css.match(/@media/g) || []).length;
    assert.ok(mqCount >= 2, `Expected at least 2 media queries, found ${mqCount}`);
  });

  test('defines .about section', () => {
    assert.ok(/\.about\s*\{/i.test(css), 'Missing .about rule');
  });

  test('defines product-vision section', () => {
    assert.ok(/\.product-vision\s*\{/i.test(css), 'Missing .product-vision rule');
  });

  test('uses CSS gradients for branding', () => {
    const gradientCount = (css.match(/linear-gradient/g) || []).length;
    assert.ok(gradientCount >= 3, `Expected at least 3 gradients, found ${gradientCount}`);
  });

  test('defines float keyframe animation', () => {
    assert.ok(/@keyframes\s+float/i.test(css), 'Missing @keyframes float');
  });
});

// ─── 5. JavaScript Validation — script.js ───────────────────────────────────

suite('JavaScript Validation — script.js', () => {
  const js = readFile('script.js');

  test('registers DOMContentLoaded listener', () => {
    assert.ok(/DOMContentLoaded/i.test(js), 'Missing DOMContentLoaded listener');
  });

  test('implements smooth scrolling for anchor links', () => {
    assert.ok(/a\[href\^=["']#["']\]/i.test(js), 'Missing anchor link selector');
    assert.ok(/scrollTo|scrollIntoView/i.test(js), 'Missing scroll method');
    assert.ok(/behavior:\s*['"]smooth['"]/i.test(js), 'Missing smooth scroll behavior');
  });

  test('handles contact form submission', () => {
    assert.ok(/\.contact-form/i.test(js), 'Missing .contact-form selector');
    assert.ok(/submit/i.test(js), 'Missing submit event');
    assert.ok(/preventDefault/i.test(js), 'Missing preventDefault call');
  });

  test('reads form field values (name, email, message)', () => {
    assert.ok(/getElementById\s*\(\s*['"]name['"]\s*\)/i.test(js), 'Missing name field read');
    assert.ok(/getElementById\s*\(\s*['"]email['"]\s*\)/i.test(js), 'Missing email field read');
    assert.ok(/getElementById\s*\(\s*['"]message['"]\s*\)/i.test(js), 'Missing message field read');
  });

  test('resets form after submission', () => {
    assert.ok(/\.reset\(\)/i.test(js), 'Missing form reset call');
  });

  test('implements scroll-based animation for feature cards', () => {
    assert.ok(/\.feature-card/i.test(js), 'Missing .feature-card selector');
    assert.ok(/getBoundingClientRect/i.test(js), 'Missing getBoundingClientRect');
    assert.ok(/scroll/i.test(js), 'Missing scroll event listener');
  });

  test('sets initial opacity and transform for animation', () => {
    assert.ok(/opacity.*['"]0['"]/i.test(js), 'Missing initial opacity: 0');
    assert.ok(/translateY/i.test(js), 'Missing translateY transform');
  });
});

// ─── 6. JavaScript Validation — main.js ─────────────────────────────────────

suite('JavaScript Validation — main.js', () => {
  const js = readFile('main.js');

  test('creates a DOM element', () => {
    assert.ok(/document\.createElement/i.test(js), 'Missing createElement call');
  });

  test('sets innerHTML content', () => {
    assert.ok(/\.innerHTML\s*=/i.test(js), 'Missing innerHTML assignment');
  });

  test('appends element to document body', () => {
    assert.ok(/document\.body\.appendChild/i.test(js), 'Missing appendChild to body');
  });

  test('references NovaSphere in content', () => {
    assert.ok(/NovaSphere/i.test(js), 'Missing NovaSphere reference');
  });
});

// ─── 7. Asset Validation — SVG Files ────────────────────────────────────────

suite('Asset Validation — SVG Files', () => {
  const logo = readFile('images/logo.svg');
  const product = readFile('images/product.svg');

  test('logo.svg is valid SVG (has <svg> root)', () => {
    assert.ok(/<svg[\s>]/i.test(logo), 'logo.svg missing <svg> root element');
  });

  test('logo.svg has viewBox attribute', () => {
    assert.ok(/viewBox/i.test(logo), 'logo.svg missing viewBox');
  });

  test('logo.svg contains gradient definitions', () => {
    assert.ok(/<defs>/i.test(logo), 'logo.svg missing <defs>');
    assert.ok(/linearGradient/i.test(logo), 'logo.svg missing linearGradient');
  });

  test('logo.svg has animated orbiting element', () => {
    assert.ok(/animateTransform/i.test(logo), 'logo.svg missing animateTransform');
  });

  test('product.svg is valid SVG (has <svg> root)', () => {
    assert.ok(/<svg[\s>]/i.test(product), 'product.svg missing <svg> root element');
  });

  test('product.svg has viewBox attribute', () => {
    assert.ok(/viewBox/i.test(product), 'product.svg missing viewBox');
  });

  test('product.svg contains gradient definitions', () => {
    assert.ok(/<defs>/i.test(product), 'product.svg missing <defs>');
    assert.ok(/radialGradient/i.test(product), 'product.svg missing radialGradient');
  });

  test('product.svg has holographic sphere element', () => {
    assert.ok(/holoGradient/i.test(product), 'product.svg missing holographic sphere');
  });

  test('product.svg has animated elements', () => {
    const animCount = (product.match(/animateTransform|animate\b/g) || []).length;
    assert.ok(animCount >= 2, `Expected at least 2 animations, found ${animCount}`);
  });
});

// ─── 8. Cross-File Consistency ──────────────────────────────────────────────

suite('Cross-File Consistency', () => {
  const css = readFile('styles.css');
  const headerHtml = readFile('header.html');
  const teamHtml = readFile('team.html');

  test('team.html team-section class has matching CSS (inline or external)', () => {
    // team.html uses inline <style> for team-specific classes
    assert.ok(/\.team-section\s*\{/i.test(teamHtml), 'team-section CSS missing from team.html');
    assert.ok(/\.team-grid\s*\{/i.test(teamHtml), 'team-grid CSS missing from team.html');
    assert.ok(/\.team-member\s*\{/i.test(teamHtml), 'team-member CSS missing from team.html');
  });

  test('header.html enhanced-header class has matching inline CSS', () => {
    assert.ok(/\.enhanced-header\s*\{/i.test(headerHtml), 'enhanced-header CSS missing');
    assert.ok(/\.enhanced-nav\s*\{/i.test(headerHtml), 'enhanced-nav CSS missing');
    assert.ok(/\.enhanced-logo\s*\{/i.test(headerHtml), 'enhanced-logo CSS missing');
  });

  test('shared styles.css classes used in team.html exist', () => {
    // team.html uses .container, .logo, .btn-primary, footer, .footer-content, etc.
    const sharedClasses = ['container', 'logo', 'btn-primary', 'footer-content', 'footer-logo', 'footer-links', 'link-group', 'copyright'];
    sharedClasses.forEach((cls) => {
      const cssRegex = new RegExp(`\\.${cls}[\\s{,:]`, 'i');
      assert.ok(cssRegex.test(css), `Shared class .${cls} missing from styles.css`);
    });
  });

  test('both HTML pages reference the same logo path', () => {
    assert.ok(/images\/logo\.svg/.test(headerHtml), 'header.html missing logo path');
    assert.ok(/images\/logo\.svg/.test(teamHtml), 'team.html missing logo path');
  });

  test('team.html footer links match header.html footer links structure', () => {
    // Both should have Product, Company link groups
    assert.ok(/Product/i.test(headerHtml) && /Product/i.test(teamHtml), 'Product link group mismatch');
    assert.ok(/Company/i.test(headerHtml) && /Company/i.test(teamHtml), 'Company link group mismatch');
  });

  test('Google Fonts link present in both HTML files', () => {
    assert.ok(/fonts\.googleapis\.com/i.test(headerHtml), 'header.html missing Google Fonts link');
    assert.ok(/fonts\.googleapis\.com/i.test(teamHtml), 'team.html missing Google Fonts link');
  });

  test('.gitignore excludes node_modules and build artifacts', () => {
    const gitignore = readFile('.gitignore');
    assert.ok(/node_modules/i.test(gitignore), '.gitignore missing node_modules');
  });
});

// ─── Summary ────────────────────────────────────────────────────────────────

console.log('\n' + '─'.repeat(60));
const total = passed + failed;
if (failed === 0) {
  console.log(`\x1b[32m\x1b[1m  All ${total} tests passed ✓\x1b[0m`);
} else {
  console.log(`\x1b[31m\x1b[1m  ${failed} of ${total} tests failed\x1b[0m`);
  console.log('\n  Failed tests:');
  failures.forEach((f) => {
    console.log(`    \x1b[31m✗\x1b[0m ${f.name}: ${f.message}`);
  });
}
console.log('─'.repeat(60) + '\n');

process.exit(failed > 0 ? 1 : 0);
