#!/usr/bin/env python3

"""
Hello World - Python Script
A simple Python script that prints "Hello, World!" with various examples
"""

import sys
from datetime import datetime


def main():
    """Main function to demonstrate Hello World in Python"""
    
    # Basic hello world
    print("Hello, World!")
    print("Welcome to NovaSphere!")
    print()
    
    # Function example
    def greet(name):
        return f"Hello, {name}!"
    
    print(greet("Developer"))
    print(greet("Python Enthusiast"))
    print()
    
    # Display system information
    print("=== System Information ===")
    print(f"Python Version: {sys.version}")
    print(f"Current Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    # Class example
    class Greeter:
        def __init__(self, greeting="Hello"):
            self.greeting = greeting
        
        def greet(self, name):
            return f"{self.greeting}, {name}!"
    
    greeter = Greeter("Welcome")
    print(greeter.greet("World"))
    
    # ASCII Art
    print()
    print("  _   _      _ _         __        __         _     _ _ ")
    print(" | | | | ___| | | ___    \ \      / /__  _ __| | __| | |")
    print(" | |_| |/ _ \ | |/ _ \    \ \ /\ / / _ \| '__| |/ _` | |")
    print(" |  _  |  __/ | | (_) |    \ V  V / (_) | |  | | (_| |_|")
    print(" |_| |_|\___|_|_|\___/      \_/\_/ \___/|_|  |_|\__,_(_)")
    print()


if __name__ == "__main__":
    main()
