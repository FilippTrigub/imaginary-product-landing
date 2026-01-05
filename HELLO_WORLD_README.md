# Hello World Scripts Collection

This collection contains multiple "Hello World" implementations for the NovaSphere project.

## 📁 Files Included

### 1. **hello-world.js**
Basic JavaScript Hello World with multiple functions:
- Console logging
- DOM manipulation
- Alert messages
- Modern ES6+ syntax

**Usage:**
```bash
node hello-world.js
```

Or include in HTML:
```html
<script src="hello-world.js"></script>
<script>
    displayHelloWorld();
</script>
```

---

### 2. **hello-world.html**
Interactive HTML page with styled Hello World demonstrations:
- Beautiful gradient design
- Multiple interactive buttons
- Console logging demo
- Alert demo
- Dynamic message generation
- Multi-language greetings

**Usage:**
Open in browser:
```bash
# Using Python's built-in server
python3 -m http.server 8000

# Or using Node.js http-server (if installed)
npx http-server

# Then visit: http://localhost:8000/hello-world.html
```

---

### 3. **hello-world-node.js**
Advanced Node.js script with:
- Colored console output (ANSI codes)
- ASCII art
- System information display
- JSON output
- Multi-language greetings
- Animated text display

**Usage:**
```bash
node hello-world-node.js
```

Make it executable (optional):
```bash
chmod +x hello-world-node.js
./hello-world-node.js
```

---

### 4. **hello-world-server.js**
Full HTTP server implementation:
- Serves HTML Hello World page
- JSON API endpoints
- Health check endpoint
- Multi-language API
- Request logging

**Usage:**
```bash
# Start the server
node hello-world-server.js

# Or with custom port
PORT=8080 node hello-world-server.js
```

**Available Endpoints:**
- `http://localhost:3000/` - HTML page
- `http://localhost:3000/api/hello` - JSON API
- `http://localhost:3000/api/greetings` - Multi-language JSON
- `http://localhost:3000/health` - Health check

**Test with curl:**
```bash
# Get HTML page
curl http://localhost:3000/

# Get JSON response
curl http://localhost:3000/api/hello

# Get multi-language greetings
curl http://localhost:3000/api/greetings

# Health check
curl http://localhost:3000/health
```

---

## 🚀 Quick Start

### Run All Scripts:

```bash
# 1. Basic Node.js Hello World
node hello-world-node.js

# 2. Start the HTTP server
node hello-world-server.js &

# 3. Open the interactive HTML page
# Visit: http://localhost:3000/
# Or open hello-world.html directly in browser
```

---

## 🎨 Features

### Visual Design
- Modern gradient backgrounds
- Smooth animations
- Responsive design
- Mobile-friendly layouts

### Technical Features
- ES6+ JavaScript syntax
- Async/await patterns
- Event handling
- DOM manipulation
- HTTP server implementation
- RESTful API endpoints
- JSON responses
- Error handling

### Multi-Language Support
All scripts include greetings in:
- 🇺🇸 English
- 🇪🇸 Spanish
- 🇫🇷 French
- 🇩🇪 German
- 🇮🇹 Italian
- 🇯🇵 Japanese
- 🇨🇳 Chinese
- 🇷🇺 Russian
- 🇰🇷 Korean
- 🇮🇳 Hindi

---

## 📋 Requirements

- **Node.js**: v12.0.0 or higher (v22 recommended)
- **Browser**: Any modern browser (Chrome, Firefox, Safari, Edge)
- **OS**: Linux, macOS, or Windows

---

## 🧪 Testing

### Test Node.js Script:
```bash
node hello-world-node.js
# Should display colored output with ASCII art
```

### Test HTTP Server:
```bash
# Terminal 1: Start server
node hello-world-server.js

# Terminal 2: Test endpoints
curl http://localhost:3000/api/hello
curl http://localhost:3000/health
```

### Test HTML Page:
```bash
# Open in browser
xdg-open hello-world.html  # Linux
open hello-world.html      # macOS
start hello-world.html     # Windows
```

---

## 🔧 Customization

### Change Server Port:
```bash
PORT=8080 node hello-world-server.js
```

### Modify Colors in Node Script:
Edit `hello-world-node.js` and change ANSI color codes:
```javascript
const colors = {
    cyan: '\x1b[36m',    // Change to your preferred color
    magenta: '\x1b[35m',
    // ... more colors
};
```

### Customize HTML Styling:
Edit the `<style>` section in `hello-world.html` to change:
- Gradient colors
- Font sizes
- Animation speeds
- Button styles

---

## 📝 Notes

- All scripts are standalone and don't require external dependencies
- The HTTP server uses Node.js built-in `http` module
- HTML page uses vanilla JavaScript (no frameworks)
- Scripts follow NovaSphere project conventions
- All files include proper error handling

---

## 🐛 Troubleshooting

### Port Already in Use:
```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
PORT=8080 node hello-world-server.js
```

### Permission Denied:
```bash
# Make script executable
chmod +x hello-world-node.js
chmod +x hello-world-server.js
```

### Node.js Not Found:
```bash
# Check Node.js installation
node --version

# Install Node.js if needed
# Visit: https://nodejs.org/
```

---

## 📚 Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTTP Server Guide](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

---

## 📄 License

Part of the NovaSphere project.
© 2025 NovaSphere Inc. All rights reserved.

---

**Happy Coding! 🚀**
