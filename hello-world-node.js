#!/usr/bin/env node

/**
 * Hello World - Node.js Version
 * NovaSphere Demo Scripts
 */

// Simple Hello World
console.log('Hello World!');
console.log('='.repeat(50));

// Colorful Hello World (using ANSI escape codes)
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    yellow: '\x1b[33m',
    green: '\x1b[32m'
};

console.log(`${colors.bright}${colors.cyan}Hello World!${colors.reset}`);
console.log(`${colors.magenta}Welcome to NovaSphere${colors.reset}`);
console.log('='.repeat(50));

// Hello World with timestamp
const now = new Date();
console.log(`\n${colors.green}[${now.toISOString()}]${colors.reset} Hello World!`);

// Hello World with system info
console.log('\nSystem Information:');
console.log(`- Node Version: ${process.version}`);
console.log(`- Platform: ${process.platform}`);
console.log(`- Architecture: ${process.arch}`);
console.log(`- Current Directory: ${process.cwd()}`);

// Hello World function
function greet(name = 'World', language = 'en') {
    const greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
        de: 'Hallo',
        it: 'Ciao',
        ja: 'こんにちは',
        zh: '你好'
    };
    
    const greeting = greetings[language] || greetings.en;
    return `${greeting} ${name}!`;
}

console.log('\nMulti-language Greetings:');
console.log(greet('World', 'en'));
console.log(greet('Mundo', 'es'));
console.log(greet('Monde', 'fr'));
console.log(greet('Welt', 'de'));

// Hello World with command line arguments
if (process.argv.length > 2) {
    const name = process.argv.slice(2).join(' ');
    console.log(`\n${colors.yellow}Custom Greeting:${colors.reset}`);
    console.log(greet(name));
}

// Async Hello World
async function asyncGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World! (Async)');
        }, 1000);
    });
}

console.log('\nWaiting for async greeting...');
asyncGreeting().then(message => {
    console.log(`${colors.bright}${message}${colors.reset}`);
});

// Export functions for use as module
module.exports = {
    greet,
    asyncGreeting,
    colors
};
