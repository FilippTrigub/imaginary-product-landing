"""
Exercise 1: Fibonacci with Memoization
Difficulty: Easy

Implement the Fibonacci sequence using dynamic programming with memoization.
Time complexity: O(n)
Space complexity: O(n)
"""

def fib(n, memo=None):
    """
    Calculate the nth Fibonacci number using memoization.

    Args:
        n: The position in the Fibonacci sequence (0-indexed)
        memo: Dictionary to store computed values

    Returns:
        The nth Fibonacci number

    Example:
        fib(10) -> 55
        fib(20) -> 6765
    """
    # TODO: Implement your solution here
    pass


def fib_bottom_up(n):
    """
    Calculate the nth Fibonacci number using bottom-up DP.

    Args:
        n: The position in the Fibonacci sequence

    Returns:
        The nth Fibonacci number
    """
    # TODO: Implement bottom-up approach here
    pass


if __name__ == "__main__":
    # Test cases
    test_cases = [0, 1, 5, 10, 15, 20, 30]

    print("Testing Fibonacci with Memoization:")
    for n in test_cases:
        result = fib(n)
        print(f"fib({n}) = {result}")

    print("\nTesting Bottom-Up Approach:")
    for n in test_cases:
        result = fib_bottom_up(n)
        print(f"fib_bottom_up({n}) = {result}")
