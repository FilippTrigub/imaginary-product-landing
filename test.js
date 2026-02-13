/**
 * NovaSphere Landing Page Test Script
 *
 * This script tests all JavaScript functionality including:
 * - DOM manipulation and element creation
 * - Event listeners (scroll, form submission, navigation)
 * - Smooth scrolling behavior
 * - Animation triggers
 * - Mobile menu functionality
 * - Form validation
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for better output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
};

// Test results tracking
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

/**
 * Test assertion helper
 */
function assert(condition, testName) {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`${colors.green}✓${colors.reset} ${testName}`);
        return true;
    } else {
        failedTests++;
        console.log(`${colors.red}✗${colors.reset} ${testName}`);
        return false;
    }
}

/**
 * Section header for organizing tests
 */
function section(name) {
    console.log(`\n${colors.cyan}━━━ ${name} ━━━${colors.reset}`);
}

/**
 * Test file existence
 */
function testFileExistence() {
    section('File Existence Tests');

    const requiredFiles = [
        'main.js',
        'script.js',
        'header.html',
        'team.html',
        'styles.css',
        'README.md'
    ];

    requiredFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        assert(fs.existsSync(filePath), `File exists: ${file}`);
    });
}

/**
 * Test main.js content and structure
 */
function testMainJS() {
    section('main.js Tests');

    const mainPath = path.join(__dirname, 'main.js');
    const content = fs.readFileSync(mainPath, 'utf8');

    assert(content.includes('document.createElement'), 'Creates DOM element');
    assert(content.includes('innerHTML'), 'Sets innerHTML property');
    assert(content.includes('appendChild'), 'Appends element to DOM');
    assert(content.includes('NovaSphere'), 'Contains NovaSphere branding');
}

/**
 * Test script.js content and functionality
 */
function testScriptJS() {
    section('script.js Tests');

    const scriptPath = path.join(__dirname, 'script.js');
    const content = fs.readFileSync(scriptPath, 'utf8');

    // Test event listeners
    assert(content.includes('DOMContentLoaded'), 'Has DOMContentLoaded listener');
    assert(content.includes('addEventListener'), 'Uses addEventListener for events');
    assert(content.includes('querySelectorAll'), 'Uses querySelectorAll for element selection');

    // Test smooth scrolling implementation
    assert(content.includes('scrollTo'), 'Implements scrollTo for smooth scrolling');
    assert(content.includes('behavior: \'smooth\''), 'Uses smooth scroll behavior');
    assert(content.includes('a[href^="#"]'), 'Handles anchor links');

    // Test form handling
    assert(content.includes('.contact-form'), 'References contact form');
    assert(content.includes('submit'), 'Handles form submission');
    assert(content.includes('e.preventDefault()'), 'Prevents default form submission');
    assert(content.includes('getElementById(\'name\')'), 'Accesses name input field');
    assert(content.includes('getElementById(\'email\')'), 'Accesses email input field');
    assert(content.includes('getElementById(\'message\')'), 'Accesses message input field');
    assert(content.includes('alert'), 'Shows user feedback');
    assert(content.includes('reset()'), 'Resets form after submission');

    // Test animation functionality
    assert(content.includes('animateOnScroll'), 'Has scroll animation function');
    assert(content.includes('.feature-card'), 'Targets feature cards');
    assert(content.includes('getBoundingClientRect'), 'Uses getBoundingClientRect for positioning');
    assert(content.includes('style.opacity'), 'Manipulates opacity');
    assert(content.includes('style.transform'), 'Manipulates transform');
    assert(content.includes('scroll'), 'Has scroll event listener');
}

/**
 * Test header.html structure and features
 */
function testHeaderHTML() {
    section('header.html Tests');

    const headerPath = path.join(__dirname, 'header.html');
    const content = fs.readFileSync(headerPath, 'utf8');

    // Test HTML structure
    assert(content.includes('<!DOCTYPE html>'), 'Has valid DOCTYPE');
    assert(content.includes('<html lang="en">'), 'Has language attribute');
    assert(content.includes('<meta charset="UTF-8">'), 'Has charset meta tag');
    assert(content.includes('viewport'), 'Has viewport meta tag for responsive design');

    // Test navigation features
    assert(content.includes('enhanced-header'), 'Has enhanced header class');
    assert(content.includes('enhanced-nav'), 'Has enhanced navigation');
    assert(content.includes('dropdown'), 'Has dropdown menu functionality');
    assert(content.includes('mobile-menu-toggle'), 'Has mobile menu toggle');
    assert(content.includes('breadcrumb'), 'Has breadcrumb navigation');

    // Test navigation links
    assert(content.includes('href="index.html"'), 'Links to home page');
    assert(content.includes('href="team.html"'), 'Links to team page');
    assert(content.includes('href="#features"'), 'Links to features section');
    assert(content.includes('href="#pricing"'), 'Links to pricing section');
    assert(content.includes('href="#contact"'), 'Links to contact section');

    // Test JavaScript functionality
    assert(content.includes('toggleMobileMenu'), 'Has mobile menu toggle function');
    assert(content.includes('classList.toggle'), 'Toggles CSS classes');
    assert(content.includes('scrollIntoView'), 'Has smooth scroll implementation');

    // Test responsive design
    assert(content.includes('@media'), 'Has media queries for responsive design');
    assert(content.includes('max-width: 768px'), 'Has mobile breakpoint');
}

/**
 * Test team.html structure
 */
