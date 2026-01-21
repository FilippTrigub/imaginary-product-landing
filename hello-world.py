#!/usr/bin/env python3

"""
Hello World - Python Script
Run with: python hello-world.py
"""

from datetime import datetime

def main():
    name = "World"
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    print(f"Hello, {name}!")
    print(f"Script executed at: {timestamp}")

if __name__ == "__main__":
    main()
