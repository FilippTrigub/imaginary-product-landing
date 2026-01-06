#!/bin/bash

# Hello World Script in Bash
# NovaSphere Project

# Simple hello world
echo "Hello World!"

# Fancy hello world with colors
echo -e "\033[1;36m"
echo "╔═══════════════════════════════════════╗"
echo "║                                       ║"
echo "║         HELLO WORLD!                  ║"
echo "║         NovaSphere Project            ║"
echo "║                                       ║"
echo "╚═══════════════════════════════════════╝"
echo -e "\033[0m"

# Function to greet
greet() {
    local name=${1:-"World"}
    echo "Hello $name!"
}

# Call function
greet "Developer"
greet "NovaSphere"

# Hello world with timestamp
echo "Hello World at $(date '+%Y-%m-%d %H:%M:%S')"

# Multiple greetings
declare -A greetings=(
    ["English"]="Hello World!"
    ["Spanish"]="¡Hola Mundo!"
    ["French"]="Bonjour le Monde!"
    ["German"]="Hallo Welt!"
    ["Italian"]="Ciao Mondo!"
)

echo ""
echo "=== Hello World in Multiple Languages ==="
for lang in "${!greetings[@]}"; do
    printf "%-12s : %s\n" "$lang" "${greetings[$lang]}"
done
