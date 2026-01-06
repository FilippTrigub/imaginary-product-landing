#!/bin/bash
# Hello World in Bash - Multiple approaches

# Basic echo
echo "Hello, World!"

# Using variables
NAME="World"
echo "Hello, $NAME!"

# Function
greet() {
    local name="${1:-World}"
    echo "Hello, $name!"
}

greet
greet "Bash"

# Array iteration
names=("Alice" "Bob" "Charlie")
for name in "${names[@]}"; do
    echo "Hello, $name!"
done

# Command substitution
CURRENT_USER=$(whoami)
echo "Hello, $CURRENT_USER!"

# Conditional greeting
if [ -n "$USER" ]; then
    echo "Hello, $USER from conditional!"
else
    echo "Hello, Anonymous!"
fi

# Here document
cat << EOF
=========================
Multi-line Hello World
Hello, World!
From Bash Script
=========================
EOF

# Case statement
greeting_type="formal"
case $greeting_type in
    formal)
        echo "Good day, World!"
        ;;
    casual)
        echo "Hey, World!"
        ;;
    *)
        echo "Hello, World!"
        ;;
esac

# Loop with counter
for i in {1..3}; do
    echo "Hello, World! (iteration $i)"
done

# While loop
counter=1
while [ $counter -le 3 ]; do
    echo "Hello from while loop! (count: $counter)"
    ((counter++))
done

# Read from array and process
declare -A greetings
greetings[english]="Hello"
greetings[spanish]="Hola"
greetings[french]="Bonjour"

for lang in "${!greetings[@]}"; do
    echo "${greetings[$lang]}, World! ($lang)"
done

echo ""
echo "=== Bash Hello World Complete ==="
