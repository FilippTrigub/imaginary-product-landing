# Coding Challenges (Part 2)

## Challenge 1: Find the Missing Number

**Problem:** Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

**Example:**
```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

## Challenge 2: Group Anagrams

**Problem:** Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example:**
```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

## Challenge 3: Validate Binary Search Tree

**Problem:** Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
* The left subtree of a node contains only nodes with keys less than the node's key.
* The right subtree of a node contains only nodes with keys greater than the node's key.
* Both the left and right subtrees must also be binary search trees.

**Example:**
```
Input: root = [2,1,3]
Output: true
```

## Challenge 4: Longest Palindromic Substring

**Problem:** Given a string `s`, return the longest palindromic substring in `s`.

**Example:**
```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```
