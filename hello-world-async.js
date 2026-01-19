// Hello World - Async/Await approach
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function greetWithDelay(name, delayMs) {
    console.log(`Preparing to greet ${name}...`);
    await delay(delayMs);
    console.log(`Hello, ${name}!`);
}

async function main() {
    await greetWithDelay('World', 1000);
    await greetWithDelay('Async JavaScript', 500);
    console.log('All greetings completed!');
}

main();
