#!/usr/bin/env python3

"""
Hello World Python Script
Run with: python3 hello.py or python hello.py
"""

import sys
from datetime import datetime


def main():
    """Main function to print hello world messages"""
    
    # Basic hello world
    print("Hello, World!")
    
    # Decorated hello world
    print("\n" + "=" * 50)
    print("  🌟 Hello from NovaSphere! 🌟")
    print("=" * 50 + "\n")
    
    # With some information
    print(f"Python version: {sys.version.split()[0]}")
    print(f"Current time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Platform: {sys.platform}")
    
    # Interactive greeting
    greet("Developer")
    greet("World")


def greet(name="World"):
    """
    Greet a person by name
    
    Args:
        name (str): The name to greet (default: "World")
    """
    print(f"\nHello, {name}!")
    print(f"Welcome to the future of computing with NovaSphere!")


class HelloWorld:
    """A simple Hello World class"""
    
    def __init__(self, message="Hello, World!"):
        self.message = message
    
    def say_hello(self):
        """Print the hello message"""
        print(self.message)
    
    def __str__(self):
        return self.message


if __name__ == "__main__":
    # Run main function
    main()
    
    # Demonstrate class usage
    print("\n" + "-" * 50)
    print("Class-based Hello World:")
    print("-" * 50)
    
    hello = HelloWorld("Hello from the HelloWorld class!")
    hello.say_hello()
    print(f"String representation: {hello}")
