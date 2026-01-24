# Hello World Scripts

This directory contains several "Hello World" scripts demonstrating different JavaScript patterns and use cases.

## Scripts Overview

### 1. hello-world.js
**Basic Hello World Script**
- Simple Node.js console output
- Function-based greetings
- Template literals demonstration
- Perfect for beginners

**Usage:**
```bash
node hello-world.js
```

**Output:**
```
Hello World!
Welcome to NovaSphere - The Future of Personal Computing
Hello, World!
Hello, World!
Hello, NovaSphere!
```

---

### 2. hello-world-browser.js
**Browser Hello World Script**
- DOM manipulation
- Dynamic element creation
- CSS animations
- Auto-dismissing notification

**Usage:**
Include in an HTML file:
```html
<script src="hello-world-browser.js"></script>
```

**Features:**
- Creates a styled "Hello World" notification
- Animated fade-in effect
- Auto-removes after 5 seconds
- Responsive design

---

### 3. hello-world-server.js
**HTTP Server Hello World**
- Simple HTTP server
- Multiple routes
- JSON API endpoint
- Graceful shutdown handling

**Usage:**
```bash
node hello-world-server.js
```

**Endpoints:**
- `http://localhost:3000/` - HTML page with styled greeting
- `http://localhost:3000/api/hello` - JSON API response

**Features:**
- Beautiful gradient UI
- Request logging
- Environment variable support (PORT)
- Signal handling (SIGTERM, SIGINT)

---

### 4. hello-world-module.js
**ES6 Module Hello World**
- Modern JavaScript modules
- Export/import patterns
- Class-based implementation
- Multiple greeting languages

**Usage:**
```javascript
import helloWorld, { sayHello, Greeter, greetings } from './hello-world-module.js';

helloWorld();
console.log(sayHello('NovaSphere'));

const greeter = new Greeter('User');
console.log(greeter.greet());
console.log(greeter.greetFormal());

console.log(greetings.spanish); // Hola Mundo
```

**Features:**
- Default and named exports
- Class with multiple methods
- International greetings (10 languages)
- Reusable components

---

### 5. hello-world-async.js
**Async/Await Hello World**
- Asynchronous JavaScript patterns
- Promise handling
- Parallel and sequential execution
- Error handling

**Usage:**
```bash
node hello-world-async.js
```

**Features:**
- Sequential async operations
- Parallel Promise.all() execution
- Async iteration
- Promise chaining
- Comprehensive error handling

**Output:**
```
Starting async hello world...

Sequential greetings:
1. Hello, World!
2. Hello, NovaSphere!

Parallel greetings:
1. Hello, World!
2. Hello, NovaSphere!
3. Hello, Developer!

Async iteration:
- Hello, Alice!
- Hello, Bob!
- Hello, Charlie!

Promise chain:
Hello, Promise!
Hello, Chain!

Async hello world completed!
```

---

## Testing the Scripts

### Prerequisites
- Node.js 22+ (as specified in the environment)
- Modern web browser (for browser script)

### Quick Test Commands

```bash
# Test basic script
node hello-world.js

# Test async script
node hello-world-async.js

# Test server (then visit http://localhost:3000)
node hello-world-server.js

# Test module (requires ES6 module support)
node --input-type=module -e "import('./hello-world-module.js').then(m => m.default())"
```

### Browser Testing

Create a test HTML file:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World Test</title>
</head>
<body>
    <h1>Check the console and top-right corner!</h1>
    <script src="hello-world-browser.js"></script>
</body>
</html>
```

---

## Integration with NovaSphere

These scripts are designed to complement the NovaSphere landing page project:

- **hello-world-browser.js** can be integrated into the existing HTML pages
- **hello-world-server.js** can serve as a development server
- **hello-world-module.js** demonstrates patterns used in modern JavaScript applications
- **hello-world-async.js** shows patterns useful for API calls and data fetching

---

## Learning Path

1. **Beginners**: Start with `hello-world.js`
2. **DOM Manipulation**: Move to `hello-world-browser.js`
3. **Server-Side**: Explore `hello-world-server.js`
4. **Modern JS**: Study `hello-world-module.js`
5. **Advanced Patterns**: Master `hello-world-async.js`

---

## Contributing

These scripts are part of the NovaSphere project and demonstrate various JavaScript patterns and best practices.

## License

Part of the NovaSphere project.
