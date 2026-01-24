#!/bin/bash
# Simple Bash Hello World Script

echo "Hello, World!"

# Hello world with a function
say_hello() {
    local name=${1:-World}
    echo "Hello, $name!"
}

say_hello
say_hello "NovaSphere"

# Hello world with colors
echo -e "\033[1;32mHello, World in Green!\033[0m"
echo -e "\033[1;34mHello, World in Blue!\033[0m"
echo -e "\033[1;35mHello, World in Magenta!\033[0m"

# Hello world with current date
echo "Hello, World! Today is $(date '+%Y-%m-%d %H:%M:%S')"
