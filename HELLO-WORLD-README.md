# Hello World Scripts - NovaSphere

This directory contains various "Hello World" implementations for the NovaSphere project, demonstrating different approaches and technologies.

## 📁 Available Scripts

### 1. **hello-world.html**
A simple, elegant HTML page with animated "Hello World" message.

**Features:**
- Gradient background matching NovaSphere branding
- Glassmorphism design
- Fade-in animation
- Responsive design

**Usage:**
```bash
# Open in browser
open hello-world.html
# or
xdg-open hello-world.html
```

---

### 2. **hello-world.js**
Comprehensive JavaScript demonstrations of "Hello World" in multiple styles.

**Features:**
- Console output
- Function-based greeting
- DOM manipulation (auto-removes after 3 seconds)
- Class-based implementation
- Arrow functions
- Async/await patterns
- Module exports

**Usage:**
```bash
# Run with Node.js
node hello-world.js

# Or include in HTML
<script src="hello-world.js"></script>
```

---

### 3. **hello-world-interactive.html**
Interactive web page where users can enter their name for a personalized greeting.

**Features:**
- Input field for custom names
- Button and Enter key support
- Smooth animations
- Modern UI design
- Responsive layout

**Usage:**
```bash
# Open in browser
open hello-world-interactive.html
```

---

### 4. **hello-world-canvas.html**
Visual "Hello World" using HTML5 Canvas with animations.

**Features:**
- Canvas-based rendering
- Gradient backgrounds
- Animated orbiting circles
- Text shadows and effects
- Continuous animation loop

**Usage:**
```bash
# Open in browser
open hello-world-canvas.html
```

---

### 5. **hello-world-node.js**
Node.js script with colorful console output and various greeting patterns.

**Features:**
- ANSI color codes for terminal output
- Function and class implementations
- Async greeting with delay
- Process information display
- Module exports
- Executable script (shebang included)

**Usage:**
```bash
# Run with Node.js
node hello-world-node.js

# Or make executable and run directly
chmod +x hello-world-node.js
./hello-world-node.js
```

---

### 6. **hello-world-api.js**
Full HTTP server providing "Hello World" API endpoints.

**Features:**
- Multiple REST endpoints
- JSON and plain text responses
- Query parameter support
- CORS enabled
- Server information endpoint
- Graceful shutdown handling
- Web interface at root

**Available Endpoints:**
- `GET /` - HTML interface with documentation
- `GET /hello` - Plain text greeting
- `GET /hello?name=YourName` - Personalized plain text
- `GET /api/hello` - JSON greeting
- `GET /api/hello?name=YourName` - Personalized JSON
- `GET /api/info` - Server information

**Usage:**
```bash
# Start the server
node hello-world-api.js

# Server runs on http://localhost:3000
# Access in browser or use curl:
curl http://localhost:3000/api/hello?name=Developer

# Stop with Ctrl+C
```

---

## 🎨 Design Philosophy

All scripts follow the NovaSphere design language:
- **Colors:** Purple gradient (#667eea to #764ba2)
- **Typography:** Montserrat font family
- **Style:** Modern, clean, with smooth animations
- **Responsive:** Works on all screen sizes

---

## 🚀 Quick Start

### Test All Scripts:
```bash
# Test JavaScript
node hello-world.js

# Test Node.js version
node hello-world-node.js

# Start API server
node hello-world-api.js

# Open HTML files in browser
open hello-world.html
open hello-world-interactive.html
open hello-world-canvas.html
```

---

## 📦 Requirements

- **Node.js:** v22+ (for .js scripts)
- **Modern Browser:** Chrome, Firefox, Safari, Edge (for .html files)
- **No external dependencies** - All scripts use vanilla JavaScript/Node.js

---

## 🔧 Customization

### Change Greeting Message:
Edit the greeting text in any file:
```javascript
// In JavaScript files
const message = 'Hello World!'; // Change this

// In HTML files
<h1>Hello World!</h1> // Change this
```

### Change Colors:
Update the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Change #667eea and #764ba2 to your preferred colors */
```

### Change Port (API Server):
```javascript
const PORT = process.env.PORT || 3000; // Change 3000 to desired port
```

---

## 📝 Examples

### Using as Module:
```javascript
// Import functions
const { sayHello, HelloWorld } = require('./hello-world.js');

// Use functions
console.log(sayHello('Developer'));

const greeter = new HelloWorld();
greeter.greet();
```

### API Request Examples:
```bash
# Simple greeting
curl http://localhost:3000/hello

# Personalized greeting
curl http://localhost:3000/hello?name=Alice

# JSON response
curl http://localhost:3000/api/hello?name=Bob

# Server info
curl http://localhost:3000/api/info
```

---

## 🎯 Use Cases

1. **Learning:** Great for beginners learning web development
2. **Testing:** Quick test of JavaScript/Node.js environment
3. **Templates:** Starting point for new projects
4. **Demos:** Showcase different implementation approaches
5. **API Testing:** Test HTTP server and REST endpoints

---

## 📄 License

Part of the NovaSphere project. © 2025 NovaSphere Inc.

---

## 🤝 Contributing

Feel free to extend these scripts with additional features:
- Add more animation effects
- Implement additional API endpoints
- Create mobile-specific versions
- Add internationalization (i18n)
- Integrate with databases

---

**Happy Coding! 🚀**
