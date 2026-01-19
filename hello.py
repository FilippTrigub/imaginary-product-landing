#!/usr/bin/env python3
# Python Hello World

def main():
    print("Hello, World!")
    
    # Function version
    def say_hello(name="World"):
        return f"Hello, {name}!"
    
    print(say_hello())
    print(say_hello("NovaSphere"))

if __name__ == "__main__":
    main()
