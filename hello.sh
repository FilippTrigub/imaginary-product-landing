#!/bin/bash
# Bash Hello World Script
# Demonstrating various Bash scripting techniques

# Simple echo
echo "Hello, World!"

# Using printf
printf "Hello, World!\n"

# Using variables
GREETING="Hello"
TARGET="World"
echo "$GREETING, $TARGET!"

# Using a function
greet() {
    local name="${1:-World}"
    echo "Hello, $name!"
}

greet
greet "Bash"

# Using command substitution
MESSAGE=$(echo "Hello, World!")
echo "$MESSAGE"

# Using here-doc
cat << 'EOF'
Hello, World!
EOF

# Array iteration
names=("World" "Bash" "Universe")
for name in "${names[@]}"; do
    echo "Hello, $name!"
done

# Using case statement
say_hello() {
    case "$1" in
        formal)
            echo "Greetings, World!"
            ;;
        casual)
            echo "Hey, World!"
            ;;
        *)
            echo "Hello, World!"
            ;;
    esac
}

say_hello
say_hello formal
say_hello casual

# Using arithmetic expansion
for ((i=1; i<=3; i++)); do
    echo "Hello, World! (iteration $i)"
done

# Using parameter expansion
message="hello, world!"
echo "${message^}"  # Capitalize first letter
echo "${message^^}" # Uppercase all
