"""
Exercise 10: Iterate Through a List
Difficulty: Easy

Task: Print each item in a list on a new line.

Instructions:
1. Create a list of colors
2. Use a for loop to iterate through the list
3. Print each color with its index number
"""

# Solution:
colors = ["red", "blue", "green", "yellow", "purple"]

for index, color in enumerate(colors):
    print(f"Index {index}: {color}")
