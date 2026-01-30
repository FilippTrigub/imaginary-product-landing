# Hello World Scripts

This directory contains various "Hello World" scripts in different programming languages and formats.

## Available Scripts

### 1. Python Script (`hello.py`)
A simple Python hello world script.

**Run:**
```bash
python3 hello.py
# or
./hello.py
```

### 2. Node.js Script (`hello.js`)
A simple Node.js/JavaScript hello world script.

**Run:**
```bash
node hello.js
# or
./hello.js
```

### 3. Bash Script (`hello.sh`)
A simple Bash shell script.

**Run:**
```bash
bash hello.sh
# or
./hello.sh
```

### 4. HTML Page (`hello.html`)
A styled HTML hello world page with animations.

**View:**
- Open directly in a web browser
- Or serve with a local server:
```bash
python3 -m http.server 8000
# Then visit: http://localhost:8000/hello.html
```

### 5. HTTP Server (`hello-server.js`)
A simple Node.js HTTP server that serves a hello world page.

**Run:**
```bash
node hello-server.js
# Then visit: http://localhost:3000
```

**Stop:** Press `Ctrl+C`

## Features

- ✅ All scripts are executable (chmod +x applied)
- ✅ Shebang lines included for direct execution
- ✅ Consistent "Hello, World!" messaging
- ✅ NovaSphere branding included
- ✅ Tested and verified working

## Quick Test All Scripts

```bash
# Test Python
python3 hello.py

# Test Node.js
node hello.js

# Test Bash
bash hello.sh

# View HTML (open in browser)
open hello.html  # macOS
xdg-open hello.html  # Linux

# Test HTTP Server
node hello-server.js
```

## Notes

- All scripts output "Hello, World!" and welcome messages
- The HTML page and HTTP server include styled interfaces matching the NovaSphere theme
- Scripts are compatible with the Amazon Linux 2023 environment
