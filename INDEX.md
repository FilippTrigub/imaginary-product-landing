# Hello World Scripts - Quick Index

## 🎯 Start Here

**New to programming?** Start with these files:
1. `HELLO_WORLD_SUMMARY.txt` - Overview of everything
2. `HELLO_WORLD_README.md` - Detailed documentation
3. `hello-world.js` - Your first JavaScript program

**Want to run everything?**
```bash
./run-all-hello-worlds.sh
```

## 📂 File Organization

### Executable Scripts (Ready to Run)
```
./hello-world.js              # JavaScript basics
./hello-world-es6.js          # Modern JavaScript
./hello-world.py              # Python basics
./hello-world-advanced.py     # Advanced Python
./hello-world.sh              # Bash scripting
./hello-world.pl              # Perl scripting
./hello-world.awk             # AWK text processing
```

### Compiled Programs
```
hello-world.c                 # C source code
hello-world                   # Compiled C executable
```

### Web Files
```
hello-world.html              # Open in browser
hello-world-node.js           # Node.js HTTP server
hello-world-dom.js            # Browser DOM manipulation
```

### Data Files
```
hello-world.json              # JSON format
hello-world.xml               # XML format
hello-world.yaml              # YAML format
hello-world.sql               # SQL queries
```

### Build & Automation
```
Makefile                      # Build automation
run-all-hello-worlds.sh       # Run all scripts
```

### Documentation
```
HELLO_WORLD_README.md         # Complete guide
HELLO_WORLD_SUMMARY.txt       # Quick summary
INDEX.md                      # This file
```

## 🚀 Quick Commands

### Run Individual Scripts
```bash
# JavaScript
node hello-world.js
node hello-world-es6.js

# Python
python3 hello-world.py
python3 hello-world-advanced.py

# Shell Scripts
bash hello-world.sh
perl hello-world.pl
awk -f hello-world.awk
echo "" | sed -f hello-world.sed

# C Program
gcc -o hello-world hello-world.c && ./hello-world

# Make
make hello
make greet
make help
```

### View Data Files
```bash
# JSON
cat hello-world.json | python3 -m json.tool

# XML
cat hello-world.xml

# YAML
cat hello-world.yaml

# SQL (requires sqlite3)
sqlite3 < hello-world.sql
```

### Web Files
```bash
# Open HTML in browser
xdg-open hello-world.html  # Linux
open hello-world.html      # macOS

# Start Node.js server
node hello-world-node.js
# Then visit http://localhost:3000
```

## 📊 Statistics

- **Total Files**: 18
- **Languages**: 10+
- **Lines of Code**: 1000+
- **Total Size**: ~332KB

## 🎓 Learning Path

### Beginner (Start Here)
1. `hello-world.js` - Learn JavaScript basics
2. `hello-world.py` - Learn Python basics
3. `hello-world.html` - See it in a browser
4. `hello-world.sh` - Learn shell scripting

### Intermediate
1. `hello-world-es6.js` - Modern JavaScript features
2. `hello-world.c` - Compiled language basics
3. `hello-world.pl` - Perl text processing
4. `Makefile` - Build automation

### Advanced
1. `hello-world-advanced.py` - Advanced Python patterns
2. `hello-world-node.js` - HTTP server creation
3. `hello-world-dom.js` - Browser APIs
4. Data formats (JSON, XML, YAML)

## 🔍 What Each File Demonstrates

| File | Key Concepts |
|------|-------------|
| `hello-world.js` | Functions, classes, basic syntax |
| `hello-world-es6.js` | Arrow functions, promises, async/await |
| `hello-world.py` | Functions, classes, decorators, generators |
| `hello-world-advanced.py` | Type hints, dataclasses, protocols, async |
| `hello-world.c` | Pointers, structs, memory management |
| `hello-world.sh` | Variables, loops, conditionals, arrays |
| `hello-world.pl` | Hashes, regex, OOP in Perl |
| `hello-world.awk` | Pattern matching, text processing |
| `hello-world.html` | HTML structure, CSS styling, JS events |
| `Makefile` | Build targets, dependencies, automation |

## 💡 Tips

1. **Make scripts executable**: `chmod +x hello-world.sh`
2. **Run from any directory**: Use absolute paths
3. **Check syntax**: Most scripts have built-in error handling
4. **Read comments**: Each script is heavily documented
5. **Experiment**: Modify scripts to learn more

## 🐛 Troubleshooting

**Script won't run?**
- Check if it's executable: `ls -l hello-world.sh`
- Make it executable: `chmod +x hello-world.sh`

**Command not found?**
- Check if the interpreter is installed: `which python3`
- Install if needed: `dnf install python3`

**C program won't compile?**
- Install GCC: `dnf install gcc`
- Check for errors: `gcc -Wall hello-world.c`

## 📚 Additional Resources

- **Documentation**: See `HELLO_WORLD_README.md` for detailed info
- **Summary**: See `HELLO_WORLD_SUMMARY.txt` for overview
- **Run All**: Execute `./run-all-hello-worlds.sh` to test everything

## ✨ Features

✅ Multiple programming languages
✅ Comprehensive examples
✅ Well-documented code
✅ Tested and verified
✅ Ready to run
✅ Educational comments
✅ Best practices
✅ Error handling

---

**Happy Learning! 🚀**

For questions or issues, refer to the detailed documentation in `HELLO_WORLD_README.md`.
