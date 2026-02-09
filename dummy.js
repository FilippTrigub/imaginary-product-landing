#!/usr/bin/env node

/**
 * Dummy Script
 * A simple demonstration script that performs basic operations
 */

// Generate random data
function generateRandomData(count = 5) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      name: `Item ${i + 1}`,
      value: Math.floor(Math.random() * 100),
      timestamp: new Date().toISOString()
    });
  }
  return data;
}

// Process data
function processData(data) {
  console.log('Processing data...');
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const average = total / data.length;

  return {
    count: data.length,
    total: total,
    average: average.toFixed(2),
    max: Math.max(...data.map(item => item.value)),
    min: Math.min(...data.map(item => item.value))
  };
}

// Main execution
function main() {
  console.log('=== Dummy Script Started ===\n');

  // Generate sample data
  const data = generateRandomData(10);
  console.log('Generated Data:');
  console.table(data);

  // Process the data
  const stats = processData(data);
  console.log('\nStatistics:');
  console.log(`  Items: ${stats.count}`);
  console.log(`  Total: ${stats.total}`);
  console.log(`  Average: ${stats.average}`);
  console.log(`  Maximum: ${stats.max}`);
  console.log(`  Minimum: ${stats.min}`);

  console.log('\n=== Dummy Script Completed ===');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { generateRandomData, processData };
