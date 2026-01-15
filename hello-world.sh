#!/bin/bash

# Simple Hello World in Bash
echo "Hello World!"

# Hello World with variable
MESSAGE="Hello World!"
echo "$MESSAGE"

# Hello World with function
say_hello() {
    echo "Hello World from function!"
}

say_hello

# Hello World in a loop
for i in {1..3}; do
    echo "$i. Hello World!"
done

# Hello World with colors (if terminal supports it)
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${RED}Hello${NC} ${GREEN}World${NC} ${BLUE}in colors!${NC}"

# Hello World with date
echo "Hello World! Today is $(date '+%Y-%m-%d')"
