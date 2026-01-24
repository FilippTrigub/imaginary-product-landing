#!/bin/bash
# Test script to run all hello world scripts

echo "=========================================="
echo "Testing Hello World Scripts"
echo "=========================================="
echo ""

# Test Bash script
echo "1. Testing Bash Hello World (hello-world.sh):"
echo "------------------------------------------"
if [ -f hello-world.sh ]; then
    ./hello-world.sh
    echo ""
else
    echo "Error: hello-world.sh not found"
fi

# Test Python script
echo "2. Testing Python Hello World (hello-world.py):"
echo "------------------------------------------"
if [ -f hello-world.py ]; then
    echo "" | python3 hello-world.py
    echo ""
else
    echo "Error: hello-world.py not found"
fi

# Test JavaScript (if node is available)
echo "3. Testing JavaScript Hello World (hello-world.js):"
echo "------------------------------------------"
if command -v node &> /dev/null; then
    node hello-world.js
    echo ""
else
    echo "Node.js not found - skipping JavaScript test"
    echo "To run manually: node hello-world.js"
    echo ""
fi

# Test Node.js script (if node is available)
echo "4. Testing Node.js Hello World (hello-world-node.js):"
echo "------------------------------------------"
if command -v node &> /dev/null; then
    node hello-world-node.js
    echo ""
else
    echo "Node.js not found - skipping Node.js test"
    echo "To run manually: node hello-world-node.js [name]"
    echo ""
fi

# Info about HTML file
echo "5. HTML Hello World (hello-world.html):"
echo "------------------------------------------"
if [ -f hello-world.html ]; then
    echo "HTML file created successfully!"
    echo "To view: Open hello-world.html in a web browser"
    echo "File size: $(wc -c < hello-world.html) bytes"
    echo ""
else
    echo "Error: hello-world.html not found"
fi

echo "=========================================="
echo "All tests completed!"
echo "=========================================="
