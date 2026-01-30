#!/usr/bin/env python3
# Hello World in Python
# This script demonstrates a simple hello world program
# that can be run in Python 3 environment

import sys
from datetime import datetime

def display_hello_world():
    """Display a simple hello world message"""
    message = "Hello, World!"
    print(message)
    return message

def display_hello_world_with_time():
    """Display hello world with current time"""
    now = datetime.now()
    time_string = now.strftime("%H:%M:%S")
    print(f"Hello, World! The current time is {time_string}")

def display_multilingual_hello():
    """Display hello world in different languages"""
    greetings = {
        "English": "Hello, World!",
        "Spanish": "¡Hola, Mundo!",
        "French": "Bonjour, le Monde!",
        "German": "Hallo, Welt!",
        "Japanese": "こんにちは、世界！"
    }
    
    print("Multilingual Hello World:")
    for language, greeting in greetings.items():
        print(f"{language}: {greeting}")

def get_system_info():
    """Get basic system information"""
    print("System Information:")
    print(f"Python version: {sys.version}")
    print(f"Platform: {sys.platform}")

def main():
    """Main function to execute hello world scripts"""
    print("=== Python Hello World Script ===")
    display_hello_world()
    display_hello_world_with_time()
    display_multilingual_hello()
    get_system_info()
    print("=== Script Complete ===")

if __name__ == "__main__":
    main()