# Hello World Scripts Collection

This directory contains a collection of "Hello World" scripts in various programming languages and formats.

## Available Scripts

### 1. **hello-world.js** - JavaScript Hello World
A simple JavaScript hello world script that works both in Node.js and browser environments.

**Run with:**
```bash
node hello-world.js
```

**Features:**
- Basic console output
- Function-based hello world
- Browser DOM manipulation (when run in browser)

---

### 2. **hello-world.py** - Python Hello World
A Python script demonstrating hello world with functions and interactive input.

**Run with:**
```bash
python3 hello-world.py
# or
./hello-world.py
```

**Features:**
- Basic print statement
- Function-based hello world
- Interactive user input mode
- Error handling for keyboard interrupts

---

### 3. **hello-world.sh** - Bash Shell Script
A bash script showing various ways to display hello world messages.

**Run with:**
```bash
./hello-world.sh
# or
bash hello-world.sh
```

**Features:**
- Basic echo statement
- Function-based hello world
- Colored output using ANSI codes
- Date/time integration

---

### 4. **hello-world-node.js** - Advanced Node.js Script
A comprehensive Node.js script demonstrating various Node.js features.

**Run with:**
```bash
node hello-world-node.js
# or with arguments
node hello-world-node.js NovaSphere
```

**Features:**
- Colored console output
- Environment information display
- Command-line argument handling
- Async/await demonstration
- Module exports for reusability

---

### 5. **hello-world.html** - Interactive HTML Page
A beautiful, interactive HTML page with CSS animations and JavaScript.

**Run with:**
Open the file in any web browser:
```bash
# On Linux
xdg-open hello-world.html

# On macOS
open hello-world.html

# On Windows
start hello-world.html
```

**Features:**
- Modern gradient background
- Glassmorphism design
- CSS animations
- Interactive button with random messages
- Responsive design

---

## Testing All Scripts

Run the comprehensive test script to execute all hello world scripts:

```bash
./test-hello-world.sh
```

This will:
- Test each script automatically
- Display results for each language
- Show which scripts are available
- Provide instructions for manual testing

## Requirements

- **Bash scripts**: Bash shell (usually pre-installed on Linux/macOS)
- **Python scripts**: Python 3.x
- **JavaScript/Node.js scripts**: Node.js runtime
- **HTML file**: Any modern web browser

## Quick Start

1. Make scripts executable:
```bash
chmod +x hello-world.sh hello-world.py hello-world-node.js test-hello-world.sh
```

2. Run individual scripts:
```bash
./hello-world.sh
./hello-world.py
node hello-world.js
node hello-world-node.js
```

3. Or run all tests:
```bash
./test-hello-world.sh
```

## File Descriptions

| File | Language | Size | Executable |
|------|----------|------|------------|
| hello-world.js | JavaScript | ~719 bytes | No |
| hello-world.py | Python | ~647 bytes | Yes |
| hello-world.sh | Bash | ~470 bytes | Yes |
| hello-world-node.js | Node.js | ~1.5 KB | Yes |
| hello-world.html | HTML/CSS/JS | ~3.5 KB | No |
| test-hello-world.sh | Bash | ~1.9 KB | Yes |

## Notes

- All scripts are designed to be simple and educational
- Scripts include comments explaining their functionality
- The HTML file is self-contained with inline CSS and JavaScript
- Scripts are compatible with the NovaSphere project theme

## License

These are simple demonstration scripts provided as-is for educational purposes.
