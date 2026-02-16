#!/usr/bin/env node

/**
 * NovaSphere Landing Page Test Script
 * 
 * This script tests the functionality and integrity of the NovaSphere landing page project.
 * It validates JavaScript functions, HTML structure, file existence, and code quality.
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

// Test results tracking
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const testResults = [];

/**
 * Test result logger
 */
function logTest(testName, passed, message = '') {
    totalTests++;
    if (passed) {
        passedTests++;
        console.log(`${colors.green}✓${colors.reset} ${testName}`);
    } else {
        failedTests++;
        console.log(`${colors.red}✗${colors.reset} ${testName}`);
        if (message) {
            console.log(`  ${colors.yellow}→${colors.reset} ${message}`);
        }
    }
    testResults.push({ testName, passed, message });
}

/**
 * Section header logger
 */
function logSection(sectionName) {
    console.log(`\n${colors.cyan}${colors.bright}━━━ ${sectionName} ━━━${colors.reset}`);
}

/**
 * Test file existence
 */
function testFileExists(filePath, description) {
    const exists = fs.existsSync(filePath);
    logTest(
        `File exists: ${description}`,
        exists,
        exists ? '' : `File not found: ${filePath}`
    );
    return exists;
}

/**
 * Test file content
 */
function testFileContent(filePath, description, validator) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const result = validator(content);
        logTest(
            description,
            result.passed,
            result.message || ''
        );
        return result.passed;
    } catch (error) {
        logTest(description, false, `Error reading file: ${error.message}`);
        return false;
    }
}

/**
 * Test JavaScript syntax and structure
 */
function testJavaScriptFile(filePath, fileName) {
    logSection(`Testing ${fileName}`);
    
    if (!testFileExists(filePath, fileName)) {
        return;
    }
    
    testFileContent(filePath, `${fileName} has valid syntax`, (content) => {
        try {
            // Basic syntax check - try to parse as function
            new Function(content);
            return { passed: true };
        } catch (error) {
            return { passed: false, message: `Syntax error: ${error.message}` };
        }
    });
    
    testFileContent(filePath, `${fileName} contains DOMContentLoaded listener`, (content) => {
        const hasDOMContentLoaded = content.includes('DOMContentLoaded');
        return {
            passed: hasDOMContentLoaded,
            message: hasDOMContentLoaded ? '' : 'Missing DOMContentLoaded event listener'
        };
    });
    
    if (fileName === 'script.js') {
        testFileContent(filePath, 'script.js implements smooth scrolling', (content) => {
            const hasSmoothScroll = content.includes('smooth') && content.includes('scrollTo');
            return {
                passed: hasSmoothScroll,
                message: hasSmoothScroll ? '' : 'Smooth scrolling not implemented'
            };
        });
        
        testFileContent(filePath, 'script.js handles form submission', (content) => {
            const hasFormHandler = content.includes('contact-form') && content.includes('submit');
            return {
                passed: hasFormHandler,
                message: hasFormHandler ? '' : 'Form submission handler not found'
            };
        });
        
        testFileContent(filePath, 'script.js implements scroll animations', (content) => {
            const hasAnimation = content.includes('animateOnScroll') || content.includes('scroll');
            return {
                passed: hasAnimation,
                message: hasAnimation ? '' : 'Scroll animations not implemented'
            };
        });
    }
}

/**
 * Test HTML file structure
 */
function testHTMLFile(filePath, fileName) {
    logSection(`Testing ${fileName}`);
    
    if (!testFileExists(filePath, fileName)) {
        return;
    }
    
    testFileContent(filePath, `${fileName} has DOCTYPE declaration`, (content) => {
        const hasDoctype = content.includes('<!DOCTYPE html>');
        return {
            passed: hasDoctype,
            message: hasDoctype ? '' : 'Missing DOCTYPE declaration'
        };
    });
    
    testFileContent(filePath, `${fileName} has proper HTML structure`, (content) => {
        const hasHtml = content.includes('<html') && content.includes('</html>');
        const hasHead = content.includes('<head>') && content.includes('</head>');
        const hasBody = content.includes('<body>') && content.includes('</body>');
        const passed = hasHtml && hasHead && hasBody;
        return {
            passed,
            message: passed ? '' : 'Missing required HTML tags (html, head, or body)'
        };
    });
    
    testFileContent(filePath, `${fileName} has meta viewport tag`, (content) => {
        const hasViewport = content.includes('viewport');
        return {
            passed: hasViewport,
            message: hasViewport ? '' : 'Missing viewport meta tag for responsive design'
        };
    });
    
    testFileContent(filePath, `${fileName} links to stylesheet`, (content) => {
        const hasStylesheet = content.includes('styles.css');
        return {
            passed: hasStylesheet,
            message: hasStylesheet ? '' : 'Missing link to styles.css'
        };
    });
    
    if (fileName === 'header.html') {
        testFileContent(filePath, 'header.html has navigation menu', (content) => {
            const hasNav = content.includes('<nav') && content.includes('</nav>');
            return {
                passed: hasNav,
                message: hasNav ? '' : 'Missing navigation element'
            };
        });
        
        testFileContent(filePath, 'header.html has dropdown menus', (content) => {
            const hasDropdown = content.includes('dropdown');
            return {
                passed: hasDropdown,
                message: hasDropdown ? '' : 'Missing dropdown menu functionality'
            };
        });
        
        testFileContent(filePath, 'header.html has mobile menu toggle', (content) => {
            const hasMobileToggle = content.includes('mobile-menu-toggle') || content.includes('toggleMobileMenu');
            return {
                passed: hasMobileToggle,
                message: hasMobileToggle ? '' : 'Missing mobile menu toggle'
            };
        });
    }
}

