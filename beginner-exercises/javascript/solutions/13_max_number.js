/**
 * Exercise 13: Find Maximum Number
 * Difficulty: Medium
 *
 * Task: Find the largest number in an array.
 *
 * Instructions:
 * 1. Create an array of numbers
 * 2. Use a loop to find the maximum value
 * 3. Print the maximum number
 * (Don't use Math.max())
 */

// Solution:
const numbers = [45, 23, 89, 12, 67, 91, 34];

let maxNum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}

console.log("Maximum number:", maxNum);
