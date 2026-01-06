#!/usr/bin/env python3
"""
Hello World Script in Python
NovaSphere Project
"""

def hello_world():
    """Print Hello World to console"""
    print("Hello World!")

def hello_custom(name="World"):
    """Print custom hello message"""
    return f"Hello {name}!"

def hello_fancy():
    """Print fancy ASCII art Hello World"""
    art = """
    ╔═══════════════════════════════════════╗
    ║                                       ║
    ║         HELLO WORLD!                  ║
    ║         NovaSphere Project            ║
    ║                                       ║
    ╚═══════════════════════════════════════╝
    """
    print(art)

class HelloWorld:
    """Hello World class"""
    
    def __init__(self, name="World"):
        self.name = name
    
    def greet(self):
        """Return greeting message"""
        return f"Hello {self.name}!"
    
    def shout(self):
        """Return shouting greeting"""
        return f"HELLO {self.name.upper()}!"

if __name__ == "__main__":
    # Simple hello world
    hello_world()
    
    # Custom greeting
    print(hello_custom("NovaSphere"))
    
    # Fancy ASCII art
    hello_fancy()
    
    # Using class
    greeter = HelloWorld("Developer")
    print(greeter.greet())
    print(greeter.shout())
    
    # Multiple languages
    greetings = {
        "English": "Hello World!",
        "Spanish": "¡Hola Mundo!",
        "French": "Bonjour le Monde!",
        "German": "Hallo Welt!",
        "Italian": "Ciao Mondo!",
        "Japanese": "こんにちは世界!",
        "Chinese": "你好世界!",
        "Russian": "Привет мир!"
    }
    
    print("\n=== Hello World in Multiple Languages ===")
    for language, greeting in greetings.items():
        print(f"{language:12} : {greeting}")
