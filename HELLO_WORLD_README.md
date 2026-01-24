# Hello World Scripts Collection

A comprehensive collection of "Hello World" implementations across **12+ programming languages**, demonstrating syntax, features, and best practices for each language.

## 📋 Overview

This repository contains hello world scripts in:
- **Scripting Languages**: Bash, Python, JavaScript, Node.js, TypeScript, Ruby, PHP
- **Compiled Languages**: C, Java, Go, Rust
- **Query Languages**: SQL
- **Web Technologies**: HTML/CSS/JavaScript

## 📁 Available Scripts

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

### 6. **hello-world.ts** - TypeScript
A comprehensive TypeScript script demonstrating type safety and modern features.

**Run with:**
```bash
ts-node hello-world.ts
# or
npx ts-node hello-world.ts
# or compile first
tsc hello-world.ts && node hello-world.js
```

**Features:**
- Type definitions and interfaces
- Generic functions
- Async/await patterns
- Class-based OOP
- Module exports

---

### 7. **hello-world.c** - C Programming
Classic C program demonstrating fundamental programming concepts.

**Compile and run:**
```bash
gcc hello-world.c -o hello-world-c
./hello-world-c
# or with argument
./hello-world-c YourName
```

**Features:**
- Standard I/O operations
- Function definitions
- Command-line arguments
- Time/date functions
- Memory-safe string handling

---

### 8. **hello-world.java** - Java
Object-oriented Java program showcasing OOP principles.

**Compile and run:**
```bash
javac hello-world.java
java HelloWorld
# or with argument
java HelloWorld YourName
```

**Features:**
- Class-based structure
- Multiple constructors
- Static and instance methods
- Date/time formatting
- Encapsulation

---

### 9. **hello-world.go** - Go (Golang)
Go program demonstrating concurrency and modern language features.

**Run with:**
```bash
go run hello-world.go
# or compile first
go build hello-world.go
./hello-world
```

**Features:**
- Goroutines (concurrent execution)
- Channels for communication
- Struct types and methods
- Package system
- Fast compilation

---

### 10. **hello-world.rs** - Rust
Rust program showcasing memory safety and zero-cost abstractions.

**Compile and run:**
```bash
rustc hello-world.rs
./hello-world
# or with cargo
cargo run
```

**Features:**
- Ownership and borrowing
- Pattern matching
- Option types
- Struct implementations
- Memory safety without garbage collection

---

### 11. **hello-world.rb** - Ruby
Elegant Ruby script demonstrating expressive syntax.

**Run with:**
```bash
./hello-world.rb
# or
ruby hello-world.rb YourName
```

**Features:**
- Blocks and iterators
- Class-based OOP
- String interpolation
- Elegant syntax
- Duck typing

---

### 12. **hello-world.php** - PHP
PHP script that works in both CLI and web environments.

**Run with:**
```bash
./hello-world.php
# or
php hello-world.php YourName
```

**Features:**
- CLI and web compatibility
- Class-based structure
- Array operations
- Date/time functions
- Flexible typing

---

### 13. **hello-world.sql** - SQL
SQL script demonstrating database operations and queries.

**Run with:**
```bash
# SQLite
sqlite3 < hello-world.sql

# PostgreSQL
psql -f hello-world.sql

# MySQL
mysql < hello-world.sql
```

**Features:**
- Table creation
- Data insertion
- Query operations
- Aggregation functions
- Multi-language greetings

---

## 🧪 Testing All Scripts

### Quick Test (Original Scripts)
Run the original test script for basic scripts:

```bash
./test-hello-world.sh
```

### Comprehensive Test (All Languages)
Run the comprehensive test suite for all available scripts:

```bash
./test-all-hello-world.sh
```

This will:
- Test all available scripts automatically
- Compile and test compiled languages (C, Java, Go, Rust)
- Display color-coded results
- Show pass/fail/skip status for each language
- Provide a summary report
- Skip languages that aren't installed

## 📦 Requirements

### Scripting Languages
- **Bash**: Pre-installed on Linux/macOS
- **Python**: Python 3.x
- **JavaScript/Node.js**: Node.js 14+ or compatible runtime
- **TypeScript**: ts-node or TypeScript compiler
- **Ruby**: Ruby 2.x or 3.x
- **PHP**: PHP 7.x or 8.x

### Compiled Languages
- **C**: GCC or Clang compiler
- **Java**: JDK 8+ (javac and java)
- **Go**: Go 1.16+
- **Rust**: Rust 1.50+ (rustc and cargo)

### Database
- **SQL**: SQLite3, PostgreSQL, or MySQL

### Web
- **HTML**: Any modern web browser

## 🚀 Quick Start

### 1. Make Scripts Executable
```bash
chmod +x hello-world.sh hello-world.py hello-world-node.js hello-world.rb hello-world.php hello-world.ts
chmod +x test-hello-world.sh test-all-hello-world.sh
```

### 2. Run Individual Scripts

**Scripting Languages:**
```bash
./hello-world.sh
./hello-world.py
node hello-world.js
./hello-world.rb
./hello-world.php
```

