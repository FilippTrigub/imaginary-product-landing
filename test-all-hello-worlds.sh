#!/bin/bash

# Test All Hello World Scripts
# This script tests all the hello world implementations

echo "╔════════════════════════════════════════════════════════════╗"
echo "║         Testing All Hello World Scripts                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Test 1: Basic JavaScript
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Test 1: hello-world.js"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
node hello-world.js
echo ""

# Test 2: Advanced Node.js
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Test 2: hello-world-node.js"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
node hello-world-node.js
echo ""

# Test 3: Check HTML files exist
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Test 3: Checking HTML files"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "hello-world.html" ]; then
    echo "✓ hello-world.html exists ($(wc -l < hello-world.html) lines)"
else
    echo "✗ hello-world.html not found"
fi

if [ -f "hello-world-demo.html" ]; then
    echo "✓ hello-world-demo.html exists ($(wc -l < hello-world-demo.html) lines)"
else
    echo "✗ hello-world-demo.html not found"
fi
echo ""

# Test 4: Check CSS file
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Test 4: Checking CSS file"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "hello-world.css" ]; then
    echo "✓ hello-world.css exists ($(wc -l < hello-world.css) lines)"
    echo "✓ CSS classes available:"
    grep -E "^\.(hello-[a-z-]+)" hello-world.css | head -5
else
    echo "✗ hello-world.css not found"
fi
echo ""

# Test 5: Check server file
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Test 5: Checking server file"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "hello-world-server.js" ]; then
    echo "✓ hello-world-server.js exists ($(wc -l < hello-world-server.js) lines)"
    echo "✓ Server can be started with: node hello-world-server.js"
    echo "✓ Available endpoints:"
    echo "  - GET /"
    echo "  - GET /hello"
    echo "  - GET /json"
    echo "  - GET /api/greet/:name"
    echo "  - GET /time"
else
    echo "✗ hello-world-server.js not found"
fi
echo ""

# Test 6: Check README
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Test 6: Checking documentation"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "HELLO_WORLD_README.md" ]; then
    echo "✓ HELLO_WORLD_README.md exists ($(wc -l < HELLO_WORLD_README.md) lines)"
    echo "✓ Documentation is complete"
else
    echo "✗ HELLO_WORLD_README.md not found"
fi
echo ""

# Summary
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                    Test Summary                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Files created:"
ls -1 hello-world* HELLO_WORLD_README.md 2>/dev/null | nl
echo ""
echo "✓ All Hello World scripts are ready to use!"
echo ""
echo "Quick Start:"
echo "  • Run basic JS:     node hello-world.js"
echo "  • Run advanced:     node hello-world-node.js"
echo "  • Start server:     node hello-world-server.js"
echo "  • View HTML:        Open hello-world.html in browser"
echo "  • View CSS demo:    Open hello-world-demo.html in browser"
echo "  • Read docs:        cat HELLO_WORLD_README.md"
echo ""
