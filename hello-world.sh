#!/bin/bash

################################################################################
# Hello World - Bash Shell Script Version
# A comprehensive hello world script with various features
################################################################################

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print separator
print_separator() {
    printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' '='
}

# Function to print colored text
print_color() {
    local color=$1
    local text=$2
    echo -e "${color}${text}${NC}"
}

# Main script
clear
echo "Hello, World!"
print_separator

# System information
echo ""
echo "🖥️  System Information:"
echo "   OS: $(uname -s)"
echo "   Kernel: $(uname -r)"
echo "   Architecture: $(uname -m)"
echo "   Hostname: $(hostname)"
echo "   User: $(whoami)"

# Shell information
echo ""
echo "🐚 Shell Information:"
echo "   Shell: $SHELL"
echo "   Bash Version: $BASH_VERSION"
echo "   Current Directory: $(pwd)"
echo "   Script Path: $0"

# Date and time
echo ""
echo "📅 Current Date & Time:"
echo "   $(date '+%Y-%m-%d %H:%M:%S')"
echo "   Day of Week: $(date '+%A')"
echo "   Week Number: $(date '+%V')"

# Colorful output
echo ""
echo "🎨 Colorful Output:"
print_color "$RED" "   Red: Hello, World!"
print_color "$GREEN" "   Green: Hello, World!"
print_color "$YELLOW" "   Yellow: Hello, World!"
print_color "$BLUE" "   Blue: Hello, World!"
print_color "$MAGENTA" "   Magenta: Hello, World!"
print_color "$CYAN" "   Cyan: Hello, World!"

# ASCII Art
echo ""
echo "🎭 ASCII Art:"
cat << "EOF"
  _   _      _ _         __        __         _     _ _ 
 | | | | ___| | | ___    \ \      / /__  _ __| | __| | |
 | |_| |/ _ \ | |/ _ \    \ \ /\ / / _ \| '__| |/ _` | |
 |  _  |  __/ | | (_) |    \ V  V / (_) | |  | | (_| |_|
 |_| |_|\___|_|_|\___/      \_/\_/ \___/|_|  |_|\__,_(_)
                                                         
EOF

# Environment variables
echo ""
echo "🌍 Environment:"
echo "   PATH: ${PATH:0:50}..."
echo "   HOME: $HOME"
echo "   LANG: ${LANG:-Not set}"

# File system information
echo ""
echo "💾 File System:"
echo "   Disk Usage:"
df -h / | tail -1 | awk '{print "      Total: " $2 ", Used: " $3 ", Available: " $4 ", Usage: " $5}'

# Process information
echo ""
echo "⚙️  Process Information:"
echo "   Process ID: $$"
echo "   Parent Process ID: $PPID"
echo "   Number of CPUs: $(nproc 2>/dev/null || sysctl -n hw.ncpu 2>/dev/null || echo 'Unknown')"

# Project information
echo ""
echo "🚀 NovaSphere - The Future of Personal Computing"
echo "   Version: 1.0.0"
echo "   Author: NovaSphere Team"

# Completion message
echo ""
print_separator
print_color "$GREEN" "✅ Hello World script completed successfully!"
echo ""

exit 0
