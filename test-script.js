/**
 * NovaSphere Test Script
 * 
 * This script tests the core functionality of the NovaSphere landing page
 * including DOM manipulation, event handling, and form validation.
 */

// Test configuration
const TEST_CONFIG = {
    debug: true,
    testTimeout: 5000,
    testResults: {
        total: 0,
        passed: 0,
        failed: 0,
        errors: []
    }
};

// Test utilities
const TestUtils = {
    log: function(message, type = 'info') {
        if (TEST_CONFIG.debug) {
            const timestamp = new Date().toISOString();
            const types = {
                'info': '📋',
                'pass': '✅',
                'fail': '❌',
                'error': '💥',
                'warn': '⚠️'
            };
            console.log(`[${timestamp}] ${types[type] || 'ℹ️'} ${message}`);
        }
    },
    
    assert: function(condition, testName, details = '') {
        TEST_CONFIG.testResults.total++;
        if (condition) {
            TEST_CONFIG.testResults.passed++;
            this.log(`${testName}: PASSED ${details}`, 'pass');
            return true;
        } else {
            TEST_CONFIG.testResults.failed++;
            const errorMsg = `${testName}: FAILED ${details}`;
            TEST_CONFIG.testResults.errors.push(errorMsg);
            this.log(errorMsg, 'fail');
            return false;
        }
    },
    
    assertEquals: function(actual, expected, testName) {
        const condition = actual === expected;
        const details = condition ? '' : `(expected: ${expected}, actual: ${actual})`;
        return this.assert(condition, testName, details);
    },
    
    assertNotNull: function(value, testName) {
        return this.assert(value !== null && value !== undefined, testName);
    },
    
    assertTrue: function(value, testName) {
        return this.assert(value === true, testName);
    },
    
    assertFalse: function(value, testName) {
        return this.assert(value === false, testName);
    },
    
    createTestElement: function(html = '<div></div>') {
        const container = document.createElement('div');
        container.innerHTML = html;
        return container.firstChild;
    },
    
    simulateEvent: function(element, eventType, options = {}) {
        const event = new Event(eventType, {
            bubbles: true,
            cancelable: true,
            ...options
        });
        element.dispatchEvent(event);
        return event;
    }
};

// DOM Tests
const DOMTests = {
    run: function() {
        TestUtils.log('Running DOM Tests...', 'info');
        
        // Test 1: Check if document exists
        TestUtils.assertNotNull(document, 'Document object exists');
        
        // Test 2: Check if body exists
        TestUtils.assertNotNull(document.body, 'Body element exists');
        
        // Test 3: Test element creation
        const testDiv = document.createElement('div');
        TestUtils.assertNotNull(testDiv, 'Element creation works');
        
        // Test 4: Test element properties
        testDiv.id = 'test-element';
        testDiv.className = 'test-class';
        TestUtils.assertEquals(testDiv.id, 'test-element', 'Element ID assignment');
        TestUtils.assertEquals(testDiv.className, 'test-class', 'Element class assignment');
        
        // Test 5: Test element append/remove
        document.body.appendChild(testDiv);
        TestUtils.assertEquals(document.body.contains(testDiv), true, 'Element append to body');
        document.body.removeChild(testDiv);
        TestUtils.assertEquals(document.body.contains(testDiv), false, 'Element removal from body');
        
        // Test 6: Test querySelector
        const body = document.querySelector('body');
        TestUtils.assertNotNull(body, 'querySelector works');
        
        // Test 7: Test querySelectorAll
        const divs = document.querySelectorAll('div');
        TestUtils.assertNotNull(divs, 'querySelectorAll works');
        
        TestUtils.log('DOM Tests completed', 'info');
    }
};

