# Dynamic Programming Coding Exercises (Python)

This document contains 10 coding exercises focused on **Dynamic Programming** techniques. These exercises progress from basic memoization concepts to advanced optimization problems.

## Difficulty Levels
- 🟢 Easy (Exercises 1-3)
- 🟡 Medium (Exercises 4-7)
- 🔴 Hard (Exercises 8-10)

---

## Exercise 1: Fibonacci with Memoization 🟢
**File:** `exercises_dp/exercise1.py`

Implement the Fibonacci sequence using dynamic programming with memoization.

**Requirements:**
- Use memoization to cache previously computed values
- Time complexity should be O(n)
- Space complexity should be O(n)

**Example:**
```python
fib(10) → 55
fib(20) → 6765
```

---

## Exercise 2: Climbing Stairs 🟢
**File:** `exercises_dp/exercise2.py`

You're climbing a staircase with n steps. You can climb 1 or 2 steps at a time. Calculate how many distinct ways you can reach the top.

**Requirements:**
- Use dynamic programming (bottom-up approach)
- Time complexity: O(n)
- Space complexity: O(n) or O(1) for optimized version

**Example:**
```python
climb_stairs(3) → 3  # (1+1+1, 1+2, 2+1)
climb_stairs(5) → 8
```

---

## Exercise 3: Coin Change Problem 🟢
**File:** `exercises_dp/exercise3.py`

Given an array of coin denominations and a target amount, find the minimum number of coins needed to make that amount.

**Requirements:**
- Return -1 if the amount cannot be made
- Use dynamic programming
- Time complexity: O(amount × coins)

**Example:**
```python
coin_change([1, 2, 5], 11) → 3  # (5+5+1)
coin_change([2], 3) → -1
```

---

## Exercise 4: Longest Increasing Subsequence 🟡
**File:** `exercises_dp/exercise4.py`

Find the length of the longest strictly increasing subsequence in an array.

**Requirements:**
- Use dynamic programming
- Time complexity: O(n²) for basic solution
- Bonus: O(n log n) using binary search

**Example:**
```python
longest_increasing([10, 9, 2, 5, 3, 7, 101, 18]) → 4  # [2, 3, 7, 101]
longest_increasing([0, 1, 0, 3, 2, 3]) → 4  # [0, 1, 2, 3]
```

---

## Exercise 5: Knapsack Problem (0/1) 🟡
**File:** `exercises_dp/exercise5.py`

Given items with weights and values, and a knapsack capacity, find the maximum value you can carry.

**Requirements:**
- Classic 0/1 knapsack (each item can be taken at most once)
- Use 2D DP table
- Time complexity: O(n × capacity)

**Example:**
```python
knapsack([60, 100, 120], [10, 20, 30], 50) → 220  # items[1] + items[2]
```

---

## Exercise 6: Edit Distance (Levenshtein) 🟡
**File:** `exercises_dp/exercise6.py`

Calculate the minimum number of operations (insert, delete, replace) needed to convert one string to another.

**Requirements:**
- Use 2D dynamic programming
- Time complexity: O(m × n)
- Space complexity: O(m × n)

**Example:**
```python
edit_distance("horse", "ros") → 3
edit_distance("intention", "execution") → 5
```

---

## Exercise 7: Longest Common Subsequence 🟡
**File:** `exercises_dp/exercise7.py`

Find the length of the longest subsequence common to two strings.

**Requirements:**
- Use 2D DP table
- Time complexity: O(m × n)
- Bonus: Reconstruct the actual subsequence

**Example:**
```python
lcs("abcde", "ace") → 3  # "ace"
lcs("abc", "abc") → 3
lcs("abc", "def") → 0
```

---

## Exercise 8: Matrix Chain Multiplication 🔴
**File:** `exercises_dp/exercise8.py`

Given dimensions of matrices, find the minimum number of scalar multiplications needed to multiply them.

**Requirements:**
- Use interval DP
- Time complexity: O(n³)
- Return minimum multiplication count

**Example:**
```python
matrix_chain_order([10, 20, 30, 40, 30]) → 30000
# Represents matrices: 10×20, 20×30, 30×40, 40×30
```

---

## Exercise 9: Word Break Problem 🔴
**File:** `exercises_dp/exercise9.py`

Given a string and a dictionary of words, determine if the string can be segmented into space-separated dictionary words.

**Requirements:**
- Use dynamic programming
- Time complexity: O(n² × m) where m is average word length
- Bonus: Return all possible segmentations

**Example:**
```python
word_break("leetcode", ["leet", "code"]) → True
word_break("applepenapple", ["apple", "pen"]) → True
word_break("catsandog", ["cats", "dog", "sand", "and", "cat"]) → False
```

---

## Exercise 10: Optimal Binary Search Tree 🔴
**File:** `exercises_dp/exercise10.py`

Given keys and their search frequencies, construct a BST that minimizes the total search cost.

**Requirements:**
- Use 2D DP for interval-based optimization
- Time complexity: O(n³)
- Return minimum weighted search cost

**Example:**
```python
optimal_bst([10, 12, 20], [34, 8, 50]) → 142
# Keys with frequencies result in minimum cost BST
```

---

## Running the Exercises

### Test Individual Exercise:
```bash
python exercises_dp/exercise1.py
```

### Test All Solutions:
```bash
for i in {1..10}; do echo "=== Testing Solution $i ===" && python solutions_dp/solution$i.py; done
```

### Verify Your Implementation:
```bash
# Compare your output with the solution
python exercises_dp/exercise1.py > my_output.txt
python solutions_dp/solution1.py > expected_output.txt
diff my_output.txt expected_output.txt
```

## Learning Path

1. **Start with Exercises 1-3**: Master basic memoization and bottom-up DP
2. **Progress to 4-7**: Learn 2D DP tables and optimization problems
3. **Challenge yourself with 8-10**: Tackle advanced interval DP and complex state spaces

## Additional Resources

- **Time Complexity Analysis**: Understand why DP reduces exponential to polynomial time
- **Space Optimization**: Learn to reduce 2D tables to 1D arrays when possible
- **State Definition**: The key to DP is defining the right state representation

Good luck! 🚀
