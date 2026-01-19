/**
 * Exercise 06: Arrays
 *
 * Arrays are ordered collections of items that can hold multiple values.
 * Arrays can contain any data type and are zero-indexed.
 *
 * Task:
 * 1. Create and initialize arrays
 * 2. Access array elements by index
 * 3. Add and remove elements (push, pop, shift, unshift)
 * 4. Loop through arrays
 * 5. Use array methods (length, indexOf, includes, slice, splice)
 * 6. Work with multidimensional arrays
 *
 * To run this exercise:
 * node exercises/exercise06.js
 */

// TODO: Create and initialize arrays
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ["apple", "banana", "orange"];
// let mixed = [1, "hello", true, null];

// TODO: Access elements
// console.log("First fruit:", fruits[0]);
// console.log("Last number:", numbers[numbers.length - 1]);

// TODO: Add and remove elements
// fruits.push("grape");        // Add to end
// fruits.unshift("kiwi");      // Add to beginning
// let lastFruit = fruits.pop();    // Remove from end
// let firstFruit = fruits.shift(); // Remove from beginning

// TODO: Loop through array
// for (let i = 0; i < numbers.length; i++) {
//     console.log("Number at index", i, ":", numbers[i]);
// }

// TODO: Array methods
// console.log("Array length:", numbers.length);
// console.log("Index of 3:", numbers.indexOf(3));
// console.log("Includes 5:", numbers.includes(5));

// let sliced = numbers.slice(1, 4);  // Extract portion
// console.log("Sliced array:", sliced);

// numbers.splice(2, 1, 10);  // Replace element
// console.log("After splice:", numbers);

// TODO: Multidimensional arrays
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log("Element at [1][2]:", matrix[1][2]);

/*
SOLUTION:
console.log("=== Creating and Initializing Arrays ===");
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let mixed = [42, "hello", true, null, undefined];

console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);
console.log("Mixed array:", mixed);

console.log("\n=== Accessing Array Elements ===");
console.log("First fruit:", fruits[0]);
console.log("Third number:", numbers[2]);
console.log("Last element of mixed array:", mixed[mixed.length - 1]);

console.log("\n=== Adding and Removing Elements ===");
let colors = ["red", "green", "blue"];
console.log("Original colors:", colors);

colors.push("yellow");        // Add to end
console.log("After push:", colors);

colors.unshift("purple");      // Add to beginning
console.log("After unshift:", colors);

let removedFromEnd = colors.pop();    // Remove from end
console.log("Removed from end:", removedFromEnd);
console.log("After pop:", colors);

let removedFromStart = colors.shift(); // Remove from beginning
console.log("Removed from start:", removedFromStart);
console.log("After shift:", colors);

console.log("\n=== Looping Through Arrays ===");
let animals = ["cat", "dog", "bird", "fish"];

console.log("Using for loop:");
for (let i = 0; i < animals.length; i++) {
    console.log(`Animal ${i + 1}: ${animals[i]}`);
}

console.log("\nUsing for...of loop:");
for (let animal of animals) {
    console.log("Animal:", animal);
}

console.log("\n=== Array Methods ===");
let scores = [85, 92, 78, 96, 88];

console.log("Scores array:", scores);
console.log("Array length:", scores.length);
console.log("Index of 92:", scores.indexOf(92));
console.log("Includes 100:", scores.includes(100));
console.log("Includes 85:", scores.includes(85));

console.log("\nSlice examples:");
let firstThree = scores.slice(0, 3);
console.log("First three scores:", firstThree);

let lastTwo = scores.slice(-2);
console.log("Last two scores:", lastTwo);

console.log("\nSplice examples:");
let numbers2 = [1, 2, 3, 4, 5];
console.log("Original:", numbers2);

// Remove 2 elements starting at index 1
let removed = numbers2.splice(1, 2);
console.log("Removed:", removed);
console.log("After splice:", numbers2);

// Add elements at index 1
numbers2.splice(1, 0, 10, 20);
console.log("After adding:", numbers2);

console.log("\n=== Multidimensional Arrays ===");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Full matrix:");
for (let row of matrix) {
    console.log(row);
}

console.log("\nAccessing individual elements:");
console.log("Element at [0][0]:", matrix[0][0]);
console.log("Element at [1][2]:", matrix[1][2]);
console.log("Element at [2][1]:", matrix[2][1]);

console.log("\n=== Array Methods Examples ===");
let names = ["Alice", "Bob", "Charlie", "David"];

console.log("Original names:", names);

// Map: transform each element
let upperNames = names.map(name => name.toUpperCase());
console.log("Uppercase names:", upperNames);

// Filter: keep elements that match condition
let longNames = names.filter(name => name.length > 4);
console.log("Names longer than 4 chars:", longNames);

// Reduce: combine all elements into single value
let totalLength = names.reduce((total, name) => total + name.length, 0);
console.log("Total characters in all names:", totalLength);
*/