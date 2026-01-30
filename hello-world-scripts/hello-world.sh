#!/bin/bash
# Hello World in Bash
# This script demonstrates a simple hello world program
# that can be run in a Unix/Linux shell environment

# Function to display simple hello world message
display_hello_world() {
    echo "Hello, World!"
}

# Function to display hello world with current time
display_hello_world_with_time() {
    current_time=$(date +"%H:%M:%S")
    echo "Hello, World! The current time is $current_time"
}

# Function to display hello world in different languages
display_multilingual_hello() {
    echo "Multilingual Hello World:"
    echo "English: Hello, World!"
    echo "Spanish: ¡Hola, Mundo!"
    echo "French: Bonjour, le Monde!"
    echo "German: Hallo, Welt!"
    echo "Japanese: こんにちは、世界！"
}

# Function to display system information
display_system_info() {
    echo "System Information:"
    echo "Current user: $(whoami)"
    echo "Current directory: $(pwd)"
    echo "Shell: $SHELL"
    echo "System: $(uname -a)"
}

# Main execution
main() {
    echo "=== Bash Hello World Script ==="
    display_hello_world
    display_hello_world_with_time
    display_multilingual_hello
    display_system_info
    echo "=== Script Complete ==="
}

# Execute main function
main