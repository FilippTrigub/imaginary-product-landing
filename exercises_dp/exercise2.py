"""
Exercise 2: Climbing Stairs
Difficulty: Easy

Calculate how many distinct ways you can climb n stairs when you can take 1 or 2 steps.
Time complexity: O(n)
Space complexity: O(n) or O(1) for optimized
"""

def climb_stairs(n):
    """
    Calculate the number of distinct ways to climb n stairs.

    Args:
        n: Number of stairs

    Returns:
        Number of distinct ways to reach the top

    Example:
        climb_stairs(3) -> 3  # (1+1+1, 1+2, 2+1)
        climb_stairs(5) -> 8
    """
    # TODO: Implement your solution here
    pass


def climb_stairs_optimized(n):
    """
    Space-optimized version using O(1) space.

    Args:
        n: Number of stairs

    Returns:
        Number of distinct ways to reach the top
    """
    # TODO: Implement space-optimized version here
    pass


if __name__ == "__main__":
    # Test cases
    test_cases = [1, 2, 3, 4, 5, 10, 20]

    print("Testing Climbing Stairs:")
    for n in test_cases:
        result = climb_stairs(n)
        print(f"climb_stairs({n}) = {result}")

    print("\nTesting Optimized Version:")
    for n in test_cases:
        result = climb_stairs_optimized(n)
        print(f"climb_stairs_optimized({n}) = {result}")
