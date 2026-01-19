# Hello World Scripts Collection

This directory contains various "Hello World" implementations demonstrating different JavaScript programming paradigms and execution environments.

## Scripts Overview

### 1. **hello-world-simple.js**
The most basic console output example.
```bash
node hello-world-simple.js
```
**Output:** `Hello, World!`

### 2. **hello-world-node.js**
Node.js-specific implementation with system information.
```bash
node hello-world-node.js
```
**Features:**
- Displays Node.js version
- Shows platform information
- Includes shebang for direct execution

### 3. **hello-world-class.js**
Object-oriented approach using ES6 classes.
```bash
node hello-world-class.js
```
**Features:**
- Greeter class with customizable names
- Multiple greeting methods
- Demonstrates OOP principles

### 4. **hello-world-async.js**
Asynchronous programming with async/await.
```bash
node hello-world-async.js
```
**Features:**
- Delayed greetings using Promises
- Async/await syntax
- Sequential execution demonstration

### 5. **hello-world-functional.js**
Functional programming paradigm.
```bash
node hello-world-functional.js
```
**Features:**
- Pure functions
- Function composition
- Higher-order functions (map, forEach)

### 6. **hello-world-dom.js**
Browser-based DOM manipulation.
**Usage:** Include in an HTML file:
```html
<script src="hello-world-dom.js"></script>
```
**Features:**
- Creates and styles DOM elements
- Event-driven execution
- Dynamic content injection

### 7. **hello-world-alert.js**
Browser alert dialog implementation.
**Usage:** Include in an HTML file:
```html
<script src="hello-world-alert.js"></script>
```
**Features:**
- Window load event handling
- Browser alert dialog

### 8. **hello-world.html**
Standalone HTML page with styled greeting.
**Usage:** Open in a web browser:
```bash
# Using Python's built-in server
python3 -m http.server 8000
# Then navigate to http://localhost:8000/hello-world.html
```
**Features:**
- Beautiful gradient background
- Centered card design
- Responsive styling
- No external dependencies

## Running the Scripts

### Node.js Scripts
All `.js` files (except DOM-specific ones) can be run with Node.js:
```bash
node <script-name>.js
```

### Browser Scripts
For browser-based scripts, you can:
1. Open `hello-world.html` directly in a browser
2. Create an HTML file that includes the script:
```html
<!DOCTYPE html>
<html>
<head><title>Test</title></head>
<body>
    <script src="hello-world-dom.js"></script>
</body>
</html>
```

## Learning Objectives

Each script demonstrates different concepts:
- **Simple**: Basic syntax and console output
- **Node**: Runtime environment features
- **Class**: Object-oriented programming
- **Async**: Asynchronous operations and Promises
- **Functional**: Functional programming patterns
- **DOM**: Browser API manipulation
- **Alert**: Browser event handling
- **HTML**: Complete web page structure

## Requirements

- **Node.js**: v22.22.0 or higher (for Node.js scripts)
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (for browser scripts)

## Next Steps

After exploring these examples, you can:
1. Modify the scripts to greet different names
2. Combine multiple approaches in a single script
3. Add error handling and input validation
4. Create interactive versions with user input
5. Integrate with the existing NovaSphere project

---

*Created as part of the NovaSphere project demonstration*
