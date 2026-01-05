#!/bin/bash

# Hello World in Bash
echo "Hello World!"

# With colors
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
NC='\033[0m' # No Color

echo -e "${CYAN}╔═══════════════════════════════════════╗${NC}"
echo -e "${CYAN}║                                       ║${NC}"
echo -e "${CYAN}║${NC}         ${MAGENTA}HELLO WORLD!${NC}                  ${CYAN}║${NC}"
echo -e "${CYAN}║${NC}         ${GREEN}NovaSphere v2${NC}                 ${CYAN}║${NC}"
echo -e "${CYAN}║                                       ║${NC}"
echo -e "${CYAN}╚═══════════════════════════════════════╝${NC}"

# Function version
greet() {
    local name=${1:-World}
    echo -e "${GREEN}Hello ${name}!${NC}"
}

greet
greet "Developer"
