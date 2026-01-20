"""
Coding Challenges Collection
A collection of 4 classic programming challenges implemented in Python.
Each function includes a docstring with the challenge description and examples.
"""

def fizzbuzz(n):
    """
    FizzBuzz Challenge:
    Write a program that prints the numbers from 1 to n.
    For multiples of 3, print "Fizz" instead of the number.
    For multiples of 5, print "Buzz" instead of the number.
    For numbers which are multiples of both 3 and 5, print "FizzBuzz".

    Args:
        n (int): The upper limit for the FizzBuzz sequence

    Returns:
        list: A list containing the FizzBuzz sequence

    Example:
        >>> fizzbuzz(15)
        [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
    """
    result = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result


def reverse_string(s):
    """
    String Reversal Challenge:
    Write a function that takes a string as input and returns the string reversed.

    Args:
        s (str): The input string to reverse

    Returns:
        str: The reversed string

    Example:
        >>> reverse_string("hello")
        'olleh'
        >>> reverse_string("Python")
        'nohtyP'
    """
    return s[::-1]


def find_maximum(arr):
    """
    Find Maximum in Array Challenge:
    Write a function that finds the maximum value in an array of numbers.
    Handle edge cases like empty arrays.

    Args:
        arr (list): A list of numbers

    Returns:
        float or int or None: The maximum value in the array, or None if array is empty

    Example:
        >>> find_maximum([1, 5, 3, 9, 2])
        9
        >>> find_maximum([-1, -5, -3])
        -1
        >>> find_maximum([])
        None
    """
    if not arr:
        return None
    return max(arr)


def is_prime(num):
    """
    Prime Number Checker Challenge:
    Write a function that determines whether a given number is prime.
    A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

    Args:
        num (int): The number to check for primality

    Returns:
        bool: True if the number is prime, False otherwise

    Example:
        >>> is_prime(2)
        True
        >>> is_prime(17)
        True
        >>> is_prime(15)
        False
        >>> is_prime(1)
        False
    """
    if num <= 1:
        return False
    if num <= 3:
        return True
    if num % 2 == 0 or num % 3 == 0:
        return False
    i = 5
    while i * i <= num:
        if num % i == 0 or num % (i + 2) == 0:
            return False
        i += 6
    return True


# Example usage and testing
if __name__ == "__main__":
    print("FizzBuzz (15):", fizzbuzz(15))
    print("Reverse 'hello':", reverse_string("hello"))
    print("Max of [1, 5, 3, 9, 2]:", find_maximum([1, 5, 3, 9, 2]))
    print("Is 17 prime?", is_prime(17))
    print("Is 15 prime?", is_prime(15))