// Hello World - Async/Await Examples

// Simple async function
async function sayHello() {
    return "Hello World!";
}

// Async with delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedHello() {
    console.log("Preparing to say hello...");
    await delay(1000);
    console.log("Hello World! (after 1 second)");
}

// Multiple async operations
async function multipleHellos() {
    const messages = [
        "Hello",
        "World",
        "from",
        "Async",
        "JavaScript!"
    ];
    
    for (const message of messages) {
        await delay(500);
        console.log(message);
    }
}

// Promise-based hello
function promiseHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World from Promise!");
        }, 1000);
    });
}

// Run all examples
async function runAll() {
    console.log("=== Hello World Async Examples ===\n");
    
    // Example 1
    const result = await sayHello();
    console.log("1.", result);
    
    // Example 2
    await delayedHello();
    
    // Example 3
    console.log("\n3. Multiple hellos:");
    await multipleHellos();
    
    // Example 4
    console.log("\n4.", await promiseHello());
    
    console.log("\n=== All examples completed! ===");
}

// Execute if run directly
if (require.main === module) {
    runAll().catch(console.error);
}

module.exports = { sayHello, delayedHello, multipleHellos, promiseHello };
