#!/bin/bash
# Bash Hello World

echo "Hello, World!"

# Function version
say_hello() {
    local name=${1:-World}
    echo "Hello, $name!"
}

say_hello
say_hello "NovaSphere"
