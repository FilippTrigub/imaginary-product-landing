#!/bin/bash

# Script to run all Hello World programs

echo "╔════════════════════════════════════════╗"
echo "║   Testing All Hello World Scripts     ║"
echo "╚════════════════════════════════════════╝"
echo ""

# JavaScript
if command -v node &> /dev/null; then
    echo "▶ Running JavaScript (Node.js):"
    echo "-----------------------------------"
    node hello.js
    echo ""
fi

# Python
if command -v python3 &> /dev/null; then
    echo "▶ Running Python:"
    echo "-----------------------------------"
    python3 hello.py
    echo ""
fi

# Bash
echo "▶ Running Bash Script:"
echo "-----------------------------------"
bash hello.sh
echo ""

# C (compile and run)
if command -v gcc &> /dev/null; then
    echo "▶ Compiling and Running C:"
    echo "-----------------------------------"
    gcc hello.c -o hello_c
    if [ $? -eq 0 ]; then
        ./hello_c
        rm -f hello_c
    else
        echo "Failed to compile C program"
    fi
    echo ""
fi

# Java (compile and run)
if command -v javac &> /dev/null; then
    echo "▶ Compiling and Running Java:"
    echo "-----------------------------------"
    javac hello.java
    if [ $? -eq 0 ]; then
        java hello
        rm -f hello.class
    else
        echo "Failed to compile Java program"
    fi
    echo ""
fi

echo "╔════════════════════════════════════════╗"
echo "║   All Tests Complete!                  ║"
echo "╚════════════════════════════════════════╝"
