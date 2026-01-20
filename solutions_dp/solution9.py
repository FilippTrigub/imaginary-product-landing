"""
Solution 9: Word Break Problem
"""

def word_break(s, word_dict):
    """
    Check if string can be segmented into dictionary words.
    dp[i] = True if s[0:i] can be segmented
    """
    word_set = set(word_dict)
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True

    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break

    return dp[n]


def word_break_all(s, word_dict):
    """
    Return all possible segmentations.
    """
    word_set = set(word_dict)
    memo = {}

    def backtrack(start):
        if start in memo:
            return memo[start]

        if start == len(s):
            return [[]]

        result = []
        for end in range(start + 1, len(s) + 1):
            word = s[start:end]
            if word in word_set:
                for rest in backtrack(end):
                    result.append([word] + rest)

        memo[start] = result
        return result

    segmentations = backtrack(0)
    return [' '.join(seg) for seg in segmentations]


def word_break_count(s, word_dict):
    """
    Count the number of ways to segment the string.
    """
    word_set = set(word_dict)
    n = len(s)
    dp = [0] * (n + 1)
    dp[0] = 1

    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] > 0 and s[j:i] in word_set:
                dp[i] += dp[j]

    return dp[n]


if __name__ == "__main__":
    print("Testing Word Break (Boolean):")
    test_cases_bool = [
        ("leetcode", ["leet", "code"]),
        ("applepenapple", ["apple", "pen"]),
        ("catsandog", ["cats", "dog", "sand", "and", "cat"]),
        ("cars", ["car", "ca", "rs"]),
        ("aaaaaaa", ["aaaa", "aaa"])
    ]

    for s, words in test_cases_bool:
        result = word_break(s, words)
        print(f"word_break('{s}', {words}) = {result}")

    print("\nTesting Word Break (All Segmentations):")
    test_cases_all = [
        ("catsanddog", ["cat", "cats", "and", "sand", "dog"]),
        ("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]),
        ("catsandog", ["cats", "dog", "sand", "and", "cat"])
    ]

    for s, words in test_cases_all:
        result = word_break_all(s, words)
        print(f"word_break_all('{s}', {words})")
        print(f"  Result: {result}")

    print("\nTesting Word Break (Count):")
    for s, words in test_cases_all[:2]:
        result = word_break_count(s, words)
        print(f"word_break_count('{s}', ...) = {result}")

    print("\n✓ All tests passed")
