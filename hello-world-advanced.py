#!/usr/bin/env python3
"""
Advanced Python Hello World - Demonstrating advanced features
"""

import sys
import asyncio
from typing import List, Optional, Protocol
from dataclasses import dataclass
from enum import Enum
from functools import wraps
import time

# Type hints and protocols
class GreeterProtocol(Protocol):
    """Protocol for greeter objects"""
    def greet(self, name: str) -> str:
        ...

# Enum
class GreetingStyle(Enum):
    FORMAL = "Good day"
    CASUAL = "Hey"
    STANDARD = "Hello"

# Dataclass
@dataclass
class Person:
    """Represents a person to greet"""
    name: str
    title: Optional[str] = None
    
    def full_name(self) -> str:
        if self.title:
            return f"{self.title} {self.name}"
        return self.name

# Decorator with arguments
def timed_greeting(func):
    """Decorator to time greeting execution"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        elapsed = time.time() - start
        print(f"[Timed: {elapsed:.6f}s] {result}")
        return result
    return wrapper

# Advanced class with type hints
class AdvancedGreeter:
    """Advanced greeter with multiple features"""
    
    def __init__(self, style: GreetingStyle = GreetingStyle.STANDARD):
        self._style = style
        self._greeting_count = 0
    
    @property
    def style(self) -> GreetingStyle:
        return self._style
    
    @style.setter
    def style(self, value: GreetingStyle) -> None:
        self._style = value
    
    @timed_greeting
    def greet(self, name: str = "World") -> str:
        """Greet with current style"""
        self._greeting_count += 1
        return f"{self._style.value}, {name}!"
    
    def greet_multiple(self, names: List[str]) -> List[str]:
        """Greet multiple people"""
        return [self.greet(name) for name in names]
    
    @staticmethod
    def create_greeting(greeting: str, name: str) -> str:
        """Static method to create greeting"""
        return f"{greeting}, {name}!"
    
    @classmethod
    def create_formal(cls) -> 'AdvancedGreeter':
        """Factory method for formal greeter"""
        return cls(GreetingStyle.FORMAL)
    
    def __repr__(self) -> str:
        return f"AdvancedGreeter(style={self._style}, count={self._greeting_count})"

# Async greeting
async def async_greet(name: str, delay: float = 0.1) -> str:
    """Asynchronous greeting with delay"""
    await asyncio.sleep(delay)
    return f"Hello, {name} (async)!"

async def greet_all_async(names: List[str]) -> List[str]:
    """Greet multiple people asynchronously"""
    tasks = [async_greet(name) for name in names]
    return await asyncio.gather(*tasks)

# Generator with yield
def greeting_stream(names: List[str]):
    """Stream greetings one at a time"""
    for name in names:
        yield f"Hello, {name}!"

# Context manager
class GreetingSession:
    """Context manager for greeting sessions"""
    
    def __init__(self, session_name: str):
        self.session_name = session_name
    
    def __enter__(self):
        print(f"=== Starting {self.session_name} ===")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"=== Ending {self.session_name} ===")
        return False
    
    def greet(self, name: str) -> None:
        print(f"Hello, {name}!")

# Main execution
def main():
    print("=== Advanced Python Hello World ===\n")
    
    # Basic usage
    print("1. Basic Greeting:")
    print("Hello, World!")
    
    # Dataclass
    print("\n2. Dataclass Person:")
    person = Person("Alice", "Dr.")
    print(f"Hello, {person.full_name()}!")
    
    # Advanced greeter
    print("\n3. Advanced Greeter:")
    greeter = AdvancedGreeter()
    greeter.greet("World")
    greeter.greet("Python")
    
    # Different styles
    print("\n4. Different Greeting Styles:")
    for style in GreetingStyle:
        g = AdvancedGreeter(style)
        g.greet("Developer")
    
    # Factory method
    print("\n5. Factory Method:")
    formal_greeter = AdvancedGreeter.create_formal()
    formal_greeter.greet("Sir")
    
    # Multiple greetings
    print("\n6. Multiple Greetings:")
    names = ["Alice", "Bob", "Charlie"]
    greeter = AdvancedGreeter()
    results = greeter.greet_multiple(names)
    
    # Generator
    print("\n7. Generator Stream:")
    for greeting in greeting_stream(["Dave", "Eve"]):
        print(greeting)
    
    # Context manager
    print("\n8. Context Manager:")
    with GreetingSession("Demo Session") as session:
        session.greet("Context")
        session.greet("Manager")
    
    # Async greetings
    print("\n9. Async Greetings:")
    async_names = ["Frank", "Grace", "Henry"]
    results = asyncio.run(greet_all_async(async_names))
    for result in results:
        print(result)
    
    # Type hints demonstration
    print("\n10. Type Hints:")
    def typed_greet(name: str, times: int = 1) -> List[str]:
        return [f"Hello, {name}!" for _ in range(times)]
    
    greetings = typed_greet("TypeHints", 2)
    for g in greetings:
        print(g)
    
    print("\n=== Advanced Python Hello World Complete ===")

if __name__ == "__main__":
    main()
