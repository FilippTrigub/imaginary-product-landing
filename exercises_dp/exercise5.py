"""
Exercise 5: 0/1 Knapsack Problem
Difficulty: Medium

Find the maximum value that can be carried in a knapsack of given capacity.
Time complexity: O(n × capacity)
Space complexity: O(n × capacity)
"""

def knapsack(values, weights, capacity):
    """
    Solve the 0/1 knapsack problem.

    Args:
        values: List of item values
        weights: List of item weights
        capacity: Maximum weight capacity

    Returns:
        Maximum value that can be carried

    Example:
        knapsack([60, 100, 120], [10, 20, 30], 50) -> 220
    """
    # TODO: Implement your solution here
    pass


def knapsack_items(values, weights, capacity):
    """
    Return which items should be included in the knapsack.

    Args:
        values: List of item values
        weights: List of item weights
        capacity: Maximum weight capacity

    Returns:
        Tuple of (max_value, list of item indices)
    """
    # TODO: Implement to return the actual items selected
    pass


def knapsack_optimized(values, weights, capacity):
    """
    Space-optimized version using 1D array.

    Args:
        values: List of item values
        weights: List of item weights
        capacity: Maximum weight capacity

    Returns:
        Maximum value that can be carried
    """
    # TODO: Implement space-optimized version
    pass


if __name__ == "__main__":
    # Test cases
    test_cases = [
        ([60, 100, 120], [10, 20, 30], 50),
        ([10, 40, 30, 50], [5, 4, 6, 3], 10),
        ([1, 2, 3], [4, 5, 1], 4),
        ([24, 18, 18, 10], [24, 10, 10, 7], 25)
    ]

    print("Testing 0/1 Knapsack:")
    for values, weights, capacity in test_cases:
        result = knapsack(values, weights, capacity)
        print(f"knapsack(values={values}, weights={weights}, capacity={capacity}) = {result}")

    print("\nTesting with Item Selection:")
    for values, weights, capacity in test_cases:
        max_val, items = knapsack_items(values, weights, capacity)
        print(f"knapsack_items(..., capacity={capacity}) = {max_val}, items={items}")

    print("\nTesting Optimized Version:")
    for values, weights, capacity in test_cases:
        result = knapsack_optimized(values, weights, capacity)
        print(f"knapsack_optimized(..., capacity={capacity}) = {result}")
