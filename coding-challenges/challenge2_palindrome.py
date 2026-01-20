"""
Challenge 2: Valid Palindrome
Difficulty: Easy

Problem:
A phrase is a palindrome if, after converting all uppercase letters into lowercase
letters and removing all non-alphanumeric characters, it reads the same forward
and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `True` if it is a palindrome, or `False` otherwise.

Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: True
    Explanation: "amanaplanacanalpanama" is a palindrome

Example 2:
    Input: s = "race a car"
    Output: False
    Explanation: "raceacar" is not a palindrome

Example 3:
    Input: s = " "
    Output: True
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
                 Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
- 1 <= s.length <= 2 * 10^5
- s consists only of printable ASCII characters
"""

def is_palindrome(s):
    """
    Your implementation here
    """
    pass


# Test cases
def test_is_palindrome():
    # Test case 1
    assert is_palindrome("A man, a plan, a canal: Panama") == True, "Test case 1 failed"

    # Test case 2
    assert is_palindrome("race a car") == False, "Test case 2 failed"

    # Test case 3
    assert is_palindrome(" ") == True, "Test case 3 failed"

    # Test case 4
    assert is_palindrome("Was it a car or a cat I saw?") == True, "Test case 4 failed"

    # Test case 5
    assert is_palindrome("Madam") == True, "Test case 5 failed"

    # Test case 6
    assert is_palindrome("0P") == False, "Test case 6 failed"

    print("All test cases passed!")


# Solution (hidden - uncomment to see)
"""
def is_palindrome(s):
    # Method 1: Using two pointers
    left, right = 0, len(s) - 1

    while left < right:
        # Skip non-alphanumeric characters from left
        while left < right and not s[left].isalnum():
            left += 1
        # Skip non-alphanumeric characters from right
        while left < right and not s[right].isalnum():
            right -= 1

        # Compare characters (case-insensitive)
        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True

# Method 2: Using string cleaning
def is_palindrome_v2(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]
"""

if __name__ == "__main__":
    test_is_palindrome()
