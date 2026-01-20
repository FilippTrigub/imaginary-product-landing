"""
Exercise 4: Longest Increasing Subsequence
Difficulty: Medium

Find the length of the longest strictly increasing subsequence.
Time complexity: O(n²) basic, O(n log n) optimized
Space complexity: O(n)
"""

def longest_increasing(nums):
    """
    Find the length of the longest increasing subsequence (O(n²) solution).

    Args:
        nums: List of integers

    Returns:
        Length of the longest increasing subsequence

    Example:
        longest_increasing([10, 9, 2, 5, 3, 7, 101, 18]) -> 4
        longest_increasing([0, 1, 0, 3, 2, 3]) -> 4
    """
    # TODO: Implement your solution here
    pass


def longest_increasing_optimized(nums):
    """
    Find the LIS length using binary search (O(n log n) solution).

    Args:
        nums: List of integers

    Returns:
        Length of the longest increasing subsequence
    """
    # TODO: Implement optimized version with binary search
    pass


def longest_increasing_sequence(nums):
    """
    Return the actual longest increasing subsequence, not just the length.

    Args:
        nums: List of integers

    Returns:
        One of the longest increasing subsequences
    """
    # TODO: Implement to return the actual sequence
    pass


if __name__ == "__main__":
    # Test cases
    test_cases = [
        [10, 9, 2, 5, 3, 7, 101, 18],
        [0, 1, 0, 3, 2, 3],
        [7, 7, 7, 7, 7],
        [1, 3, 6, 7, 9, 4, 10, 5, 6],
        []
    ]

    print("Testing Longest Increasing Subsequence:")
    for nums in test_cases:
        result = longest_increasing(nums)
        print(f"longest_increasing({nums}) = {result}")

    print("\nTesting Optimized Version:")
    for nums in test_cases:
        result = longest_increasing_optimized(nums)
        print(f"longest_increasing_optimized({nums}) = {result}")

    print("\nTesting Sequence Reconstruction:")
    for nums in test_cases[:3]:
        result = longest_increasing_sequence(nums)
        print(f"longest_increasing_sequence({nums}) = {result}")
