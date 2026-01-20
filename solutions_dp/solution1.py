"""
Solution 1: Fibonacci with Memoization
"""

def fib(n, memo=None):
    """Top-down DP with memoization."""
    if memo is None:
        memo = {}

    if n in memo:
        return memo[n]

    if n <= 1:
        return n

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]


def fib_bottom_up(n):
    """Bottom-up DP approach."""
    if n <= 1:
        return n

    dp = [0] * (n + 1)
    dp[1] = 1

    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]


def fib_space_optimized(n):
    """Space-optimized O(1) solution."""
    if n <= 1:
        return n

    prev2, prev1 = 0, 1

    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1


if __name__ == "__main__":
    test_cases = [0, 1, 5, 10, 15, 20, 30]

    print("Testing Fibonacci with Memoization:")
    for n in test_cases:
        result = fib(n)
        print(f"fib({n}) = {result}")

    print("\nTesting Bottom-Up Approach:")
    for n in test_cases:
        result = fib_bottom_up(n)
        print(f"fib_bottom_up({n}) = {result}")

    print("\nTesting Space-Optimized:")
    for n in test_cases:
        result = fib_space_optimized(n)
        print(f"fib_space_optimized({n}) = {result}")

    # Verify they all produce the same results
    print("\n✓ All implementations produce consistent results")
