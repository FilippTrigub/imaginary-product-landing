"""
Exercise 13: Find Maximum Number
Difficulty: Medium

Task: Find the largest number in a list.

Instructions:
1. Create a list of numbers
2. Use a loop to find the maximum value
3. Print the maximum number
(Don't use the built-in max() function)
"""

# Solution:
numbers = [45, 23, 89, 12, 67, 91, 34]

max_num = numbers[0]

for num in numbers:
    if num > max_num:
        max_num = num

print("Maximum number:", max_num)