**Compiled Languages:**
```bash
# C
gcc hello-world.c -o hello-world-c && ./hello-world-c

# Java
javac hello-world.java && java HelloWorld

# Go
go run hello-world.go

# Rust
rustc hello-world.rs && ./hello-world
```

### 3. Run Test Suites
```bash
# Basic test
./test-hello-world.sh

# Comprehensive test (all languages)
./test-all-hello-world.sh
```

## 📊 File Descriptions

| File | Language | Type | Size | Features |
|------|----------|------|------|----------|
| hello-world.sh | Bash | Script | ~470 B | Colored output, functions |
| hello-world.py | Python | Script | ~647 B | Interactive input, error handling |
| hello-world.js | JavaScript | Script | ~719 B | Browser & Node.js compatible |
| hello-world-node.js | Node.js | Script | ~1.5 KB | CLI args, async/await |
| hello-world.ts | TypeScript | Script | ~2.8 KB | Type safety, generics, async |
| hello-world.rb | Ruby | Script | ~1.2 KB | OOP, blocks, iterators |
| hello-world.php | PHP | Script | ~1.8 KB | CLI & web, OOP |
| hello-world.c | C | Source | ~892 B | Classic C, stdio |
| hello-world.java | Java | Source | ~2.0 KB | OOP, date formatting |
| hello-world.go | Go | Source | ~1.4 KB | Concurrency, goroutines |
| hello-world.rs | Rust | Source | ~2.2 KB | Memory safety, ownership |
| hello-world.sql | SQL | Query | ~1.5 KB | Tables, queries, i18n |
| hello-world.html | HTML/CSS/JS | Web | ~3.5 KB | Interactive, animated |
| test-hello-world.sh | Bash | Test | ~1.9 KB | Basic test runner |
| test-all-hello-world.sh | Bash | Test | ~8.0 KB | Comprehensive test suite |

## 💡 Language Comparison

### Execution Speed (Approximate)
1. **Compiled** (C, Rust, Go): Fastest - microseconds
2. **JIT Compiled** (Java): Fast - milliseconds
3. **Interpreted** (Python, Ruby, PHP): Moderate - milliseconds
4. **Scripted** (Bash, JavaScript): Variable

### Learning Difficulty
- **Beginner**: Bash, Python, JavaScript
- **Intermediate**: Ruby, PHP, Go, TypeScript
- **Advanced**: C, Java, Rust

### Use Cases
- **Systems Programming**: C, Rust, Go
- **Web Development**: JavaScript, TypeScript, PHP, Ruby
- **Data Science**: Python
- **Enterprise**: Java
- **Scripting/Automation**: Bash, Python
- **Database**: SQL

## 🎯 Features Demonstrated

Each script demonstrates language-specific features:

- **Functions/Methods**: All languages
- **OOP (Classes)**: Java, TypeScript, Ruby, PHP, Rust, Go
- **Concurrency**: Go (goroutines), Rust (async), TypeScript (async/await)
- **Type Safety**: TypeScript, Rust, Go, Java, C
- **Memory Management**: Rust (ownership), C (manual), others (GC)
- **Pattern Matching**: Rust
- **Generics**: TypeScript, Rust, Go, Java

## 📝 Notes

- All scripts are designed to be simple and educational
- Each script includes detailed comments explaining functionality
- Scripts demonstrate idiomatic patterns for each language
- The HTML file is self-contained with inline CSS and JavaScript
- Compiled languages show both compilation and execution
- Test scripts automatically detect available compilers/interpreters

## 🔧 Troubleshooting

### Script Won't Execute
```bash
# Make sure it's executable
chmod +x hello-world.sh

# Check shebang line
head -1 hello-world.sh
```

### Compiler Not Found
```bash
# Install missing compilers (example for Ubuntu/Debian)
sudo apt-get install gcc default-jdk golang rustc ruby php-cli

# For macOS with Homebrew
brew install gcc openjdk go rust ruby php
```

### Node.js Issues
```bash
# Check Node.js version
node --version

# Install Node.js if missing
# Visit: https://nodejs.org/
```

## 📚 Learning Resources

- **C**: [Learn C](https://www.learn-c.org/)
- **Java**: [Oracle Java Tutorials](https://docs.oracle.com/javase/tutorial/)
- **Python**: [Python.org](https://www.python.org/about/gettingstarted/)
- **JavaScript**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **TypeScript**: [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- **Go**: [Tour of Go](https://go.dev/tour/)
- **Rust**: [The Rust Book](https://doc.rust-lang.org/book/)
- **Ruby**: [Ruby Documentation](https://www.ruby-lang.org/en/documentation/)
- **PHP**: [PHP Manual](https://www.php.net/manual/en/)

## 🤝 Contributing

Feel free to add more hello world implementations in other languages:
- Perl, Lua, Haskell, Scala, Kotlin, Swift, etc.

## 📄 License

These are simple demonstration scripts provided as-is for educational purposes.