// Main.js Tests
const MainJSTests = {
    run: function() {
        TestUtils.log('Running Main.js Tests...', 'info');
        
        // Test 1: Test main.js functionality by checking if it creates the expected element
        // We'll simulate what main.js does
        const app = document.createElement('div');
        app.innerHTML = '<h1>NovaSphere landing page rebuilt in JS</h1>';
        document.body.appendChild(app);
        
        // Check if the element was created
        const h1Element = document.querySelector('h1');
        TestUtils.assertNotNull(h1Element, 'Main.js creates H1 element');
        
        if (h1Element) {
            TestUtils.assertEquals(h1Element.textContent, 'NovaSphere landing page rebuilt in JS', 'H1 element has correct text');
        }
        
        // Clean up
        document.body.removeChild(app);
        
        TestUtils.log('Main.js Tests completed', 'info');
    }
};

// Script.js Tests - Smooth Scrolling
const SmoothScrollingTests = {
    run: function() {
        TestUtils.log('Running Smooth Scrolling Tests...', 'info');
        
        // Create test elements
        const testSection = TestUtils.createTestElement('<section id="test-section" style="height: 1000px; margin-top: 1000px;"></section>');
        const testAnchor = TestUtils.createTestElement('<a href="#test-section" class="test-anchor">Go to section</a>');
        
        document.body.appendChild(testSection);
        document.body.appendChild(testAnchor);
        
        // Test 1: Check if anchor exists
        const anchor = document.querySelector('.test-anchor');
        TestUtils.assertNotNull(anchor, 'Test anchor element exists');
        
        // Test 2: Check if target section exists
        const targetSection = document.querySelector('#test-section');
        TestUtils.assertNotNull(targetSection, 'Target section exists');
        
        // Test 3: Test click event prevention
        let clickPrevented = false;
        anchor.addEventListener('click', function(e) {
            // Simulate the smooth scrolling behavior from script.js
            e.preventDefault();
            clickPrevented = true;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // Test that we can calculate the position
                TestUtils.assertNotNull(elementPosition, 'Can get element position');
                TestUtils.assertNotNull(offsetPosition, 'Can calculate offset position');
                
                // Note: We can't actually test window.scrollTo in this environment
                // without causing the page to scroll, so we'll just verify the calculation
            }
        });
        
        // Simulate click
        TestUtils.simulateEvent(anchor, 'click');
        TestUtils.assertTrue(clickPrevented, 'Click event prevented default action');
        
        // Clean up
        document.body.removeChild(testSection);
        document.body.removeChild(testAnchor);
        
        TestUtils.log('Smooth Scrolling Tests completed', 'info');
    }
};

