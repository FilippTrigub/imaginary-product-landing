# Hello World Scripts Collection

This repository contains Hello World examples in multiple programming languages and formats.

## 📋 Table of Contents

- [Programming Languages](#programming-languages)
- [Scripting Languages](#scripting-languages)
- [Data Formats](#data-formats)
- [Build Tools](#build-tools)
- [Running the Scripts](#running-the-scripts)

## 🖥️ Programming Languages

### JavaScript (Node.js)

**Files:**
- `hello-world.js` - Basic JavaScript with functions and classes
- `hello-world-node.js` - Node.js with HTTP server
- `hello-world-es6.js` - Modern ES6+ features
- `hello-world-dom.js` - DOM manipulation examples

**Run:**
```bash
node hello-world.js
node hello-world-node.js
```

### Python

**Files:**
- `hello-world.py` - Basic Python with functions, classes, decorators, generators
- `hello-world-advanced.py` - Advanced Python with type hints, async/await, dataclasses

**Run:**
```bash
python3 hello-world.py
python3 hello-world-advanced.py
```

**Features demonstrated:**
- Functions and lambda expressions
- Classes and OOP
- Decorators
- Context managers
- Generators
- Async/await
- Type hints
- Dataclasses
- Enums
- Protocols

### C

**File:** `hello-world.c`

**Compile and run:**
```bash
gcc -o hello-world hello-world.c -Wall
./hello-world
```

**Features demonstrated:**
- Basic I/O with printf
- Functions
- Structs
- Dynamic memory allocation
- Arrays
- Command line arguments

## 📜 Scripting Languages

### Bash

**File:** `hello-world.sh`

**Run:**
```bash
bash hello-world.sh
# or
chmod +x hello-world.sh
./hello-world.sh
```

**Features demonstrated:**
- Variables
- Functions
- Arrays
- Loops (for, while)
- Conditionals
- Case statements
- Here documents
- Command substitution

### Perl

**File:** `hello-world.pl`

**Run:**
```bash
perl hello-world.pl
# or
chmod +x hello-world.pl
./hello-world.pl
```

**Features demonstrated:**
- Subroutines
- Arrays and hashes
- Regular expressions
- Object-oriented programming
- Map and grep functions
- Anonymous subroutines

### AWK

**File:** `hello-world.awk`

**Run:**
```bash
awk -f hello-world.awk
# or
chmod +x hello-world.awk
./hello-world.awk
```

**Features demonstrated:**
- BEGIN block
- Variables
- Arrays (indexed and associative)
- Functions
- Conditionals
- Loops

### sed

**File:** `hello-world.sed`

**Run:**
```bash
echo "" | sed -f hello-world.sed
# or
chmod +x hello-world.sed
echo "" | ./hello-world.sed
```

**Features demonstrated:**
- Insert command
- Text transformation

## 🌐 Web

### HTML

**File:** `hello-world.html`

**Run:**
Open in a web browser:
```bash
# On Linux with a browser
xdg-open hello-world.html

# Or serve with Python
python3 -m http.server 8000
# Then visit http://localhost:8000/hello-world.html
```

**Features demonstrated:**
- HTML structure
- CSS styling
- JavaScript interactivity
- Responsive design

## 📊 Data Formats

### JSON

**File:** `hello-world.json`

**Validate and view:**
```bash
cat hello-world.json | python3 -m json.tool
# or
cat hello-world.json | jq .
```

**Contains:**
- Greetings in multiple languages
- Structured data examples
- Metadata

### XML

**File:** `hello-world.xml`

**View:**
```bash
cat hello-world.xml
# or with xmllint (if available)
xmllint --format hello-world.xml
```

**Contains:**
- XML structure
- Greetings in multiple languages
- Nested elements

### YAML

**File:** `hello-world.yaml`

**View:**
```bash
cat hello-world.yaml
# or with Python
python3 -c "import yaml; print(yaml.safe_load(open('hello-world.yaml')))"
```

**Contains:**
- YAML syntax examples
- Lists and dictionaries
- Multi-line strings
- Comments

## 🗄️ Database

### SQL

**File:** `hello-world.sql`

**Run (requires SQLite):**
```bash
sqlite3 < hello-world.sql
```

**Features demonstrated:**
- SELECT statements
- CREATE TABLE
- INSERT data
- UNION queries
- Aggregate functions
- CASE statements
- Subqueries

## 🔧 Build Tools

### Makefile

**File:** `Makefile`

**Run:**
```bash
# Show help
make help

# Basic hello
make hello

# Multiple greetings
make greet

# Greet with custom name
make greet-name NAME="YourName"

# Greet in a loop
make greet-loop

# Run all tests
make test

# Clean compiled files
make clean
```

**Features demonstrated:**
- Targets and dependencies
- Variables
- Phony targets
- Loops in recipes
- Conditional compilation

## 🚀 Quick Test All Scripts

Run all scripts at once:

```bash
# JavaScript
echo "=== JavaScript ===" && node hello-world.js

# Python
echo "=== Python ===" && python3 hello-world.py

# Bash
echo "=== Bash ===" && bash hello-world.sh

# Perl
echo "=== Perl ===" && perl hello-world.pl

# C (compile first)
echo "=== C ===" && gcc -o hello-world hello-world.c && ./hello-world

# AWK
echo "=== AWK ===" && awk -f hello-world.awk

# sed
echo "=== sed ===" && echo "" | sed -f hello-world.sed

# Makefile
echo "=== Makefile ===" && make hello
```

Or use the Makefile:
```bash
make test
```

## 📝 Summary

This collection includes Hello World examples in:

### Compiled Languages
- ✅ C

### Interpreted Languages
- ✅ JavaScript (Node.js)
- ✅ Python
- ✅ Bash
- ✅ Perl
- ✅ AWK
- ✅ sed

### Web Technologies
- ✅ HTML/CSS/JavaScript

### Data Formats
- ✅ JSON
- ✅ XML
- ✅ YAML

### Query Languages
- ✅ SQL

### Build Tools
- ✅ Makefile

## 🎯 Features Demonstrated Across Languages

- **Basic Output**: Print/echo statements
- **Variables**: String, numeric, arrays
- **Functions/Subroutines**: Function definitions and calls
- **Control Flow**: Conditionals, loops
- **Data Structures**: Arrays, hashes/dictionaries, objects
- **Object-Oriented Programming**: Classes, methods, inheritance
- **Functional Programming**: Lambda functions, map, filter
- **Advanced Features**: Decorators, generators, async/await
- **I/O Operations**: File handling, user input
- **String Manipulation**: Concatenation, formatting, templates

## 📚 Learning Resources

Each script is heavily commented to explain the concepts being demonstrated. Start with the basic scripts and progress to the advanced ones to learn different programming paradigms and language features.

## 🤝 Contributing

Feel free to add more Hello World examples in other languages or improve existing ones!

## 📄 License

These are simple educational examples - feel free to use them however you like!
