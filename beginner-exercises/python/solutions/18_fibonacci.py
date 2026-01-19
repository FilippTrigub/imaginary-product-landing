"""
Exercise 18: Fibonacci Sequence
Difficulty: Hard

Task: Generate the first 10 numbers of the Fibonacci sequence.

Instructions:
1. Start with 0 and 1
2. Each subsequent number is the sum of the previous two
3. Print the first 10 Fibonacci numbers
"""

# Solution:
n = 10
fib_sequence = []

a, b = 0, 1

for i in range(n):
    fib_sequence.append(a)
    a, b = b, a + b

print("First 10 Fibonacci numbers:", fib_sequence)
