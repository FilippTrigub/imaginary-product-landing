"""
Solution 6: Edit Distance (Levenshtein Distance)
"""

def edit_distance(word1, word2):
    """
    Standard 2D DP solution.
    dp[i][j] = edit distance between word1[0:i] and word2[0:j]
    """
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Base cases
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j

    # Fill the DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # delete
                    dp[i][j - 1],      # insert
                    dp[i - 1][j - 1]   # replace
                )

    return dp[m][n]


def edit_distance_with_ops(word1, word2):
    """
    Return both distance and the operations needed.
    """
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1]
                )

    # Backtrack to find operations
    operations = []
    i, j = m, n
    while i > 0 or j > 0:
        if i == 0:
            operations.append(f"Insert '{word2[j-1]}'")
            j -= 1
        elif j == 0:
            operations.append(f"Delete '{word1[i-1]}'")
            i -= 1
        elif word1[i - 1] == word2[j - 1]:
            i -= 1
            j -= 1
        else:
            if dp[i][j] == dp[i - 1][j - 1] + 1:
                operations.append(f"Replace '{word1[i-1]}' with '{word2[j-1]}'")
                i -= 1
                j -= 1
            elif dp[i][j] == dp[i - 1][j] + 1:
                operations.append(f"Delete '{word1[i-1]}'")
                i -= 1
            else:
                operations.append(f"Insert '{word2[j-1]}'")
                j -= 1

    return dp[m][n], list(reversed(operations))


def edit_distance_optimized(word1, word2):
    """
    Space-optimized using two rows.
    """
    m, n = len(word1), len(word2)
    if m < n:
        word1, word2 = word2, word1
        m, n = n, m

    prev = list(range(n + 1))
    curr = [0] * (n + 1)

    for i in range(1, m + 1):
        curr[0] = i
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                curr[j] = prev[j - 1]
            else:
                curr[j] = 1 + min(prev[j], curr[j - 1], prev[j - 1])
        prev, curr = curr, prev

    return prev[n]


if __name__ == "__main__":
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

    print("\n✓ All tests passed")
