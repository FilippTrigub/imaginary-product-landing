"""
Exercise 15: Reverse a String
Difficulty: Medium

Task: Reverse a given string.

Instructions:
1. Create a string variable
2. Reverse the string (you can use slicing or a loop)
3. Print the reversed string
"""

# Solution 1: Using slicing
text = "Python"
reversed_text = text[::-1]
print("Original:", text)
print("Reversed:", reversed_text)

# Solution 2: Using a loop
text2 = "Programming"
reversed_text2 = ""
for char in text2:
    reversed_text2 = char + reversed_text2
print("Original:", text2)
print("Reversed:", reversed_text2)
