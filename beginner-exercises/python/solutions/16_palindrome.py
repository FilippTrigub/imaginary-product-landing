"""
Exercise 16: Palindrome Checker
Difficulty: Medium

Task: Check if a word is a palindrome (reads the same forwards and backwards).

Instructions:
1. Create a string variable
2. Check if it's the same when reversed
3. Print "Palindrome" or "Not a palindrome"
"""

# Solution:
word = "racecar"

if word == word[::-1]:
    print("Palindrome")
else:
    print("Not a palindrome")

# Test with another word
word2 = "hello"
if word2 == word2[::-1]:
    print(f"{word2} is a Palindrome")
else:
    print(f"{word2} is Not a palindrome")
