#!/usr/bin/env node

/**
 * Hello World - Node.js Script
 * NovaSphere Project
 */

// Simple Hello World
console.log('Hello World!');

// Styled Hello World with colors (using ANSI codes)
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    green: '\x1b[32m'
};

console.log('\n' + colors.bright + colors.cyan + '╔════════════════════════════════════╗' + colors.reset);
console.log(colors.bright + colors.cyan + '║' + colors.reset + '                                    ' + colors.bright + colors.cyan + '║' + colors.reset);
console.log(colors.bright + colors.cyan + '║' + colors.reset + '         ' + colors.bright + colors.magenta + 'HELLO WORLD!' + colors.reset + '            ' + colors.bright + colors.cyan + '║' + colors.reset);
console.log(colors.bright + colors.cyan + '║' + colors.reset + '                                    ' + colors.bright + colors.cyan + '║' + colors.reset);
console.log(colors.bright + colors.cyan + '║' + colors.reset + '    ' + colors.green + 'NovaSphere Project' + colors.reset + '           ' + colors.bright + colors.cyan + '║' + colors.reset);
console.log(colors.bright + colors.cyan + '║' + colors.reset + '                                    ' + colors.bright + colors.cyan + '║' + colors.reset);
console.log(colors.bright + colors.cyan + '╚════════════════════════════════════╝' + colors.reset + '\n');

// Hello World with timestamp
const now = new Date();
console.log(`${colors.green}✓${colors.reset} Script executed at: ${now.toLocaleString()}`);

// Hello World with system info
console.log(`${colors.green}✓${colors.reset} Node.js version: ${process.version}`);
console.log(`${colors.green}✓${colors.reset} Platform: ${process.platform}`);
console.log(`${colors.green}✓${colors.reset} Architecture: ${process.arch}`);

// Hello World function
function greet(name = 'World') {
    return `Hello, ${name}!`;
}

console.log(`\n${colors.magenta}${greet()}${colors.reset}`);
console.log(`${colors.magenta}${greet('NovaSphere')}${colors.reset}`);
console.log(`${colors.magenta}${greet('Developer')}${colors.reset}\n`);

// Export for use as module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { greet };
}
