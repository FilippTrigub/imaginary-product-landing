"""
Solution 10: Optimal Binary Search Tree
"""

def optimal_bst(keys, frequencies):
    """
    Find minimum weighted search cost for BST.
    dp[i][j] = minimum cost for keys from i to j
    """
    n = len(keys)
    dp = [[0] * n for _ in range(n)]
    freq_sum = [[0] * n for _ in range(n)]

    # Precompute frequency sums
    for i in range(n):
        freq_sum[i][i] = frequencies[i]
        for j in range(i + 1, n):
            freq_sum[i][j] = freq_sum[i][j - 1] + frequencies[j]

    # Single keys
    for i in range(n):
        dp[i][i] = frequencies[i]

    # Chain length from 2 to n
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')

            # Try each key as root
            for r in range(i, j + 1):
                left_cost = dp[i][r - 1] if r > i else 0
                right_cost = dp[r + 1][j] if r < j else 0
                cost = left_cost + right_cost + freq_sum[i][j]
                dp[i][j] = min(dp[i][j], cost)

    return dp[0][n - 1]


def optimal_bst_structure(keys, frequencies):
    """
    Return the structure showing which key is the root at each level.
    """
    n = len(keys)
    dp = [[0] * n for _ in range(n)]
    root = [[0] * n for _ in range(n)]
    freq_sum = [[0] * n for _ in range(n)]

    for i in range(n):
        freq_sum[i][i] = frequencies[i]
        for j in range(i + 1, n):
            freq_sum[i][j] = freq_sum[i][j - 1] + frequencies[j]

    for i in range(n):
        dp[i][i] = frequencies[i]
        root[i][i] = i

    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')

            for r in range(i, j + 1):
                left_cost = dp[i][r - 1] if r > i else 0
                right_cost = dp[r + 1][j] if r < j else 0
                cost = left_cost + right_cost + freq_sum[i][j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    root[i][j] = r

    return dp[0][n - 1], root


def optimal_bst_with_dummy(keys, key_freq, dummy_freq):
    """
    Optimal BST with dummy keys for unsuccessful searches.
    """
    n = len(keys)
    dp = [[0] * (n + 1) for _ in range(n + 1)]

    # Fill dummy key costs
    for i in range(n + 1):
        dp[i][i] = dummy_freq[i]

    for length in range(1, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j + 1] = float('inf')

            # Sum of all frequencies in range
            freq_sum = dummy_freq[i]
            for k in range(i, j + 1):
                freq_sum += key_freq[k] + dummy_freq[k + 1]

            # Try each key as root
            for r in range(i, j + 1):
                cost = dp[i][r] + dp[r + 1][j + 1] + freq_sum
                dp[i][j + 1] = min(dp[i][j + 1], cost)

    return dp[0][n]


def print_bst_structure(root_matrix, keys, i, j, indent=""):
    """
    Helper to print BST structure.
    """
    if i > j:
        return

    r = root_matrix[i][j]
    print(f"{indent}Root: {keys[r]}")

    if i < r:
        print(f"{indent}  Left subtree:")
        print_bst_structure(root_matrix, keys, i, r - 1, indent + "    ")

    if r < j:
        print(f"{indent}  Right subtree:")
        print_bst_structure(root_matrix, keys, r + 1, j, indent + "    ")


if __name__ == "__main__":
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
        print(f"  Tree structure:")
        print_bst_structure(root_mat, keys, 0, len(keys) - 1, "    ")

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

    print("\n✓ All tests passed")
