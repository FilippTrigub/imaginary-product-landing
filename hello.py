#!/usr/bin/env python3
"""
Python Hello World Script
A classic greeting in Python with multiple approaches
"""

# Simple print
print("Hello, World!")

# Using f-strings (Python 3.6+)
greeting = "World"
print(f"Hello, {greeting}!")

# Using a function
def say_hello(name="World"):
    """Print a personalized greeting"""
    return f"Hello, {name}!"

print(say_hello())

# Using a class
class Greeter:
    """A class for greeting"""
    def __init__(self, message="Hello, World!"):
        self.message = message
    
    def greet(self):
        """Return the greeting message"""
        return self.message

greeter = Greeter()
print(greeter.greet())

# List comprehension style
messages = [f"Hello, {word}!" for word in ["World", "Python", "Universe"]]
for msg in messages:
    print(msg)
