#!/usr/bin/env node

/**
 * Dummy Script - NovaSphere Project
 * A simple demonstration script that performs basic operations
 */

// Utility function to generate random data
function generateRandomData(count) {
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

// Function to process data
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
    console.log('=== NovaSphere Dummy Script ===\n');

    // Generate some dummy data
    console.log('Generating random data...');
    const items = generateRandomData(10);

    console.log(`Generated ${items.length} items\n`);

    // Display first few items
    console.log('Sample items:');
    items.slice(0, 3).forEach(item => {
        console.log(`  - ${item.name}: ${item.value}`);
    });

    console.log('\n');

    // Process the data
    const stats = processData(items);

    // Display results
    console.log('Statistics:');
    console.log(`  Total items: ${stats.count}`);
    console.log(`  Sum of values: ${stats.total}`);
    console.log(`  Average: ${stats.average}`);
    console.log(`  Maximum: ${stats.max}`);
    console.log(`  Minimum: ${stats.min}`);

    console.log('\n=== Script completed successfully ===');
}

// Run the script
main();
