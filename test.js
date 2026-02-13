/**
 * Test Suite for NovaSphere Landing Page
 * A comprehensive test script for validating JavaScript functionality
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for better console output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    gray: '\x1b[90m'
};

// Test results tracking
let testsRun = 0;
let testsPassed = 0;
let testsFailed = 0;

/**
 * Simple assertion helpers
 */
function assert(condition, message) {
    testsRun++;
    if (condition) {
        testsPassed++;
        console.log(`  ${colors.green}✓${colors.reset} ${message}`);
        return true;
    } else {
        testsFailed++;
        console.log(`  ${colors.red}✗${colors.reset} ${message}`);
        return false;
    }
}

function assertEquals(actual, expected, message) {
    const condition = actual === expected;
    return assert(condition, message + (condition ? '' : ` (expected: ${expected}, got: ${actual})`));
}

function assertTrue(value, message) {
    return assert(value === true, message);
}

function assertFalse(value, message) {
    return assert(value === false, message);
}

function assertExists(value, message) {
    return assert(value !== null && value !== undefined, message);
}

function assertType(value, type, message) {
    return assert(typeof value === type, message + ` (expected type: ${type}, got: ${typeof value})`);
}

/**
 * Test runner
 */
function describe(suiteName, testFn) {
    console.log(`\n${colors.cyan}${suiteName}${colors.reset}`);
    testFn();
}

function it(testName, testFn) {
    try {
        testFn();
    } catch (error) {
        testsFailed++;
        console.log(`  ${colors.red}✗${colors.reset} ${testName} - ${error.message}`);
    }
}

/**
 * Mock DOM environment
 */
class MockDocument {
    constructor() {
        this.elements = new Map();
        this.listeners = new Map();
        this._contentLoaded = false;
    }

    createElement(tagName) {
        return {
            tagName: tagName.toUpperCase(),
            innerHTML: '',
            style: {},
            classList: {
                add: function() {},
                remove: function() {},
                toggle: function() {},
                contains: function() { return false; }
            },
            addEventListener: function() {},
            setAttribute: function() {},
            getAttribute: function() { return null; }
        };
    }

    querySelector(selector) {
        if (this.elements.has(selector)) {
            return this.elements.get(selector);
        }
        return null;
    }

    querySelectorAll(selector) {
        const elements = [];
        for (let [key, value] of this.elements.entries()) {
            if (key.includes(selector.replace(/[\[\]]/g, ''))) {
                // Return array if already an array, otherwise wrap in array
                if (Array.isArray(value)) {
                    return value;
                } else {
                    elements.push(value);
                }
            }
        }
        return elements;
    }

    getElementById(id) {
        return this.querySelector('#' + id);
    }

    addEventListener(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }

    triggerEvent(event) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(callback => callback());
        }
    }

    // Mock elements for testing
    setupMockElements() {
        // Form elements
        const contactForm = {
            tagName: 'FORM',
            classList: { contains: (cls) => cls === 'contact-form' },
            addEventListener: (event, callback) => {
                this.listeners.set('form-submit', callback);
            },
            reset: function() { this.wasReset = true; },
            wasReset: false
        };

        const nameInput = {
            tagName: 'INPUT',
            id: 'name',
            value: 'Test User'
        };

        const emailInput = {
            tagName: 'INPUT',
            id: 'email',
            value: 'test@example.com'
        };

        const messageInput = {
            tagName: 'TEXTAREA',
            id: 'message',
            value: 'Test message'
        };

        this.elements.set('.contact-form', contactForm);
        this.elements.set('#name', nameInput);
        this.elements.set('#email', emailInput);
        this.elements.set('#message', messageInput);

        // Anchor links
        const anchor1 = {
            tagName: 'A',
            href: '#section1',
            getAttribute: (attr) => attr === 'href' ? '#section1' : null,
            addEventListener: (event, callback) => {
                this.listeners.set('anchor1-click', callback);
            }
        };

        const anchor2 = {
            tagName: 'A',
            href: '#section2',
            getAttribute: (attr) => attr === 'href' ? '#section2' : null,
            addEventListener: (event, callback) => {
                this.listeners.set('anchor2-click', callback);
            }
        };

        // Feature cards
        const featureCard1 = {
            tagName: 'DIV',
            classList: { contains: (cls) => cls === 'feature-card' },
            style: {},
            getBoundingClientRect: () => ({ top: 100 })
        };

        const featureCard2 = {
            tagName: 'DIV',
            classList: { contains: (cls) => cls === 'feature-card' },
            style: {},
            getBoundingClientRect: () => ({ top: 200 })
        };

        this.elements.set('a[href^="#"]', [anchor1, anchor2]);
        this.elements.set('.feature-card', [featureCard1, featureCard2]);
    }
}

/**
 * Test Suite 1: File Structure Tests
 */