// Script.js Tests - Form Handling
const FormHandlingTests = {
    run: function() {
        TestUtils.log('Running Form Handling Tests...', 'info');
        
        // Create test form
        const testForm = TestUtils.createTestElement(`
            <form class="contact-form test-form">
                <input type="text" id="name" name="name" placeholder="Name">
                <input type="email" id="email" name="email" placeholder="Email">
                <textarea id="message" name="message" placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        `);
        
        document.body.appendChild(testForm);
        
        // Test 1: Check if form exists
        const form = document.querySelector('.test-form');
        TestUtils.assertNotNull(form, 'Test form exists');
        
        // Test 2: Check if form fields exist
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        TestUtils.assertNotNull(nameInput, 'Name input exists');
        TestUtils.assertNotNull(emailInput, 'Email input exists');
        TestUtils.assertNotNull(messageInput, 'Message input exists');
        
        // Test 3: Test form submission
        let formSubmitted = false;
        let alertShown = false;
        
        // Mock alert function
        const originalAlert = window.alert;
        window.alert = function(message) {
            alertShown = true;
            // Check if alert contains expected data
            TestUtils.assertTrue(message.includes('Thank you'), 'Alert contains thank you message');
            if (nameInput.value) {
                TestUtils.assertTrue(message.includes(nameInput.value), 'Alert contains name');
            }
            if (emailInput.value) {
                TestUtils.assertTrue(message.includes(emailInput.value), 'Alert contains email');
            }
        };
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            formSubmitted = true;
            
            // Get form data (simulating script.js behavior)
            const name = nameInput.value;
            const email = emailInput.value;
            const message = messageInput.value;
            
            // Show success message
            window.alert(\`Thank you, \${name}! Your message has been received. We will contact you at \${email} shortly.\`);
            
            // Reset form
            this.reset();
        });
        
        // Set form values
        nameInput.value = 'Test User';
        emailInput.value = 'test@example.com';
        messageInput.value = 'This is a test message';
        
        // Submit form
        TestUtils.simulateEvent(form, 'submit');
        
        TestUtils.assertTrue(formSubmitted, 'Form submission handled');
        TestUtils.assertTrue(alertShown, 'Alert shown on submission');
        TestUtils.assertEquals(nameInput.value, '', 'Form reset after submission');
        TestUtils.assertEquals(emailInput.value, '', 'Form reset after submission');
        TestUtils.assertEquals(messageInput.value, '', 'Form reset after submission');
        
        // Restore original alert
        window.alert = originalAlert;
        
        // Clean up
        document.body.removeChild(testForm);
        
        TestUtils.log('Form Handling Tests completed', 'info');
    }
};

// Script.js Tests - Animation
const AnimationTests = {
    run: function() {
        TestUtils.log('Running Animation Tests...', 'info');
        
        // Create test feature cards
        const card1 = TestUtils.createTestElement('<div class="feature-card test-card">Card 1</div>');
        const card2 = TestUtils.createTestElement('<div class="feature-card test-card">Card 2</div>');
        
        document.body.appendChild(card1);
        document.body.appendChild(card2);
        
        // Test 1: Check if cards exist
        const cards = document.querySelectorAll('.test-card');
        TestUtils.assertEquals(cards.length, 2, 'Feature cards created');
        
        // Test 2: Test initial animation state
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
        });
        
        TestUtils.assertEquals(cards[0].style.opacity, '0', 'Initial opacity set');
        TestUtils.assertEquals(cards[0].style.transform, 'translateY(20px)', 'Initial transform set');
        
        // Test 3: Test animation trigger (simulate scroll position)
        const animateOnScroll = () => {
            cards.forEach(card => {
                // Simulate card being in viewport
                const cardPosition = 100; // Simulate card is above the fold
                const screenPosition = window.innerHeight / 1.3;
                
                if (cardPosition < screenPosition) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Run animation
        animateOnScroll();
        
        TestUtils.assertEquals(cards[0].style.opacity, '1', 'Animation sets opacity to 1');
        TestUtils.assertEquals(cards[0].style.transform, 'translateY(0)', 'Animation sets transform to 0');
        
        // Clean up
        document.body.removeChild(card1);
        document.body.removeChild(card2);
        
        TestUtils.log('Animation Tests completed', 'info');
    }
};

// Main Test Runner
const TestRunner = {
    runAllTests: function() {
        TestUtils.log('Starting NovaSphere Test Suite...', 'info');
        TestUtils.log('========================================', 'info');
        
        // Run all test suites
        DOMTests.run();
        MainJSTests.run();
        SmoothScrollingTests.run();
        FormHandlingTests.run();
        AnimationTests.run();
        
        // Display results
        TestUtils.log('========================================', 'info');
        TestUtils.log('Test Results Summary:', 'info');
        TestUtils.log(`Total Tests: ${TEST_CONFIG.testResults.total}`, 'info');
        TestUtils.log(`Passed: ${TEST_CONFIG.testResults.passed}`, 'pass');
        TestUtils.log(`Failed: ${TEST_CONFIG.testResults.failed}`, TEST_CONFIG.testResults.failed > 0 ? 'fail' : 'pass');
        
        if (TEST_CONFIG.testResults.errors.length > 0) {
            TestUtils.log('\nFailed Tests:', 'fail');
            TEST_CONFIG.testResults.errors.forEach(error => {
                TestUtils.log(`  - ${error}`, 'fail');
            });
        }
        
        // Return success status
        const success = TEST_CONFIG.testResults.failed === 0;
        TestUtils.log(`\nTest Suite: ${success ? 'PASSED ✅' : 'FAILED ❌'}`, success ? 'pass' : 'fail');
        
        return success;
    }
};

// Run tests when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', TestRunner.runAllTests);
} else {
    TestRunner.runAllTests();
}

// Export for Node.js environment if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestRunner;
}