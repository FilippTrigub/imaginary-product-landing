#!/usr/bin/env python3
"""
NovaSphere Demo Runner
Run all module demonstrations in sequence
"""

import sys
import time
from datetime import datetime


def print_header(title: str) -> None:
    """Print a formatted header"""
    print("\n" + "=" * 70)
    print(f"  {title}")
    print("=" * 70)


def print_separator() -> None:
    """Print a separator line"""
    print("\n" + "-" * 70 + "\n")


def run_demo(module_name: str, description: str) -> bool:
    """Run a single demo module"""
    try:
        print_header(f"Running: {module_name}")
        print(f"Description: {description}")
        print_separator()
        
        start_time = time.time()
        
        # Import and run the demo
        if module_name == "hello_world":
            from hello_world import main
            main()
        elif module_name == "data_processor":
            from data_processor import demo_data_processor
            demo_data_processor()
        elif module_name == "utilities":
            from utilities import demo_utilities
            demo_utilities()
        elif module_name == "api_client":
            from api_client import demo_api_client
            demo_api_client()
        elif module_name == "file_manager":
            from file_manager import demo_file_manager
            demo_file_manager()
        elif module_name == "logger":
            from logger import demo_logger
            demo_logger()
        elif module_name == "database":
            from database import demo_database
            demo_database()
        elif module_name == "scheduler":
            from scheduler import demo_scheduler
            demo_scheduler()
        elif module_name == "cache":
            from cache import demo_cache
            demo_cache()
        elif module_name == "test_suite":
            from test_suite import demo_test_suite, run_module_tests
            demo_test_suite()
            run_module_tests()
        
        duration = time.time() - start_time
        
        print_separator()
        print(f"✓ {module_name} completed successfully in {duration:.2f}s")
        return True
        
    except Exception as e:
        print(f"\n✗ Error running {module_name}: {e}")
        return False


def main():
    """Run all demos"""
    print_header("NovaSphere Complete Demo Suite")
    print(f"Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Python version: {sys.version}")
    
    demos = [
        ("hello_world", "Basic Python demonstrations and NovaSphere intro"),
        ("data_processor", "Data processing and statistical analysis"),
        ("utilities", "Common utility functions and helpers"),
        ("api_client", "REST API client with authentication"),
        ("file_manager", "File operations and configuration management"),
        ("logger", "Advanced logging system with multiple levels"),
        ("database", "In-memory database with query capabilities"),
        ("scheduler", "Task scheduling and job management"),
        ("cache", "Advanced caching with TTL and eviction policies"),
        ("test_suite", "Comprehensive testing framework")
    ]
    
    results = []
    start_time = time.time()
    
    for module_name, description in demos:
        success = run_demo(module_name, description)
        results.append((module_name, success))
        
        # Small delay between demos
        if module_name != demos[-1][0]:
            time.sleep(0.5)
    
    total_duration = time.time() - start_time
    
    # Print summary
    print_header("Demo Suite Summary")
    
    successful = sum(1 for _, success in results if success)
    failed = len(results) - successful
    
    print(f"\nTotal Demos: {len(results)}")
    print(f"Successful:  {successful} ({successful/len(results)*100:.1f}%)")
    print(f"Failed:      {failed}")
    print(f"Duration:    {total_duration:.2f}s")
    
    print("\nDetailed Results:")
    for module_name, success in results:
        status = "✓ PASS" if success else "✗ FAIL"
        print(f"  {status} | {module_name}")
    
    print_header("All Demos Completed")
    print(f"Finished at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Exit with appropriate code
    sys.exit(0 if failed == 0 else 1)


if __name__ == "__main__":
    main()
