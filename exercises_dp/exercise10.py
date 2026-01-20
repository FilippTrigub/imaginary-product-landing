"""
Exercise 10: Optimal Binary Search Tree
Difficulty: Hard

Construct a BST with minimum weighted search cost given search frequencies.
Time complexity: O(n³)
Space complexity: O(n²)
"""

def optimal_bst(keys, frequencies):
    """
    Find the minimum weighted search cost for a BST.

    Args:
        keys: List of keys in sorted order
        frequencies: List of search frequencies for each key

    Returns:
        Minimum weighted search cost

    Example:
        optimal_bst([10, 12, 20], [34, 8, 50]) -> 142
    """
    # TODO: Implement your solution here
    pass


def optimal_bst_structure(keys, frequencies):
    """
    Return the structure of the optimal BST.

    Args:
        keys: List of keys in sorted order
        frequencies: List of search frequencies for each key

    Returns:
        Tuple of (min_cost, root_matrix) where root_matrix shows the structure
    """
    # TODO: Implement to return the tree structure
    pass


def optimal_bst_with_dummy(keys, key_freq, dummy_freq):
    """
    Optimal BST with dummy keys (unsuccessful search probabilities).

    Args:
        keys: List of keys in sorted order
        key_freq: Frequencies for successful searches
        dummy_freq: Frequencies for unsuccessful searches (between and outside keys)

    Returns:
        Minimum weighted search cost including dummy keys
    """
    # TODO: Implement extended version with dummy keys
    pass


def print_bst_structure(root_matrix, keys, i, j, indent=""):
    """
    Helper function to print the BST structure.

    Args:
        root_matrix: Matrix containing optimal roots
        keys: List of keys
        i, j: Current subproblem range
        indent: Current indentation level
    """
    # TODO: Implement tree printing
    pass


if __name__ == "__main__":
    # Test cases
    print("Testing Optimal BST:")
    test_cases = [
        ([10, 12, 20], [34, 8, 50]),
        ([10, 20, 30, 40], [4, 2, 6, 3]),
        ([1, 2, 3, 4], [10, 20, 30, 40]),
        ([5, 6], [17, 25])
    ]

    for keys, freq in test_cases:
        result = optimal_bst(keys, freq)
        print(f"optimal_bst(keys={keys}, freq={freq})")
        print(f"  Minimum cost = {result}")

    print("\nTesting with Tree Structure:")
    for keys, freq in test_cases[:2]:
        cost, root_mat = optimal_bst_structure(keys, freq)
        print(f"\noptimal_bst_structure(keys={keys}, freq={freq})")
        print(f"  Minimum cost = {cost}")
        print(f"  Root matrix = {root_mat}")

    print("\nTesting with Dummy Keys:")
    test_cases_dummy = [
        ([10, 12, 20], [34, 8, 50], [3, 2, 4, 2]),
        ([10, 20], [34, 50], [3, 2, 4])
    ]

    for keys, key_freq, dummy_freq in test_cases_dummy:
        result = optimal_bst_with_dummy(keys, key_freq, dummy_freq)
        print(f"optimal_bst_with_dummy(keys={keys})")
        print(f"  Key freq={key_freq}, Dummy freq={dummy_freq}")
        print(f"  Minimum cost = {result}")
