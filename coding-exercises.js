// JavaScript Coding Exercises: Basic Algorithms
// These exercises cover fundamental programming concepts and algorithms.
// Each exercise includes a function stub with instructions and a commented solution below.

// Exercise 1: String Reversal
// Write a function that takes a string as input and returns the string reversed.
// Example: reverseString("hello") should return "olleh"
function reverseString(str) {
  // Your code here
}

// Solution:
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// Exercise 2: Palindrome Check
// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
// Ignore case and non-alphanumeric characters.
// Example: isPalindrome("A man, a plan, a canal: Panama") should return true
function isPalindrome(str) {
  // Your code here
}

// Solution:
// function isPalindrome(str) {
//   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   return cleanStr === cleanStr.split('').reverse().join('');
// }

// Exercise 3: Fibonacci Sequence
// Write a function that returns the nth number in the Fibonacci sequence.
// The Fibonacci sequence starts with 0, 1, 1, 2, 3, 5, 8, 13, ...
// Example: fibonacci(6) should return 8 (0-indexed: 0, 1, 1, 2, 3, 5, 8)
function fibonacci(n) {
  // Your code here
}

// Solution:
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// Exercise 4: Factorial Calculation
// Write a function that calculates the factorial of a non-negative integer.
// Factorial of n (n!) is the product of all positive integers less than or equal to n.
// Example: factorial(5) should return 120 (5 * 4 * 3 * 2 * 1 = 120)
function factorial(n) {
  // Your code here
}

// Solution:
// function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }

// Bonus: Array Sum
// Write a function that takes an array of numbers and returns their sum.
// Example: sumArray([1, 2, 3, 4, 5]) should return 15
function sumArray(arr) {
  // Your code here
}

// Solution:
// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }