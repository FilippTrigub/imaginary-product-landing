#!/usr/bin/env python3
"""
NovaSphere Test Suite
Comprehensive testing framework for NovaSphere modules
"""

import sys
from typing import List, Callable, Tuple, Any
from datetime import datetime


class TestResult:
    """Represents the result of a single test"""
    
    def __init__(self, name: str, passed: bool, message: str = "", duration: float = 0.0):
        self.name = name
        self.passed = passed
        self.message = message
        self.duration = duration
    
    def __str__(self) -> str:
        status = "✓ PASS" if self.passed else "✗ FAIL"
        duration_str = f" ({self.duration:.4f}s)" if self.duration > 0 else ""
        msg = f" - {self.message}" if self.message else ""
        return f"{status} | {self.name}{duration_str}{msg}"


class TestSuite:
    """Test suite for running and managing tests"""
    
    def __init__(self, name: str):
        self.name = name
        self.tests: List[Tuple[str, Callable]] = []
        self.results: List[TestResult] = []
        self.setup_func: Callable = None
        self.teardown_func: Callable = None
    
    def add_test(self, name: str, test_func: Callable) -> None:
        """Add a test to the suite"""
        self.tests.append((name, test_func))
    
    def setup(self, func: Callable) -> None:
        """Set setup function to run before each test"""
        self.setup_func = func
    
    def teardown(self, func: Callable) -> None:
        """Set teardown function to run after each test"""
        self.teardown_func = func
    
    def run(self) -> None:
        """Run all tests in the suite"""
        print(f"\n{'=' * 60}")
        print(f"  Running Test Suite: {self.name}")
        print(f"{'=' * 60}\n")
        
        for test_name, test_func in self.tests:
            start_time = datetime.now()
            
            try:
                # Run setup if defined
                if self.setup_func:
                    self.setup_func()
                
                # Run the test
                test_func()
                
                # Test passed
                duration = (datetime.now() - start_time).total_seconds()
                result = TestResult(test_name, True, duration=duration)
                
            except AssertionError as e:
                # Test failed
                duration = (datetime.now() - start_time).total_seconds()
                result = TestResult(test_name, False, str(e), duration)
                
            except Exception as e:
                # Test error
                duration = (datetime.now() - start_time).total_seconds()
                result = TestResult(test_name, False, f"Error: {e}", duration)
            
            finally:
                # Run teardown if defined
                if self.teardown_func:
                    try:
                        self.teardown_func()
                    except Exception as e:
                        print(f"Teardown error: {e}")
            
            self.results.append(result)
            print(result)
        
        self.print_summary()
    
    def print_summary(self) -> None:
        """Print test summary"""
        total = len(self.results)
        passed = sum(1 for r in self.results if r.passed)
        failed = total - passed
        total_duration = sum(r.duration for r in self.results)
        
        print(f"\n{'=' * 60}")
        print(f"  Test Summary")
        print(f"{'=' * 60}")
        print(f"Total Tests:  {total}")
        print(f"Passed:       {passed} ({passed/total*100:.1f}%)" if total > 0 else "Passed:       0")
        print(f"Failed:       {failed} ({failed/total*100:.1f}%)" if total > 0 else "Failed:       0")
        print(f"Duration:     {total_duration:.4f}s")
        print(f"{'=' * 60}\n")


def assert_equal(actual: Any, expected: Any, message: str = "") -> None:
    """Assert that two values are equal"""
    if actual != expected:
        msg = message or f"Expected {expected}, got {actual}"
        raise AssertionError(msg)


def assert_true(condition: bool, message: str = "") -> None:
    """Assert that condition is true"""
    if not condition:
        msg = message or "Condition is not true"
        raise AssertionError(msg)


def assert_false(condition: bool, message: str = "") -> None:
    """Assert that condition is false"""
    if condition:
        msg = message or "Condition is not false"
        raise AssertionError(msg)


def assert_in(item: Any, container: Any, message: str = "") -> None:
    """Assert that item is in container"""
    if item not in container:
        msg = message or f"{item} not found in {container}"
        raise AssertionError(msg)


