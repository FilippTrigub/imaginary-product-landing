# NovaSphere Python Modules

A comprehensive collection of Python modules for the NovaSphere project, demonstrating various programming concepts and best practices.

## 📦 Modules Overview

### 1. **hello_world.py**
The main entry point showcasing Python capabilities.

**Features:**
- Personalized greeting functions
- System information display
- Fibonacci sequence generator
- List comprehension demonstrations
- Dictionary operations
- NovaSphere feature showcase

**Usage:**
```bash
python3 hello_world.py
```

---

### 2. **data_processor.py**
Advanced data processing and analysis utilities.

**Features:**
- Statistical analysis (mean, median, min, max, range)
- Text analysis (word count, frequency, metrics)
- Data filtering and transformation
- Data caching system

**Usage:**
```python
from data_processor import DataProcessor

processor = DataProcessor()
stats = processor.get_statistics([1, 2, 3, 4, 5])
analysis = processor.analyze_text("Sample text here")
```

**Demo:**
```bash
python3 data_processor.py
```

---

### 3. **utilities.py**
Common utility functions for everyday tasks.

**Features:**
- Random ID generation
- String hashing (SHA256, MD5)
- Byte and duration formatting
- Email validation
- String truncation
- List chunking
- Dictionary merging
- Timer context manager

**Usage:**
```python
from utilities import generate_id, hash_string, format_bytes, Timer

# Generate random ID
user_id = generate_id(16)

# Hash a string
hashed = hash_string("password123")

# Format bytes
size = format_bytes(1073741824)  # "1.00 GB"

# Time operations
with Timer("My Operation"):
    # Your code here
    pass
```

**Demo:**
```bash
python3 utilities.py
```

---

### 4. **api_client.py**
Simulated REST API client for NovaSphere services.

**Features:**
- RESTful API request handling (GET, POST, PUT, DELETE)
- Authentication and session management
- Device management endpoints
- User management endpoints
- Response objects with status codes
- Error handling

**Usage:**
```python
from api_client import NovaSphereAPI

api = NovaSphereAPI(api_key="your_api_key")

# Login
response = api.login("username")

# Get devices
devices = api.get_devices()

# Create device
new_device = api.create_device({
    "name": "NovaSphere Pro",
    "status": "online"
})
```

**Demo:**
```bash
python3 api_client.py
```

---

### 5. **file_manager.py**
File operations and configuration management.

**Features:**
- Directory creation
- JSON file read/write
- Text file operations
- File listing with patterns
- File information retrieval
- Operation logging
- Configuration manager

**Usage:**
```python
from file_manager import FileManager, ConfigManager

# File operations
fm = FileManager("/path/to/base")
fm.write_json("data.json", {"key": "value"})
data = fm.read_json("data.json")

# Configuration management
config = ConfigManager("config.json")
config.set("app_name", "NovaSphere")
config.save()
```

**Demo:**
```bash
python3 file_manager.py
```

---

### 6. **logger.py**
Advanced logging system with multiple severity levels.

**Features:**
- Multiple log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL)
- Colored console output
- Custom log handlers
- Context-aware logging
- Performance logging
- Log filtering and statistics
- Timer integration

**Usage:**
```python
from logger import Logger, LogLevel, PerformanceLogger

# Basic logging
logger = Logger("MyApp", LogLevel.INFO)
logger.info("Application started")
logger.warning("Low memory", available="512MB")
logger.error("Connection failed", reason="timeout")

# Performance logging
perf = PerformanceLogger(logger)
perf.start_timer("operation")
# ... do work ...
perf.stop_timer("operation")
```

**Demo:**
```bash
python3 logger.py
```

---

### 7. **test_suite.py**
Comprehensive testing framework for all modules.

**Features:**
- Test suite management
- Setup and teardown functions
- Multiple assertion methods
- Test result tracking
- Performance measurement
- Module integration tests
- Detailed test summaries

**Usage:**
```python
from test_suite import TestSuite, assert_equal, assert_true

suite = TestSuite("My Tests")
suite.add_test("test_addition", lambda: assert_equal(2 + 2, 4))
suite.add_test("test_comparison", lambda: assert_true(10 > 5))
suite.run()
```

**Demo:**
```bash
python3 test_suite.py
```

---

## 🚀 Quick Start

### Run All Demos
```bash
# Run each module's demo
python3 hello_world.py
python3 data_processor.py
python3 utilities.py
python3 api_client.py
python3 file_manager.py
python3 logger.py
python3 test_suite.py
```

### Run Tests
```bash
python3 test_suite.py
```

---

## 📋 Requirements

- Python 3.9 or higher
- No external dependencies required (uses only standard library)

---

## 🏗️ Architecture

```
NovaSphere Python Modules
│
├── Core Utilities
│   ├── hello_world.py      (Entry point & demos)
│   ├── utilities.py        (Common utilities)
│   └── logger.py           (Logging system)
│
├── Data & Processing
│   ├── data_processor.py   (Data analysis)
│   └── file_manager.py     (File operations)
│
├── API & Services
│   └── api_client.py       (API client)
│
└── Testing
    └── test_suite.py       (Test framework)
```

---

## 🎯 Key Features

- **Type Hints**: All functions use Python type hints for better code clarity
- **Documentation**: Comprehensive docstrings for all classes and functions
- **Error Handling**: Robust error handling throughout
- **Modular Design**: Each module is independent and reusable
- **Demo Functions**: Every module includes a demo function
- **Testing**: Comprehensive test suite included
- **Best Practices**: Follows PEP 8 and Python best practices

---

## 📊 Module Statistics

| Module | Lines of Code | Classes | Functions | Features |
|--------|--------------|---------|-----------|----------|
| hello_world.py | ~80 | 0 | 4 | 6 |
| data_processor.py | ~150 | 1 | 7 | 8 |
| utilities.py | ~180 | 1 | 11 | 12 |
| api_client.py | ~250 | 3 | 15 | 10 |
| file_manager.py | ~220 | 2 | 12 | 9 |
| logger.py | ~230 | 3 | 14 | 11 |
| test_suite.py | ~280 | 2 | 10 | 8 |

---

## 🔧 Development

### Adding New Tests
```python
from test_suite import TestSuite, assert_equal

suite = TestSuite("New Tests")
suite.add_test("my_test", lambda: assert_equal(result, expected))
suite.run()
```

### Creating Custom Log Handlers
```python
from logger import Logger

def custom_handler(entry):
    # Process log entry
    print(f"Custom: {entry.message}")

logger = Logger("MyApp")
logger.add_handler(custom_handler)
```

---

## 📝 License

Part of the NovaSphere project - The Future of Personal Computing

---

## 🤝 Contributing

This is a demonstration project showcasing Python capabilities for the NovaSphere ecosystem.

---

## 📞 Support

For questions or issues, refer to the main NovaSphere documentation.
