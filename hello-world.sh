#!/bin/bash

###############################################################################
# Hello World - Bash Script
# NovaSphere Demo Collection
###############################################################################

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

# Clear screen
clear

# Basic Hello World
echo -e "${BOLD}${CYAN}╔════════════════════════════════════════════════╗${RESET}"
echo -e "${BOLD}${CYAN}║           ${MAGENTA}HELLO WORLD!${CYAN}                       ║${RESET}"
echo -e "${BOLD}${CYAN}║           ${YELLOW}NovaSphere Demo${CYAN}                    ║${RESET}"
echo -e "${BOLD}${CYAN}╚════════════════════════════════════════════════╝${RESET}"
echo ""

# Simple Hello World
echo -e "${GREEN}Hello World!${RESET}"
echo ""

# Hello World with timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
echo -e "${BLUE}[${TIMESTAMP}] Hello World!${RESET}"
echo ""

# Hello World with system info
echo -e "${BOLD}System Information:${RESET}"
echo -e "  OS: $(uname -s)"
echo -e "  Kernel: $(uname -r)"
echo -e "  Architecture: $(uname -m)"
echo -e "  Hostname: $(hostname)"
echo -e "  User: $(whoami)"
echo ""

# Hello World in ASCII art
echo -e "${BOLD}${MAGENTA}"
cat << "EOF"
  _   _      _ _        __        __         _     _ _ 
 | | | | ___| | | ___   \ \      / /__  _ __| | __| | |
 | |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` | |
 |  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|
 |_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_)
EOF
echo -e "${RESET}"
echo ""

# Hello World in different languages
echo -e "${BOLD}Hello World in Multiple Languages:${RESET}"
echo -e "  🇺🇸 English:    Hello World!"
echo -e "  🇪🇸 Spanish:    ¡Hola Mundo!"
echo -e "  🇫🇷 French:     Bonjour le Monde!"
echo -e "  🇩🇪 German:     Hallo Welt!"
echo -e "  🇮🇹 Italian:    Ciao Mondo!"
echo -e "  🇯🇵 Japanese:   こんにちは世界!"
echo -e "  🇨🇳 Chinese:    你好世界!"
echo -e "  🇷🇺 Russian:    Привет мир!"
echo ""

# Hello World with a function
greet() {
    local name=${1:-"World"}
    echo "Hello ${name}!"
}

echo -e "${BOLD}Function Output:${RESET}"
echo -e "  $(greet)"
echo -e "  $(greet "NovaSphere")"
echo -e "  $(greet "Developer")"
echo ""

# Hello World with loop
echo -e "${BOLD}Hello World Loop (5 times):${RESET}"
for i in {1..5}; do
    echo -e "  ${YELLOW}[$i]${RESET} Hello World!"
done
echo ""

# Success message
echo -e "${GREEN}${BOLD}✓ All Hello World scripts completed successfully!${RESET}"
echo ""