def assert_not_none(value: Any, message: str = "") -> None:
    """Assert that value is not None"""
    if value is None:
        msg = message or "Value is None"
        raise AssertionError(msg)


def demo_test_suite():
    """Demonstrate test suite capabilities"""
    
    # Create test suite
    suite = TestSuite("NovaSphere Core Tests")
    
    # Add tests
    suite.add_test("test_basic_math", lambda: assert_equal(2 + 2, 4))
    suite.add_test("test_string_operations", lambda: assert_equal("hello".upper(), "HELLO"))
    suite.add_test("test_list_contains", lambda: assert_in(3, [1, 2, 3, 4, 5]))
    suite.add_test("test_boolean_true", lambda: assert_true(10 > 5))
    suite.add_test("test_boolean_false", lambda: assert_false(5 > 10))
    suite.add_test("test_not_none", lambda: assert_not_none("value"))
    
    # Add a test that will fail
    suite.add_test("test_intentional_failure", lambda: assert_equal(1, 2, "This test is designed to fail"))
    
    # Add more passing tests
    suite.add_test("test_list_length", lambda: assert_equal(len([1, 2, 3]), 3))
    suite.add_test("test_dict_key", lambda: assert_in("name", {"name": "NovaSphere", "version": "1.0"}))
    suite.add_test("test_string_contains", lambda: assert_true("Nova" in "NovaSphere"))
    
    # Run the suite
    suite.run()


def run_module_tests():
    """Run tests for NovaSphere modules"""
    print("\n" + "=" * 60)
    print("  NovaSphere Module Integration Tests")
    print("=" * 60 + "\n")
    
    # Test utilities module
    print("Testing utilities module...")
    try:
        from utilities import generate_id, hash_string, format_bytes, validate_email
        
        # Test ID generation
        id1 = generate_id(8)
        assert_equal(len(id1), 8, "ID should be 8 characters")
        print("  ✓ ID generation works")
        
        # Test hashing
        hash_val = hash_string("test")
        assert_equal(len(hash_val), 64, "SHA256 hash should be 64 characters")
        print("  ✓ String hashing works")
        
        # Test byte formatting
        formatted = format_bytes(1024)
        assert_true("KB" in formatted, "Should format to KB")
        print("  ✓ Byte formatting works")
        
        # Test email validation
        assert_true(validate_email("test@example.com"), "Valid email should pass")
        assert_false(validate_email("invalid"), "Invalid email should fail")
        print("  ✓ Email validation works")
        
    except Exception as e:
        print(f"  ✗ Utilities module test failed: {e}")
    
    # Test data processor module
    print("\nTesting data_processor module...")
    try:
        from data_processor import DataProcessor
        
        processor = DataProcessor()
        
        # Test statistics
        stats = processor.get_statistics([1, 2, 3, 4, 5])
        assert_equal(stats['mean'], 3.0, "Mean should be 3.0")
        assert_equal(stats['min'], 1, "Min should be 1")
        assert_equal(stats['max'], 5, "Max should be 5")
        print("  ✓ Statistical analysis works")
        
        # Test text analysis
        analysis = processor.analyze_text("hello world hello")
        assert_equal(analysis['total_words'], 3, "Should have 3 words")
        assert_equal(analysis['unique_words'], 2, "Should have 2 unique words")
        print("  ✓ Text analysis works")
        
    except Exception as e:
        print(f"  ✗ Data processor module test failed: {e}")
    
    # Test API client module
    print("\nTesting api_client module...")
    try:
        from api_client import NovaSphereAPI
        
        api = NovaSphereAPI(api_key="test_key")
        
        # Test device retrieval
        response = api.get_devices()
        assert_true(response.is_success, "Should get devices successfully")
        data = response.json()
        assert_true(data['count'] > 0, "Should have devices")
        print("  ✓ API device retrieval works")
        
        # Test authentication
        login_response = api.login("testuser")
        assert_true(login_response.is_success, "Login should succeed")
        print("  ✓ API authentication works")
        
    except Exception as e:
        print(f"  ✗ API client module test failed: {e}")
    
    print("\n" + "=" * 60)


if __name__ == "__main__":
    # Run demo test suite
    demo_test_suite()
    
    # Run module integration tests
    run_module_tests()
