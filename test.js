const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;

function readFile(filePath) {
  return fs.readFileSync(path.join(ROOT, filePath), 'utf-8');
}

function fileExists(filePath) {
  return fs.existsSync(path.join(ROOT, filePath));
}

// ---------------------------------------------------------------------------
// File existence checks
// ---------------------------------------------------------------------------
describe('Project file structure', () => {
  const expectedFiles = [
    'header.html',
    'team.html',
    'styles.css',
    'script.js',
    'main.js',
    'package.json',
    'README.md',
    'images/logo.svg',
    'images/product.svg',
  ];

  for (const file of expectedFiles) {
    it(`${file} should exist`, () => {
      assert.ok(fileExists(file), `Missing file: ${file}`);
    });
  }
});

// ---------------------------------------------------------------------------
// header.html
// ---------------------------------------------------------------------------
describe('header.html', () => {
  const html = readFile('header.html');

  it('should be a valid HTML document', () => {
    assert.ok(html.includes('<!DOCTYPE html>'), 'Missing DOCTYPE');
    assert.ok(html.includes('<html'), 'Missing <html> tag');
    assert.ok(html.includes('</html>'), 'Missing closing </html> tag');
  });

  it('should contain the enhanced header element', () => {
    assert.ok(html.includes('class="enhanced-header"'), 'Missing enhanced-header class');
  });

  it('should include the NovaSphere logo', () => {
    assert.ok(html.includes('images/logo.svg'), 'Missing logo reference');
  });

  it('should have navigation links', () => {
    assert.ok(html.includes('nav'), 'Missing nav element');
    assert.ok(html.includes('Home'), 'Missing Home link text');
    assert.ok(html.includes('Products'), 'Missing Products link text');
    assert.ok(html.includes('Company'), 'Missing Company link text');
  });

  it('should include dropdown menus', () => {
    assert.ok(html.includes('class="dropdown"'), 'Missing dropdown class');
    assert.ok(html.includes('dropdown-content'), 'Missing dropdown-content class');
  });

  it('should include breadcrumb navigation', () => {
    assert.ok(html.includes('breadcrumb'), 'Missing breadcrumb element');
  });

  it('should have a mobile menu toggle', () => {
    assert.ok(html.includes('mobile-menu-toggle'), 'Missing mobile menu toggle');
    assert.ok(html.includes('toggleMobileMenu'), 'Missing toggleMobileMenu function call');
  });

  it('should include a footer', () => {
    assert.ok(html.includes('<footer>'), 'Missing footer element');
    assert.ok(html.includes('NovaSphere Inc.'), 'Missing copyright text');
  });
});

// ---------------------------------------------------------------------------
// team.html
// ---------------------------------------------------------------------------
describe('team.html', () => {
  const html = readFile('team.html');

  it('should be a valid HTML document', () => {
    assert.ok(html.includes('<!DOCTYPE html>'), 'Missing DOCTYPE');
    assert.ok(html.includes('<html'), 'Missing <html> tag');
  });

  it('should have the team section', () => {
    assert.ok(html.includes('class="team-section"'), 'Missing team-section class');
    assert.ok(html.includes('Meet Our Team'), 'Missing team heading');
  });

  it('should list all four team members', () => {
    const members = ['Sarah Chen', 'Marcus Rodriguez', 'Dr. Aisha Patel', 'James Wilson'];
    for (const member of members) {
      assert.ok(html.includes(member), `Missing team member: ${member}`);
    }
  });

  it('should display team member roles', () => {
    const roles = ['CEO & Founder', 'Chief Technology Officer', 'Head of Research', 'Design Director'];
    for (const role of roles) {
      assert.ok(html.includes(role), `Missing role: ${role}`);
    }
  });

  it('should include the shared stylesheet', () => {
    assert.ok(html.includes('href="styles.css"'), 'Missing styles.css link');
  });
});

