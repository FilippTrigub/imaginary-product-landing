# Hello World Scripts Collection

This collection contains various "Hello World" implementations for the NovaSphere project.

## 📁 Files Overview

### 1. **hello-world.html**
A simple, beautiful HTML page with animated "Hello World" greeting.

**Usage:**
```bash
# Open directly in browser
open hello-world.html
# Or serve with a simple HTTP server
python3 -m http.server 8000
# Then visit: http://localhost:8000/hello-world.html
```

**Features:**
- Gradient background
- Fade-in animation
- Glassmorphism design
- Responsive layout

---

### 2. **hello-world.js**
JavaScript module with multiple "Hello World" implementations.

**Usage:**
```bash
# Run in Node.js
node hello-world.js

# Or include in HTML
<script src="hello-world.js"></script>
```

**Features:**
- Console logging
- Function implementations
- Class-based approach
- Async/await example
- DOM manipulation
- Module exports

---

### 3. **hello-world-interactive.html**
Interactive web page with multi-language greetings.

**Usage:**
```bash
# Open in browser
open hello-world-interactive.html
```

**Features:**
- Name input field
- Multi-language support (English, Spanish, French, German)
- Interactive buttons
- Smooth animations
- Modern UI design

---

### 4. **hello-world-node.js**
Node.js command-line script with colorful output.

**Usage:**
```bash
# Basic usage
node hello-world-node.js

# With custom name
node hello-world-node.js John Doe

# Make executable (optional)
chmod +x hello-world-node.js
./hello-world-node.js
```

**Features:**
- Colorful console output (ANSI colors)
- System information display
- Multi-language greetings
- Command-line arguments support
- Async greeting example

---

### 5. **hello-world-api.js**
Simple HTTP server with REST API endpoints.

**Usage:**
```bash
# Start the server
node hello-world-api.js

# The server will run on http://localhost:3000
```

**API Endpoints:**
- `GET /` - Home page with documentation
- `GET /api/hello` - Simple JSON greeting
- `GET /api/greet?name=YourName` - Personalized greeting
- `GET /api/greet?name=YourName&lang=es` - Multi-language greeting
- `GET /api/time` - Time-based greeting
- `GET /health` - Health check

**Example API Calls:**
```bash
# Simple hello
curl http://localhost:3000/api/hello

# Personalized greeting
curl http://localhost:3000/api/greet?name=NovaSphere

# Spanish greeting
curl http://localhost:3000/api/greet?name=Mundo&lang=es

# Time-based greeting
curl http://localhost:3000/api/time

# Health check
curl http://localhost:3000/health
```

---

## 🚀 Quick Start

### For Web Developers:
```bash
# View static HTML pages
open hello-world.html
open hello-world-interactive.html
```

### For Node.js Developers:
```bash
# Run console script
node hello-world-node.js

# Start API server
node hello-world-api.js
```

### For Testing:
```bash
# Test all Node.js scripts
node hello-world.js
node hello-world-node.js "Test User"

# Start API and test endpoints
node hello-world-api.js &
sleep 2
curl http://localhost:3000/api/hello
curl http://localhost:3000/api/greet?name=Tester
```

---

## 🎨 Features Across All Scripts

- **Modern Design**: Beautiful gradients and animations
- **Multi-language Support**: English, Spanish, French, German
- **Interactive Elements**: Buttons, inputs, and dynamic content
- **API Ready**: RESTful endpoints with JSON responses
- **Console Friendly**: Colorful terminal output
- **Well Documented**: Clear comments and examples

---

## 📦 Dependencies

All scripts use **zero external dependencies** and rely only on:
- Native JavaScript (ES6+)
- Node.js built-in modules (http, url)
- Standard HTML5/CSS3

---

## 🔧 Customization

### Change Colors:
Edit the gradient values in CSS:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Languages:
Update the `greetings` object:
```javascript
const greetings = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour',
    de: 'Hallo',
    it: 'Ciao',      // Add Italian
    ja: 'こんにちは',  // Add Japanese
    zh: '你好'        // Add Chinese
};
```

### Change API Port:
Set environment variable:
```bash
PORT=8080 node hello-world-api.js
```

---

## 📝 License

Part of the NovaSphere project. Feel free to use and modify!

---

## 🤝 Contributing

These are simple demo scripts. Feel free to:
- Add more language support
- Improve animations
- Add new API endpoints
- Create additional variations

---

**Happy Coding! 🎉**

*NovaSphere - The Future of Personal Computing*
