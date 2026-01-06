#!/usr/bin/env python3
"""
NovaSphere Utilities
Common utility functions for NovaSphere applications
"""

import os
import hashlib
import random
import string
from datetime import datetime, timedelta


def generate_id(length: int = 8) -> str:
    """Generate a random alphanumeric ID"""
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))


def hash_string(text: str, algorithm: str = 'sha256') -> str:
    """Hash a string using specified algorithm"""
    hash_obj = hashlib.new(algorithm)
    hash_obj.update(text.encode('utf-8'))
    return hash_obj.hexdigest()


def format_bytes(bytes_size: int) -> str:
    """Format bytes into human-readable format"""
    for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
        if bytes_size < 1024.0:
            return f"{bytes_size:.2f} {unit}"
        bytes_size /= 1024.0
    return f"{bytes_size:.2f} PB"


def format_duration(seconds: int) -> str:
    """Format seconds into human-readable duration"""
    if seconds < 60:
        return f"{seconds}s"
    elif seconds < 3600:
        minutes = seconds // 60
        secs = seconds % 60
        return f"{minutes}m {secs}s"
    else:
        hours = seconds // 3600
        minutes = (seconds % 3600) // 60
        return f"{hours}h {minutes}m"


def validate_email(email: str) -> bool:
    """Basic email validation"""
    return '@' in email and '.' in email.split('@')[1]


def truncate_string(text: str, max_length: int, suffix: str = '...') -> str:
    """Truncate string to max length with suffix"""
    if len(text) <= max_length:
        return text
    return text[:max_length - len(suffix)] + suffix


def chunk_list(lst: list, chunk_size: int) -> list:
    """Split list into chunks of specified size"""
    return [lst[i:i + chunk_size] for i in range(0, len(lst), chunk_size)]


def merge_dicts(*dicts) -> dict:
    """Merge multiple dictionaries"""
    result = {}
    for d in dicts:
        result.update(d)
    return result


def get_date_range(days: int) -> tuple:
    """Get date range from today back specified days"""
    end_date = datetime.now()
    start_date = end_date - timedelta(days=days)
    return start_date, end_date


class Timer:
    """Simple timer context manager"""
    
    def __init__(self, name: str = "Operation"):
        self.name = name
        self.start_time = None
        self.end_time = None
    
    def __enter__(self):
        self.start_time = datetime.now()
        return self
    
    def __exit__(self, *args):
        self.end_time = datetime.now()
        duration = (self.end_time - self.start_time).total_seconds()
        print(f"{self.name} completed in {duration:.4f} seconds")
    
    @property
    def elapsed(self) -> float:
        """Get elapsed time in seconds"""
        if self.start_time and self.end_time:
            return (self.end_time - self.start_time).total_seconds()
        return 0.0


def demo_utilities():
    """Demonstrate utility functions"""
    print("\n" + "=" * 60)
    print("  NovaSphere Utilities Demo")
    print("=" * 60)
    
    # ID generation
    print("\n--- ID Generation ---")
    print(f"Random ID (8 chars): {generate_id()}")
    print(f"Random ID (16 chars): {generate_id(16)}")
    
    # Hashing
    print("\n--- String Hashing ---")
    text = "NovaSphere2026"
    print(f"Original: {text}")
    print(f"SHA256: {hash_string(text)[:32]}...")
    print(f"MD5: {hash_string(text, 'md5')}")
    
    # Byte formatting
    print("\n--- Byte Formatting ---")
    sizes = [1024, 1048576, 1073741824, 1099511627776]
    for size in sizes:
        print(f"{size:>15} bytes = {format_bytes(size)}")
    
    # Duration formatting
    print("\n--- Duration Formatting ---")
    durations = [45, 125, 3665, 7325]
    for duration in durations:
        print(f"{duration:>6} seconds = {format_duration(duration)}")
    
    # Email validation
    print("\n--- Email Validation ---")
    emails = ["user@novasphere.com", "invalid.email", "test@domain.co"]
    for email in emails:
        valid = "✓" if validate_email(email) else "✗"
        print(f"{valid} {email}")
    
    # String truncation
    print("\n--- String Truncation ---")
    long_text = "NovaSphere is revolutionizing personal computing"
    print(f"Original: {long_text}")
    print(f"Truncated (20): {truncate_string(long_text, 20)}")
    
    # List chunking
    print("\n--- List Chunking ---")
    numbers = list(range(1, 16))
    chunks = chunk_list(numbers, 5)
    print(f"Original: {numbers}")
    print(f"Chunks (size 5): {chunks}")
    
    # Timer demo
    print("\n--- Timer Demo ---")
    with Timer("Sample operation"):
        # Simulate some work
        sum([i**2 for i in range(100000)])
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_utilities()
