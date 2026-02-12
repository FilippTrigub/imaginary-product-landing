#!/usr/bin/env node

/**
 * Dummy Script
 * A simple demonstration script that showcases various JavaScript features
 */

// Console output
console.log('=== Dummy Script Started ===');

// Function to generate random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to process array data
function processData(items) {
    console.log('\nProcessing data...');
    return items
        .filter(item => item > 5)
        .map(item => item * 2)
        .reduce((sum, item) => sum + item, 0);
}

// Main execution
function main() {
    // Generate some dummy data
    const data = Array.from({ length: 10 }, () => getRandomNumber(1, 20));
    console.log('Generated data:', data);

    // Process the data
    const result = processData(data);
    console.log('Processed result:', result);

    // Simulate async operation
    setTimeout(() => {
        console.log('\nAsync operation completed!');
        console.log('=== Dummy Script Finished ===');
    }, 1000);
}

// Run the script
main();