// ---------------------------------------------------------------------------
// styles.css
// ---------------------------------------------------------------------------
describe('styles.css', () => {
  const css = readFile('styles.css');

  it('should contain a CSS reset', () => {
    assert.ok(css.includes('box-sizing: border-box'), 'Missing box-sizing reset');
    assert.ok(css.includes('margin: 0'), 'Missing margin reset');
  });

  it('should define header styles', () => {
    assert.ok(css.includes('header'), 'Missing header styles');
    assert.ok(css.includes('position: fixed'), 'Header should be fixed');
  });

  it('should define button styles', () => {
    assert.ok(css.includes('.btn-primary'), 'Missing .btn-primary');
    assert.ok(css.includes('.btn-secondary'), 'Missing .btn-secondary');
  });

  it('should define feature card styles', () => {
    assert.ok(css.includes('.feature-card'), 'Missing .feature-card');
    assert.ok(css.includes('.feature-grid'), 'Missing .feature-grid');
  });

  it('should define pricing section styles', () => {
    assert.ok(css.includes('.pricing-card'), 'Missing .pricing-card');
    assert.ok(css.includes('.pricing-grid'), 'Missing .pricing-grid');
  });

  it('should define footer styles', () => {
    assert.ok(css.includes('footer'), 'Missing footer styles');
    assert.ok(css.includes('.footer-content'), 'Missing .footer-content');
  });

  it('should include responsive media queries', () => {
    assert.ok(css.includes('@media'), 'Missing media queries');
    assert.ok(css.includes('max-width: 768px'), 'Missing 768px breakpoint');
    assert.ok(css.includes('max-width: 992px'), 'Missing 992px breakpoint');
  });

  it('should use the Montserrat font family', () => {
    assert.ok(css.includes("'Montserrat'"), 'Missing Montserrat font');
  });
});

// ---------------------------------------------------------------------------
// script.js
// ---------------------------------------------------------------------------
describe('script.js', () => {
  const js = readFile('script.js');

  it('should listen for DOMContentLoaded', () => {
    assert.ok(js.includes('DOMContentLoaded'), 'Missing DOMContentLoaded listener');
  });

  it('should implement smooth scrolling for anchor links', () => {
    assert.ok(js.includes('smooth'), 'Missing smooth scroll behavior');
    assert.ok(js.includes('a[href^="#"]'), 'Missing anchor link selector');
  });

  it('should handle contact form submission', () => {
    assert.ok(js.includes('.contact-form'), 'Missing contact-form selector');
    assert.ok(js.includes('submit'), 'Missing submit event');
    assert.ok(js.includes('preventDefault'), 'Missing preventDefault call');
  });

  it('should read form field values', () => {
    assert.ok(js.includes("getElementById('name')"), 'Missing name field');
    assert.ok(js.includes("getElementById('email')"), 'Missing email field');
    assert.ok(js.includes("getElementById('message')"), 'Missing message field');
  });

  it('should reset the form after submission', () => {
    assert.ok(js.includes('.reset()'), 'Missing form reset');
  });

  it('should animate feature cards on scroll', () => {
    assert.ok(js.includes('animateOnScroll'), 'Missing animateOnScroll function');
    assert.ok(js.includes('.feature-card'), 'Missing feature-card selector');
    assert.ok(js.includes("opacity"), 'Missing opacity animation');
    assert.ok(js.includes("translateY"), 'Missing translateY animation');
  });
});

// ---------------------------------------------------------------------------
// main.js
// ---------------------------------------------------------------------------
describe('main.js', () => {
  const js = readFile('main.js');

  it('should create a div element', () => {
    assert.ok(js.includes("createElement('div')"), 'Missing createElement div');
  });

  it('should set innerHTML with heading', () => {
    assert.ok(js.includes('innerHTML'), 'Missing innerHTML assignment');
    assert.ok(js.includes('NovaSphere'), 'Missing NovaSphere text');
  });

  it('should append the element to the document body', () => {
    assert.ok(js.includes('document.body.appendChild'), 'Missing appendChild call');
  });
});

// ---------------------------------------------------------------------------
// Image assets
// ---------------------------------------------------------------------------
describe('Image assets', () => {
  it('logo.svg should be a valid SVG file', () => {
    const svg = readFile('images/logo.svg');
    assert.ok(svg.includes('<svg'), 'logo.svg is not a valid SVG');
  });

  it('product.svg should be a valid SVG file', () => {
    const svg = readFile('images/product.svg');
    assert.ok(svg.includes('<svg'), 'product.svg is not a valid SVG');
  });
});
