#!/usr/bin/env python3
"""
NovaSphere Cache
Advanced caching system with TTL and eviction policies
"""

import time
from typing import Any, Optional, Dict, Callable
from datetime import datetime, timedelta
from collections import OrderedDict
from enum import Enum


class EvictionPolicy(Enum):
    """Cache eviction policies"""
    LRU = "lru"  # Least Recently Used
    LFU = "lfu"  # Least Frequently Used
    FIFO = "fifo"  # First In First Out


class CacheEntry:
    """Represents a cached item"""
    
    def __init__(self, key: str, value: Any, ttl: Optional[int] = None):
        self.key = key
        self.value = value
        self.created_at = datetime.now()
        self.expires_at = datetime.now() + timedelta(seconds=ttl) if ttl else None
        self.last_accessed = datetime.now()
        self.access_count = 0
    
    def is_expired(self) -> bool:
        """Check if entry has expired"""
        if self.expires_at is None:
            return False
        return datetime.now() > self.expires_at
    
    def access(self) -> Any:
        """Access the cached value"""
        self.last_accessed = datetime.now()
        self.access_count += 1
        return self.value
    
    def get_age(self) -> float:
        """Get age in seconds"""
        return (datetime.now() - self.created_at).total_seconds()


class Cache:
    """Advanced cache with TTL and eviction policies"""
    
    def __init__(self, max_size: int = 100, default_ttl: Optional[int] = None,
                 eviction_policy: EvictionPolicy = EvictionPolicy.LRU):
        self.max_size = max_size
        self.default_ttl = default_ttl
        self.eviction_policy = eviction_policy
        self.entries: Dict[str, CacheEntry] = OrderedDict()
        self.hits = 0
        self.misses = 0
        self.evictions = 0
    
    def set(self, key: str, value: Any, ttl: Optional[int] = None) -> None:
        """Set a cache entry"""
        # Remove expired entries first
        self._cleanup_expired()
        
        # If key exists, remove it first
        if key in self.entries:
            del self.entries[key]
        
        # Check if we need to evict
        if len(self.entries) >= self.max_size:
            self._evict()
        
        # Add new entry
        ttl = ttl if ttl is not None else self.default_ttl
        entry = CacheEntry(key, value, ttl)
        self.entries[key] = entry
    
    def get(self, key: str, default: Any = None) -> Any:
        """Get a cache entry"""
        # Cleanup expired entries
        self._cleanup_expired()
        
        if key not in self.entries:
            self.misses += 1
            return default
        
        entry = self.entries[key]
        
        if entry.is_expired():
            del self.entries[key]
            self.misses += 1
            return default
        
        self.hits += 1
        
        # Move to end for LRU
        if self.eviction_policy == EvictionPolicy.LRU:
            self.entries.move_to_end(key)
        
        return entry.access()
    
    def delete(self, key: str) -> bool:
        """Delete a cache entry"""
        if key in self.entries:
            del self.entries[key]
            return True
        return False
    
    def has(self, key: str) -> bool:
        """Check if key exists and is not expired"""
        if key not in self.entries:
            return False
        
        entry = self.entries[key]
        if entry.is_expired():
            del self.entries[key]
            return False
        
        return True
    
    def clear(self) -> None:
        """Clear all cache entries"""
        self.entries.clear()
        self.hits = 0
        self.misses = 0
        self.evictions = 0
    
    def _cleanup_expired(self) -> int:
        """Remove expired entries"""
        expired_keys = [
            key for key, entry in self.entries.items()
            if entry.is_expired()
        ]
        
        for key in expired_keys:
            del self.entries[key]
        
        return len(expired_keys)
    
    def _evict(self) -> None:
        """Evict an entry based on policy"""
        if not self.entries:
            return
        
        if self.eviction_policy == EvictionPolicy.LRU:
            # Remove least recently used (first item in OrderedDict)
            self.entries.popitem(last=False)
        
        elif self.eviction_policy == EvictionPolicy.LFU:
            # Remove least frequently used
            lfu_key = min(self.entries.keys(), key=lambda k: self.entries[k].access_count)
            del self.entries[lfu_key]
        
        elif self.eviction_policy == EvictionPolicy.FIFO:
            # Remove oldest entry
            self.entries.popitem(last=False)
        
        self.evictions += 1
    
    def get_statistics(self) -> Dict[str, Any]:
        """Get cache statistics"""
        total_requests = self.hits + self.misses
        hit_rate = (self.hits / total_requests * 100) if total_requests > 0 else 0
        
        return {
            "size": len(self.entries),
            "max_size": self.max_size,
            "hits": self.hits,
            "misses": self.misses,
            "hit_rate": f"{hit_rate:.2f}%",
            "evictions": self.evictions,
            "policy": self.eviction_policy.value
        }
    
    def get_keys(self) -> list:
        """Get all cache keys"""
        self._cleanup_expired()
        return list(self.entries.keys())
    
    def get_size(self) -> int:
        """Get current cache size"""
        self._cleanup_expired()
        return len(self.entries)


