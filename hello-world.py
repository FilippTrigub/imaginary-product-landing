#!/usr/bin/env python3
"""
Simple Python Hello World Script
"""

def main():
    # Basic hello world
    print("Hello, World!")
    
    # Hello world with a function
    def say_hello(name="World"):
        return f"Hello, {name}!"
    
    print(say_hello())
    print(say_hello("NovaSphere"))
    
    # Hello world with user input
    print("\n--- Interactive Mode ---")
    try:
        user_name = input("Enter your name: ")
        if user_name:
            print(say_hello(user_name))
        else:
            print(say_hello())
    except (EOFError, KeyboardInterrupt):
        print("\nGoodbye!")

if __name__ == "__main__":
    main()
