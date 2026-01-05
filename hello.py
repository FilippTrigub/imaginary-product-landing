#!/usr/bin/env python3

# Hello World in Python
print("Hello World!")

# With colors (ANSI escape codes)
print("\033[96mHello World in Cyan!\033[0m")
print("\033[95mHello World in Magenta!\033[0m")

# Multiple languages
greetings = {
    "English": "Hello World!",
    "Spanish": "¡Hola Mundo!",
    "French": "Bonjour le Monde!",
    "German": "Hallo Welt!",
    "Italian": "Ciao Mondo!",
    "Japanese": "こんにちは世界！",
    "Chinese": "你好世界！",
    "Russian": "Привет мир!"
}

print("\n=== Greetings in Multiple Languages ===")
for language, greeting in greetings.items():
    print(f"{language}: {greeting}")

# ASCII Art
print("\n")
print("  _   _      _ _        __        __         _     _ _ ")
print(" | | | | ___| | | ___   \\ \\      / /__  _ __| | __| | |")
print(" | |_| |/ _ \\ | |/ _ \\   \\ \\ /\\ / / _ \\| '__| |/ _` | |")
print(" |  _  |  __/ | | (_) |   \\ V  V / (_) | |  | | (_| |_|")
print(" |_| |_|\\___|_|_|\\___/     \\_/\\_/ \\___/|_|  |_|\\__,_(_)")
print("\n")