class MemoizeCache:
    """Decorator for function memoization"""
    
    def __init__(self, ttl: Optional[int] = None, max_size: int = 100):
        self.cache = Cache(max_size=max_size, default_ttl=ttl)
    
    def __call__(self, func: Callable) -> Callable:
        """Decorator implementation"""
        def wrapper(*args, **kwargs):
            # Create cache key from function name and arguments
            key = f"{func.__name__}:{str(args)}:{str(kwargs)}"
            
            # Check cache
            result = self.cache.get(key)
            if result is not None:
                return result
            
            # Execute function and cache result
            result = func(*args, **kwargs)
            self.cache.set(key, result)
            return result
        
        wrapper.cache = self.cache
        return wrapper


def demo_cache():
    """Demonstrate cache capabilities"""
    print("\n" + "=" * 60)
    print("  NovaSphere Cache Demo")
    print("=" * 60)
    
    # Basic cache operations
    print("\n--- Basic Cache Operations ---")
    cache = Cache(max_size=5, default_ttl=None)
    
    cache.set("user:1", {"name": "Alice", "role": "admin"})
    cache.set("user:2", {"name": "Bob", "role": "user"})
    cache.set("device:1", {"name": "NovaSphere Pro", "status": "online"})
    
    print(f"Set 3 items in cache")
    print(f"Cache size: {cache.get_size()}")
    
    # Get operations
    print("\n--- Get Operations ---")
    user1 = cache.get("user:1")
    print(f"Get user:1: {user1}")
    
    user3 = cache.get("user:3", {"name": "Unknown"})
    print(f"Get user:3 (not found): {user3}")
    
    # Cache with TTL
    print("\n--- Cache with TTL ---")
    ttl_cache = Cache(max_size=10, default_ttl=2)
    
    ttl_cache.set("temp:1", "This will expire", ttl=1)
    ttl_cache.set("temp:2", "This will last longer", ttl=5)
    
    print(f"Set 2 items with TTL")
    print(f"Has temp:1: {ttl_cache.has('temp:1')}")
    
    time.sleep(1.5)
    print(f"After 1.5 seconds...")
    print(f"Has temp:1: {ttl_cache.has('temp:1')} (expired)")
    print(f"Has temp:2: {ttl_cache.has('temp:2')} (still valid)")
    
    # LRU eviction
    print("\n--- LRU Eviction Policy ---")
    lru_cache = Cache(max_size=3, eviction_policy=EvictionPolicy.LRU)
    
    lru_cache.set("a", 1)
    lru_cache.set("b", 2)
    lru_cache.set("c", 3)
    print(f"Added 3 items: {lru_cache.get_keys()}")
    
    # Access 'a' to make it recently used
    lru_cache.get("a")
    
    # Add new item, should evict 'b' (least recently used)
    lru_cache.set("d", 4)
    print(f"Added 'd', evicted LRU: {lru_cache.get_keys()}")
    
    # LFU eviction
    print("\n--- LFU Eviction Policy ---")
    lfu_cache = Cache(max_size=3, eviction_policy=EvictionPolicy.LFU)
    
    lfu_cache.set("x", 10)
    lfu_cache.set("y", 20)
    lfu_cache.set("z", 30)
    
    # Access 'x' and 'y' multiple times
    lfu_cache.get("x")
    lfu_cache.get("x")
    lfu_cache.get("y")
    
    # Add new item, should evict 'z' (least frequently used)
    lfu_cache.set("w", 40)
    print(f"Added 'w', evicted LFU: {lfu_cache.get_keys()}")
    
    # Cache statistics
    print("\n--- Cache Statistics ---")
    stats_cache = Cache(max_size=10)
    
    # Perform operations
    stats_cache.set("key1", "value1")
    stats_cache.set("key2", "value2")
    stats_cache.set("key3", "value3")
    
    stats_cache.get("key1")  # hit
    stats_cache.get("key1")  # hit
    stats_cache.get("key2")  # hit
    stats_cache.get("key4")  # miss
    stats_cache.get("key5")  # miss
    
    stats = stats_cache.get_statistics()
    print(f"Size: {stats['size']}/{stats['max_size']}")
    print(f"Hits: {stats['hits']}")
    print(f"Misses: {stats['misses']}")
    print(f"Hit Rate: {stats['hit_rate']}")
    print(f"Evictions: {stats['evictions']}")
    
    # Memoization decorator
    print("\n--- Function Memoization ---")
    
    @MemoizeCache(ttl=10, max_size=50)
    def expensive_calculation(n: int) -> int:
        """Simulate expensive calculation"""
        time.sleep(0.1)
        return n * n
    
    print("First call (will compute):")
    start = time.time()
    result1 = expensive_calculation(5)
    duration1 = time.time() - start
    print(f"  Result: {result1}, Duration: {duration1:.4f}s")
    
    print("Second call (from cache):")
    start = time.time()
    result2 = expensive_calculation(5)
    duration2 = time.time() - start
    print(f"  Result: {result2}, Duration: {duration2:.4f}s")
    
    print(f"Speedup: {duration1/duration2:.1f}x faster")
    
    # Cache info
    cache_stats = expensive_calculation.cache.get_statistics()
    print(f"Cache hits: {cache_stats['hits']}, misses: {cache_stats['misses']}")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_cache()
