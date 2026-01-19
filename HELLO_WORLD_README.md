# Hello World Scripts Collection

This directory contains various "Hello World" implementations in JavaScript for different use cases.

## Available Scripts

### 1. **hello-world.js**
Basic JavaScript hello world with multiple approaches:
- Simple console.log
- Function-based greeting
- Class-based greeter
- Module exports for reusability

**Run:**
```bash
node hello-world.js
```

### 2. **hello-world-node.js**
Node.js specific hello world featuring:
- Process information
- Async/await patterns
- Colored terminal output
- Executable script (shebang included)

**Run:**
```bash
node hello-world-node.js
# or make it executable
chmod +x hello-world-node.js
./hello-world-node.js
```

### 3. **hello-world-es6.js**
Modern ES6+ features demonstration:
- Arrow functions
- Destructuring
- Spread operator
- Template literals
- Array methods (map, forEach)
- Promises and async/await
- ES6 classes with static methods
- Module exports

**Run:**
```bash
node hello-world-es6.js
```

### 4. **hello-world.html**
Standalone HTML page with:
- Beautiful gradient background
- Interactive button
- Inline CSS styling
- JavaScript alert functionality

**Run:**
Open in a web browser:
```bash
# On Linux with a browser
xdg-open hello-world.html

# Or serve with a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000/hello-world.html
```

### 5. **hello-world-server.js**
HTTP server that serves a Hello World page:
- Creates a web server using Node.js http module
- Serves HTML with styling
- Displays request information
- Runs on port 3000 (configurable via PORT env variable)

**Run:**
```bash
node hello-world-server.js
# Then visit http://localhost:3000 in your browser
```

## Quick Test All Scripts

```bash
# Test basic scripts
node hello-world.js
node hello-world-node.js
node hello-world-es6.js

# Start the server (Ctrl+C to stop)
node hello-world-server.js
```

## Features Demonstrated

- ✅ Console output
- ✅ Functions and arrow functions
- ✅ Classes and OOP
- ✅ Async/await and Promises
- ✅ ES6+ syntax
- ✅ Module exports
- ✅ HTTP server creation
- ✅ HTML/CSS/JavaScript integration
- ✅ Terminal colors
- ✅ Template literals

## Requirements

- Node.js v22+ (installed in this environment)
- Web browser (for HTML file and server)

Enjoy exploring these Hello World examples! 🚀
