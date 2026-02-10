#!/usr/bin/env node

/**
 * Dummy Script
 * A simple demonstration script with various common operations
 */

// Console output examples
console.log('=== Dummy Script Started ===');
console.log('Current time:', new Date().toISOString());
console.log('Working directory:', process.cwd());

// Simple data processing
const sampleData = [
  { id: 1, name: 'Alice', score: 85 },
  { id: 2, name: 'Bob', score: 92 },
  { id: 3, name: 'Charlie', score: 78 },
  { id: 4, name: 'Diana', score: 95 }
];

console.log('\n=== Processing Sample Data ===');
console.log('Total records:', sampleData.length);

// Calculate average score
const averageScore = sampleData.reduce((sum, item) => sum + item.score, 0) / sampleData.length;
console.log('Average score:', averageScore.toFixed(2));

// Find highest score
const topScorer = sampleData.reduce((prev, current) =>
  (prev.score > current.score) ? prev : current
);
console.log('Top scorer:', topScorer.name, 'with score:', topScorer.score);

// Filter high performers
const highPerformers = sampleData.filter(item => item.score >= 90);
console.log('High performers (>=90):', highPerformers.map(p => p.name).join(', '));

// Simple async operation simulation
async function simulateAsyncTask() {
  console.log('\n=== Simulating Async Task ===');
  console.log('Task started...');

  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log('Task completed!');
  return 'Success';
}

// Execute async task
simulateAsyncTask().then(result => {
  console.log('Result:', result);
  console.log('\n=== Dummy Script Finished ===');
}).catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
