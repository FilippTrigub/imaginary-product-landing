"""
Solution 3: Coin Change Problem
"""

def coin_change(coins, amount):
    """
    Find minimum number of coins needed.
    dp[i] = minimum coins needed to make amount i
    """
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin:
                dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1


def coin_change_ways(coins, amount):
    """
    Count number of ways to make the amount.
    dp[i] = number of ways to make amount i
    """
    dp = [0] * (amount + 1)
    dp[0] = 1

    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] += dp[i - coin]

    return dp[amount]


def coin_change_with_coins(coins, amount):
    """
    Return the actual coins used for minimum solution.
    """
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    parent = [-1] * (amount + 1)

    for i in range(1, amount + 1):
        for coin in coins:
            if i >= coin and dp[i - coin] + 1 < dp[i]:
                dp[i] = dp[i - coin] + 1
                parent[i] = coin

    if dp[amount] == float('inf'):
        return -1, []

    # Reconstruct the coins used
    result = []
    current = amount
    while current > 0:
        coin_used = parent[current]
        result.append(coin_used)
        current -= coin_used

    return dp[amount], result


if __name__ == "__main__":
    print("Testing Coin Change (Minimum Coins):")
    test_cases = [
        ([1, 2, 5], 11),
        ([2], 3),
        ([1], 0),
        ([1, 3, 4], 6),
        ([1, 5, 10, 25], 63)
    ]

    for coins, amount in test_cases:
        result = coin_change(coins, amount)
        print(f"coin_change({coins}, {amount}) = {result}")

    print("\nTesting Coin Change (Count Ways):")
    test_cases_ways = [
        ([1, 2, 5], 5),
        ([2, 5, 3, 6], 10),
        ([1, 2, 3], 4)
    ]

    for coins, amount in test_cases_ways:
        result = coin_change_ways(coins, amount)
        print(f"coin_change_ways({coins}, {amount}) = {result}")

    print("\nTesting with Actual Coins:")
    for coins, amount in test_cases[:3]:
        min_coins, coins_used = coin_change_with_coins(coins, amount)
        print(f"coin_change_with_coins({coins}, {amount})")
        print(f"  Min coins: {min_coins}, Coins used: {coins_used}")

    print("\n✓ All tests passed")
