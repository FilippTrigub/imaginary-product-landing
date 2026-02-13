#!/usr/bin/env node

/**
 * NovaSphere Test Suite
 * Comprehensive tests for all JavaScript functionality
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    bold: '\x1b[1m'
};

class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
        this.testSuites = [];
    }

    suite(name, callback) {
        console.log(`\n${colors.cyan}${colors.bold}Test Suite: ${name}${colors.reset}`);
        console.log('='.repeat(50));
        this.currentSuite = name;
        callback();
    }

    test(description, callback) {
        try {
            callback();
            this.passed++;
            console.log(`${colors.green}✓${colors.reset} ${description}`);
        } catch (error) {
            this.failed++;
            console.log(`${colors.red}✗${colors.reset} ${description}`);
            console.log(`  ${colors.red}Error: ${error.message}${colors.reset}`);
        }
    }

    assert(condition, message) {
        if (!condition) {
            throw new Error(message || 'Assertion failed');
        }
    }

    assertEqual(actual, expected, message) {
        if (actual !== expected) {
            throw new Error(message || `Expected ${expected} but got ${actual}`);
        }
    }

    assertContains(text, substring, message) {
        if (!text.includes(substring)) {
            throw new Error(message || `Expected text to contain "${substring}"`);
        }
    }

    assertExists(filePath, message) {
        if (!fs.existsSync(filePath)) {
            throw new Error(message || `File ${filePath} does not exist`);
        }
    }

    printSummary() {
        console.log('\n' + '='.repeat(50));
        console.log(`${colors.bold}Test Summary${colors.reset}`);
        console.log('='.repeat(50));
        console.log(`Total tests: ${this.passed + this.failed}`);
        console.log(`${colors.green}Passed: ${this.passed}${colors.reset}`);
        console.log(`${colors.red}Failed: ${this.failed}${colors.reset}`);

        if (this.failed === 0) {
            console.log(`\n${colors.green}${colors.bold}All tests passed! ✓${colors.reset}\n`);
            return 0;
        } else {
            console.log(`\n${colors.red}${colors.bold}Some tests failed ✗${colors.reset}\n`);
            return 1;
        }
    }
}

// Initialize test runner
const runner = new TestRunner();

// Test Suite 1: File Structure Tests
runner.suite('File Structure', () => {
    runner.test('header.html exists', () => {
        runner.assertExists('./header.html');
    });

    runner.test('team.html exists', () => {
        runner.assertExists('./team.html');
    });

    runner.test('main.js exists', () => {
        runner.assertExists('./main.js');
    });

    runner.test('script.js exists', () => {
        runner.assertExists('./script.js');
    });

    runner.test('styles.css exists', () => {
        runner.assertExists('./styles.css');
    });

    runner.test('images directory exists', () => {
        runner.assertExists('./images');
    });

    runner.test('logo.svg exists', () => {
        runner.assertExists('./images/logo.svg');
    });

    runner.test('product.svg exists', () => {
        runner.assertExists('./images/product.svg');
    });
});

// Test Suite 2: JavaScript Code Quality Tests
runner.suite('JavaScript Code Quality', () => {
    runner.test('main.js is valid JavaScript', () => {
        const content = fs.readFileSync('./main.js', 'utf8');
        runner.assert(content.length > 0, 'main.js should not be empty');
        // Basic syntax check - should not throw
        try {
            new Function(content);
        } catch (e) {
            throw new Error('main.js contains syntax errors');
        }
    });

    runner.test('script.js is valid JavaScript', () => {
        const content = fs.readFileSync('./script.js', 'utf8');
        runner.assert(content.length > 0, 'script.js should not be empty');
    });

    runner.test('main.js creates app div', () => {
        const content = fs.readFileSync('./main.js', 'utf8');
        runner.assertContains(content, 'createElement', 'main.js should create elements');
        runner.assertContains(content, 'appendChild', 'main.js should append elements');
    });

    runner.test('script.js has DOMContentLoaded listener', () => {
        const content = fs.readFileSync('./script.js', 'utf8');
        runner.assertContains(content, 'DOMContentLoaded', 'script.js should wait for DOM');
    });

    runner.test('script.js has smooth scrolling functionality', () => {
        const content = fs.readFileSync('./script.js', 'utf8');
        runner.assertContains(content, 'querySelectorAll', 'script.js should query anchor links');
        runner.assertContains(content, 'scrollTo', 'script.js should implement smooth scrolling');
    });

    runner.test('script.js has form handling', () => {
        const content = fs.readFileSync('./script.js', 'utf8');
        runner.assertContains(content, 'contact-form', 'script.js should handle contact form');
        runner.assertContains(content, 'preventDefault', 'script.js should prevent default form submission');
    });

    runner.test('script.js has scroll animation', () => {
        const content = fs.readFileSync('./script.js', 'utf8');
        runner.assertContains(content, 'animateOnScroll', 'script.js should have scroll animation');
        runner.assertContains(content, 'feature-card', 'script.js should animate feature cards');
    });
});

// Test Suite 3: HTML Structure Tests
runner.suite('HTML Structure', () => {
    runner.test('header.html has DOCTYPE', () => {
        const content = fs.readFileSync('./header.html', 'utf8');
        runner.assertContains(content, '<!DOCTYPE html>', 'HTML should have DOCTYPE declaration');
    });

    runner.test('header.html has navigation', () => {
        const content = fs.readFileSync('./header.html', 'utf8');
        runner.assertContains(content, '<nav', 'header.html should have navigation');
        runner.assertContains(content, 'enhanced-nav', 'header.html should have enhanced navigation class');
    });

    runner.test('header.html has dropdown menus', () => {
        const content = fs.readFileSync('./header.html', 'utf8');
        runner.assertContains(content, 'dropdown', 'header.html should have dropdown functionality');
        runner.assertContains(content, 'dropdown-content', 'header.html should have dropdown content');
    });

    runner.test('header.html has mobile menu toggle', () => {
        const content = fs.readFileSync('./header.html', 'utf8');
        runner.assertContains(content, 'mobile-menu-toggle', 'header.html should have mobile menu toggle');
        runner.assertContains(content, 'toggleMobileMenu', 'header.html should have toggle function');
    });

    runner.test('header.html has breadcrumb navigation', () => {
        const content = fs.readFileSync('./header.html', 'utf8');
        runner.assertContains(content, 'breadcrumb', 'header.html should have breadcrumb navigation');
    });

    runner.test('team.html has DOCTYPE', () => {
        const content = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(content, '<!DOCTYPE html>', 'HTML should have DOCTYPE declaration');
    });

    runner.test('team.html has team grid', () => {
        const content = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(content, 'team-grid', 'team.html should have team grid layout');
        runner.assertContains(content, 'team-member', 'team.html should have team member cards');
    });

    runner.test('team.html has team members', () => {
        const content = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(content, 'Sarah Chen', 'team.html should list Sarah Chen');
        runner.assertContains(content, 'Marcus Rodriguez', 'team.html should list Marcus Rodriguez');
        runner.assertContains(content, 'Dr. Aisha Patel', 'team.html should list Dr. Aisha Patel');
        runner.assertContains(content, 'James Wilson', 'team.html should list James Wilson');
    });

    runner.test('HTML files reference styles.css', () => {
        const headerContent = fs.readFileSync('./header.html', 'utf8');
        const teamContent = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(headerContent, 'styles.css', 'header.html should link to styles.css');
        runner.assertContains(teamContent, 'styles.css', 'team.html should link to styles.css');
    });
});

// Test Suite 4: CSS Tests
runner.suite('CSS Styles', () => {
    runner.test('styles.css exists and is not empty', () => {
        runner.assertExists('./styles.css');
        const content = fs.readFileSync('./styles.css', 'utf8');
        runner.assert(content.length > 0, 'styles.css should not be empty');
    });

    runner.test('styles.css has footer styles', () => {
        const content = fs.readFileSync('./styles.css', 'utf8');
        runner.assertContains(content, 'footer', 'styles.css should have footer styles');
    });
});

// Test Suite 5: SVG Image Tests
runner.suite('SVG Images', () => {
    runner.test('logo.svg is valid SVG', () => {
        const content = fs.readFileSync('./images/logo.svg', 'utf8');
        runner.assertContains(content, '<svg', 'logo.svg should be a valid SVG file');
    });

    runner.test('product.svg is valid SVG', () => {
        const content = fs.readFileSync('./images/product.svg', 'utf8');
        runner.assertContains(content, '<svg', 'product.svg should be a valid SVG file');
    });
});

// Test Suite 6: JavaScript Function Tests
runner.suite('JavaScript Functionality', () => {
    runner.test('script.js handles form validation', () => {
        const content = fs.readFileSync('./script.js', 'utf8');
        runner.assertContains(content, 'getElementById', 'script.js should get form elements by ID');
        runner.assertContains(content, '.value', 'script.js should access form values');
    });

    runner.test('script.js resets form after submission', () => {
        const content = fs.readFileSync('./script.js', 'utf8');
        runner.assertContains(content, 'reset()', 'script.js should reset form after submission');
    });

    runner.test('script.js has proper event handling', () => {
        const content = fs.readFileSync('./script.js', 'utf8');
        runner.assertContains(content, 'addEventListener', 'script.js should add event listeners');
    });

    runner.test('header.html has smooth scroll function', () => {
        const content = fs.readFileSync('./header.html', 'utf8');
        runner.assertContains(content, 'scrollIntoView', 'header.html should have smooth scrolling');
    });

    runner.test('header.html closes mobile menu on outside click', () => {
        const content = fs.readFileSync('./header.html', 'utf8');
        runner.assertContains(content, "classList.remove('active')", 'header.html should close mobile menu');
    });
});

// Test Suite 7: Accessibility Tests
runner.suite('Accessibility', () => {
    runner.test('HTML files have lang attribute', () => {
        const headerContent = fs.readFileSync('./header.html', 'utf8');
        const teamContent = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(headerContent, 'lang="en"', 'header.html should have lang attribute');
        runner.assertContains(teamContent, 'lang="en"', 'team.html should have lang attribute');
    });

    runner.test('Images have alt attributes', () => {
        const headerContent = fs.readFileSync('./header.html', 'utf8');
        const teamContent = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(headerContent, 'alt=', 'header.html images should have alt attributes');
        runner.assertContains(teamContent, 'alt=', 'team.html images should have alt attributes');
    });

    runner.test('HTML files have meta viewport', () => {
        const headerContent = fs.readFileSync('./header.html', 'utf8');
        const teamContent = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(headerContent, 'viewport', 'header.html should have viewport meta tag');
        runner.assertContains(teamContent, 'viewport', 'team.html should have viewport meta tag');
    });
});

// Test Suite 8: Content Tests
runner.suite('Content Validation', () => {
    runner.test('Team page has role descriptions', () => {
        const content = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(content, 'CEO & Founder', 'team.html should have CEO role');
        runner.assertContains(content, 'Chief Technology Officer', 'team.html should have CTO role');
        runner.assertContains(content, 'Head of Research', 'team.html should have research head role');
        runner.assertContains(content, 'Design Director', 'team.html should have design director role');
    });

    runner.test('Team page has member bios', () => {
        const content = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(content, 'bio', 'team.html should have bio class for member descriptions');
    });

    runner.test('Header has ASCII art comment', () => {
        const content = fs.readFileSync('./header.html', 'utf8');
        runner.assertContains(content, '╔═══════════════════════════════════════════════════════════════════════╗', 'header.html should have ASCII art');
    });

    runner.test('Team page has ASCII art comment', () => {
        const content = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(content, '╔════════════════════════════════════════════════════════════════════╗', 'team.html should have ASCII art');
    });

    runner.test('Footer has copyright information', () => {
        const headerContent = fs.readFileSync('./header.html', 'utf8');
        const teamContent = fs.readFileSync('./team.html', 'utf8');
        runner.assertContains(headerContent, '© 2025', 'header.html footer should have copyright');
        runner.assertContains(teamContent, '© 2025', 'team.html footer should have copyright');
    });
});

// Run all tests and print summary
const exitCode = runner.printSummary();
process.exit(exitCode);
