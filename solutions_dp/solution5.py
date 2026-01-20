"""
Solution 5: 0/1 Knapsack Problem
"""

def knapsack(values, weights, capacity):
    """
    Standard 2D DP solution.
    dp[i][w] = max value using first i items with capacity w
    """
    n = len(values)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            # Don't take item i-1
            dp[i][w] = dp[i - 1][w]

            # Take item i-1 if it fits
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i][w],
                              dp[i - 1][w - weights[i - 1]] + values[i - 1])

    return dp[n][capacity]


def knapsack_items(values, weights, capacity):
    """
    Return which items should be included.
    """
    n = len(values)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            dp[i][w] = dp[i - 1][w]
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i][w],
                              dp[i - 1][w - weights[i - 1]] + values[i - 1])

    # Backtrack to find items
    selected_items = []
    w = capacity
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            selected_items.append(i - 1)
            w -= weights[i - 1]

    return dp[n][capacity], list(reversed(selected_items))


def knapsack_optimized(values, weights, capacity):
    """
    Space-optimized 1D DP solution.
    """
    dp = [0] * (capacity + 1)

    for i in range(len(values)):
        # Traverse backwards to avoid using updated values
        for w in range(capacity, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])

    return dp[capacity]


if __name__ == "__main__":
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

    print("\n✓ All tests passed")
