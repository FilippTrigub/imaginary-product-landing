#!/usr/bin/env node

// Node.js hello world script
console.log('='.repeat(50));
console.log('  Hello World from Node.js!');
console.log('  NovaSphere - The Future of Personal Computing');
console.log('='.repeat(50));

// Colorful console output (if terminal supports it)
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    yellow: '\x1b[33m'
};

console.log(`\n${colors.bright}${colors.cyan}🌟 Hello World! 🌟${colors.reset}`);
console.log(`${colors.magenta}Welcome to NovaSphere${colors.reset}`);
console.log(`${colors.yellow}Current time: ${new Date().toLocaleString()}${colors.reset}\n`);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sayHello: () => 'Hello World!',
        greet: (name) => `Hello, ${name}! Welcome to NovaSphere!`
    };
}
