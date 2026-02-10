#!/usr/bin/env node

/**
 * Dummy Script
 * A simple demonstration script that performs basic operations
 */

console.log('=== Dummy Script Started ===\n');

// Simulate some processing
function processData(data) {
  console.log('Processing data:', data);
  return data.map(item => item.toUpperCase());
}

// Sample data
const sampleData = ['hello', 'world', 'from', 'dummy', 'script'];

console.log('Input:', sampleData);
const result = processData(sampleData);
console.log('Output:', result);

// Simulate async operation
async function simulateAsyncTask() {
  console.log('\nSimulating async task...');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Async task completed!');
    }, 1000);
  });
}

// Run async task
simulateAsyncTask().then(message => {
  console.log(message);
  console.log('\n=== Dummy Script Finished ===');
});
