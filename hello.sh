#!/bin/bash

###############################################################################
# Hello World Shell Script
# Run with: bash hello.sh or ./hello.sh (after chmod +x hello.sh)
###############################################################################

# Simple hello world
echo "Hello, World!"

# With colors (if terminal supports it)
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo ""
echo -e "${PURPLE}================================${NC}"
echo -e "${CYAN}  Hello from NovaSphere!${NC}"
echo -e "${PURPLE}================================${NC}"
echo ""

# Display some system info
echo -e "${GREEN}Current User:${NC} $(whoami)"
echo -e "${GREEN}Current Directory:${NC} $(pwd)"
echo -e "${GREEN}Current Date:${NC} $(date)"
echo -e "${GREEN}Hostname:${NC} $(hostname)"

echo ""
echo -e "${BLUE}Thank you for running this script!${NC}"
echo ""

# Function example
greet() {
    local name=${1:-"World"}
    echo -e "${GREEN}Hello, ${name}!${NC}"
}

# Call the function
greet "Developer"

exit 0