/**
 * Test CSS file
 */
function testCSSFile(filePath) {
    logSection('Testing styles.css');
    
    if (!testFileExists(filePath, 'styles.css')) {
        return;
    }
    
    testFileContent(filePath, 'styles.css is not empty', (content) => {
        const hasContent = content.trim().length > 0;
        return {
            passed: hasContent,
            message: hasContent ? '' : 'CSS file is empty'
        };
    });
    
    testFileContent(filePath, 'styles.css has valid CSS syntax', (content) => {
        // Basic CSS validation - check for balanced braces
        const openBraces = (content.match(/{/g) || []).length;
        const closeBraces = (content.match(/}/g) || []).length;
        const passed = openBraces === closeBraces;
        return {
            passed,
            message: passed ? '' : `Unbalanced braces: ${openBraces} opening, ${closeBraces} closing`
        };
    });
}

/**
 * Test project structure
 */
function testProjectStructure() {
    logSection('Testing Project Structure');
    
    const requiredFiles = [
        { path: 'README.md', description: 'README documentation' },
        { path: 'script.js', description: 'Main JavaScript file' },
        { path: 'main.js', description: 'Secondary JavaScript file' },
        { path: 'styles.css', description: 'Stylesheet' },
        { path: 'header.html', description: 'Header HTML file' },
        { path: 'team.html', description: 'Team page HTML' },
        { path: '.gitignore', description: 'Git ignore file' }
    ];
    
    requiredFiles.forEach(file => {
        testFileExists(file.path, file.description);
    });
    
    // Test images directory
    const imagesDir = 'images';
    const imagesDirExists = fs.existsSync(imagesDir) && fs.statSync(imagesDir).isDirectory();
    logTest(
        'Images directory exists',
        imagesDirExists,
        imagesDirExists ? '' : 'Images directory not found'
    );
    
    if (imagesDirExists) {
        testFileExists('images/logo.svg', 'Logo SVG file');
        testFileExists('images/product.svg', 'Product SVG file');
    }
}

/**
 * Test README content
 */
function testREADME() {
    logSection('Testing README.md');
    
    const readmePath = 'README.md';
    if (!testFileExists(readmePath, 'README.md')) {
        return;
    }
    
    testFileContent(readmePath, 'README.md contains project title', (content) => {
        const hasTitle = content.includes('NovaSphere') || content.includes('#');
        return {
            passed: hasTitle,
            message: hasTitle ? '' : 'Missing project title'
        };
    });
    
    testFileContent(readmePath, 'README.md has meaningful content', (content) => {
        const hasContent = content.trim().length > 50;
        return {
            passed: hasContent,
            message: hasContent ? '' : 'README is too short or empty'
        };
    });
}

/**
 * Test main.js functionality
 */
function testMainJS() {
    logSection('Testing main.js');
    
    const mainJsPath = 'main.js';
    if (!testFileExists(mainJsPath, 'main.js')) {
        return;
    }
    
    testFileContent(mainJsPath, 'main.js creates DOM elements', (content) => {
        const createsElements = content.includes('createElement') || content.includes('innerHTML');
        return {
            passed: createsElements,
            message: createsElements ? '' : 'No DOM manipulation found'
        };
    });
    
    testFileContent(mainJsPath, 'main.js appends to document', (content) => {
        const appendsToDoc = content.includes('appendChild') || content.includes('append');
        return {
            passed: appendsToDoc,
            message: appendsToDoc ? '' : 'No DOM insertion found'
        };
    });
}

/**
 * Print final summary
 */
function printSummary() {
    console.log(`\n${colors.bright}${'═'.repeat(60)}${colors.reset}`);
    console.log(`${colors.bright}${colors.cyan}TEST SUMMARY${colors.reset}`);
    console.log(`${colors.bright}${'═'.repeat(60)}${colors.reset}`);
    
    console.log(`\nTotal Tests: ${colors.bright}${totalTests}${colors.reset}`);
    console.log(`${colors.green}Passed: ${passedTests}${colors.reset}`);
    console.log(`${colors.red}Failed: ${failedTests}${colors.reset}`);
    
    const successRate = totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(1) : 0;
    const rateColor = successRate >= 80 ? colors.green : successRate >= 50 ? colors.yellow : colors.red;
    console.log(`\nSuccess Rate: ${rateColor}${successRate}%${colors.reset}`);
    
    if (failedTests > 0) {
        console.log(`\n${colors.yellow}Failed Tests:${colors.reset}`);
        testResults
            .filter(result => !result.passed)
            .forEach(result => {
                console.log(`  ${colors.red}•${colors.reset} ${result.testName}`);
                if (result.message) {
                    console.log(`    ${result.message}`);
                }
            });
    }
    
    console.log(`\n${colors.bright}${'═'.repeat(60)}${colors.reset}\n`);
    
    // Exit with appropriate code
    process.exit(failedTests > 0 ? 1 : 0);
}

/**
 * Main test execution
 */
function runTests() {
    console.log(`${colors.bright}${colors.blue}`);
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║         NovaSphere Landing Page Test Suite                ║');
    console.log('║         Automated Testing & Validation                    ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log(colors.reset);
    
    // Run all test suites
    testProjectStructure();
    testREADME();
    testJavaScriptFile('script.js', 'script.js');
    testMainJS();
    testHTMLFile('header.html', 'header.html');
    testHTMLFile('team.html', 'team.html');
    testCSSFile('styles.css');
    
    // Print summary
    printSummary();
}

// Execute tests
runTests();
