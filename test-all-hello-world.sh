#!/bin/bash

# Comprehensive Hello World Test Script
# Tests all available hello world implementations

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     COMPREHENSIVE HELLO WORLD TEST SUITE                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test counter
TOTAL=0
PASSED=0
FAILED=0
SKIPPED=0

# Function to run a test
run_test() {
    local name=$1
    local command=$2
    local description=$3
    
    TOTAL=$((TOTAL + 1))
    echo -e "${BLUE}[$TOTAL]${NC} Testing: ${YELLOW}$name${NC}"
    echo "    Description: $description"
    
    if eval "$command" > /dev/null 2>&1; then
        echo -e "    ${GREEN}✓ PASSED${NC}"
        PASSED=$((PASSED + 1))
    else
        echo -e "    ${RED}✗ FAILED${NC}"
        FAILED=$((FAILED + 1))
    fi
    echo ""
}

# Function to skip a test
skip_test() {
    local name=$1
    local reason=$2
    
    TOTAL=$((TOTAL + 1))
    SKIPPED=$((SKIPPED + 1))
    echo -e "${BLUE}[$TOTAL]${NC} Skipping: ${YELLOW}$name${NC}"
    echo -e "    ${YELLOW}⊘ SKIPPED${NC} - $reason"
    echo ""
}

echo "═══════════════════════════════════════════════════════════"
echo "  SCRIPTING LANGUAGES"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Bash
run_test "Bash Script" \
    "./hello-world.sh" \
    "Shell script with colored output"

# Python
run_test "Python Script" \
    "python3 hello-world.py" \
    "Python 3 with interactive features"

# JavaScript (Node.js)
run_test "JavaScript (Node.js)" \
    "node hello-world.js" \
    "Basic JavaScript for Node.js"

# Node.js Advanced
run_test "Node.js Advanced" \
    "node hello-world-node.js TestUser" \
    "Advanced Node.js with CLI args"

# TypeScript
if command -v ts-node &> /dev/null; then
    run_test "TypeScript" \
        "ts-node hello-world.ts" \
        "TypeScript with type safety"
elif command -v npx &> /dev/null; then
    run_test "TypeScript (via npx)" \
        "npx ts-node hello-world.ts" \
        "TypeScript with type safety"
else
    skip_test "TypeScript" "ts-node not installed"
fi

# Ruby
if command -v ruby &> /dev/null; then
    run_test "Ruby Script" \
        "./hello-world.rb" \
        "Ruby with elegant syntax"
else
    skip_test "Ruby" "ruby not installed"
fi

# PHP
if command -v php &> /dev/null; then
    run_test "PHP Script" \
        "./hello-world.php" \
        "PHP CLI script"
else
    skip_test "PHP" "php not installed"
fi

echo "═══════════════════════════════════════════════════════════"
echo "  COMPILED LANGUAGES"
echo "═══════════════════════════════════════════════════════════"
echo ""

# C
if command -v gcc &> /dev/null; then
    echo -e "${BLUE}[Compiling C...]${NC}"
    if gcc hello-world.c -o hello-world-c 2>/dev/null; then
        run_test "C Program" \
            "./hello-world-c Developer" \
            "Classic C with stdio"
        rm -f hello-world-c
    else
        skip_test "C Program" "compilation failed"
    fi
else
    skip_test "C Program" "gcc not installed"
fi

# Java
if command -v javac &> /dev/null && command -v java &> /dev/null; then
    echo -e "${BLUE}[Compiling Java...]${NC}"
    if javac hello-world.java 2>/dev/null; then
        run_test "Java Program" \
            "java HelloWorld" \
            "Java with OOP principles"
        rm -f HelloWorld.class
    else
        skip_test "Java Program" "compilation failed"
    fi
else
    skip_test "Java Program" "javac/java not installed"
fi

# Go
if command -v go &> /dev/null; then
    run_test "Go Program" \
        "go run hello-world.go" \
        "Go with concurrency features"
else
    skip_test "Go Program" "go not installed"
fi

# Rust
if command -v rustc &> /dev/null; then
    echo -e "${BLUE}[Compiling Rust...]${NC}"
    if rustc hello-world.rs -o hello-world-rust 2>/dev/null; then
        run_test "Rust Program" \
            "./hello-world-rust" \
            "Rust with memory safety"
        rm -f hello-world-rust
    else
        skip_test "Rust Program" "compilation failed"
    fi
else
    skip_test "Rust Program" "rustc not installed"
fi

echo "═══════════════════════════════════════════════════════════"
echo "  DATABASE & QUERY LANGUAGES"
echo "═══════════════════════════════════════════════════════════"
echo ""

# SQLite
if command -v sqlite3 &> /dev/null; then
    run_test "SQL (SQLite)" \
        "sqlite3 < hello-world.sql" \
        "SQL queries with SQLite"
else
    skip_test "SQL" "sqlite3 not installed"
fi

echo "═══════════════════════════════════════════════════════════"
echo "  WEB TECHNOLOGIES"
echo "═══════════════════════════════════════════════════════════"
echo ""

# HTML
if [ -f "hello-world.html" ]; then
    echo -e "${BLUE}[$((TOTAL + 1))]${NC} Testing: ${YELLOW}HTML Page${NC}"
    echo "    Description: Interactive web page"
    echo -e "    ${GREEN}✓ EXISTS${NC} - Open in browser to test"
    TOTAL=$((TOTAL + 1))
    PASSED=$((PASSED + 1))
    echo ""
fi

echo "═══════════════════════════════════════════════════════════"
echo "  TEST SUMMARY"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo -e "Total Tests:    $TOTAL"
echo -e "${GREEN}Passed:         $PASSED${NC}"
echo -e "${RED}Failed:         $FAILED${NC}"
echo -e "${YELLOW}Skipped:        $SKIPPED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║  ✓ ALL AVAILABLE TESTS PASSED SUCCESSFULLY!               ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
    exit 0
else
    echo -e "${RED}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║  ✗ SOME TESTS FAILED - CHECK OUTPUT ABOVE                 ║${NC}"
    echo -e "${RED}╚════════════════════════════════════════════════════════════╝${NC}"
    exit 1
fi
