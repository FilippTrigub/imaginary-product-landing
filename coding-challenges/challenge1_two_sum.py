"""
Challenge 1: Two Sum
Difficulty: Easy

Problem:
Given an array of integers `nums` and an integer `target`, return the indices
of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may
not use the same element twice.

Example 1:
    Input: nums = [2, 7, 11, 15], target = 9
    Output: [0, 1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]

Example 2:
    Input: nums = [3, 2, 4], target = 6
    Output: [1, 2]

Example 3:
    Input: nums = [3, 3], target = 6
    Output: [0, 1]

Constraints:
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists
"""

def two_sum(nums, target):
    """
    Your implementation here
    """
    pass


# Test cases
def test_two_sum():
    # Test case 1
    assert two_sum([2, 7, 11, 15], 9) == [0, 1], "Test case 1 failed"

    # Test case 2
    assert two_sum([3, 2, 4], 6) == [1, 2], "Test case 2 failed"

    # Test case 3
    assert two_sum([3, 3], 6) == [0, 1], "Test case 3 failed"

    # Test case 4
    assert two_sum([-1, -2, -3, -4, -5], -8) == [2, 4], "Test case 4 failed"

    print("All test cases passed!")


# Solution (hidden - uncomment to see)
"""
def two_sum(nums, target):
    # Use a hash map to store values and their indices
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
"""

if __name__ == "__main__":
    test_two_sum()
