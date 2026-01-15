#!/usr/bin/env node

/**
 * Hello World - Node.js Version
 * NovaSphere Demo Scripts
 */

// Simple console output
console.log('Hello World!');
console.log('Welcome to NovaSphere Node.js Demo\n');

// Colored output (using ANSI escape codes)
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    green: '\x1b[32m',
    yellow: '\x1b[33m'
};

console.log(`${colors.bright}${colors.cyan}╔════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}║     Hello World from Node.js!     ║${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}╚════════════════════════════════════╝${colors.reset}\n`);

// Function demonstrations
function greet(name = 'World') {
    return `${colors.green}Hello, ${name}!${colors.reset}`;
}

console.log(greet());
console.log(greet('NovaSphere User'));
console.log(greet('Developer'));
console.log('');

// Async/Await demonstration
async function asyncGreeting(name, delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${colors.magenta}Async Hello, ${name}!${colors.reset}`);
        }, delay);
    });
}

// Class demonstration
class Greeter {
    constructor(greeting = 'Hello') {
        this.greeting = greeting;
    }
    
    greet(name = 'World') {
        return `${this.greeting}, ${name}!`;
    }
    
    greetMultiple(...names) {
        return names.map(name => this.greet(name));
    }
}

const greeter = new Greeter('Hello');
console.log(`${colors.yellow}Class-based greeting:${colors.reset}`);
console.log(greeter.greet('Node.js'));
console.log('');

console.log(`${colors.yellow}Multiple greetings:${colors.reset}`);
greeter.greetMultiple('Alice', 'Bob', 'Charlie').forEach(msg => console.log(msg));
console.log('');

// Arrow function demonstration
const helloArrow = (name = 'World') => `Hello, ${name}!`;
console.log(`${colors.yellow}Arrow function:${colors.reset} ${helloArrow('Arrow')}`);
console.log('');

// Template literals
const user = {
    name: 'NovaSphere User',
    role: 'Developer',
    project: 'Hello World Scripts'
};

console.log(`${colors.yellow}Template literal greeting:${colors.reset}`);
console.log(`Hello, ${user.name}!`);
console.log(`Role: ${user.role}`);
console.log(`Project: ${user.project}`);
console.log('');

// Array methods
const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];
console.log(`${colors.yellow}Hello from multiple languages:${colors.reset}`);
languages.forEach(lang => console.log(`  - Hello from ${lang}!`));
console.log('');

// Object destructuring
const { name, role, project } = user;
console.log(`${colors.yellow}Destructured greeting:${colors.reset}`);
console.log(`Hello ${name}, the ${role} working on ${project}!`);
console.log('');

// Async execution
console.log(`${colors.yellow}Async greeting (waiting 1 second...):${colors.reset}`);
asyncGreeting('Async World', 1000).then(message => {
    console.log(message);
    console.log('');
    console.log(`${colors.bright}${colors.green}✓ All Hello World demonstrations complete!${colors.reset}`);
});

// Process information
console.log(`${colors.yellow}Process Information:${colors.reset}`);
console.log(`  Node Version: ${process.version}`);
console.log(`  Platform: ${process.platform}`);
console.log(`  Architecture: ${process.arch}`);
console.log('');

// Export for module usage
module.exports = {
    greet,
    asyncGreeting,
    Greeter,
    helloArrow
};
