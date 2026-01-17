# Hello World Scripts Collection

This directory contains various "Hello World" implementations demonstrating different JavaScript concepts and environments.

## Files Overview

### 1. `hello-world.js`
Basic JavaScript hello world with multiple approaches:
- Simple console output
- Function-based greeting
- Class-based greeter
- Module exports for reusability

**Run:**
```bash
node hello-world.js
```

### 2. `hello-world-node.js`
Node.js specific hello world examples:
- Process information
- Async/await patterns
- Colored terminal output
- Promise-based greetings

**Run:**
```bash
node hello-world-node.js
```

### 3. `hello-world-es6.js`
Modern ES6+ JavaScript features:
- Arrow functions
- Destructuring
- Spread operators
- Template literals
- Array methods (map, forEach)
- Promises and async/await
- ES6 classes with static methods

**Run:**
```bash
node hello-world-es6.js
```

### 4. `hello-world-dom.js`
DOM manipulation examples for browser environments:
- Creating and appending elements
- Event listeners
- Animations
- Dynamic list generation

**Usage:**
Include in an HTML file:
```html
<script src="hello-world-dom.js"></script>
```

### 5. `hello-world.html`
Complete standalone HTML page with:
- Styled hello world display
- Interactive button
- Embedded JavaScript
- Responsive design
- Gradient background

**Run:**
Open in a web browser or use a local server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000/hello-world.html
```

## Quick Test

Test all Node.js scripts at once:
```bash
for file in hello-world.js hello-world-node.js hello-world-es6.js; do
    echo "=== Running $file ==="
    node $file
    echo ""
done
```

## Features Demonstrated

- **Basic Output**: console.log, alert
- **Functions**: Regular, arrow, async
- **Classes**: ES6 classes, static methods
- **DOM**: Element creation, event handling
- **Modern JS**: Destructuring, spread, template literals
- **Async**: Promises, async/await
- **Styling**: CSS-in-JS, inline styles
- **Modules**: CommonJS exports

## Requirements

- Node.js v22+ (for Node.js scripts)
- Modern web browser (for HTML/DOM scripts)

## Notes

All scripts are standalone and can be run independently. The DOM manipulation script requires a browser environment or DOM simulation library like jsdom.
