/**
 * Exercise 10: Iterate Through an Array
 * Difficulty: Easy
 *
 * Task: Print each item in an array on a new line.
 *
 * Instructions:
 * 1. Create an array of colors
 * 2. Use a for loop to iterate through the array
 * 3. Print each color with its index number
 */

// Solution:
const colors = ["red", "blue", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
    console.log(`Index ${i}: ${colors[i]}`);
}
