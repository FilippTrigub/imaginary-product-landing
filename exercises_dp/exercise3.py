"""
Exercise 3: Coin Change Problem
Difficulty: Easy

Find the minimum number of coins needed to make a target amount.
Time complexity: O(amount × coins)
Space complexity: O(amount)
"""

def coin_change(coins, amount):
    """
    Find minimum number of coins needed to make the amount.

    Args:
        coins: List of coin denominations
        amount: Target amount

    Returns:
        Minimum number of coins needed, or -1 if impossible

    Example:
        coin_change([1, 2, 5], 11) -> 3  # (5+5+1)
        coin_change([2], 3) -> -1
    """
    # TODO: Implement your solution here
    pass


def coin_change_ways(coins, amount):
    """
    Count the number of ways to make the amount using given coins.

    Args:
        coins: List of coin denominations
        amount: Target amount

    Returns:
        Number of different ways to make the amount
    """
    # TODO: Implement this variation
    pass


if __name__ == "__main__":
    # Test cases for minimum coins
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

    # Test cases for counting ways
    print("\nTesting Coin Change (Count Ways):")
    test_cases_ways = [
        ([1, 2, 5], 5),
        ([2, 5, 3, 6], 10),
        ([1, 2, 3], 4)
    ]

    for coins, amount in test_cases_ways:
        result = coin_change_ways(coins, amount)
        print(f"coin_change_ways({coins}, {amount}) = {result}")
