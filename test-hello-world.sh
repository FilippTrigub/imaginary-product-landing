#!/bin/bash

# Test script for all Hello World implementations
# Part of NovaSphere project

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         NovaSphere Hello World Scripts Test Suite             ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0

# Function to run test
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    echo -e "${BLUE}Testing: ${test_name}${NC}"
    
    if eval "$test_command" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ PASSED${NC}"
        ((TESTS_PASSED++))
    else
        echo -e "${RED}✗ FAILED${NC}"
        ((TESTS_FAILED++))
    fi
    echo ""
}

# Test 1: hello-world.js
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. JavaScript Hello World (hello-world.js)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
run_test "Basic execution" "node hello-world.js"
run_test "Module exports" "node -e \"const {sayHello} = require('./hello-world.js'); console.log(sayHello())\""

# Test 2: hello-world-node.js
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2. Node.js Hello World (hello-world-node.js)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
run_test "Full execution" "node hello-world-node.js"
run_test "Executable permission" "test -x hello-world-node.js"
run_test "Module greet function" "node -e \"const {greet} = require('./hello-world-node.js'); console.log(greet('Test'))\""

# Test 3: hello-world-server.js
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3. HTTP Server (hello-world-server.js)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Start server in background
echo -e "${YELLOW}Starting HTTP server...${NC}"
PORT=3333 node hello-world-server.js > /dev/null 2>&1 &
SERVER_PID=$!
sleep 2

if ps -p $SERVER_PID > /dev/null; then
    echo -e "${GREEN}✓ Server started (PID: $SERVER_PID)${NC}"
    echo ""
    
    # Test endpoints
    run_test "GET / (HTML)" "curl -s http://localhost:3333/ | grep -q 'Hello World Server'"
    run_test "GET /hello (Plain text)" "curl -s http://localhost:3333/hello | grep -q 'Hello World'"
    run_test "GET /json (JSON)" "curl -s http://localhost:3333/json | grep -q '\"message\"'"
    run_test "GET /api/greet/Test" "curl -s http://localhost:3333/api/greet/Test | grep -q 'Test'"
    run_test "GET /time (Timestamp)" "curl -s http://localhost:3333/time | grep -q 'Hello World'"
    run_test "GET /invalid (404)" "curl -s -o /dev/null -w '%{http_code}' http://localhost:3333/invalid | grep -q '404'"
    
    # Stop server
    echo -e "${YELLOW}Stopping server...${NC}"
    kill $SERVER_PID 2>/dev/null
    wait $SERVER_PID 2>/dev/null
    echo -e "${GREEN}✓ Server stopped${NC}"
    echo ""
else
    echo -e "${RED}✗ Failed to start server${NC}"
    ((TESTS_FAILED++))
    echo ""
fi

# Test 4: HTML files
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "4. HTML Files"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
run_test "hello-world.html exists" "test -f hello-world.html"
run_test "hello-world.html valid" "grep -q 'Hello World' hello-world.html"
run_test "hello-world-demo.html exists" "test -f hello-world-demo.html"
run_test "hello-world-demo.html valid" "grep -q 'CSS Effects' hello-world-demo.html"

# Test 5: CSS file
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "5. CSS File"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
run_test "hello-world.css exists" "test -f hello-world.css"
run_test "CSS animations defined" "grep -q '@keyframes' hello-world.css"
run_test "CSS classes defined" "grep -q '.hello-world' hello-world.css"

# Test 6: Documentation
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "6. Documentation"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
run_test "README exists" "test -f HELLO_WORLD_README.md"
run_test "README has content" "test $(wc -l < HELLO_WORLD_README.md) -gt 100"

# Summary
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                        TEST SUMMARY                            ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo -e "${GREEN}Tests Passed: $TESTS_PASSED${NC}"
echo -e "${RED}Tests Failed: $TESTS_FAILED${NC}"
echo ""

# File statistics
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                      FILE STATISTICS                           ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "Files created:"
ls -lh hello-world* HELLO_WORLD_README.md 2>/dev/null | awk '{print "  " $9 " - " $5}'
echo ""
echo "Total lines of code:"
wc -l hello-world* HELLO_WORLD_README.md 2>/dev/null | tail -1
echo ""

# Exit code
if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}╔════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║              ALL TESTS PASSED! ✓                               ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════════════════════════╝${NC}"
    exit 0
else
    echo -e "${RED}╔════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║              SOME TESTS FAILED! ✗                              ║${NC}"
    echo -e "${RED}╚════════════════════════════════════════════════════════════════╝${NC}"
    exit 1
fi
