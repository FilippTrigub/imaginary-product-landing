/**
 * Exercise 18: Fibonacci Sequence
 * Difficulty: Hard
 *
 * Task: Generate the first 10 numbers of the Fibonacci sequence.
 *
 * Instructions:
 * 1. Start with 0 and 1
 * 2. Each subsequent number is the sum of the previous two
 * 3. Print the first 10 Fibonacci numbers
 */

// Solution:
const n = 10;
const fibSequence = [];

let a = 0;
let b = 1;

for (let i = 0; i < n; i++) {
    fibSequence.push(a);
    const temp = a;
    a = b;
    b = temp + b;
}

console.log("First 10 Fibonacci numbers:", fibSequence);
