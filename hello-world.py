#!/usr/bin/env python3
"""
Hello World in Python
Multiple implementations
"""

# Simple Hello World
print("Hello World!")

# Hello World with function
def say_hello():
    return "Hello World!"

print(say_hello())

# Hello World with class
class Greeter:
    def __init__(self, message="Hello World!"):
        self.message = message
    
    def greet(self):
        return self.message

greeter = Greeter()
print(greeter.greet())

# Hello World with formatting
name = "World"
print(f"Hello {name}!")

# Hello World multiple times
for i in range(1, 4):
    print(f"{i}. Hello World!")

# Hello World with list comprehension
messages = [f"Hello World #{i}" for i in range(1, 4)]
for msg in messages:
    print(msg)
