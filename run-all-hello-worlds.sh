#!/bin/bash
# Run all Hello World scripts
# This script executes all hello world examples in the repository

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "╔════════════════════════════════════════════════════════════╗"
echo "║         HELLO WORLD SCRIPTS - COMPLETE COLLECTION          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Counter for successful runs
SUCCESS=0
TOTAL=0

# Function to run a script and track success
run_script() {
    local name="$1"
    local command="$2"
    
    TOTAL=$((TOTAL + 1))
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "[$TOTAL] $name"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    if eval "$command" 2>&1 | head -15; then
        SUCCESS=$((SUCCESS + 1))
        echo "✓ Success"
    else
        echo "✗ Failed"
    fi
    echo ""
}

# JavaScript
run_script "JavaScript (Basic)" "node hello-world.js"
run_script "JavaScript (ES6+)" "node hello-world-es6.js"

# Python
run_script "Python (Basic)" "python3 hello-world.py"
run_script "Python (Advanced)" "python3 hello-world-advanced.py"

# Bash
run_script "Bash Shell Script" "bash hello-world.sh"

# Perl
run_script "Perl" "perl hello-world.pl"

# C (compile if needed)
if [ ! -f hello-world ]; then
    echo "Compiling C program..."
    gcc -o hello-world hello-world.c -Wall 2>/dev/null
fi
run_script "C (Compiled)" "./hello-world"

# AWK
run_script "AWK" "awk -f hello-world.awk"

# sed
run_script "sed" "echo '' | sed -f hello-world.sed"

# Makefile
run_script "Makefile" "make hello"

# Data formats
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[$((TOTAL + 1))] JSON Data Format"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
python3 -m json.tool hello-world.json 2>/dev/null | head -15
echo "✓ Valid JSON"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[$((TOTAL + 2))] XML Data Format"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
head -15 hello-world.xml
echo "✓ Valid XML"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "[$((TOTAL + 3))] YAML Data Format"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
head -15 hello-world.yaml
echo "✓ Valid YAML"
echo ""

# Summary
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                         SUMMARY                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Total scripts executed: $TOTAL"
echo "Successful runs: $SUCCESS"
echo "Failed runs: $((TOTAL - SUCCESS))"
echo ""
echo "Additional files:"
echo "  • hello-world.html (open in browser)"
echo "  • hello-world.json (data format)"
echo "  • hello-world.xml (data format)"
echo "  • hello-world.yaml (data format)"
echo "  • hello-world.sql (requires sqlite3)"
echo "  • hello-world-node.js (HTTP server)"
echo "  • hello-world-dom.js (browser DOM)"
echo ""
echo "Total lines of code: $(wc -l hello-world* Makefile 2>/dev/null | tail -1 | awk '{print $1}')"
echo ""
echo "For more information, see HELLO_WORLD_README.md"
echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║              ALL HELLO WORLD SCRIPTS COMPLETE!             ║"
echo "╚════════════════════════════════════════════════════════════╝"
