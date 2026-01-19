"""
Exercise 14: Count Vowels
Difficulty: Medium

Task: Count the number of vowels in a string.

Instructions:
1. Create a string variable
2. Loop through each character
3. Count how many vowels (a, e, i, o, u) are in the string
4. Print the count
"""

# Solution:
text = "Hello World"
vowels = "aeiouAEIOU"
count = 0

for char in text:
    if char in vowels:
        count += 1

print(f"Number of vowels in '{text}':", count)
