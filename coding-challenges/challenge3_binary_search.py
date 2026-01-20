"""
Challenge 3: Binary Search
Difficulty: Easy

Problem:
Given a sorted array of integers `nums` and an integer `target`, write a function
to search `target` in `nums`. If `target` exists, return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
    Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
    Output: 4
    Explanation: 9 exists in nums and its index is 4

Example 2:
    Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
    Output: -1
    Explanation: 2 does not exist in nums so return -1

Example 3:
    Input: nums = [5], target = 5
    Output: 0

Constraints:
- 1 <= nums.length <= 10^4
- -10^4 < nums[i], target < 10^4
- All the integers in nums are unique
- nums is sorted in ascending order
"""

def binary_search(nums, target):
    """
    Your implementation here
    """
    pass


# Test cases
def test_binary_search():
    # Test case 1
    assert binary_search([-1, 0, 3, 5, 9, 12], 9) == 4, "Test case 1 failed"

    # Test case 2
    assert binary_search([-1, 0, 3, 5, 9, 12], 2) == -1, "Test case 2 failed"

    # Test case 3
    assert binary_search([5], 5) == 0, "Test case 3 failed"

    # Test case 4
    assert binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1) == 0, "Test case 4 failed"

    # Test case 5
    assert binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10) == 9, "Test case 5 failed"

    # Test case 6
    assert binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11) == -1, "Test case 6 failed"

    print("All test cases passed!")


# Solution (hidden - uncomment to see)
"""
def binary_search(nums, target):
    # Iterative approach
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2  # Avoid potential overflow

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

# Recursive approach
def binary_search_recursive(nums, target):
    def helper(left, right):
        if left > right:
            return -1

        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            return helper(mid + 1, right)
        else:
            return helper(left, mid - 1)

    return helper(0, len(nums) - 1)
"""

if __name__ == "__main__":
    test_binary_search()
