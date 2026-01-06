# Hello World Scripts Collection

This directory contains multiple "Hello World" implementations for the NovaSphere project in various languages and formats.

## Available Scripts

### 1. **hello.html** - Interactive HTML Page
A beautiful, animated HTML page with styled "Hello World" message.

**Features:**
- Gradient background with glassmorphism effect
- Animated waving hand emoji
- Interactive button with alert
- Responsive design
- Console logging

**Usage:**
```bash
# Open in browser
open hello.html
# or
xdg-open hello.html
```

### 2. **hello.js** - JavaScript (Browser & Node.js)
Universal JavaScript that works in both browser and Node.js environments.

**Features:**
- Console logging
- DOM manipulation (browser only)
- Exportable function
- Module support

**Usage:**
```bash
# In Node.js
node hello.js

# As a module
node -e "console.log(require('./hello.js').sayHello('Developer'))"

# In browser
<script src="hello.js"></script>
```

### 3. **hello-node.js** - Node.js Specific
Comprehensive Node.js implementation with multiple patterns.

**Features:**
- Colored console output with ASCII art
- Function, class, and arrow function implementations
- Async/await example
- Multi-language greetings
- Environment information display

**Usage:**
```bash
# Run directly
node hello-node.js

# Or make executable and run
chmod +x hello-node.js
./hello-node.js

# Use as module
const { greet, Greeter } = require('./hello-node.js');
console.log(greet('World'));
```

### 4. **hello.py** - Python Script
Python implementation with multiple approaches.

**Features:**
- Simple function
- Class-based implementation
- ASCII art display
- Multi-language greetings
- Customizable greeting messages

**Usage:**
```bash
# Run directly
python3 hello.py

# Or make executable and run
chmod +x hello.py
./hello.py

# Import as module
from hello import hello_world, HelloWorld
hello_world()
greeter = HelloWorld("Python")
print(greeter.greet())
```

### 5. **hello.sh** - Bash Script
Shell script with colored output and multiple features.

**Features:**
- Colored ASCII art
- Function-based greetings
- Timestamp display
- Multi-language greetings using associative arrays

**Usage:**
```bash
# Run directly
bash hello.sh

# Or make executable and run
chmod +x hello.sh
./hello.sh
```

## Quick Test All Scripts

Run all hello world scripts at once:

```bash
# Test all scripts
echo "=== Testing hello-node.js ==="
node hello-node.js

echo -e "\n=== Testing hello.py ==="
python3 hello.py

echo -e "\n=== Testing hello.sh ==="
bash hello.sh

echo -e "\n=== Testing hello.js module ==="
node -e "console.log(require('./hello.js').sayHello('Tester'))"
```

## Output Examples

### Node.js Output
```
Hello World!
╔═══════════════════════════════════════╗
║                                       ║
║         HELLO WORLD!                  ║
║         NovaSphere Project            ║
║                                       ║
╚═══════════════════════════════════════╝

=== Different Hello World Implementations ===
Function: Hello Developer!
Arrow Function: Hello NovaSphere!
Class Method: Hello Node.js!
Class Shout: HELLO NODE.JS!
Async: Hello World (async)!

=== Hello World in Multiple Languages ===
English      : Hello World!
Spanish      : ¡Hola Mundo!
French       : Bonjour le Monde!
...
```

### Python Output
```
Hello World!
Hello NovaSphere!

    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║         HELLO WORLD!                  ║
    ║         NovaSphere Project            ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
    
Hello Developer!
HELLO DEVELOPER!

=== Hello World in Multiple Languages ===
English      : Hello World!
Spanish      : ¡Hola Mundo!
...
```

## Integration with NovaSphere Project

These hello world scripts can be integrated into the main NovaSphere project:

1. **hello.html** - Can be linked from the main navigation as a demo page
2. **hello.js** - Can be imported into main.js or script.js
3. **hello-node.js** - Can be used for server-side Node.js applications
4. **hello.py** - Can be used for backend Python services
5. **hello.sh** - Can be used for build scripts and automation

## File Permissions

All scripts have been made executable:
```bash
chmod +x hello.py hello.sh hello-node.js
```

## Requirements

- **Node.js**: v22.14.0 or higher (for JavaScript files)
- **Python**: 3.x (for Python script)
- **Bash**: 4.x or higher (for shell script)
- **Browser**: Modern browser with ES6+ support (for HTML file)

## License

Part of the NovaSphere project © 2026

---

**Note**: All scripts include multi-language greetings and demonstrate various programming patterns and best practices for their respective languages.
