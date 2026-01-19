# Hello World Scripts Collection

This directory contains various "Hello World" implementations demonstrating different JavaScript programming paradigms and use cases.

## Scripts Overview

### 1. **hello-console.js**
Simple console output hello world.
```bash
node hello-console.js
```
Output: `Hello, World!`

### 2. **hello-node.js**
Node.js hello world with system information.
```bash
node hello-node.js
```
Displays greeting along with Node.js version, platform, and current directory.

### 3. **hello-async.js**
Demonstrates async/await with promises and delays.
```bash
node hello-async.js
```
Shows asynchronous greeting with timed delays.

### 4. **hello-class.js**
Object-oriented programming approach using ES6 classes.
```bash
node hello-class.js
```
Demonstrates class-based greeting with multiple methods.

### 5. **hello-functional.js**
Functional programming paradigm with function composition.
```bash
node hello-functional.js
```
Shows function composition, higher-order functions, and array operations.

### 6. **hello-dom.js**
Browser-based DOM manipulation script.
```html
<script src="hello-dom.js"></script>
```
Creates and styles a hello world message in the browser DOM.

### 7. **hello.html**
Standalone HTML page with styled hello world.
```bash
# Open in browser
open hello.html
```
Beautiful gradient background with animated greeting.

### 8. **hello-server.js**
HTTP server that serves hello world webpage.
```bash
node hello-server.js
```
Starts a server on port 3000. Visit http://localhost:3000/ to see the greeting.

## Quick Test All Scripts

Run all Node.js scripts at once:
```bash
for script in hello-console.js hello-node.js hello-async.js hello-class.js hello-functional.js; do
    echo "=== Running $script ==="
    node $script
    echo ""
done
```

## Programming Concepts Demonstrated

- **Basic I/O**: Console logging
- **Async Programming**: Promises, async/await, setTimeout
- **OOP**: Classes, methods, constructors
- **Functional Programming**: Pure functions, composition, higher-order functions
- **DOM Manipulation**: Creating and styling elements
- **HTTP Server**: Basic web server with Node.js
- **HTML/CSS**: Styling and animations

## Requirements

- Node.js v22+ (installed)
- Modern web browser (for HTML files)

## License

Public domain - feel free to use these examples for learning!
