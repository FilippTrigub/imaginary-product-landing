# Hello World Scripts - NovaSphere

This directory contains multiple "Hello World" implementations for the NovaSphere project.

## 📁 Available Scripts

### 1. **hello-world.html**
A standalone HTML page with animated "Hello World" display.

**Usage:**
```bash
# Open in browser
open hello-world.html
# or
xdg-open hello-world.html
```

**Features:**
- Beautiful gradient background
- Animated text effects
- Responsive design
- Glass-morphism styling

---

### 2. **hello-world.js**
JavaScript module with multiple Hello World implementations.

**Usage:**
```javascript
// In browser console or HTML file
<script src="hello-world.js"></script>
<script>
  // Console output
  console.log(helloWorld());
  
  // Create DOM element
  createHelloWorld();
  
  // Using class
  const hello = new HelloWorld('Hello from NovaSphere!');
  hello.greet();
  hello.display();
</script>
```

**Features:**
- Console logging
- DOM manipulation
- Alert function
- ES6 Class implementation
- Module exports

---

### 3. **hello-world-node.js**
Node.js command-line script with styled output.

**Usage:**
```bash
# Run directly
node hello-world-node.js

# Or make executable and run
chmod +x hello-world-node.js
./hello-world-node.js
```

**Features:**
- Colored console output (ANSI codes)
- ASCII art banner
- Process information display
- Timestamp logging
- Module export support

**Output:**
```
Hello World!

╔════════════════════════════════════╗
║                                    ║
║  Hello World from NovaSphere!  ║
║                                    ║
╚════════════════════════════════════╝

[timestamp] Hello World!

 _   _      _ _        __        __         _     _ _ 
| | | | ___| | | ___   \ \      / /__  _ __| | __| | |
| |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | |
|  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|
|_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_)

Process Information:
  Node Version: v22.14.0
  Platform: linux
  Architecture: x64
  PID: 3084
```

---

### 4. **hello-world-server.js**
HTTP server that serves a Hello World web page.

**Usage:**
```bash
# Start the server
node hello-world-server.js

# Or make executable and run
chmod +x hello-world-server.js
./hello-world-server.js
```

**Access:**
- Web page: http://localhost:3000/
- JSON API: http://localhost:3000/api/hello
- Greet API: http://localhost:3000/api/greet

**Features:**
- HTTP server on port 3000
- Beautiful HTML interface
- RESTful API endpoints
- Request logging
- Graceful shutdown handling

**API Endpoints:**

1. `GET /` - HTML page with Hello World
2. `GET /api/hello` - JSON response:
   ```json
   {
     "message": "Hello World!",
     "project": "NovaSphere",
     "timestamp": "2026-01-02T17:43:50.000Z",
     "status": "success"
   }
   ```
3. `GET /api/greet` - JSON greeting:
   ```json
   {
     "greeting": "Hello World from NovaSphere!",
     "version": "1.0.0"
   }
   ```

---

### 5. **hello-world.json**
JSON data file with Hello World messages in multiple languages.

**Usage:**
```javascript
// Node.js
const data = require('./hello-world.json');
console.log(data.message);
console.log(data.greetings);

// Fetch in browser
fetch('hello-world.json')
  .then(res => res.json())
  .then(data => console.log(data));
```

**Content:**
- Hello World in 10 languages
- Project metadata
- Endpoint references

---

## 🚀 Quick Start

### Test All Scripts:

```bash
# 1. Test Node.js script
node hello-world-node.js

# 2. Start HTTP server (in background)
node hello-world-server.js &

# 3. Test API endpoint
curl http://localhost:3000/api/hello

# 4. Open HTML page in browser
# (Use your preferred method to open hello-world.html)

# 5. Stop the server
# Press Ctrl+C or kill the process
```

---

## 📦 Requirements

- **Node.js**: v22.14.0 or higher (for .js scripts)
- **Web Browser**: Any modern browser (for .html files)
- **Terminal**: For running command-line scripts

---

## 🎨 Features Summary

| Script | Type | Output | Interactive |
|--------|------|--------|-------------|
| hello-world.html | HTML | Browser | ✓ |
| hello-world.js | JavaScript | Browser/Console | ✓ |
| hello-world-node.js | Node.js | Terminal | - |
| hello-world-server.js | HTTP Server | Browser/API | ✓ |
| hello-world.json | Data | JSON | - |

---

## 🌐 Integration with NovaSphere

These Hello World scripts follow the NovaSphere design language:
- Purple gradient color scheme (#667eea to #764ba2)
- Modern, clean typography
- Smooth animations
- Professional styling

---

## 📝 License

Part of the NovaSphere project.
© 2026 NovaSphere Inc. All rights reserved.

---

## 🤝 Contributing

Feel free to extend these scripts with additional Hello World implementations!

**Ideas:**
- TypeScript version
- React component
- Vue component
- WebSocket server
- GraphQL endpoint
- CLI tool with arguments
