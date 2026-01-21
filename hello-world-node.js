#!/usr/bin/env node

/**
 * Hello World - Node.js Edition
 * A more elaborate Node.js script demonstrating different output methods
 */

// Method 1: Basic console.log
console.log("Hello, World!");

// Method 2: Using process.stdout
process.stdout.write("Hello from process.stdout!\n");

// Method 3: Formatted output
const greeting = "Hello";
const target = "World";
console.log(`${greeting}, ${target}!`);

// Method 4: With color (if terminal supports it)
console.log("\x1b[32m%s\x1b[0m", "Hello, World in green!");
