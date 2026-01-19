#!/bin/bash

# Simple bash hello world
echo "Hello, World!"

# With colors
echo -e "\033[1;32mHello, World! (in green)\033[0m"
echo -e "\033[1;34mHello, World! (in blue)\033[0m"
echo -e "\033[1;31mHello, World! (in red)\033[0m"

# With system info
echo ""
echo "System Information:"
echo "User: $USER"
echo "Hostname: $HOSTNAME"
echo "Date: $(date)"
echo "Working Directory: $(pwd)"
