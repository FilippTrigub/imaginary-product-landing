#!/usr/bin/env python3

# Hello World in Python
print("Hello World!")

# With formatting
print("\n" + "="*40)
print("         HELLO WORLD!")
print("       NovaSphere v2")
print("="*40 + "\n")

# Function version
def greet(name="World"):
    """Greet someone with a hello message"""
    return f"Hello {name}!"

# Class version
class Greeter:
    def __init__(self, greeting="Hello"):
        self.greeting = greeting
    
    def greet(self, name="World"):
        return f"{self.greeting} {name}!"

if __name__ == "__main__":
    print(greet())
    print(greet("NovaSphere"))
    
    greeter = Greeter()
    print(greeter.greet())
    print(greeter.greet("Developer"))
