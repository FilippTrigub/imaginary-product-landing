#!/usr/bin/env python3
"""
NovaSphere Data Processor
Handles data processing and analysis for NovaSphere systems
"""

import json
from typing import List, Dict, Any
from collections import Counter


class DataProcessor:
    """Process and analyze data for NovaSphere applications"""
    
    def __init__(self):
        self.data_cache = []
    
    def add_data(self, data: Any) -> None:
        """Add data to the processor cache"""
        self.data_cache.append(data)
    
    def clear_cache(self) -> None:
        """Clear all cached data"""
        self.data_cache.clear()
    
    def get_statistics(self, numbers: List[float]) -> Dict[str, float]:
        """Calculate basic statistics for a list of numbers"""
        if not numbers:
            return {}
        
        sorted_nums = sorted(numbers)
        n = len(sorted_nums)
        
        return {
            "count": n,
            "sum": sum(numbers),
            "mean": sum(numbers) / n,
            "median": sorted_nums[n // 2] if n % 2 else (sorted_nums[n // 2 - 1] + sorted_nums[n // 2]) / 2,
            "min": min(numbers),
            "max": max(numbers),
            "range": max(numbers) - min(numbers)
        }
    
    def analyze_text(self, text: str) -> Dict[str, Any]:
        """Analyze text and return various metrics"""
        words = text.lower().split()
        word_count = Counter(words)
        
        return {
            "total_words": len(words),
            "unique_words": len(set(words)),
            "total_characters": len(text),
            "most_common": word_count.most_common(5),
            "average_word_length": sum(len(word) for word in words) / len(words) if words else 0
        }
    
    def filter_data(self, data: List[Dict], key: str, value: Any) -> List[Dict]:
        """Filter list of dictionaries by key-value pair"""
        return [item for item in data if item.get(key) == value]
    
    def transform_data(self, data: List[Dict], mapping: Dict[str, str]) -> List[Dict]:
        """Transform dictionary keys based on mapping"""
        transformed = []
        for item in data:
            new_item = {}
            for old_key, new_key in mapping.items():
                if old_key in item:
                    new_item[new_key] = item[old_key]
            transformed.append(new_item)
        return transformed


def demo_data_processor():
    """Demonstrate DataProcessor capabilities"""
    print("\n" + "=" * 60)
    print("  NovaSphere Data Processor Demo")
    print("=" * 60)
    
    processor = DataProcessor()
    
    # Statistics demo
    print("\n--- Statistical Analysis ---")
    sample_data = [23, 45, 67, 12, 89, 34, 56, 78, 90, 11]
    stats = processor.get_statistics(sample_data)
    print(f"Sample Data: {sample_data}")
    print(f"Statistics:")
    for key, value in stats.items():
        print(f"  {key.capitalize()}: {value:.2f}")
    
    # Text analysis demo
    print("\n--- Text Analysis ---")
    sample_text = "NovaSphere brings the future of computing to your hands with holographic displays and quantum processing"
    analysis = processor.analyze_text(sample_text)
    print(f"Text: '{sample_text}'")
    print(f"Analysis:")
    print(f"  Total Words: {analysis['total_words']}")
    print(f"  Unique Words: {analysis['unique_words']}")
    print(f"  Total Characters: {analysis['total_characters']}")
    print(f"  Average Word Length: {analysis['average_word_length']:.2f}")
    print(f"  Most Common Words: {analysis['most_common']}")
    
    # Data filtering demo
    print("\n--- Data Filtering ---")
    users = [
        {"name": "Alice", "role": "admin", "score": 95},
        {"name": "Bob", "role": "user", "score": 87},
        {"name": "Charlie", "role": "admin", "score": 92},
        {"name": "Diana", "role": "user", "score": 88}
    ]
    admins = processor.filter_data(users, "role", "admin")
    print(f"Total Users: {len(users)}")
    print(f"Admin Users: {[user['name'] for user in admins]}")
    
    # Data transformation demo
    print("\n--- Data Transformation ---")
    mapping = {"name": "username", "score": "points"}
    transformed = processor.transform_data(users, mapping)
    print(f"Original Keys: {list(users[0].keys())}")
    print(f"Transformed Keys: {list(transformed[0].keys())}")
    print(f"Sample Transformed: {transformed[0]}")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_data_processor()
