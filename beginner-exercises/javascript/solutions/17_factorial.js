/**
 * Exercise 17: Calculate Factorial
 * Difficulty: Medium
 *
 * Task: Calculate the factorial of a number.
 *
 * Instructions:
 * 1. Create a variable with a number
 * 2. Use a loop to calculate the factorial (e.g., 5! = 5 × 4 × 3 × 2 × 1)
 * 3. Print the result
 */

// Solution:
const number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(`${number}! = ${factorial}`);
