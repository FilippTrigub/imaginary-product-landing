# Hello World Scripts Collection

This directory contains multiple "Hello World" implementations for the NovaSphere project, demonstrating different approaches and technologies.

## 📁 Available Scripts

### 1. **hello-world.js** - JavaScript Module
A versatile JavaScript file with multiple Hello World implementations:
- Console logging
- DOM manipulation functions
- Alert dialogs
- Modern ES6+ syntax
- Module exports for reusability

**Usage:**
```bash
# In browser console or Node.js
node hello-world.js

# Or include in HTML
<script src="hello-world.js"></script>
```

**Functions:**
- `displayHelloWorld()` - Adds Hello World to the page
- `alertHelloWorld()` - Shows an alert dialog
- `helloWorld()` - Returns "Hello World!" string

---

### 2. **hello-world.html** - Interactive Web Page
A beautiful, fully-styled HTML page with interactive Hello World demonstrations.

**Features:**
- Modern gradient design matching NovaSphere branding
- Multiple interactive buttons
- Console logging demo
- Alert dialogs
- Dynamic message generation with timestamps
- Multi-language greetings (10+ languages)
- Responsive design for mobile devices
- Smooth animations

**Usage:**
```bash
# Open in browser
open hello-world.html

# Or serve with a local server
python3 -m http.server 8000
# Then visit: http://localhost:8000/hello-world.html
```

---

### 3. **hello-world-node.js** - Node.js CLI Script
A comprehensive Node.js command-line script with colored output and system information.

**Features:**
- Colored terminal output using ANSI codes
- ASCII art banner
- System information display
- Multiple output formats (string, array, object, JSON)
- Function demonstrations
- Async/await examples
- Module exports

**Usage:**
```bash
# Run directly
node hello-world-node.js

# Or make executable and run
chmod +x hello-world-node.js
./hello-world-node.js
```

---

### 4. **hello-world-server.js** - HTTP Server
A complete Node.js HTTP server serving Hello World in multiple formats.

**Features:**
- Multiple API endpoints
- HTML, JSON, and plain text responses
- Dynamic greeting with URL parameters
- CORS enabled
- Beautiful web interface
- Graceful shutdown handling
- 404 error pages

**Endpoints:**
- `GET /` - Main HTML page with route documentation
- `GET /hello` - Hello World HTML page
- `GET /api/hello` - JSON response with metadata
- `GET /api/greet/:name` - Personalized JSON greeting
- `GET /text` - Plain text "Hello World!"

**Usage:**
```bash
# Start the server
node hello-world-server.js

# Server runs on http://localhost:3000
# Visit in browser or use curl:
curl http://localhost:3000/api/hello

# Custom port
PORT=8080 node hello-world-server.js
```

**Testing:**
```bash
# Test JSON endpoint
curl http://localhost:3000/api/hello

# Test personalized greeting
curl http://localhost:3000/api/greet/Developer

# Test plain text
curl http://localhost:3000/text
```

---

### 5. **hello-world.sh** - Bash Shell Script
A colorful bash script with system information and multi-language support.

**Features:**
- Colored terminal output
- ASCII art banner
- System information (OS, kernel, architecture, user)
- Multi-language greetings
- Function demonstrations
- Loop examples
- Emoji support

**Usage:**
```bash
# Make executable (if not already)
chmod +x hello-world.sh

# Run the script
./hello-world.sh

# Or run with bash
bash hello-world.sh
```

---

## 🚀 Quick Start

### Run All Scripts
```bash
# JavaScript module
node hello-world.js

# Node.js CLI
node hello-world-node.js

# Bash script
./hello-world.sh

# Start HTTP server (runs in background)
node hello-world-server.js &

# Open HTML page in browser
open hello-world.html
```

### Test the Server
```bash
# Start server
node hello-world-server.js

# In another terminal, test endpoints:
curl http://localhost:3000/
curl http://localhost:3000/api/hello
curl http://localhost:3000/api/greet/YourName
curl http://localhost:3000/text
```

---

## 🎨 Features Showcase

### Multi-Language Support
All scripts include greetings in multiple languages:
- 🇺🇸 English: Hello World!
- 🇪🇸 Spanish: ¡Hola Mundo!
- 🇫🇷 French: Bonjour le Monde!
- 🇩🇪 German: Hallo Welt!
- 🇮🇹 Italian: Ciao Mondo!
- 🇯🇵 Japanese: こんにちは世界!
- 🇨🇳 Chinese: 你好世界!
- 🇷🇺 Russian: Привет мир!
- 🇰🇷 Korean: 안녕하세요 세계!
- 🇮🇳 Hindi: नमस्ते दुनिया!

### Visual Design
- NovaSphere brand colors (purple/blue gradient)
- Responsive layouts
- Smooth animations
- Modern typography (Montserrat font)
- Professional styling

---

## 📊 Comparison

| Script | Type | Interactive | Server | Styled | Multi-Lang |
|--------|------|-------------|--------|--------|------------|
| hello-world.js | Module | ✓ | ✗ | ✗ | ✗ |
| hello-world.html | Web Page | ✓ | ✗ | ✓ | ✓ |
| hello-world-node.js | CLI | ✗ | ✗ | ✓ | ✓ |
| hello-world-server.js | Server | ✓ | ✓ | ✓ | ✗ |
| hello-world.sh | Shell | ✗ | ✗ | ✓ | ✓ |

---

## 🛠️ Requirements

- **Node.js**: v22.14.0 or higher (for .js files)
- **Bash**: 4.0+ (for .sh script)
- **Modern Browser**: Chrome, Firefox, Safari, Edge (for .html)
- **Operating System**: Linux, macOS, Windows (with WSL for bash)

---

## 📝 Notes

- All scripts are standalone and can run independently
- No external dependencies required (pure Node.js/JavaScript/Bash)
- Scripts follow NovaSphere branding and design guidelines
- Fully commented code for educational purposes
- Production-ready error handling in server script

---

## 🎯 Use Cases

1. **Learning**: Perfect for beginners learning JavaScript, Node.js, or Bash
2. **Testing**: Quick environment testing and validation
3. **Demos**: Showcase different programming approaches
4. **Templates**: Starting point for more complex applications
5. **Documentation**: Examples of best practices and code structure

---

## 📄 License

Part of the NovaSphere project © 2026

---

## 🤝 Contributing

Feel free to extend these scripts with additional features:
- More languages
- Additional output formats
- Enhanced styling
- New API endpoints
- Database integration
- WebSocket support

---

**Happy Coding! 🚀**
