# Python Coding Challenges

A collection of Python programming challenges to practice problem-solving skills.

---

## Challenge 1: Find Missing Number (Easy)
**Difficulty:** Easy
**Topic:** Arrays, Math

### Problem
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one number that is missing from the array.

### Example
```python
Input: [3, 0, 1]
Output: 2

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

### Constraints
- n == nums.length
- 1 <= n <= 10^4
- 0 <= nums[i] <= n
- All numbers in nums are unique

---

## Challenge 2: Valid Parentheses (Medium)
**Difficulty:** Medium
**Topic:** Stack, String Processing

### Problem
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Example
```python
Input: "()"
Output: True

Input: "()[]{}"
Output: True

Input: "(]"
Output: False

Input: "([)]"
Output: False

Input: "{[]}"
Output: True
```

---

## Challenge 3: Longest Common Prefix (Easy)
**Difficulty:** Easy
**Topic:** Strings, Array

### Problem
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

### Example
```python
Input: ["flower","flow","flight"]
Output: "fl"

Input: ["dog","racecar","car"]
Output: ""
```

---

## Challenge 4: Binary Tree Level Order Traversal (Medium)
**Difficulty:** Medium
**Topic:** Trees, BFS, Queue

### Problem
Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).

### Example
```python
Input: root = [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
Output: [[3],[9,20],[15,7]]

Input: root = [1]
Output: [[1]]

Input: root = []
Output: []
```

---

## Challenge 5: Group Anagrams (Medium)
**Difficulty:** Medium
**Topic:** Hash Table, String, Sorting

### Problem
Given an array of strings, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example
```python
Input: ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: [""]
Output: [[""]]

Input: ["a"]
Output: [["a"]]
```

---

## Challenge 6: Merge Intervals (Medium)
**Difficulty:** Medium
**Topic:** Arrays, Sorting

### Problem
Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

### Example
```python
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Intervals [1,3] and [2,6] overlap, so merge them into [1,6].

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

---

## How to Use These Challenges

1. Try to solve each challenge without looking at the solutions
2. Write your solution in `my_solutions.py`
3. Run the test suite to verify your solutions: `python3 python_tests.py`
4. If tests fail, review the problem and refine your solution
5. Compare your solution with the provided solutions for optimization ideas

## Running the Tests

```bash
python3 python_tests.py
```

Good luck and happy coding!
