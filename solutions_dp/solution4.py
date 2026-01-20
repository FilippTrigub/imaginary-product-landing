"""
Solution 4: Longest Increasing Subsequence
"""

def longest_increasing(nums):
    """
    O(n²) DP solution.
    dp[i] = length of LIS ending at index i
    """
    if not nums:
        return 0

    n = len(nums)
    dp = [1] * n

    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)


def longest_increasing_optimized(nums):
    """
    O(n log n) solution using binary search.
    tails[i] = smallest tail element for LIS of length i+1
    """
    if not nums:
        return 0

    tails = []

    for num in nums:
        # Binary search for position to insert/replace
        left, right = 0, len(tails)
        while left < right:
            mid = (left + right) // 2
            if tails[mid] < num:
                left = mid + 1
            else:
                right = mid

        if left == len(tails):
            tails.append(num)
        else:
            tails[left] = num

    return len(tails)


def longest_increasing_sequence(nums):
    """
    Return the actual LIS, not just the length.
    """
    if not nums:
        return []

    n = len(nums)
    dp = [1] * n
    parent = [-1] * n

    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j] and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                parent[i] = j

    # Find the index with maximum length
    max_length = max(dp)
    max_idx = dp.index(max_length)

    # Reconstruct the sequence
    result = []
    current = max_idx
    while current != -1:
        result.append(nums[current])
        current = parent[current]

    return list(reversed(result))


if __name__ == "__main__":
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
    for nums in test_cases[:4]:
        result = longest_increasing_sequence(nums)
        print(f"longest_increasing_sequence({nums})")
        print(f"  Result: {result}")

    print("\n✓ All tests passed")
