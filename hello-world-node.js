#!/usr/bin/env node

// Hello World for Node.js

// Basic console output
console.log('Hello, World!');

// Using process
console.log(`Hello from Node.js ${process.version}!`);

// Using template literals
const greeting = 'Hello';
const target = 'World';
console.log(`${greeting}, ${target}!`);

// Async Hello World
async function asyncHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, World (async)!');
        }, 100);
    });
}

asyncHello().then(message => console.log(message));

// Hello World with colors (if terminal supports it)
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    cyan: '\x1b[36m'
};

console.log(`${colors.bright}${colors.green}Hello, Colorful World!${colors.reset}`);

// Export for testing
module.exports = { asyncHello };
