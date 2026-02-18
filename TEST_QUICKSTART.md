# 🚀 NovaSphere Test Suite - Quick Start Guide

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Tests
```bash
npm test
```

### Step 3: View Coverage
```bash
npm run test:coverage
```

---

## 📊 Test Summary

**Total Tests**: 51 comprehensive tests covering:

✅ Header & Navigation (6 tests)  
✅ Dropdown Menus (4 tests)  
✅ Mobile Menu (2 tests)  
✅ Breadcrumb Navigation (3 tests)  
✅ Smooth Scrolling (3 tests)  
✅ Feature Cards (4 tests)  
✅ Contact Form (8 tests)  
✅ Footer (6 tests)  
✅ Accessibility (6 tests)  
✅ Responsive Design (3 tests)  
✅ Performance (3 tests)  
✅ Integration (3 tests)  

---

## 🎯 What's Being Tested?

### 🧭 Navigation
- Header structure and logo
- Navigation menu items
- Active page highlighting
- Dropdown menus (Products, Company)
- Mobile menu toggle
- Breadcrumb navigation

### 📝 Forms
- Contact form structure
- Required field validation
- Email format validation
- Form submission handling
- Success messages
- Form reset functionality

### 🎨 UI Components
- Feature cards with icons
- Animation on scroll
- Responsive grid layouts
- Footer link groups
- Logo and branding

### ♿ Accessibility
- Semantic HTML elements
- ARIA attributes
- Alt text for images
- Form label associations
- Keyboard navigation support

### 📱 Responsive Design
- Mobile menu functionality
- Collapsible navigation
- Responsive containers
- Viewport configuration

### ⚡ Performance
- DOM element optimization
- Semantic HTML usage
- Image path validation
- Resource loading

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests with coverage |
| `npm run test:watch` | Run tests in watch mode (auto-rerun on changes) |
| `npm run test:coverage` | Generate detailed coverage report |
| `npm run test:ci` | Run tests in CI environment |

---

## 📈 Expected Output

When you run `npm test`, you should see:

```
PASS  ./test.spec.js
  NovaSphere Landing Page - Comprehensive Tests
    Header Navigation
      ✓ should have correct header structure
      ✓ should have all navigation menu items
      ✓ should have active class on current page
      ✓ should have mobile menu toggle button
    Dropdown Menus
      ✓ should have dropdown menus for Products and Company
      ✓ should have dropdown content with links
      ✓ Products dropdown should contain Features and Pricing links
      ✓ Company dropdown should contain About and Team links
    ...
    
Test Suites: 1 passed, 1 total
Tests:       51 passed, 51 total
Snapshots:   0 total
Time:        2.5s
```

---

## 🎨 Coverage Report

After running tests, view the HTML coverage report:

```bash
# Generate coverage
npm run test:coverage

# Open in browser (macOS)
open coverage/index.html

# Open in browser (Linux)
xdg-open coverage/index.html

# Open in browser (Windows)
start coverage/index.html
```

---

## 🐛 Troubleshooting

### Tests Not Running?

**Check Node.js version:**
```bash
node --version  # Should be v14 or higher
```

**Reinstall dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tests Failing?

**Run with verbose output:**
```bash
npm test -- --verbose
```

**Run specific test:**
```bash
npm test -- --testNamePattern="Header Navigation"
```

### Coverage Not Generating?

**Ensure coverage directory exists:**
```bash
mkdir -p coverage
npm run test:coverage
```

---

## 📚 Test File Structure

```
/vercel/sandbox/
├── test.spec.js              # Main test file (51 tests)
├── package.json              # Dependencies and scripts
├── TEST_DOCUMENTATION.md     # Detailed documentation
├── TEST_QUICKSTART.md        # This file
├── header.html               # Header page
├── team.html                 # Team page
├── script.js                 # Main JavaScript
├── styles.css                # Styles
└── coverage/                 # Generated coverage reports
    └── index.html            # Coverage HTML report
```

---

## ✅ Test Checklist

Before deploying, ensure:

- [ ] All 51 tests pass
- [ ] Coverage is above 80%
- [ ] No console errors
- [ ] Accessibility tests pass
- [ ] Responsive tests pass
- [ ] Form validation works
- [ ] Navigation functions correctly
- [ ] Mobile menu toggles properly

---

## 🎯 Next Steps

1. **Run the tests**: `npm test`
2. **Review coverage**: `npm run test:coverage`
3. **Fix any failures**: Check error messages
4. **Read full docs**: See `TEST_DOCUMENTATION.md`
5. **Add new tests**: Follow the patterns in `test.spec.js`

---

## 💡 Pro Tips

### Development Workflow

1. **Use watch mode** during development:
   ```bash
   npm run test:watch
   ```

2. **Focus on specific tests** while debugging:
   ```bash
   npm test -- --testNamePattern="Contact Form"
   ```

3. **Check coverage** before committing:
   ```bash
   npm run test:coverage
   ```

### Writing New Tests

Follow the AAA pattern:
```javascript
test('should do something', () => {
  // Arrange - Set up test data
  const element = document.querySelector('.selector');
  
  // Act - Perform the action
  element.click();
  
  // Assert - Verify the result
  expect(element.classList.contains('active')).toBe(true);
});
```

---

## 📞 Need Help?

- **Full Documentation**: See `TEST_DOCUMENTATION.md`
- **Jest Docs**: https://jestjs.io/docs/getting-started
- **JSDOM Docs**: https://github.com/jsdom/jsdom

---

## 🎉 Success Criteria

Your test suite is working correctly when:

✅ All 51 tests pass  
✅ Coverage report shows > 80% coverage  
✅ No console errors or warnings  
✅ Tests run in under 5 seconds  
✅ Coverage HTML report generates successfully  

---

**Happy Testing! 🧪**

---

*NovaSphere v2 - Test Suite v2.0.0*  
*Last Updated: February 18, 2026*
