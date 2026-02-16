#!/usr/bin/env node

// Dummy script that performs various operations
console.log("=== Dummy Script Started ===");

// Generate random numbers
const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
console.log("Random numbers:", randomNumbers);

// Calculate sum and average
const sum = randomNumbers.reduce((acc, num) => acc + num, 0);
const average = sum / randomNumbers.length;
console.log("Sum:", sum);
console.log("Average:", average.toFixed(2));

// Mock data processing
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

console.log("\nProcessing users...");
users.forEach(user => {
  console.log(`- ${user.name} is ${user.age} years old`);
});

// Simulate async operation
setTimeout(() => {
  console.log("\n=== Dummy Script Completed ===");
}, 100);
