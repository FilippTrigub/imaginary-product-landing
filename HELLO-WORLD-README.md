# Hello World Scripts - NovaSphere

A collection of "Hello World" demonstration scripts in various formats for the NovaSphere project.

## 📁 Files Overview

### 1. **hello-world.html**
A simple, beautiful HTML page with animated "Hello World" message.
- Gradient background
- Fade-in animation
- Glassmorphism design

**Usage:**
```bash
# Open in browser
open hello-world.html
# or
xdg-open hello-world.html
```

### 2. **hello-world-interactive.html**
An interactive web page where users can:
- Enter their name
- Select different languages (English, Spanish, French, German)
- Get personalized greetings

**Usage:**
```bash
# Open in browser
open hello-world-interactive.html
```

### 3. **hello-world-canvas.html**
An animated Canvas-based "Hello World" with:
- Particle animation background
- Animated text with scaling and rotation
- Connected particle network effect

**Usage:**
```bash
# Open in browser
open hello-world-canvas.html
```

### 4. **hello-world.js**
A comprehensive JavaScript file demonstrating:
- Console logging
- Functions (regular, arrow, async)
- Classes
- DOM manipulation
- Module exports

**Usage:**
```bash
# Run in Node.js
node hello-world.js

# Or include in HTML
<script src="hello-world.js"></script>
```

### 5. **hello-world-node.js**
A Node.js script with:
- Colored console output (ANSI codes)
- Multiple greeting functions
- Class demonstrations
- Async/await examples
- Process information

**Usage:**
```bash
# Run directly
node hello-world-node.js

# Or make executable
chmod +x hello-world-node.js
./hello-world-node.js
```

### 6. **hello-world-api.js**
A complete HTTP API server with multiple endpoints:
- `GET /` - Web interface with documentation
- `GET /api/hello` - Simple JSON greeting
- `GET /api/greet?name=YourName` - Personalized greeting
- `GET /api/time` - Current server time
- `GET /api/info` - Server information

**Usage:**
```bash
# Start the server
node hello-world-api.js

# Then visit in browser:
# http://localhost:3000

# Or test with curl:
curl http://localhost:3000/api/hello
curl http://localhost:3000/api/greet?name=Developer
curl http://localhost:3000/api/time
curl http://localhost:3000/api/info
```

## 🚀 Quick Start

### Test All Scripts

```bash
# 1. Test Node.js script
node hello-world-node.js

# 2. Test JavaScript module
node hello-world.js

# 3. Start API server (in background)
node hello-world-api.js &

# 4. Test API endpoints
curl http://localhost:3000/api/hello
curl http://localhost:3000/api/greet?name=NovaSphere

# 5. Open HTML files in browser
# (Use your preferred browser or file manager)
```

## 🎨 Features

- **Multiple Formats**: HTML, JavaScript, Node.js, API Server
- **Interactive Elements**: User input, language selection, animations
- **Modern Design**: Gradient backgrounds, glassmorphism, smooth animations
- **Educational**: Demonstrates various JavaScript concepts and patterns
- **Production-Ready**: Clean code, error handling, CORS support

## 📚 Learning Topics Covered

- HTML5 & CSS3
- JavaScript ES6+ features
- DOM manipulation
- Canvas API
- Node.js HTTP server
- RESTful API design
- Async/await patterns
- Classes and OOP
- Event handling
- Animations and transitions

## 🛠️ Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (v12 or higher) for Node.js scripts
- No external dependencies required!

## 📝 Notes

All scripts are standalone and don't require any npm packages or external dependencies. They're designed to work out of the box in the NovaSphere project environment.

---

**NovaSphere** - The Future of Personal Computing
