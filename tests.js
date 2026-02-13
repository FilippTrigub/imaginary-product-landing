/**
 * NovaSphere Landing Page — Test Script
 *
 * A self-contained test suite that validates file structure, HTML integrity,
 * CSS completeness, JavaScript correctness, SVG assets, and cross-file
 * consistency for the NovaSphere project.
 *
 * Run:  node tests.js
 */

const fs   = require('fs');
const path = require('path');

// ─── Minimal Test Runner ────────────────────────────────────────────────────

const results = { passed: 0, failed: 0, errors: [] };

function describe(suiteName, fn) {
    console.log(`\n  \x1b[1m${suiteName}\x1b[0m`);
    fn();
}

function it(description, fn) {
    try {
        fn();
        results.passed++;
        console.log(`    \x1b[32m✓\x1b[0m ${description}`);
    } catch (err) {
        results.failed++;
        const msg = `    \x1b[31m✗\x1b[0m ${description}\n      → ${err.message}`;
        console.log(msg);
        results.errors.push({ description, message: err.message });
    }
}

function assert(condition, message) {
    if (!condition) throw new Error(message || 'Assertion failed');
}

function assertIncludes(haystack, needle, message) {
    assert(
        haystack.includes(needle),
        message || `Expected content to include "${needle}"`
    );
}

function assertMatch(str, regex, message) {
    assert(
        regex.test(str),
        message || `Expected content to match ${regex}`
    );
}

// ─── Helpers ────────────────────────────────────────────────────────────────

const ROOT = __dirname;

function readFile(relPath) {
    return fs.readFileSync(path.join(ROOT, relPath), 'utf-8');
}

function fileExists(relPath) {
    return fs.existsSync(path.join(ROOT, relPath));
}

// Pre-load files used across multiple suites
const stylesCss   = readFile('styles.css');
const scriptJs    = readFile('script.js');
const mainJs      = readFile('main.js');
const headerHtml  = readFile('header.html');
const teamHtml    = readFile('team.html');
const logoSvg     = readFile('images/logo.svg');
const productSvg  = readFile('images/product.svg');

// ─── 1. File Structure Tests ────────────────────────────────────────────────

describe('File Structure', () => {
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

    expectedFiles.forEach((f) => {
        it(`"${f}" exists`, () => {
            assert(fileExists(f), `Missing file: ${f}`);
        });
    });

    it('images/ directory exists and is a directory', () => {
        const stat = fs.statSync(path.join(ROOT, 'images'));
        assert(stat.isDirectory(), 'images/ is not a directory');
    });
});

// ─── 2. HTML Validation — header.html ───────────────────────────────────────

