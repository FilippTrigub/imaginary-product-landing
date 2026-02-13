"use strict";

// Simple test script to verify Node.js environment is working
console.log("Running basic tests...");

// Test 1: Verify Node.js version
console.log(`Node.js version: ${process.version}`);

// Test 2: Basic arithmetic
const sum = 1 + 1;
if (sum === 2) {
    console.log("✓ Basic arithmetic test passed");
} else {
    console.error("✗ Basic arithmetic test failed");
    process.exit(1);
}

// Test 3: String manipulation
const greeting = "Hello".concat(", World!");
if (greeting === "Hello, World!") {
    console.log("✓ String manipulation test passed");
} else {
    console.error("✗ String manipulation test failed");
    process.exit(1);
}

// Test 4: Array operations
const numbers = [1, 2, 3].map(n => n * 2);
if (numbers.join(",") === "2,4,6") {
    console.log("✓ Array operations test passed");
} else {
    console.error("✗ Array operations test failed");
    process.exit(1);
}

console.log("All tests passed successfully!");
process.exit(0);