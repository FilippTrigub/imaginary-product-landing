#!/usr/bin/env python3
"""
Hello World in Python - Multiple approaches
"""

# Basic print
print("Hello, World!")

# Using f-strings (Python 3.6+)
name = "World"
print(f"Hello, {name}!")

# Function
def greet(name="World"):
    """Return a greeting message"""
    return f"Hello, {name}!"

print(greet())
print(greet("Python"))

# Class-based approach
class Greeter:
    """A simple greeter class"""
    
    def __init__(self, greeting="Hello"):
        self.greeting = greeting
    
    def greet(self, name="World"):
        """Return a personalized greeting"""
        return f"{self.greeting}, {name}!"
    
    def __str__(self):
        return f"Greeter(greeting='{self.greeting}')"

greeter = Greeter()
print(greeter.greet())
print(greeter.greet("Developer"))

# List comprehension
names = ["Alice", "Bob", "Charlie"]
greetings = [f"Hello, {name}!" for name in names]
print(" | ".join(greetings))

# Lambda function
hello = lambda name="World": f"Hello, {name}!"
print(hello())
print(hello("Lambda"))

# Decorator example
def greeting_decorator(func):
    """Decorator to add greeting prefix"""
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return f"Greeting: {result}"
    return wrapper

@greeting_decorator
def say_hello(name="World"):
    return f"Hello, {name}!"

print(say_hello("Decorator"))

# Context manager
class HelloContext:
    """Context manager for greetings"""
    
    def __enter__(self):
        print("Starting greeting...")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Ending greeting...")
        return False
    
    def greet(self):
        print("Hello, World from context manager!")

with HelloContext() as ctx:
    ctx.greet()

# Generator
def greeting_generator():
    """Generate greetings"""
    greetings = ["Hello", "Hi", "Hey", "Greetings"]
    for greeting in greetings:
        yield f"{greeting}, World!"

for greeting in greeting_generator():
    print(greeting)

if __name__ == "__main__":
    print("\n=== Python Hello World Complete ===")
