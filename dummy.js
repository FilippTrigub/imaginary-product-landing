#!/usr/bin/env node

/**
 * Dummy Script - Demonstrates various JavaScript features
 * This script performs several operations to showcase basic functionality
 */

class DummyProcessor {
    constructor(name) {
        this.name = name;
        this.timestamp = new Date();
    }

    greet() {
        console.log(`Hello from ${this.name}!`);
        console.log(`Script started at: ${this.timestamp.toISOString()}`);
    }

    processData(data) {
        console.log('\n--- Processing Data ---');
        const processed = data.map((item, index) => ({
            id: index + 1,
            value: item,
            doubled: item * 2,
            squared: item ** 2
        }));
        return processed;
    }

    displayResults(results) {
        console.log('\n--- Results ---');
        results.forEach(result => {
            console.log(`ID: ${result.id} | Value: ${result.value} | Doubled: ${result.doubled} | Squared: ${result.squared}`);
        });
    }

    generateRandomNumbers(count = 5) {
        console.log(`\n--- Generating ${count} random numbers ---`);
        return Array.from({ length: count }, () => Math.floor(Math.random() * 100));
    }

    async simulateAsyncOperation() {
        console.log('\n--- Simulating async operation ---');
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Async operation completed!');
                resolve('Success');
            }, 1000);
        });
    }
}

async function main() {
    console.log('='.repeat(50));
    console.log('DUMMY SCRIPT EXECUTION');
    console.log('='.repeat(50));

    const processor = new DummyProcessor('DummyScript v1.0');
    processor.greet();

    // Generate some random data
    const randomData = processor.generateRandomNumbers(5);
    console.log('Random data:', randomData);

    // Process the data
    const results = processor.processData(randomData);
    processor.displayResults(results);

    // Simulate async operation
    await processor.simulateAsyncOperation();

    console.log('\n' + '='.repeat(50));
    console.log('Script execution completed successfully!');
    console.log('='.repeat(50));
}

// Execute the main function
main().catch(error => {
    console.error('Error occurred:', error);
    process.exit(1);
});
