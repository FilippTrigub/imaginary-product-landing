# Hello World Scripts Collection

This collection contains multiple "Hello World" implementations for the NovaSphere project, demonstrating various web technologies and approaches.

## 📁 Files Created

### 1. **hello-world.js**
Basic JavaScript Hello World with multiple implementations:
- Console logging
- Styled console output
- Function-based greeting
- DOM manipulation
- Module exports

**Usage:**
```bash
node hello-world.js
```

**In Browser:**
```html
<script src="hello-world.js"></script>
```

---

### 2. **hello-world.html**
Interactive HTML page with beautiful animations and styling:
- Gradient background
- Animated text effects
- Interactive button
- Random greeting messages
- Responsive design

**Usage:**
Open in any web browser:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server

# Then visit: http://localhost:8000/hello-world.html
```

---

### 3. **hello-world-node.js**
Comprehensive Node.js Hello World with advanced features:
- Colored console output
- ASCII art
- Multi-language greetings (8 languages)
- System information display
- Async/await examples
- Class-based implementation
- Module exports

**Usage:**
```bash
node hello-world-node.js

# Or make it executable and run directly:
./hello-world-node.js
```

**Features:**
- ✓ Colored terminal output
- ✓ ASCII art banner
- ✓ Multi-language support (English, Spanish, French, German, Italian, Japanese, Chinese, Russian)
- ✓ System info (Node version, platform, architecture)
- ✓ Timestamp display
- ✓ Async operations
- ✓ Object-oriented approach

---

### 4. **hello-world-server.js**
Full-featured HTTP server serving Hello World in multiple formats:
- HTML interface
- JSON API
- Plain text responses
- Personalized greetings
- RESTful endpoints

**Usage:**
```bash
node hello-world-server.js

# Or with custom port:
PORT=8080 node hello-world-server.js
```

**Endpoints:**
- `GET /` - HTML Hello World page with endpoint documentation
- `GET /hello` - Plain text "Hello World!"
- `GET /json` - JSON response with metadata
- `GET /api/greet/:name` - Personalized greeting (e.g., `/api/greet/Alice`)
- `GET /time` - Hello World with current timestamp

**Example Requests:**
```bash
# Plain text
curl http://localhost:3000/hello

# JSON response
curl http://localhost:3000/json

# Personalized greeting
curl http://localhost:3000/api/greet/NovaSphere

# With timestamp
curl http://localhost:3000/time
```

---

### 5. **hello-world.css**
Pure CSS Hello World effects (no JavaScript required):
- CSS content property
- Animated gradients
- Glowing text
- Typing animation
- 3D text effects
- Rainbow colors
- Neon sign effect
- Bounce animation
- Wave animation

**Usage:**
```html
<link rel="stylesheet" href="hello-world.css">
<div class="hello-world-animated">Hello World!</div>
```

**Available Classes:**
- `.hello-world-css` - CSS content property
- `.hello-world-animated` - Gradient animation
- `.hello-world-glow` - Glowing effect
- `.hello-world-typing` - Typing animation
- `.hello-world-3d` - 3D text effect
- `.hello-world-rainbow` - Rainbow colors
- `.hello-world-neon` - Neon sign effect
- `.hello-world-bounce` - Bounce animation
- `.hello-world-wave` - Wave animation

---

### 6. **hello-world-demo.html**
Complete gallery showcasing all CSS effects:
- Demonstrates all 9 CSS animation styles
- Organized in sections
- Responsive layout
- Dark/light backgrounds for contrast

**Usage:**
Open in any web browser:
```bash
# Start a local server
python3 -m http.server 8000
# Visit: http://localhost:8000/hello-world-demo.html
```

---

## 🚀 Quick Start

### Run All Scripts:
```bash
# JavaScript
node hello-world.js

# Node.js with features
node hello-world-node.js

# Start HTTP server
node hello-world-server.js &

# Open HTML files in browser
python3 -m http.server 8000
```

### Test the Server:
```bash
# Start server
node hello-world-server.js &

# Test endpoints
curl http://localhost:3000/
curl http://localhost:3000/hello
curl http://localhost:3000/json
curl http://localhost:3000/api/greet/World
curl http://localhost:3000/time
```

---

## 🎨 Features Summary

| File | Type | Features |
|------|------|----------|
| hello-world.js | JavaScript | Console, DOM, Functions, Modules |
| hello-world.html | HTML/CSS/JS | Interactive, Animated, Responsive |
| hello-world-node.js | Node.js | Colors, ASCII, Multi-lang, Classes |
| hello-world-server.js | HTTP Server | REST API, Multiple formats, CORS |
| hello-world.css | CSS | 9 animation effects, Pure CSS |
| hello-world-demo.html | Demo Page | Gallery of all CSS effects |

---

## 🌐 Browser Testing

All HTML files can be viewed by starting a local server:

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node.js
npx http-server -p 8000

# Option 3: PHP
php -S localhost:8000
```

Then visit:
- http://localhost:8000/hello-world.html
- http://localhost:8000/hello-world-demo.html

---

## 📦 Module Usage

### JavaScript Module:
```javascript
const { sayHello } = require('./hello-world.js');
console.log(sayHello('NovaSphere'));
```

### Node.js Module:
```javascript
const { greet, HelloWorld, asyncHello } = require('./hello-world-node.js');

console.log(greet('World', 'es')); // Hola World!

const hello = new HelloWorld('User');
console.log(hello.greet()); // Hello User!

asyncHello().then(msg => console.log(msg));
```

### Server Module:
```javascript
const server = require('./hello-world-server.js');
// Server starts automatically when required
```

---

## 🎯 Use Cases

1. **Learning**: Perfect for beginners learning web development
2. **Testing**: Quick server setup for testing HTTP clients
3. **Demos**: Showcase CSS animations and effects
4. **Templates**: Starting point for new projects
5. **Documentation**: Examples of different implementation approaches

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, modern features
- **CSS3**: Animations, gradients, transforms, keyframes
- **JavaScript (ES6+)**: Arrow functions, async/await, classes, modules
- **Node.js**: HTTP server, file system, process management
- **HTTP**: RESTful API design, CORS, content negotiation

---

## 📝 Notes

- All scripts are standalone and don't require external dependencies
- Server runs on port 3000 by default (configurable via PORT env variable)
- CSS effects work in all modern browsers
- Node.js scripts require Node.js v12+ (tested with v22.22.0)
- All files follow NovaSphere project styling and branding

---

## 🎨 Color Scheme

The scripts use the NovaSphere brand colors:
- Primary: `#667eea` (Purple-blue)
- Secondary: `#764ba2` (Deep purple)
- Gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

---

## 📄 License

Part of the NovaSphere project. © 2025 NovaSphere Inc.

---

## 🤝 Contributing

These scripts demonstrate various "Hello World" implementations. Feel free to:
- Add more language examples
- Create additional CSS effects
- Extend the server with more endpoints
- Improve animations and interactions

---

**Created for NovaSphere - The Future of Personal Computing** 🚀
