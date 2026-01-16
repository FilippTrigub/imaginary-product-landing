# Hello World Scripts Collection

This directory contains various "Hello World" scripts demonstrating different JavaScript approaches and environments.

## Scripts Overview

### 1. **hello-console.js**
Simple console output examples with styling.

**Run:**
```bash
node hello-console.js
```

**Features:**
- Basic console.log
- Timestamp output
- Styled console output

---

### 2. **hello-dom.js**
DOM manipulation example for browser environments.

**Usage:**
Include in an HTML file:
```html
<script src="hello-dom.js"></script>
```

**Features:**
- Creates and styles DOM elements
- Adds animations
- Event-driven execution

---

### 3. **hello-alert.js**
Browser alert and prompt interactions.

**Usage:**
Include in an HTML file:
```html
<script src="hello-alert.js"></script>
```

**Features:**
- Alert boxes
- User input with prompts
- Interactive greetings

---

### 4. **hello-node.js**
Node.js specific Hello World with system information.

**Run:**
```bash
node hello-node.js
```

**Features:**
- Colored console output (ANSI codes)
- Process information
- Exportable module functions

---

### 5. **hello.html**
Standalone HTML page with animated Hello World.

**Run:**
Open in browser or use:
```bash
# If you have a simple HTTP server
python3 -m http.server 8000
# Then visit: http://localhost:8000/hello.html
```

**Features:**
- Beautiful gradient background
- CSS animations
- Responsive design
- No external dependencies

---

### 6. **hello-server.js**
HTTP server that serves Hello World page.

**Run:**
```bash
node hello-server.js
```

Then visit: `http://localhost:3000`

**Features:**
- Built-in HTTP server
- Dynamic HTML generation
- Shows request information

---

### 7. **hello-async.js**
Async/await and Promise examples.

**Run:**
```bash
node hello-async.js
```

**Features:**
- Async functions
- Promises
- Delayed execution
- Sequential async operations
- Exportable module

---

## Quick Test All Scripts

```bash
# Test Node.js scripts
node hello-console.js
node hello-node.js
node hello-async.js

# Start HTTP server (runs in background)
node hello-server.js &

# Open HTML file
# (Use your preferred method to open hello.html in a browser)
```

## Requirements

- **Node.js**: v22.22.0 or higher (for Node.js scripts)
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (for HTML/DOM scripts)

## Notes

- Browser-based scripts (hello-dom.js, hello-alert.js) require an HTML page to run
- The hello-server.js creates its own HTTP server on port 3000
- All scripts are standalone and don't require external dependencies
- Scripts demonstrate different JavaScript paradigms and environments

---

**Created:** January 16, 2026
