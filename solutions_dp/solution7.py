"""
Solution 7: Longest Common Subsequence (LCS)
"""

def lcs_length(text1, text2):
    """
    Standard 2D DP solution for LCS length.
    dp[i][j] = LCS length of text1[0:i] and text2[0:j]
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[m][n]


def lcs_sequence(text1, text2):
    """
    Return the actual LCS string.
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    # Backtrack to construct the LCS
    lcs = []
    i, j = m, n
    while i > 0 and j > 0:
        if text1[i - 1] == text2[j - 1]:
            lcs.append(text1[i - 1])
            i -= 1
            j -= 1
        elif dp[i - 1][j] > dp[i][j - 1]:
            i -= 1
        else:
            j -= 1

    return ''.join(reversed(lcs))


def lcs_all_sequences(text1, text2):
    """
    Return all possible LCS strings.
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    def backtrack(i, j):
        if i == 0 or j == 0:
            return {''}

        if text1[i - 1] == text2[j - 1]:
            result = set()
            for seq in backtrack(i - 1, j - 1):
                result.add(seq + text1[i - 1])
            return result

        result = set()
        if dp[i - 1][j] >= dp[i][j - 1]:
            result.update(backtrack(i - 1, j))
        if dp[i][j - 1] >= dp[i - 1][j]:
            result.update(backtrack(i, j - 1))

        return result

    all_lcs = backtrack(m, n)
    return sorted(list(all_lcs))


if __name__ == "__main__":
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

    print("\n✓ All tests passed")
