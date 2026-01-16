#!/usr/bin/env node

/**
 * Hello World - Node.js Version
 * NovaSphere Project
 */

// Simple console output
console.log('Hello World!');
console.log('Welcome to NovaSphere\n');

// Colorful console output (using ANSI escape codes)
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    yellow: '\x1b[33m',
    green: '\x1b[32m'
};

console.log(`${colors.bright}${colors.cyan}╔════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}║                                    ║${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}║${colors.reset}  ${colors.magenta}${colors.bright}Hello World from Node.js!${colors.reset}  ${colors.cyan}${colors.bright}║${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}║                                    ║${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}╚════════════════════════════════════╝${colors.reset}\n`);

// Function-based hello
function greet(name = 'World') {
    return `${colors.green}Hello ${name}!${colors.reset}`;
}

console.log(greet());
console.log(greet('NovaSphere'));
console.log(greet('Developer'));

// Class-based hello
class Greeter {
    constructor(greeting = 'Hello') {
        this.greeting = greeting;
    }
    
    greet(name = 'World') {
        console.log(`${colors.yellow}${this.greeting} ${name}!${colors.reset}`);
    }
}

const greeter = new Greeter('Hello');
greeter.greet('World');

const customGreeter = new Greeter('Welcome');
customGreeter.greet('NovaSphere User');

// Async hello with delay
async function asyncGreet(name, delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${colors.magenta}Async Hello ${name}!${colors.reset}`);
        }, delay);
    });
}

// Execute async greeting
(async () => {
    console.log('\nWaiting for async greeting...');
    const message = await asyncGreet('World', 500);
    console.log(message);
})();

// Process information
console.log(`\n${colors.bright}Process Information:${colors.reset}`);
console.log(`Node Version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);
console.log(`Current Directory: ${process.cwd()}`);

// Export functions for module usage
module.exports = {
    greet,
    Greeter,
    asyncGreet,
    colors
};
