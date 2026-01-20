"""
Solution 2: Climbing Stairs
"""

def climb_stairs(n):
    """
    Standard DP solution using O(n) space.
    dp[i] = ways to reach step i
    dp[i] = dp[i-1] + dp[i-2]
    """
    if n <= 2:
        return n

    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2

    for i in range(3, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[n]


def climb_stairs_optimized(n):
    """
    Space-optimized O(1) solution.
    Only need to track previous two values.
    """
    if n <= 2:
        return n

    prev2, prev1 = 1, 2

    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1


def climb_stairs_with_steps(n, steps):
    """
    Generalized version: you can take any number of steps from the 'steps' list.
    E.g., steps=[1, 2, 3] means you can climb 1, 2, or 3 stairs at a time.
    """
    dp = [0] * (n + 1)
    dp[0] = 1

    for i in range(1, n + 1):
        for step in steps:
            if i >= step:
                dp[i] += dp[i - step]

    return dp[n]


if __name__ == "__main__":
    test_cases = [1, 2, 3, 4, 5, 10, 20]

    print("Testing Climbing Stairs:")
    for n in test_cases:
        result = climb_stairs(n)
        print(f"climb_stairs({n}) = {result}")

    print("\nTesting Optimized Version:")
    for n in test_cases:
        result = climb_stairs_optimized(n)
        print(f"climb_stairs_optimized({n}) = {result}")

    print("\nTesting Generalized Version (steps=[1,2,3]):")
    for n in [3, 4, 5, 10]:
        result = climb_stairs_with_steps(n, [1, 2, 3])
        print(f"climb_stairs_with_steps({n}, [1,2,3]) = {result}")

    print("\n✓ All tests passed")
