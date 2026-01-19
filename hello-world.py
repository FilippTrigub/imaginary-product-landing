#!/usr/bin/env python3
# Hello World in Python 3

print("Hello, World!")

# Multiple approaches in Python
print("=" * 50)

# Using f-strings
greeting = "World"
print(f"Hello, {greeting}!")

# Using format method
print("Hello, {}!".format("World"))

# Using string concatenation
print("Hello, " + "World" + "!")

# Using join
print("".join(["H", "e", "l", "l", "o", ", ", "W", "o", "r", "l", "d", "!"]))

# Using list comprehension and chr
print("".join([chr(c) for c in [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]]))

# Using sys.stdout
import sys
sys.stdout.write("Hello, World!\n")

# Using print with sep and end
print("Hello", "World", sep=", ", end="!\n")
