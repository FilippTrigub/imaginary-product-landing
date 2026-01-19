/**
 * Exercise 04: Loops
 *
 * Loops allow you to execute code repeatedly.
 * JavaScript provides for, while, and do-while loops.
 *
 * Task:
 * 1. Use a for loop to count from 1 to 10
 * 2. Use a while loop to count down from 10 to 1
 * 3. Use a do-while loop
 * 4. Loop through an array with for...of
 * 5. Use break and continue statements
 * 6. Create a nested loop for multiplication table
 *
 * To run this exercise:
 * node exercises/exercise04.js
 */

// TODO: For loop counting up
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// TODO: While loop counting down
// let count = 10;
// while (count > 0) {
//     console.log(count);
//     count--;
// }

// TODO: Do-while loop
// let num = 1;
// do {
//     console.log("Number:", num);
//     num++;
// } while (num <= 5);

// TODO: Loop through array
// let fruits = ["apple", "banana", "orange"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// TODO: Break and continue
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) continue; // Skip 5
//     if (i === 8) break;    // Stop at 8
//     console.log(i);
// }

// TODO: Nested loops for multiplication table
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

/*
SOLUTION:
console.log("=== For Loop (Count Up) ===");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n=== While Loop (Count Down) ===");
let count = 10;
while (count > 0) {
    console.log(count);
    count--;
}

console.log("\n=== Do-While Loop ===");
let num = 1;
do {
    console.log("Iteration:", num);
    num++;
} while (num <= 5);

console.log("\n=== For...of Loop with Array ===");
let colors = ["red", "green", "blue", "yellow"];
for (let color of colors) {
    console.log("Color:", color);
}

console.log("\n=== Break and Continue ===");
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        console.log("Skipping 3 with continue");
        continue;
    }
    if (i === 7) {
        console.log("Breaking at 7");
        break;
    }
    console.log("Number:", i);
}

console.log("\n=== Nested Loops (Multiplication Table) ===");
for (let i = 1; i <= 5; i++) {
    console.log(`\nMultiplication table for ${i}:`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}

console.log("\n=== Loop with Array and Index ===");
let animals = ["cat", "dog", "bird", "fish"];
for (let i = 0; i < animals.length; i++) {
    console.log(`Animal ${i + 1}: ${animals[i]}`);
}
*/