# Hello World Scripts - NovaSphere Project

This directory contains multiple "Hello World" implementations for the NovaSphere project.

## 📁 Available Scripts

### 1. **hello.js** - JavaScript Module
Simple JavaScript hello world with multiple functions.

**Usage:**
```bash
# Run in Node.js
node hello.js

# Use in browser
<script src="hello.js"></script>
<script>
  displayHelloWorld();  // Adds "Hello World" to page
  alertHelloWorld();    // Shows alert
</script>
```

**Features:**
- Console logging
- DOM manipulation
- Alert functionality
- Module exports for reuse

---

### 2. **hello.html** - Interactive Web Page
Beautiful, interactive HTML page with styled "Hello World" display.

**Usage:**
```bash
# Open in browser
open hello.html

# Or serve with a local server
python3 -m http.server 8000
# Then visit: http://localhost:8000/hello.html
```

**Features:**
- Gradient background with NovaSphere branding
- Interactive buttons
- Dynamic message display
- Responsive design
- Smooth animations
- Multiple greeting variations

---

### 3. **hello-node.js** - Node.js CLI Script
Comprehensive Node.js command-line script with styled output.

**Usage:**
```bash
# Run directly
node hello-node.js

# Or make executable and run
chmod +x hello-node.js
./hello-node.js
```

**Features:**
- Colored terminal output with ANSI codes
- ASCII art borders
- Multilingual greetings (10 languages)
- System information display
- Timestamp logging
- Module exports for programmatic use

**Example Output:**
```
Hello World!
╔════════════════════════════════════╗
║                                    ║
║        Hello World!               ║
║                                    ║
║   Welcome to NovaSphere Project    ║
║                                    ║
╚════════════════════════════════════╝

[2026-01-06 09:29:24] Hello World from Node.js!

🌍 Hello World in Multiple Languages:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
english        : Hello World!
spanish        : ¡Hola Mundo!
french         : Bonjour le monde!
...
```

---

### 4. **hello-server.js** - HTTP Server
Full-featured HTTP server serving "Hello World" responses.

**Usage:**
```bash
# Start the server
node hello-server.js

# Or run in background
node hello-server.js &

# Custom port
PORT=8080 node hello-server.js
```

**Features:**
- HTTP server on port 3000 (configurable)
- Multiple routes:
  - `/` - HTML hello world page
  - `/hello` - HTML hello world page
  - `/json` - JSON response
  - `/api/hello` - API endpoint
  - `/api/greet?name=YourName` - Personalized greeting
- CORS enabled
- Styled HTML responses
- Graceful shutdown handling

**Example Requests:**
```bash
# Visit in browser
http://localhost:3000

# API requests
curl http://localhost:3000/json
curl http://localhost:3000/api/hello
curl http://localhost:3000/api/greet?name=Developer
```

**Example JSON Response:**
```json
{
  "message": "Hello World!",
  "project": "NovaSphere",
  "timestamp": "2026-01-06T09:29:24.000Z",
  "server": "Node.js HTTP Server"
}
```

---

### 5. **hello.sh** - Bash Shell Script
Comprehensive bash script with colored output and system info.

**Usage:**
```bash
# Run directly
bash hello.sh

# Or make executable and run
chmod +x hello.sh
./hello.sh
```

**Features:**
- Colored terminal output
- ASCII art borders and logo
- Multilingual greetings
- System information (OS, kernel, architecture, etc.)
- Timestamp logging
- Beautiful ASCII art "Hello World"

**Example Output:**
```
Hello World!

╔════════════════════════════════════╗
║                                    ║
║        Hello World!               ║
║                                    ║
║   Welcome to NovaSphere Project    ║
║                                    ║
╚════════════════════════════════════╝

[2026-01-06 09:29:24] Hello World from Bash!

🌍 Hello World in Multiple Languages:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
English        : Hello World!
Spanish        : ¡Hola Mundo!
...

🎨 ASCII Art:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 _   _      _ _        __        __         _     _ _ 
| | | | ___| | | ___   \ \      / /__  _ __| | __| | |
| |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | |
|  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|
|_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_)
```

---

## 🚀 Quick Start

### Run All Scripts
```bash
# JavaScript
node hello.js

# Node.js CLI
node hello-node.js

# HTTP Server
node hello-server.js

# Bash Script
bash hello.sh

# Open HTML in browser
open hello.html
```

### Test HTTP Server
```bash
# Terminal 1: Start server
node hello-server.js

# Terminal 2: Test endpoints
curl http://localhost:3000
curl http://localhost:3000/json
curl http://localhost:3000/api/hello
curl "http://localhost:3000/api/greet?name=Developer"
```

---

## 🎨 Features Summary

| Script | Type | Interactive | Styled | Multilingual | Server |
|--------|------|-------------|--------|--------------|--------|
| hello.js | JavaScript | ✓ | - | - | - |
| hello.html | HTML/CSS/JS | ✓ | ✓ | - | - |
| hello-node.js | Node.js CLI | - | ✓ | ✓ | - |
| hello-server.js | HTTP Server | ✓ | ✓ | - | ✓ |
| hello.sh | Bash Script | - | ✓ | ✓ | - |

---

## 📦 Requirements

- **Node.js**: v22.14.0 or higher (for .js scripts)
- **Bash**: Any modern bash shell (for .sh script)
- **Browser**: Any modern web browser (for .html file)

---

## 🌟 NovaSphere Branding

All scripts follow the NovaSphere design language:
- **Colors**: Purple gradient (#667eea to #764ba2)
- **Font**: Montserrat
- **Style**: Modern, clean, futuristic

---

## 📝 License

Part of the NovaSphere project.
© 2026 NovaSphere Inc. All rights reserved.
