/**
 * Exercise 8: Sum of Numbers
 * Difficulty: Medium
 *
 * Task: Calculate the sum of numbers from 1 to 100.
 *
 * Instructions:
 * 1. Use a for loop to iterate from 1 to 100
 * 2. Keep a running total
 * 3. Print the final sum
 */

// Solution:
let total = 0;

for (let i = 1; i <= 100; i++) {
    total += i;
}

console.log("Sum of numbers from 1 to 100:", total);
