#!/usr/bin/env python3

# Simple Python hello world
print("Hello, World!")

# With formatting
name = "Python"
print(f"Hello from {name}!")

# Multiple languages
greetings = {
    "English": "Hello, World!",
    "Spanish": "¡Hola, Mundo!",
    "French": "Bonjour, le Monde!",
    "German": "Hallo, Welt!",
    "Japanese": "こんにちは、世界！",
    "Chinese": "你好，世界！"
}

print("\nGreetings in different languages:")
for language, greeting in greetings.items():
    print(f"{language}: {greeting}")