function testTeamHTML() {
    section('team.html Tests');

    const teamPath = path.join(__dirname, 'team.html');
    const content = fs.readFileSync(teamPath, 'utf8');

    // Test HTML structure
    assert(content.includes('<!DOCTYPE html>'), 'Has valid DOCTYPE');
    assert(content.includes('NovaSphere v2 - Our Team'), 'Has correct page title');

    // Test team member data
    assert(content.includes('Sarah Chen'), 'Has team member: Sarah Chen');
    assert(content.includes('Marcus Rodriguez'), 'Has team member: Marcus Rodriguez');
    assert(content.includes('Dr. Aisha Patel'), 'Has team member: Dr. Aisha Patel');
    assert(content.includes('James Wilson'), 'Has team member: James Wilson');

    // Test team member roles
    assert(content.includes('CEO & Founder'), 'Has CEO role');
    assert(content.includes('Chief Technology Officer'), 'Has CTO role');
    assert(content.includes('Head of Research'), 'Has Head of Research role');
    assert(content.includes('Design Director'), 'Has Design Director role');

    // Test layout
    assert(content.includes('team-grid'), 'Has team grid layout');
    assert(content.includes('team-member'), 'Has team member cards');
    assert(content.includes('grid-template-columns'), 'Uses CSS Grid');
}

/**
 * Test CSS integration
 */
function testCSSIntegration() {
    section('CSS Integration Tests');

    const headerPath = path.join(__dirname, 'header.html');
    const teamPath = path.join(__dirname, 'team.html');
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    const teamContent = fs.readFileSync(teamPath, 'utf8');

    assert(headerContent.includes('link rel="stylesheet" href="styles.css"'), 'header.html links to styles.css');
    assert(teamContent.includes('link rel="stylesheet" href="styles.css"'), 'team.html links to styles.css');
    assert(headerContent.includes('fonts.googleapis.com'), 'header.html loads Google Fonts');
    assert(teamContent.includes('fonts.googleapis.com'), 'team.html loads Google Fonts');
}

/**
 * Test JavaScript code quality
 */
function testCodeQuality() {
    section('Code Quality Tests');

    const scriptPath = path.join(__dirname, 'script.js');
    const content = fs.readFileSync(scriptPath, 'utf8');

    // Test for best practices
    assert(!content.includes('var '), 'Uses modern JavaScript (no var)');
    assert(content.includes('const '), 'Uses const declarations');
    assert(content.includes('=>'), 'Uses arrow functions');
    assert(!content.includes('eval('), 'No eval usage (security)');
    assert(!content.includes('innerHTML ='), 'No direct innerHTML assignment in script.js (XSS prevention)');

    // Test event handling
    const eventListenerCount = (content.match(/addEventListener/g) || []).length;
    assert(eventListenerCount >= 3, `Has multiple event listeners (found ${eventListenerCount})`);
}

/**
 * Test accessibility features
 */
function testAccessibility() {
    section('Accessibility Tests');

    const headerPath = path.join(__dirname, 'header.html');
    const teamPath = path.join(__dirname, 'team.html');
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    const teamContent = fs.readFileSync(teamPath, 'utf8');

    assert(headerContent.includes('alt='), 'header.html has alt attributes for images');
    assert(teamContent.includes('alt='), 'team.html has alt attributes for images');
    assert(headerContent.includes('lang="en"'), 'header.html has language attribute');
    assert(teamContent.includes('lang="en"'), 'team.html has language attribute');
}

/**
 * Test animation and interaction code
 */
function testInteractions() {
    section('Interaction Tests');

    const scriptPath = path.join(__dirname, 'script.js');
    const headerPath = path.join(__dirname, 'header.html');
    const scriptContent = fs.readFileSync(scriptPath, 'utf8');
    const headerContent = fs.readFileSync(headerPath, 'utf8');

    // Test animation setup
    assert(scriptContent.includes('transition'), 'Sets CSS transitions');
    assert(scriptContent.includes('translateY'), 'Uses transform animations');

    // Test header interactions
    assert(headerContent.includes(':hover'), 'Has hover states');
    assert(headerContent.includes('transition:'), 'Has CSS transitions in header');
    assert(headerContent.includes('transform:'), 'Has transform effects');
}

/**
 * Print test summary
 */
function printSummary() {
    console.log(`\n${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
    console.log(`${colors.blue}Test Summary${colors.reset}`);
    console.log(`${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
    console.log(`Total Tests:  ${totalTests}`);
    console.log(`${colors.green}Passed:       ${passedTests}${colors.reset}`);
    console.log(`${colors.red}Failed:       ${failedTests}${colors.reset}`);

    const successRate = ((passedTests / totalTests) * 100).toFixed(2);
    console.log(`Success Rate: ${successRate}%`);

    if (failedTests === 0) {
        console.log(`\n${colors.green}🎉 All tests passed!${colors.reset}\n`);
        process.exit(0);
    } else {
        console.log(`\n${colors.red}⚠️  Some tests failed. Please review.${colors.reset}\n`);
        process.exit(1);
    }
}

/**
 * Run all tests
 */
function runTests() {
    console.log(`${colors.cyan}╔═══════════════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.cyan}║   NovaSphere Landing Page - Test Suite v1.0      ║${colors.reset}`);
    console.log(`${colors.cyan}╚═══════════════════════════════════════════════════╝${colors.reset}`);

    try {
        testFileExistence();
        testMainJS();
        testScriptJS();
        testHeaderHTML();
        testTeamHTML();
        testCSSIntegration();
        testCodeQuality();
        testAccessibility();
        testInteractions();

        printSummary();
    } catch (error) {
        console.error(`\n${colors.red}Error running tests:${colors.reset}`, error.message);
        process.exit(1);
    }
}

// Execute tests
runTests();