describe('HTML Validation — header.html', () => {
    it('has a DOCTYPE declaration', () => {
        assertMatch(headerHtml, /<!DOCTYPE html>/i);
    });

    it('has <html lang="en">', () => {
        assertMatch(headerHtml, /<html\s+lang=["']en["']/i);
    });

    it('has a <meta charset="UTF-8"> tag', () => {
        assertMatch(headerHtml, /<meta\s+charset=["']UTF-8["']/i);
    });

    it('has a viewport meta tag', () => {
        assertMatch(headerHtml, /<meta\s+name=["']viewport["']/i);
    });

    it('has a <title> tag containing "NovaSphere"', () => {
        assertMatch(headerHtml, /<title>[^<]*NovaSphere[^<]*<\/title>/i);
    });

    it('links to styles.css', () => {
        assertIncludes(headerHtml, 'styles.css');
    });

    it('links to Google Fonts (Montserrat)', () => {
        assertIncludes(headerHtml, 'fonts.googleapis.com');
        assertIncludes(headerHtml, 'Montserrat');
    });

    it('contains a <header> element with class "enhanced-header"', () => {
        assertMatch(headerHtml, /<header\s+class=["']enhanced-header["']/);
    });

    it('contains the logo image referencing images/logo.svg', () => {
        assertMatch(headerHtml, /<img\s+src=["']images\/logo\.svg["']/);
    });

    it('contains a <nav> element with class "enhanced-nav"', () => {
        assertMatch(headerHtml, /<nav\s+class=["']enhanced-nav["']/);
    });

    it('has navigation links for Home, Products, Company, Support, Blog, Contact', () => {
        ['Home', 'Products', 'Company', 'Support', 'Blog', 'Contact'].forEach((label) => {
            assertIncludes(headerHtml, label, `Missing nav link: ${label}`);
        });
    });

    it('has dropdown menus for Products and Company', () => {
        const dropdowns = headerHtml.match(/class=["']dropdown["']/g);
        assert(dropdowns && dropdowns.length >= 2, 'Expected at least 2 dropdown menus');
    });

    it('has a mobile menu toggle button', () => {
        assertMatch(headerHtml, /<button\s+class=["']mobile-menu-toggle["']/);
    });

    it('has breadcrumb navigation', () => {
        assertIncludes(headerHtml, 'breadcrumb');
    });

    it('has a <footer> element', () => {
        assertIncludes(headerHtml, '<footer>');
    });

    it('contains copyright text', () => {
        assertMatch(headerHtml, /©\s*2025\s*NovaSphere/);
    });

    it('has inline <script> for mobile menu toggle', () => {
        assertIncludes(headerHtml, 'toggleMobileMenu');
    });
});

// ─── 3. HTML Validation — team.html ─────────────────────────────────────────

describe('HTML Validation — team.html', () => {
    it('has a DOCTYPE declaration', () => {
        assertMatch(teamHtml, /<!DOCTYPE html>/i);
    });

    it('has <html lang="en">', () => {
        assertMatch(teamHtml, /<html\s+lang=["']en["']/i);
    });

    it('has a <title> tag containing "NovaSphere"', () => {
        assertMatch(teamHtml, /<title>[^<]*NovaSphere[^<]*<\/title>/i);
    });

    it('links to styles.css', () => {
        assertIncludes(teamHtml, 'styles.css');
    });

    it('contains a header with logo', () => {
        assertMatch(teamHtml, /<header>/);
        assertMatch(teamHtml, /<img\s+src=["']images\/logo\.svg["']/);
    });

    it('has a team section with class "team-section"', () => {
        assertIncludes(teamHtml, 'team-section');
    });

    it('has a "Meet Our Team" heading', () => {
        assertIncludes(teamHtml, 'Meet Our Team');
    });

    it('has a team grid with class "team-grid"', () => {
        assertIncludes(teamHtml, 'team-grid');
    });

    it('lists 4 team members', () => {
        const members = teamHtml.match(/class=["']team-member["']/g);
        assert(members && members.length === 4, `Expected 4 team members, found ${members ? members.length : 0}`);
    });

    const teamMembers = [
        { name: 'Sarah Chen',       title: 'CEO & Founder' },
        { name: 'Marcus Rodriguez',  title: 'Chief Technology Officer' },
        { name: 'Dr. Aisha Patel',   title: 'Head of Research' },
        { name: 'James Wilson',      title: 'Design Director' },
    ];

    teamMembers.forEach(({ name, title }) => {
        it(`lists team member "${name}" with title "${title}"`, () => {
            assertIncludes(teamHtml, name);
            assertIncludes(teamHtml, title);
        });
    });

    it('each team member has a bio paragraph', () => {
        const bios = teamHtml.match(/class=["']bio["']/g);
        assert(bios && bios.length === 4, `Expected 4 bio paragraphs, found ${bios ? bios.length : 0}`);
    });

    it('has a <footer> element', () => {
        assertIncludes(teamHtml, '<footer>');
    });

    it('has navigation links back to index.html sections', () => {
        assertIncludes(teamHtml, 'index.html#features');
        assertIncludes(teamHtml, 'index.html#pricing');
        assertIncludes(teamHtml, 'index.html#about');
        assertIncludes(teamHtml, 'index.html#contact');
    });
});

// ─── 4. CSS Validation — styles.css ─────────────────────────────────────────

describe('CSS Validation — styles.css', () => {
    const requiredSelectors = [
        // Layout & base
        { selector: '.container',       desc: '.container' },
        { selector: '.btn-primary',     desc: '.btn-primary' },
        { selector: '.btn-secondary',   desc: '.btn-secondary' },
        // Header
        { selector: 'header',           desc: 'header' },
        { selector: '.logo',            desc: '.logo' },
        { selector: 'nav ul',           desc: 'nav ul' },
        // Hero
        { selector: '.hero',            desc: '.hero' },
        { selector: '.hero-content h1', desc: '.hero-content h1' },
        { selector: '.cta-buttons',     desc: '.cta-buttons' },
        // Features
        { selector: '.features',        desc: '.features' },
        { selector: '.feature-grid',    desc: '.feature-grid' },
        { selector: '.feature-card',    desc: '.feature-card' },
        // Pricing
        { selector: '.pricing',         desc: '.pricing' },
        { selector: '.pricing-grid',    desc: '.pricing-grid' },
        { selector: '.pricing-card',    desc: '.pricing-card' },
        { selector: '.badge',           desc: '.badge' },
        // Product & Vision
        { selector: '.product-vision',  desc: '.product-vision' },
        { selector: '.pv-grid',         desc: '.pv-grid' },
        // About
        { selector: '.about',           desc: '.about' },
        // Contact
        { selector: '.contact',         desc: '.contact' },
        { selector: '.contact-form',    desc: '.contact-form' },
        { selector: '.form-group',      desc: '.form-group' },
        // Footer
        { selector: 'footer',           desc: 'footer' },
        { selector: '.footer-content',  desc: '.footer-content' },
        { selector: '.footer-links',    desc: '.footer-links' },
        { selector: '.copyright',       desc: '.copyright' },
    ];

    requiredSelectors.forEach(({ selector, desc }) => {
        it(`contains selector "${desc}"`, () => {
            assertIncludes(stylesCss, selector, `Missing CSS selector: ${desc}`);
        });
    });

    it('uses the NovaSphere brand gradient (#6e8efb → #a777e3)', () => {
        assertIncludes(stylesCss, '#6e8efb');
        assertIncludes(stylesCss, '#a777e3');
    });

    it('defines the float keyframe animation', () => {
        assertMatch(stylesCss, /@keyframes\s+float/);
    });

    it('has responsive media queries', () => {
        assertMatch(stylesCss, /@media\s*\(\s*max-width:\s*992px\s*\)/);
        assertMatch(stylesCss, /@media\s*\(\s*max-width:\s*768px\s*\)/);
    });

    it('uses Montserrat font family', () => {
        assertIncludes(stylesCss, "'Montserrat'");
    });

    it('uses box-sizing: border-box reset', () => {
        assertIncludes(stylesCss, 'box-sizing: border-box');
    });

    it('sets max-width on .container', () => {
        assertMatch(stylesCss, /\.container\s*\{[^}]*max-width:\s*1200px/);
    });
});

// ─── 5. JavaScript Validation — script.js ───────────────────────────────────

describe('JavaScript Validation — script.js', () => {
    it('registers a DOMContentLoaded event listener', () => {
        assertIncludes(scriptJs, "DOMContentLoaded");
    });

    it('implements smooth scrolling for anchor links', () => {
        assertIncludes(scriptJs, 'a[href^="#"]');
        assertIncludes(scriptJs, 'scrollTo');
        assertIncludes(scriptJs, "behavior: 'smooth'");
    });

    it('handles contact form submission', () => {
        assertIncludes(scriptJs, '.contact-form');
        assertIncludes(scriptJs, 'submit');
        assertIncludes(scriptJs, 'preventDefault');
    });

    it('reads form fields (name, email, message)', () => {
        assertIncludes(scriptJs, "'name'");
        assertIncludes(scriptJs, "'email'");
        assertIncludes(scriptJs, "'message'");
    });

    it('resets the form after submission', () => {
        assertIncludes(scriptJs, '.reset()');
    });

    it('implements scroll-based animation for feature cards', () => {
        assertIncludes(scriptJs, '.feature-card');
        assertIncludes(scriptJs, 'getBoundingClientRect');
        assertIncludes(scriptJs, "window.addEventListener('scroll'");
    });

    it('sets initial opacity and transform for feature cards', () => {
        assertIncludes(scriptJs, "opacity = '0'");
        assertIncludes(scriptJs, "translateY(20px)");
    });

    it('has no syntax errors (basic check: balanced braces)', () => {
        const open  = (scriptJs.match(/\{/g) || []).length;
        const close = (scriptJs.match(/\}/g) || []).length;
        assert(open === close, `Unbalanced braces: ${open} opening vs ${close} closing`);
    });
});

// ─── 6. JavaScript Validation — main.js ─────────────────────────────────────

describe('JavaScript Validation — main.js', () => {
    it('creates a div element', () => {
        assertIncludes(mainJs, "createElement('div')");
    });

    it('sets innerHTML with an <h1> tag', () => {
        assertMatch(mainJs, /innerHTML\s*=\s*['"]<h1>/);
    });

    it('appends the element to document.body', () => {
        assertIncludes(mainJs, 'document.body.appendChild');
    });
});

// ─── 7. SVG Asset Validation ────────────────────────────────────────────────

describe('SVG Assets — logo.svg', () => {
    it('is valid SVG (starts with <svg)', () => {
        assertMatch(logoSvg, /^<svg\s/);
    });

    it('has a viewBox attribute', () => {
        assertMatch(logoSvg, /viewBox=["'][^"']+["']/);
    });

    it('contains gradient definitions', () => {
        assertIncludes(logoSvg, '<defs>');
        assertIncludes(logoSvg, 'linearGradient');
    });

    it('contains the outer ring circle', () => {
        assertIncludes(logoSvg, 'gradientOuter');
    });

    it('contains the inner sphere circle', () => {
        assertIncludes(logoSvg, 'gradientInner');
    });

    it('has an animated orbiting element', () => {
        assertIncludes(logoSvg, 'animateTransform');
    });

    it('uses brand colors (#6e8efb, #a777e3)', () => {
        assertIncludes(logoSvg, '#6e8efb');
        assertIncludes(logoSvg, '#a777e3');
    });
});

describe('SVG Assets — product.svg', () => {
    it('is valid SVG (starts with <svg)', () => {
        assertMatch(productSvg, /^<svg\s/);
    });

    it('has a viewBox of "0 0 600 400"', () => {
        assertIncludes(productSvg, 'viewBox="0 0 600 400"');
    });

    it('contains the holographic sphere', () => {
        assertIncludes(productSvg, 'holoGradient');
    });

    it('contains the device base', () => {
        assertIncludes(productSvg, 'deviceGradient');
    });

    it('contains projection ray lines', () => {
        assertIncludes(productSvg, 'rayGradient');
    });

    it('has animated orbit elements', () => {
        const transforms = productSvg.match(/animateTransform/g);
        assert(transforms && transforms.length >= 2, 'Expected at least 2 animateTransform elements');
    });

    it('has a pulsing animation circle', () => {
        const animates = productSvg.match(/<animate\s/g);
        assert(animates && animates.length >= 2, 'Expected at least 2 <animate> elements');
    });
});

// ─── 8. Cross-File Consistency ──────────────────────────────────────────────

describe('Cross-File Consistency', () => {
    it('team.html references styles.css which exists', () => {
        assertIncludes(teamHtml, 'href="styles.css"');
        assert(fileExists('styles.css'));
    });

    it('header.html references styles.css which exists', () => {
        assertIncludes(headerHtml, 'href="styles.css"');
        assert(fileExists('styles.css'));
    });

    it('both HTML pages reference images/logo.svg which exists', () => {
        assertIncludes(headerHtml, 'images/logo.svg');
        assertIncludes(teamHtml, 'images/logo.svg');
        assert(fileExists('images/logo.svg'));
    });

    it('header.html links to team.html which exists', () => {
        assertIncludes(headerHtml, 'team.html');
        assert(fileExists('team.html'));
    });

    it('team.html links back to index.html sections', () => {
        assertIncludes(teamHtml, 'index.html#features');
        assertIncludes(teamHtml, 'index.html#pricing');
    });

    it('CSS classes used in team.html are defined in its <style> block or styles.css', () => {
        // team-section, team-grid, team-member are in team.html's inline <style>
        assertIncludes(teamHtml, '.team-section');
        assertIncludes(teamHtml, '.team-grid');
        assertIncludes(teamHtml, '.team-member');
    });

    it('CSS classes used in header.html are defined in its <style> block', () => {
        assertIncludes(headerHtml, '.enhanced-header');
        assertIncludes(headerHtml, '.enhanced-nav');
        assertIncludes(headerHtml, '.enhanced-logo');
        assertIncludes(headerHtml, '.breadcrumb');
    });

    it('.gitignore excludes node_modules and build artifacts', () => {
        const gitignore = readFile('.gitignore');
        assertIncludes(gitignore, 'node_modules');
        assertIncludes(gitignore, 'build/');
    });
});

// ─── Summary ────────────────────────────────────────────────────────────────

console.log('\n' + '─'.repeat(60));
console.log(
    `  \x1b[1mResults:\x1b[0m  ` +
    `\x1b[32m${results.passed} passed\x1b[0m  ` +
    `\x1b[31m${results.failed} failed\x1b[0m  ` +
    `(${results.passed + results.failed} total)`
);

if (results.failed > 0) {
    console.log('\n  \x1b[31mFailing tests:\x1b[0m');
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
