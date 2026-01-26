#!/usr/bin/env python3
"""Simple Hello World script"""
import sys


def say_hello(name: str = "World") -> str:
    return f"Hello, {name}!"


def main() -> None:
    target = sys.argv[1] if len(sys.argv) > 1 else "World"
    print(say_hello(target))


if __name__ == "__main__":
    main()
