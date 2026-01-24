#!/usr/bin/env node
/**
 * Node.js Hello World Script
 * Demonstrates various Node.js features
 */

// Basic hello world
console.log('Hello, World!');

// Hello world with colors using ANSI codes
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m'
};

console.log(`${colors.green}${colors.bright}Hello, World in Green!${colors.reset}`);
console.log(`${colors.blue}${colors.bright}Hello, World in Blue!${colors.reset}`);
console.log(`${colors.magenta}${colors.bright}Hello, World in Magenta!${colors.reset}`);

// Hello world with environment info
console.log('\n--- Environment Info ---');
console.log(`Node Version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);

// Hello world with command line arguments
console.log('\n--- Command Line Arguments ---');
if (process.argv.length > 2) {
    const name = process.argv.slice(2).join(' ');
    console.log(`Hello, ${name}!`);
} else {
    console.log('Usage: node hello-world-node.js [name]');
    console.log('Example: node hello-world-node.js NovaSphere');
}

// Hello world with async/await
async function asyncHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello from async function!');
        }, 100);
    });
}

asyncHello().then(message => {
    console.log(`\n${message}`);
});

// Export for use as a module
module.exports = {
    sayHello: (name = 'World') => `Hello, ${name}!`
};
