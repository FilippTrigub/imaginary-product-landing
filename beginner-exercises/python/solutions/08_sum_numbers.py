"""
Exercise 8: Sum of Numbers
Difficulty: Medium

Task: Calculate the sum of numbers from 1 to 100.

Instructions:
1. Use a for loop to iterate from 1 to 100
2. Keep a running total
3. Print the final sum
"""

# Solution:
total = 0

for i in range(1, 101):
    total += i

print("Sum of numbers from 1 to 100:", total)
