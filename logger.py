#!/usr/bin/env python3
"""
NovaSphere Logger
Advanced logging system for NovaSphere applications
"""

import sys
from datetime import datetime
from typing import Optional, List, Dict, Any
from enum import Enum


class LogLevel(Enum):
    """Log severity levels"""
    DEBUG = 0
    INFO = 1
    WARNING = 2
    ERROR = 3
    CRITICAL = 4


class LogEntry:
    """Represents a single log entry"""
    
    def __init__(self, level: LogLevel, message: str, context: Optional[Dict[str, Any]] = None):
        self.timestamp = datetime.now()
        self.level = level
        self.message = message
        self.context = context or {}
    
    def __str__(self) -> str:
        time_str = self.timestamp.strftime("%Y-%m-%d %H:%M:%S")
        context_str = f" | {self.context}" if self.context else ""
        return f"[{time_str}] {self.level.name:8} | {self.message}{context_str}"
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert log entry to dictionary"""
        return {
            "timestamp": self.timestamp.isoformat(),
            "level": self.level.name,
            "message": self.message,
            "context": self.context
        }


class Logger:
    """Advanced logger with multiple output targets and filtering"""
    
    def __init__(self, name: str = "NovaSphere", min_level: LogLevel = LogLevel.INFO):
        self.name = name
        self.min_level = min_level
        self.entries: List[LogEntry] = []
        self.handlers: List[callable] = []
        self.enabled = True
        
        # Add default console handler
        self.add_handler(self._console_handler)
    
    def _console_handler(self, entry: LogEntry) -> None:
        """Default console output handler"""
        color_codes = {
            LogLevel.DEBUG: "\033[36m",      # Cyan
            LogLevel.INFO: "\033[32m",       # Green
            LogLevel.WARNING: "\033[33m",    # Yellow
            LogLevel.ERROR: "\033[31m",      # Red
            LogLevel.CRITICAL: "\033[35m"    # Magenta
        }
        reset = "\033[0m"
        
        color = color_codes.get(entry.level, "")
        print(f"{color}{entry}{reset}")
    
    def add_handler(self, handler: callable) -> None:
        """Add a custom log handler"""
        self.handlers.append(handler)
    
    def remove_handler(self, handler: callable) -> None:
        """Remove a log handler"""
        if handler in self.handlers:
            self.handlers.remove(handler)
    
    def set_level(self, level: LogLevel) -> None:
        """Set minimum log level"""
        self.min_level = level
    
    def _log(self, level: LogLevel, message: str, context: Optional[Dict[str, Any]] = None) -> None:
        """Internal logging method"""
        if not self.enabled or level.value < self.min_level.value:
            return
        
        entry = LogEntry(level, message, context)
        self.entries.append(entry)
        
        # Call all handlers
        for handler in self.handlers:
            try:
                handler(entry)
            except Exception as e:
                print(f"Error in log handler: {e}", file=sys.stderr)
    
    def debug(self, message: str, **context) -> None:
        """Log debug message"""
        self._log(LogLevel.DEBUG, message, context)
    
    def info(self, message: str, **context) -> None:
        """Log info message"""
        self._log(LogLevel.INFO, message, context)
    
    def warning(self, message: str, **context) -> None:
        """Log warning message"""
        self._log(LogLevel.WARNING, message, context)
    
    def error(self, message: str, **context) -> None:
        """Log error message"""
        self._log(LogLevel.ERROR, message, context)
    
    def critical(self, message: str, **context) -> None:
        """Log critical message"""
        self._log(LogLevel.CRITICAL, message, context)
    
    def get_entries(self, level: Optional[LogLevel] = None) -> List[LogEntry]:
        """Get log entries, optionally filtered by level"""
        if level is None:
            return self.entries.copy()
        return [e for e in self.entries if e.level == level]
    
    def get_statistics(self) -> Dict[str, int]:
        """Get logging statistics"""
        stats = {level.name: 0 for level in LogLevel}
        for entry in self.entries:
            stats[entry.level.name] += 1
        return stats
    
    def clear(self) -> None:
        """Clear all log entries"""
        self.entries.clear()
    
    def enable(self) -> None:
        """Enable logging"""
        self.enabled = True
    
    def disable(self) -> None:
        """Disable logging"""
        self.enabled = False


class PerformanceLogger:
    """Logger specialized for performance monitoring"""
    
    def __init__(self, logger: Logger):
        self.logger = logger
        self.timers: Dict[str, datetime] = {}
    
    def start_timer(self, name: str) -> None:
        """Start a performance timer"""
        self.timers[name] = datetime.now()
        self.logger.debug(f"Timer started: {name}")
    
    def stop_timer(self, name: str) -> Optional[float]:
        """Stop a performance timer and log duration"""
        if name not in self.timers:
            self.logger.warning(f"Timer not found: {name}")
            return None
        
        start_time = self.timers[name]
        duration = (datetime.now() - start_time).total_seconds()
        del self.timers[name]
        
        self.logger.info(f"Timer completed: {name}", duration=f"{duration:.4f}s")
        return duration
    
    def log_operation(self, operation: str, duration: float, success: bool = True) -> None:
        """Log an operation with performance metrics"""
        status = "SUCCESS" if success else "FAILED"
        self.logger.info(
            f"Operation: {operation}",
            status=status,
            duration=f"{duration:.4f}s"
        )


def demo_logger():
    """Demonstrate Logger capabilities"""
    print("\n" + "=" * 60)
    print("  NovaSphere Logger Demo")
    print("=" * 60)
    
    # Create logger
    logger = Logger("NovaSphere", LogLevel.DEBUG)
    
    # Basic logging
    print("\n--- Basic Logging ---")
    logger.debug("System initialization started")
    logger.info("NovaSphere system online")
    logger.warning("Device battery low", device_id="dev003", battery=15)
    logger.error("Failed to connect to device", device_id="dev999", reason="timeout")
    logger.critical("System overheating", temperature=95, threshold=85)
    
    # Performance logging
    print("\n--- Performance Logging ---")
    perf_logger = PerformanceLogger(logger)
    
    perf_logger.start_timer("data_processing")
    # Simulate some work
    result = sum([i**2 for i in range(100000)])
    duration = perf_logger.stop_timer("data_processing")
    
    perf_logger.log_operation("calculate_fibonacci", 0.0023, success=True)
    perf_logger.log_operation("connect_device", 1.5432, success=False)
    
    # Statistics
    print("\n--- Logging Statistics ---")
    stats = logger.get_statistics()
    print("Log entries by level:")
    for level, count in stats.items():
        if count > 0:
            print(f"  {level:8}: {count}")
    
    # Filter entries
    print("\n--- Error Entries ---")
    errors = logger.get_entries(LogLevel.ERROR)
    print(f"Total errors: {len(errors)}")
    for error in errors:
        print(f"  • {error.message}")
    
    # Custom handler demo
    print("\n--- Custom Handler Demo ---")
    file_logs = []
    
    def file_handler(entry: LogEntry):
        """Custom handler that stores logs in memory"""
        file_logs.append(entry.to_dict())
    
    logger.add_handler(file_handler)
    logger.info("This message goes to both console and custom handler")
    logger.warning("Another message with custom handler")
    
    print(f"Custom handler captured {len(file_logs)} entries")
    
    # Level filtering
    print("\n--- Level Filtering ---")
    logger.set_level(LogLevel.WARNING)
    logger.debug("This debug message won't appear")
    logger.info("This info message won't appear")
    logger.warning("This warning will appear")
    logger.error("This error will appear")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    demo_logger()
