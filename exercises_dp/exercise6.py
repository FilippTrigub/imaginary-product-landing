"""
Exercise 6: Edit Distance (Levenshtein Distance)
Difficulty: Medium

Calculate minimum operations (insert, delete, replace) to convert one string to another.
Time complexity: O(m × n)
Space complexity: O(m × n)
"""

def edit_distance(word1, word2):
    """
    Calculate the minimum edit distance between two strings.

    Args:
        word1: First string
        word2: Second string

    Returns:
        Minimum number of operations needed

    Example:
        edit_distance("horse", "ros") -> 3
        edit_distance("intention", "execution") -> 5
    """
    # TODO: Implement your solution here
    pass


def edit_distance_with_ops(word1, word2):
    """
    Return both the distance and the operations needed.

    Args:
        word1: First string
        word2: Second string

    Returns:
        Tuple of (distance, list of operations)
    """
    # TODO: Implement to return the actual operations
    pass


def edit_distance_optimized(word1, word2):
    """
    Space-optimized version using O(min(m, n)) space.

    Args:
        word1: First string
        word2: Second string

    Returns:
        Minimum number of operations needed
    """
    # TODO: Implement space-optimized version
    pass


if __name__ == "__main__":
    # Test cases
    test_cases = [
        ("horse", "ros"),
        ("intention", "execution"),
        ("kitten", "sitting"),
        ("saturday", "sunday"),
        ("", "abc"),
        ("abc", ""),
        ("abc", "abc")
    ]

    print("Testing Edit Distance:")
    for word1, word2 in test_cases:
        result = edit_distance(word1, word2)
        print(f"edit_distance('{word1}', '{word2}') = {result}")

    print("\nTesting with Operations:")
    for word1, word2 in test_cases[:4]:
        distance, ops = edit_distance_with_ops(word1, word2)
        print(f"edit_distance_with_ops('{word1}', '{word2}') = {distance}")
        print(f"  Operations: {ops}")

    print("\nTesting Optimized Version:")
    for word1, word2 in test_cases:
        result = edit_distance_optimized(word1, word2)
        print(f"edit_distance_optimized('{word1}', '{word2}') = {result}")
