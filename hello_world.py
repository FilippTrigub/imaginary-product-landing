#!/usr/bin/env python3
"""
NovaSphere Python Demo
A demonstration of Python capabilities for the NovaSphere project
"""

import sys
from datetime import datetime


def greet(name="World"):
    """Greet the user with a personalized message"""
    return f"Hello, {name}!"


def display_system_info():
    """Display basic system information"""
    print("\n=== System Information ===")
    print(f"Python Version: {sys.version}")
    print(f"Current Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Platform: {sys.platform}")


def fibonacci(n):
    """Generate Fibonacci sequence up to n terms"""
    sequence = []
    a, b = 0, 1
    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b
    return sequence


def main():
    """Main function to demonstrate various Python features"""
    print("=" * 50)
    print("  Welcome to NovaSphere Python Demo")
    print("=" * 50)
    
    # Basic greeting
    print(f"\n{greet()}")
    print(greet("NovaSphere User"))
    
    # Display system info
    display_system_info()
    
    # Demonstrate list comprehension
    print("\n=== List Comprehension Demo ===")
    squares = [x**2 for x in range(1, 11)]
    print(f"Squares of 1-10: {squares}")
    
    # Demonstrate Fibonacci sequence
    print("\n=== Fibonacci Sequence ===")
    fib_sequence = fibonacci(10)
    print(f"First 10 Fibonacci numbers: {fib_sequence}")
    
    # Demonstrate dictionary usage
    print("\n=== NovaSphere Features ===")
    features = {
        "Holographic Display": "Advanced 3D visualization",
        "AI Assistant": "Intelligent personal computing",
        "Quantum Processing": "Next-gen computation power",
        "Neural Interface": "Direct brain-computer connection"
    }
    
    for feature, description in features.items():
        print(f"  • {feature}: {description}")
    
    print("\n" + "=" * 50)
    print("  Thank you for exploring NovaSphere!")
    print("=" * 50 + "\n")


if __name__ == "__main__":
    main()
