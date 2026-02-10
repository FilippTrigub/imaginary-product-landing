#!/usr/bin/env node

/**
 * Dummy Script
 * A simple demonstration script that performs basic operations
 */

console.log('='.repeat(50));
console.log('Dummy Script Started');
console.log('='.repeat(50));

// Function to generate random data
function generateRandomData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            id: i + 1,
            value: Math.floor(Math.random() * 100),
            timestamp: new Date().toISOString()
        });
    }
    return data;
}

// Function to process data
function processData(data) {
    console.log('\nProcessing data...');
    const sum = data.reduce((acc, item) => acc + item.value, 0);
    const average = sum / data.length;
    const max = Math.max(...data.map(item => item.value));
    const min = Math.min(...data.map(item => item.value));

    return { sum, average, max, min };
}

// Main execution
function main() {
    console.log('\n1. Generating random data...');
    const dataCount = 10;
    const data = generateRandomData(dataCount);
    console.log(`Generated ${dataCount} data points`);

    console.log('\n2. Sample data:');
    data.slice(0, 3).forEach(item => {
        console.log(`   ID: ${item.id}, Value: ${item.value}`);
    });

    console.log('\n3. Processing statistics...');
    const stats = processData(data);
    console.log(`   Sum: ${stats.sum}`);
    console.log(`   Average: ${stats.average.toFixed(2)}`);
    console.log(`   Maximum: ${stats.max}`);
    console.log(`   Minimum: ${stats.min}`);

    console.log('\n' + '='.repeat(50));
    console.log('Dummy Script Completed Successfully');
    console.log('='.repeat(50));
}

// Run the script
main();
