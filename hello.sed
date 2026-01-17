#!/bin/sed -f
# SED Hello World Script
# Demonstrating stream editing capabilities

# This sed script transforms input or generates output
# Run with: echo "" | sed -f hello.sed
# Or: sed -f hello.sed /dev/null

# Insert "Hello, World!" at the beginning
1i\
Hello, World!

# Append additional greetings
1a\
Hello, SED!\
Hello, Stream Editor!

# If input contains "world" (case insensitive), substitute it
s/world/World/gi

# Add a greeting for any line
s/.*/Hello, &!/

# Delete empty lines (cleanup)
/^$/d