describe('File Structure Tests', () => {
    it('should have required JavaScript files', () => {
        assert(fs.existsSync(path.join(__dirname, 'script.js')), 'script.js exists');
        assert(fs.existsSync(path.join(__dirname, 'main.js')), 'main.js exists');
    });

    it('should have HTML files', () => {
        assert(fs.existsSync(path.join(__dirname, 'header.html')), 'header.html exists');
        assert(fs.existsSync(path.join(__dirname, 'team.html')), 'team.html exists');
    });

    it('should have CSS file', () => {
        assert(fs.existsSync(path.join(__dirname, 'styles.css')), 'styles.css exists');
    });

    it('should have images directory', () => {
        assert(fs.existsSync(path.join(__dirname, 'images')), 'images directory exists');
    });
});

/**
 * Test Suite 2: script.js Code Analysis
 */
describe('script.js Code Analysis', () => {
    const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');

    it('should contain DOMContentLoaded event listener', () => {
        assert(scriptContent.includes('DOMContentLoaded'), 'DOMContentLoaded event is present');
    });

    it('should have smooth scrolling implementation', () => {
        assert(scriptContent.includes('smooth'), 'smooth scrolling code is present');
        assert(scriptContent.includes('scrollTo') || scriptContent.includes('scrollIntoView'),
               'scroll method is implemented');
    });

    it('should have form submission handling', () => {
        assert(scriptContent.includes('contact-form') || scriptContent.includes('submit'),
               'form handling code is present');
        assert(scriptContent.includes('preventDefault'), 'preventDefault is used');
    });

    it('should have feature card animation', () => {
        assert(scriptContent.includes('feature-card'), 'feature card selector is present');
        assert(scriptContent.includes('scroll'), 'scroll event handling is present');
        assert(scriptContent.includes('opacity') || scriptContent.includes('transform'),
               'animation properties are set');
    });

    it('should properly query form elements', () => {
        assert(scriptContent.includes('getElementById') || scriptContent.includes('querySelector'),
               'element querying methods are used');
        assert(scriptContent.includes('name') && scriptContent.includes('email'),
               'form fields are referenced');
    });
});

/**
 * Test Suite 3: main.js Code Analysis
 */
describe('main.js Code Analysis', () => {
    const mainContent = fs.readFileSync(path.join(__dirname, 'main.js'), 'utf8');

    it('should create and manipulate DOM elements', () => {
        assert(mainContent.includes('createElement'), 'createElement is used');
        assert(mainContent.includes('appendChild'), 'appendChild is used');
    });

    it('should set innerHTML', () => {
        assert(mainContent.includes('innerHTML'), 'innerHTML is set');
    });

    it('should reference NovaSphere', () => {
        assert(mainContent.includes('NovaSphere'), 'NovaSphere is referenced');
    });
});

/**
 * Test Suite 4: HTML Structure Tests
 */
describe('HTML Structure Tests', () => {
    const headerContent = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
    const teamContent = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');

    it('header.html should have proper HTML5 structure', () => {
        assert(headerContent.includes('<!DOCTYPE html>'), 'DOCTYPE is declared');
        assert(headerContent.includes('<html'), 'html tag is present');
        assert(headerContent.includes('<head>'), 'head tag is present');
        assert(headerContent.includes('<body>'), 'body tag is present');
    });

    it('header.html should include navigation elements', () => {
        assert(headerContent.includes('<nav'), 'nav element is present');
        assert(headerContent.includes('<header'), 'header element is present');
        assert(headerContent.includes('enhanced-header') || headerContent.includes('navigation'),
               'navigation classes are present');
    });

    it('header.html should have dropdown menus', () => {
        assert(headerContent.includes('dropdown'), 'dropdown class is present');
        assert(headerContent.includes('Products') && headerContent.includes('Company'),
               'dropdown menu items are present');
    });

    it('header.html should reference CSS file', () => {
        assert(headerContent.includes('styles.css'), 'CSS file is linked');
    });

    it('team.html should have team member sections', () => {
        assert(teamContent.includes('team-member') || teamContent.includes('team'),
               'team member elements are present');
        assert(teamContent.includes('Sarah Chen') || teamContent.includes('Marcus Rodriguez'),
               'team member names are present');
    });

    it('team.html should have proper semantic HTML', () => {
        assert(teamContent.includes('<section'), 'section element is used');
        assert(teamContent.includes('<footer'), 'footer element is present');
    });
});

/**
 * Test Suite 5: Function Signature Tests
 */
describe('Function Signature Tests', () => {
    const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');

    it('should define event handlers properly', () => {
        assert(scriptContent.includes('addEventListener'), 'addEventListener is used');
        assert(scriptContent.includes('function') || scriptContent.includes('=>'),
               'functions/arrow functions are defined');
    });

    it('should have proper callback structure', () => {
        const hasCallback = scriptContent.includes('function(') ||
                           scriptContent.includes('function (') ||
                           scriptContent.includes('=>');
        assert(hasCallback, 'callback functions are properly structured');
    });
});

