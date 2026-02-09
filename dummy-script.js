#!/usr/bin/env node

/**
 * Dummy Script - A simple demonstration script
 * Purpose: Showcase basic Node.js functionality
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  appName: 'Dummy Script',
  version: '1.0.0',
  timestamp: new Date().toISOString()
};

// Main function
function main() {
  console.log(`\n=== ${CONFIG.appName} v${CONFIG.version} ===`);
  console.log(`Executed at: ${CONFIG.timestamp}\n`);

  // Demonstrate basic operations
  performCalculations();
  displaySystemInfo();
  generateRandomData();
  
  console.log('\n✅ Script execution completed successfully!\n');
}

// Perform some basic calculations
function performCalculations() {
  console.log('📊 Performing calculations...');
  
  const numbers = [12, 45, 78, 23, 56, 89, 34, 67];
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  
  console.log(`   Numbers: [${numbers.join(', ')}]`);
  console.log(`   Sum: ${sum}`);
  console.log(`   Average: ${average.toFixed(2)}`);
  console.log(`   Max: ${max}`);
  console.log(`   Min: ${min}`);
}

// Display system information
function displaySystemInfo() {
  console.log('\n💻 System Information:');
  console.log(`   Platform: ${process.platform}`);
  console.log(`   Node Version: ${process.version}`);
  console.log(`   Architecture: ${process.arch}`);
  console.log(`   Current Directory: ${process.cwd()}`);
  console.log(`   Script Path: ${__filename}`);
}

// Generate some random data
function generateRandomData() {
  console.log('\n🎲 Random Data Generation:');
  
  const randomNumber = Math.floor(Math.random() * 1000);
  const randomFloat = (Math.random() * 100).toFixed(3);
  const randomBoolean = Math.random() > 0.5;
  const randomColor = ['red', 'blue', 'green', 'yellow', 'purple'][Math.floor(Math.random() * 5)];
  
  console.log(`   Random Integer (0-999): ${randomNumber}`);
  console.log(`   Random Float (0-100): ${randomFloat}`);
  console.log(`   Random Boolean: ${randomBoolean}`);
  console.log(`   Random Color: ${randomColor}`);
}

// Execute main function
if (require.main === module) {
  main();
}

module.exports = { main, performCalculations, displaySystemInfo, generateRandomData };
