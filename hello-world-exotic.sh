#!/usr/bin/env bash
# Hello World using Bash's exotic features

# Using process substitution
cat <(echo "Hello, World!")

# Using command grouping with subshell
(echo "Hello"; echo "World") | paste -sd ", " - | sed 's/$/!/'

# Using brace expansion
echo {H,e,l,l,o,","," ",W,o,r,l,d,!} | tr -d ' '

# Using parameter expansion
text="hello, world!"
echo "${text^}" # Capitalize first letter
echo "${text^^}" # Uppercase all

# Using indirect expansion
greeting="Hello, World!"
ref="greeting"
echo "${!ref}"

# Using arithmetic expansion
chars=(72 101 108 108 111 44 32 87 111 114 108 100 33)
for code in "${chars[@]}"; do
    printf "\\$(printf '%03o' $code)"
done
echo

# Using coprocess
coproc { echo "Hello, World!"; }
read -u "${COPROC[0]}" message
echo "$message"

# Using trap
trap 'echo "Hello, World!"' EXIT
exit 0
