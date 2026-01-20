"""
Challenge 4: Fibonacci Sequence
Difficulty: Medium

Problem:
The Fibonacci numbers, commonly denoted F(n), form a sequence called the
Fibonacci sequence, such that each number is the sum of the two preceding ones,
starting from 0 and 1.

That is: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) for n > 1

Given n, calculate F(n).

Additionally, implement a function that returns the first n Fibonacci numbers.

Example 1:
    Input: n = 2
    Output: 1
    Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1

Example 2:
    Input: n = 3
    Output: 2
    Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2

Example 3:
    Input: n = 4
    Output: 3
    Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3

Example 4 (Sequence):
    Input: n = 7
    Output: [0, 1, 1, 2, 3, 5, 8]

Constraints:
- 0 <= n <= 30

Bonus Challenge:
- Implement solutions with different time complexities:
  1. Recursive (exponential time)
  2. Dynamic Programming with memoization (linear time)
  3. Iterative (linear time, constant space)
"""

def fibonacci(n):
    """
    Return the nth Fibonacci number
    Your implementation here
    """
    pass


def fibonacci_sequence(n):
    """
    Return a list of the first n Fibonacci numbers
    Your implementation here
    """
    pass


# Test cases
def test_fibonacci():
    # Test fibonacci number
    assert fibonacci(0) == 0, "Test case 1 failed"
    assert fibonacci(1) == 1, "Test case 2 failed"
    assert fibonacci(2) == 1, "Test case 3 failed"
    assert fibonacci(3) == 2, "Test case 4 failed"
    assert fibonacci(4) == 3, "Test case 5 failed"
    assert fibonacci(5) == 5, "Test case 6 failed"
    assert fibonacci(10) == 55, "Test case 7 failed"

    # Test fibonacci sequence
    assert fibonacci_sequence(1) == [0], "Test case 8 failed"
    assert fibonacci_sequence(2) == [0, 1], "Test case 9 failed"
    assert fibonacci_sequence(7) == [0, 1, 1, 2, 3, 5, 8], "Test case 10 failed"
    assert fibonacci_sequence(10) == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34], "Test case 11 failed"

    print("All test cases passed!")


# Solutions (hidden - uncomment to see)
"""
# Solution 1: Recursive (exponential time O(2^n), not efficient)
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)

# Solution 2: Dynamic Programming with memoization (O(n) time, O(n) space)
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]

# Solution 3: Iterative (O(n) time, O(1) space - most efficient)
def fibonacci(n):
    if n <= 1:
        return n

    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr

    return curr

# Fibonacci sequence generator
def fibonacci_sequence(n):
    if n <= 0:
        return []
    if n == 1:
        return [0]

    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i - 1] + sequence[i - 2])

    return sequence
"""

if __name__ == "__main__":
    test_fibonacci()
