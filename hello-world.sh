#!/usr/bin/env bash
# Hello World in Bash

# Simple echo
echo "Hello, World!"

# Using printf
printf "Hello, World!\n"

# Using variables
greeting="Hello"
target="World"
echo "$greeting, $target!"

# Using command substitution
echo "$(echo Hello), $(echo World)!"

# Using here-doc
cat <<EOF
Hello, World!
EOF

# Using array
words=("Hello" "World")
echo "${words[0]}, ${words[1]}!"

# Using for loop
message="Hello, World!"
for char in $(echo $message | fold -w1); do
    echo -n "$char"
done
echo

# Using case statement
word="World"
case $word in
    "World")
        echo "Hello, $word!"
        ;;
esac

# Using function
greet() {
    echo "Hello, $1!"
}
greet "World"

# Using read with here-string
read -r msg <<< "Hello, World!"
echo "$msg"
