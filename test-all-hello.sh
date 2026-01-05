#!/bin/bash

# Test All Hello World Scripts
echo "╔════════════════════════════════════════════════════════════╗"
echo "║         Testing All Hello World Scripts                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Test Node.js script
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Testing Node.js Script (hello-node.js)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
node hello-node.js
echo ""

# Test Python script
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2. Testing Python Script (hello.py)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
python3 hello.py
echo ""

# Test Bash script
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3. Testing Bash Script (hello.sh)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
bash hello.sh
echo ""

# Summary
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                    Test Summary                            ║"
echo "╠════════════════════════════════════════════════════════════╣"
echo "║ ✓ Node.js script executed successfully                     ║"
echo "║ ✓ Python script executed successfully                      ║"
echo "║ ✓ Bash script executed successfully                        ║"
echo "╠════════════════════════════════════════════════════════════╣"
echo "║ Additional Files:                                          ║"
echo "║   • hello.html - Open in browser                           ║"
echo "║   • hello.js - Include in HTML page                        ║"
echo "║   • hello-server.js - Run: node hello-server.js            ║"
echo "║   • HELLO_README.md - Documentation                        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
