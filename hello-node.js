#!/usr/bin/env node

// Hello World in Node.js
console.log("Hello World!");

// With colors (using ANSI escape codes)
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m'
};

console.log(`${colors.bright}${colors.cyan}Hello World!${colors.reset}`);
console.log(`${colors.magenta}Welcome to NovaSphere${colors.reset}`);

// ASCII Art version
console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║         HELLO WORLD!                  ║
║         NovaSphere v2                 ║
║                                       ║
╚═══════════════════════════════════════╝
`);

// Export for module usage
module.exports = {
    greet: () => "Hello World!",
    greetUser: (name) => `Hello ${name}!`
};
