#!/usr/bin/env node

/**
 * Dummy Script
 * A simple demonstration script that performs basic operations
 */

console.log('='.repeat(50));
console.log('DUMMY SCRIPT EXECUTION');
console.log('='.repeat(50));

// Display current timestamp
const now = new Date();
console.log(`\nExecution time: ${now.toLocaleString()}`);

// Perform some basic calculations
console.log('\n--- Basic Calculations ---');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log(`Numbers: ${numbers.join(', ')}`);
console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);

// Generate random data
console.log('\n--- Random Data ---');
const randomNumber = Math.floor(Math.random() * 100) + 1;
const randomColors = ['red', 'blue', 'green', 'yellow', 'purple'];
const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];

console.log(`Random number (1-100): ${randomNumber}`);
console.log(`Random color: ${randomColor}`);

// Display system info
console.log('\n--- System Information ---');
console.log(`Node version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);
console.log(`Working directory: ${process.cwd()}`);

// Simulate async operation
console.log('\n--- Async Operation ---');
console.log('Starting async task...');

setTimeout(() => {
    console.log('Async task completed after 1 second!');
    console.log('\n' + '='.repeat(50));
    console.log('SCRIPT EXECUTION COMPLETED SUCCESSFULLY');
    console.log('='.repeat(50));
}, 1000);
