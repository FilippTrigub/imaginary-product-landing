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
    yellow: '\x1b[33m',
    green: '\x1b[32m'
};

console.log(`\n${colors.bright}${colors.cyan}╔════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}║                                    ║${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}║${colors.reset}  ${colors.bright}${colors.magenta}Hello World from NovaSphere!${colors.reset}  ${colors.bright}${colors.cyan}║${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}║                                    ║${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}╚════════════════════════════════════╝${colors.reset}\n`);

// Hello World with timestamp
const timestamp = new Date().toLocaleString();
console.log(`${colors.green}[${timestamp}]${colors.reset} ${colors.yellow}Hello World!${colors.reset}`);

// Hello World as ASCII Art
console.log(`
${colors.magenta}
 _   _      _ _        __        __         _     _ _ 
| | | | ___| | | ___   \\ \\      / /__  _ __| | __| | |
| |_| |/ _ \\ | |/ _ \\   \\ \\ /\\ / / _ \\| '__| |/ _\` | |
|  _  |  __/ | | (_) |   \\ V  V / (_) | |  | | (_| |_|
|_| |_|\\___|_|_|\\___/     \\_/\\_/ \\___/|_|  |_|\\__,_(_)
${colors.reset}
`);

// Hello World with process info
console.log(`${colors.bright}Process Information:${colors.reset}`);
console.log(`  Node Version: ${process.version}`);
console.log(`  Platform: ${process.platform}`);
console.log(`  Architecture: ${process.arch}`);
console.log(`  PID: ${process.pid}`);

// Hello World function
function greet(name = 'World') {
    return `Hello ${name}!`;
}

console.log(`\n${greet()}`);
console.log(greet('NovaSphere'));
console.log(greet('Developer'));

// Export for module usage
module.exports = { greet };
