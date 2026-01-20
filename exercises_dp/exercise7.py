"""
Exercise 7: Longest Common Subsequence (LCS)
Difficulty: Medium

Find the length of the longest subsequence common to two strings.
Time complexity: O(m × n)
Space complexity: O(m × n)
"""

def lcs_length(text1, text2):
    """
    Find the length of the longest common subsequence.

    Args:
        text1: First string
        text2: Second string

    Returns:
        Length of the LCS

    Example:
        lcs_length("abcde", "ace") -> 3
        lcs_length("abc", "abc") -> 3
        lcs_length("abc", "def") -> 0
    """
    # TODO: Implement your solution here
    pass


def lcs_sequence(text1, text2):
    """
    Return the actual longest common subsequence.

    Args:
        text1: First string
        text2: Second string

    Returns:
        One of the longest common subsequences as a string
    """
    # TODO: Implement to return the actual subsequence
    pass


def lcs_all_sequences(text1, text2):
    """
    Return all possible longest common subsequences.

    Args:
        text1: First string
        text2: Second string

    Returns:
        List of all LCS strings
    """
    # TODO: Implement to return all LCS
    pass


if __name__ == "__main__":
    # Test cases
    test_cases = [
        ("abcde", "ace"),
        ("abc", "abc"),
        ("abc", "def"),
        ("AGGTAB", "GXTXAYB"),
        ("programming", "gaming"),
        ("", "abc"),
        ("abcdef", "fedcba")
    ]

    print("Testing LCS Length:")
    for text1, text2 in test_cases:
        result = lcs_length(text1, text2)
        print(f"lcs_length('{text1}', '{text2}') = {result}")

    print("\nTesting LCS Sequence:")
    for text1, text2 in test_cases:
        result = lcs_sequence(text1, text2)
        print(f"lcs_sequence('{text1}', '{text2}') = '{result}'")

    print("\nTesting All LCS Sequences:")
    for text1, text2 in test_cases[:4]:
        result = lcs_all_sequences(text1, text2)
        print(f"lcs_all_sequences('{text1}', '{text2}') = {result}")
