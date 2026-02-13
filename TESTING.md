# NovaSphere Test Suite

This directory contains comprehensive tests for the NovaSphere landing page functionality.

## Test Files

### `test-script.js`
The main test script that contains all test cases for the NovaSphere application. It includes:

- **DOM Tests**: Basic DOM manipulation and element creation
- **Main.js Tests**: Core landing page functionality
- **Smooth Scrolling Tests**: Anchor link navigation behavior
- **Form Handling Tests**: Contact form submission and validation
- **Animation Tests**: Feature card animations on scroll

### `test-runner.html`
A browser-based test runner with a user-friendly interface that:
- Displays test execution in real-time
- Shows detailed test results with pass/fail counts
- Provides a console-like log of test execution
- Highlights failed tests with detailed error messages

## Running Tests

### Browser Method (Recommended)
1. Open `test-runner.html` in any modern web browser
2. Click the "Run All Tests" button
3. View the test results and execution logs

### Console Method
1. Include the test script in your HTML file:
   ```html
   <script src="test-script.js"></script>
   ```
2. The tests will run automatically when the DOM is loaded
3. View results in the browser console

### Node.js Method (Limited)
The test script can be run in Node.js for basic functionality testing, but DOM-related tests will fail:

```bash
node test-script.js
```

## Test Coverage

### DOM Tests
- Document and body element existence
- Element creation and manipulation
- DOM query methods (querySelector, querySelectorAll)
- Element append/remove operations

### Main.js Tests
- Landing page element creation
- H1 element content verification
- DOM insertion functionality

### Smooth Scrolling Tests
- Anchor link existence and targeting
- Click event prevention
- Scroll position calculation
- Target element position detection

### Form Handling Tests
- Form element and field existence
- Form submission event handling
- Form data collection
- Success message display
- Form reset functionality

### Animation Tests
- Feature card element creation
- Initial animation state setup
- Animation trigger conditions
- CSS property transitions

## Test Configuration

The test script includes configuration options:

```javascript
const TEST_CONFIG = {
    debug: true,          // Enable/disable console logging
    testTimeout: 5000,    // Maximum test execution time
    testResults: {
        total: 0,         // Total tests executed
        passed: 0,        // Tests that passed
        failed: 0,        // Tests that failed
        errors: []         // Detailed error messages
    }
};
```

## Test Utilities

The test suite includes helper functions:

- `TestUtils.assert(condition, testName, details)` - Basic assertion
- `TestUtils.assertEquals(actual, expected, testName)` - Equality assertion
- `TestUtils.assertNotNull(value, testName)` - Null/undefined check
- `TestUtils.assertTrue(value, testName)` - Truthiness check
- `TestUtils.assertFalse(value, testName)` - Falsiness check
- `TestUtils.createTestElement(html)` - Create test DOM elements
- `TestUtils.simulateEvent(element, eventType, options)` - Simulate DOM events

## Expected Results

All tests should pass with the following results:
- **Total Tests**: 20+ tests
- **Passed**: 20+ tests
- **Failed**: 0 tests

If any tests fail, detailed error messages will be displayed in the test runner interface.

## Continuous Integration

For CI/CD pipelines, you can use the test script with headless browsers:

```bash
# Using Puppeteer
puppeteer test-runner.html --screenshot=test-results.png

# Using Playwright
playwright test test-runner.html
```

## Browser Compatibility

The test suite is designed to work with:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Opera 47+

## Contributing

To add new tests:
1. Add test functions to the appropriate test suite in `test-script.js`
2. Follow the existing test pattern and naming conventions
3. Update the test runner UI if needed
4. Ensure all existing tests continue to pass

## License

The test suite is released under the same license as the main NovaSphere project.