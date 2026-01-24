#!/bin/bash

###############################################################################
# Hello World - Bash Script
# A simple shell script that prints "Hello, World!" and system information
###############################################################################

# Basic hello world
echo "Hello, World!"
echo "Welcome to NovaSphere!"
echo ""

# Function to greet user
greet_user() {
    local name=$1
    echo "Hello, $name!"
}

# Greet the current user
greet_user "$USER"

# Display some system information
echo ""
echo "=== System Information ==="
echo "Date: $(date)"
echo "Hostname: $(hostname)"
echo "Current Directory: $(pwd)"
echo "Shell: $SHELL"

# ASCII Art
echo ""
echo "  _   _      _ _         __        __         _     _ _ "
echo " | | | | ___| | | ___    \ \      / /__  _ __| | __| | |"
echo " | |_| |/ _ \ | |/ _ \    \ \ /\ / / _ \| '__| |/ _\` | |"
echo " |  _  |  __/ | | (_) |    \ V  V / (_) | |  | | (_| |_|"
echo " |_| |_|\___|_|_|\___/      \_/\_/ \___/|_|  |_|\__,_(_)"
echo ""
