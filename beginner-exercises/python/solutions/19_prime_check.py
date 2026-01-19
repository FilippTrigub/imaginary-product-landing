"""
Exercise 19: Prime Number Checker
Difficulty: Hard

Task: Check if a number is prime.

Instructions:
1. Create a variable with a number
2. A prime number is only divisible by 1 and itself
3. Check if the number is prime
4. Print "Prime" or "Not prime"
"""

# Solution:
number = 17

if number <= 1:
    print("Not prime")
else:
    is_prime = True
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            is_prime = False
            break

    if is_prime:
        print("Prime")
    else:
        print("Not prime")
