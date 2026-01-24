# Hello World Scripts Collection

This directory contains a collection of "Hello World" scripts in various programming languages and formats, created for the NovaSphere project.

## Available Scripts

### 1. **hello.js** - Node.js Console Script
A basic Node.js script that prints "Hello, World!" to the console.

**Usage:**
```bash
node hello.js
```

**Features:**
- Simple console output
- Module exports for reusability
- Detects if run directly or imported

---

### 2. **hello-browser.js** - Interactive Browser Script
A browser-compatible JavaScript file that creates an animated popup greeting.

**Usage:**
Include in any HTML file:
```html
<script src="hello-browser.js"></script>
```

**Features:**
- Creates a styled popup notification
- Fade-in animation
- Auto-dismisses after 5 seconds
- Manual close button
- No dependencies required

**Demo:** Open `hello-demo.html` in a browser to see it in action!

---

### 3. **hello-server.js** - HTTP Server
A complete Node.js HTTP server with multiple routes.

**Usage:**
```bash
node hello-server.js
```
Then visit: http://localhost:3000

**Available Routes:**
- `/` - Main page with styled interface
- `/api` - Plain text API endpoint
- `/json` - JSON response with metadata
- `/about` - About page

**Features:**
- Full HTTP server implementation
- Multiple route handling
- Styled HTML responses
- JSON API endpoint
- Graceful shutdown (Ctrl+C)
- Request logging
- Custom port via PORT environment variable

---

### 4. **hello.sh** - Bash Shell Script
A colorful bash script with system information.

**Usage:**
```bash
bash hello.sh
# or make it executable
chmod +x hello.sh
./hello.sh
```

**Features:**
- Colored terminal output
- System information display (user, directory, date)
- Function examples
- ANSI color codes

---

### 5. **hello.py** - Python Script
A comprehensive Python script demonstrating various programming concepts.

**Usage:**
```bash
python3 hello.py
# or make it executable
chmod +x hello.py
./hello.py
```

**Features:**
- Function definitions
- Class-based implementation
- System information (Python version, platform)
- Docstrings and documentation
- Module structure with `if __name__ == "__main__"`

---

### 6. **hello-demo.html** - Interactive Demo Page
An HTML page showcasing all the scripts with usage examples.

**Usage:**
Open in any web browser:
```bash
# Using Python's built-in server
python3 -m http.server 8000
# Then visit http://localhost:8000/hello-demo.html
```

**Features:**
- Complete documentation
- Interactive browser script demo
- Usage examples for all scripts
- Styled with CSS
- Responsive design

---

## Quick Start

### Test All Scripts

```bash
# Test Node.js script
node hello.js

# Test Shell script
bash hello.sh

# Test Python script
python3 hello.py

# Start HTTP server
node hello-server.js
# Visit http://localhost:3000 in browser

# View demo page
# Open hello-demo.html in your browser
```

---

## Requirements

- **Node.js**: For `hello.js` and `hello-server.js` (Node.js 12+ recommended)
- **Python**: For `hello.py` (Python 3.6+ recommended)
- **Bash**: For `hello.sh` (Available on Linux/macOS/WSL)
- **Web Browser**: For `hello-browser.js` and `hello-demo.html`

---

## File Summary

| File | Language | Type | Lines | Purpose |
|------|----------|------|-------|---------|
| hello.js | JavaScript | CLI | 26 | Basic Node.js console script |
| hello-browser.js | JavaScript | Browser | 77 | Interactive browser popup |
| hello-server.js | JavaScript | Server | 192 | Full HTTP server |
| hello.sh | Bash | CLI | 44 | Colored shell script |
| hello.py | Python | CLI | 69 | OOP Python example |
| hello-demo.html | HTML/JS | Browser | 172 | Interactive demo page |

**Total:** 580 lines of code across 6 files

---

## Features Demonstrated

- **Multiple Languages**: JavaScript, Python, Bash
- **Multiple Environments**: CLI, Browser, Server
- **Best Practices**: 
  - Proper shebang lines
  - Module exports
  - Error handling
  - Graceful shutdown
  - Documentation
  - Code organization
- **User Experience**:
  - Colored output
  - Animations
  - Interactive elements
  - Responsive design

---

## Project Context

These scripts were created for the **NovaSphere** project - a landing page for an imaginary product featuring holographic interfaces and advanced computing technologies.

---

## License

Part of the NovaSphere project.

---

**Created:** 2026-01-24  
**Author:** Mistral Vibe  
**Project:** NovaSphere
