"""
Exercise 20: Dictionary Basics
Difficulty: Medium

Task: Create a dictionary of students and their grades.

Instructions:
1. Create a dictionary with at least 3 students and their grades
2. Print the entire dictionary
3. Print a specific student's grade
4. Add a new student
5. Print the updated dictionary
"""

# Solution:
students = {
    "Alice": 95,
    "Bob": 87,
    "Charlie": 92
}

print("All students:", students)
print("Alice's grade:", students["Alice"])

students["Diana"] = 89
print("Updated students:", students)