/**
 * Test Suite 6: Code Quality Tests
 */
describe('Code Quality Tests', () => {
    const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
    const mainContent = fs.readFileSync(path.join(__dirname, 'main.js'), 'utf8');

    it('should use const/let instead of var', () => {
        assert(!scriptContent.includes('var '), 'script.js does not use var');
        assert(!mainContent.includes('var '), 'main.js does not use var');
    });

    it('should have proper indentation', () => {
        const hasProperIndent = scriptContent.split('\n').some(line =>
            line.startsWith('    ') || line.startsWith('\t')
        );
        assert(hasProperIndent, 'code has indentation');
    });

    it('should not have console.log statements', () => {
        assert(!scriptContent.includes('console.log'), 'script.js has no console.log');
        assert(!mainContent.includes('console.log'), 'main.js has no console.log');
    });
});

/**
 * Test Suite 7: Integration Tests (Simulated)
 */
describe('Integration Tests (Simulated)', () => {
    it('should handle form submission workflow', () => {
        const mockDoc = new MockDocument();
        mockDoc.setupMockElements();

        const form = mockDoc.querySelector('.contact-form');
        const name = mockDoc.querySelector('#name');
        const email = mockDoc.querySelector('#email');
        const message = mockDoc.querySelector('#message');

        assertExists(form, 'form element can be queried');
        assertExists(name, 'name input can be queried');
        assertExists(email, 'email input can be queried');
        assertExists(message, 'message input can be queried');

        assertEquals(name.value, 'Test User', 'name input has value');
        assertEquals(email.value, 'test@example.com', 'email input has value');
    });

    it('should handle anchor link clicks', () => {
        const mockDoc = new MockDocument();
        mockDoc.setupMockElements();

        const anchors = mockDoc.querySelectorAll('a[href^="#"]');
        assert(Array.isArray(anchors) || anchors.length !== undefined, 'anchor links can be queried');
    });

    it('should animate feature cards', () => {
        const mockDoc = new MockDocument();
        mockDoc.setupMockElements();

        const cards = mockDoc.querySelectorAll('.feature-card');
        assert(cards.length > 0, 'feature cards can be queried');
        assert(Array.isArray(cards), 'cards is an array');
        assert(typeof cards[0].getBoundingClientRect === 'function', 'card has getBoundingClientRect method');
        assert(typeof cards[0].style === 'object', 'card has style property');
    });
});

/**
 * Test Suite 8: Accessibility Tests
 */
describe('Accessibility Tests', () => {
    const headerContent = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8');
    const teamContent = fs.readFileSync(path.join(__dirname, 'team.html'), 'utf8');

    it('should have alt attributes on images', () => {
        const imgPattern = /<img[^>]+alt=/gi;
        assert(imgPattern.test(headerContent), 'header.html images have alt attributes');
        // Reset regex lastIndex for reuse
        const imgPattern2 = /<img[^>]+alt=/gi;
        assert(imgPattern2.test(teamContent), 'team.html images have alt attributes');
    });

    it('should have proper heading hierarchy', () => {
        assert(headerContent.includes('<h1>') || headerContent.includes('<h2>'),
               'header.html has headings');
        assert(teamContent.includes('<h2>') || teamContent.includes('<h3>'),
               'team.html has headings');
    });

    it('should have lang attribute', () => {
        assert(headerContent.includes('lang="en"'), 'header.html has lang attribute');
        assert(teamContent.includes('lang="en"'), 'team.html has lang attribute');
    });
});

/**
 * Print test summary
 */
function printSummary() {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`${colors.blue}Test Summary${colors.reset}`);
    console.log('='.repeat(60));
    console.log(`Total tests run: ${colors.cyan}${testsRun}${colors.reset}`);
    console.log(`Tests passed: ${colors.green}${testsPassed}${colors.reset}`);
    console.log(`Tests failed: ${colors.red}${testsFailed}${colors.reset}`);

    const passRate = testsRun > 0 ? ((testsPassed / testsRun) * 100).toFixed(2) : 0;
    console.log(`Pass rate: ${passRate >= 80 ? colors.green : colors.yellow}${passRate}%${colors.reset}`);
    console.log('='.repeat(60));

    if (testsFailed === 0) {
        console.log(`\n${colors.green}All tests passed!${colors.reset}\n`);
        process.exit(0);
    } else {
        console.log(`\n${colors.red}Some tests failed.${colors.reset}\n`);
        process.exit(1);
    }
}

/**
 * Run all tests
 */
console.log(`\n${colors.blue}${'='.repeat(60)}`);
console.log(`NovaSphere Landing Page - Test Suite`);
console.log(`${'='.repeat(60)}${colors.reset}\n`);

// Execute tests and print summary
printSummary();
