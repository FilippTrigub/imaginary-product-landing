#!/usr/bin/env python3

"""
Hello World - Python Version
A Python hello world script with various features
"""

import sys
import platform
import datetime
import os

def print_separator(char='=', length=50):
    """Print a separator line"""
    print(char * length)

def main():
    """Main function to run hello world demonstrations"""
    
    # Basic hello world
    print("Hello, World!")
    print_separator()
    
    # Python information
    print("\n🐍 Python Information:")
    print(f"   Python Version: {sys.version.split()[0]}")
    print(f"   Platform: {platform.system()}")
    print(f"   Architecture: {platform.machine()}")
    print(f"   Python Implementation: {platform.python_implementation()}")
    
    # System information
    print("\n💻 System Information:")
    print(f"   OS: {platform.platform()}")
    print(f"   Processor: {platform.processor() or 'Unknown'}")
    print(f"   Current Directory: {os.getcwd()}")
    print(f"   Script Path: {os.path.abspath(__file__)}")
    
    # Date and time
    print("\n📅 Current Date & Time:")
    now = datetime.datetime.now()
    print(f"   {now.strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"   Day of Week: {now.strftime('%A')}")
    print(f"   Week Number: {now.strftime('%W')}")
    
    # Colorful output using ANSI codes
    print("\n🎨 Colorful Output:")
    colors = {
        'Red': '\033[91m',
        'Green': '\033[92m',
        'Yellow': '\033[93m',
        'Blue': '\033[94m',
        'Magenta': '\033[95m',
        'Cyan': '\033[96m',
        'Reset': '\033[0m'
    }
    
    for color_name, color_code in colors.items():
        if color_name != 'Reset':
            print(f"   {color_code}{color_name}: Hello, World!{colors['Reset']}")
    
    # ASCII Art
    print("\n🎭 ASCII Art:")
    ascii_art = """
  _   _      _ _         __        __         _     _ _ 
 | | | | ___| | | ___    \ \      / /__  _ __| | __| | |
 | |_| |/ _ \ | |/ _ \    \ \ /\ / / _ \| '__| |/ _` | |
 |  _  |  __/ | | (_) |    \ V  V / (_) | |  | | (_| |_|
 |_| |_|\___|_|_|\___/      \_/\_/ \___/|_|  |_|\__,_(_)
    """
    print(ascii_art)
    
    # List comprehension example
    print("🔢 Numbers 1-10:")
    numbers = [i for i in range(1, 11)]
    print(f"   {numbers}")
    
    # Dictionary example
    print("\n📦 Project Information:")
    project_info = {
        'name': 'NovaSphere',
        'tagline': 'The Future of Personal Computing',
        'version': '1.0.0',
        'language': 'Python',
        'author': 'NovaSphere Team'
    }
    
    for key, value in project_info.items():
        print(f"   {key.capitalize()}: {value}")
    
    print("\n" + "=" * 50)
    print("✅ Hello World script completed successfully!\n")

if __name__ == "__main__":
    main()
