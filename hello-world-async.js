#!/usr/bin/env node

/**
 * Async/Await Hello World
 * Demonstrates asynchronous JavaScript patterns
 */

// Simulate an async operation with a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function that returns a greeting
async function getGreeting(name = 'World') {
    await delay(500); // Simulate network delay
    return `Hello, ${name}!`;
}

// Async function that fetches multiple greetings
async function getMultipleGreetings() {
    const greetings = [
        getGreeting('World'),
        getGreeting('NovaSphere'),
        getGreeting('Developer')
    ];
    
    // Wait for all greetings to complete
    return await Promise.all(greetings);
}

// Main async function
async function main() {
    console.log('Starting async hello world...\n');
    
    // Sequential async calls
    console.log('Sequential greetings:');
    const greeting1 = await getGreeting('World');
    console.log(`1. ${greeting1}`);
    
    const greeting2 = await getGreeting('NovaSphere');
    console.log(`2. ${greeting2}`);
    
    // Parallel async calls
    console.log('\nParallel greetings:');
    const allGreetings = await getMultipleGreetings();
    allGreetings.forEach((greeting, index) => {
        console.log(`${index + 1}. ${greeting}`);
    });
    
    // Async iteration
    console.log('\nAsync iteration:');
    const names = ['Alice', 'Bob', 'Charlie'];
    for (const name of names) {
        const greeting = await getGreeting(name);
        console.log(`- ${greeting}`);
    }
    
    // Promise chain example
    console.log('\nPromise chain:');
    await getGreeting('Promise')
        .then(greeting => {
            console.log(greeting);
            return getGreeting('Chain');
        })
        .then(greeting => {
            console.log(greeting);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    console.log('\nAsync hello world completed!');
}

// Error handling wrapper
async function run() {
    try {
        await main();
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
}

// Execute if run directly
if (require.main === module) {
    run();
}

// Export for use as a module
module.exports = {
    getGreeting,
    getMultipleGreetings,
    delay
};
