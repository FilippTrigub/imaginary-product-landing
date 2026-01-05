#!/usr/bin/env node

/**
 * Hello World - Node.js Script
 * NovaSphere Demo Collection
 */

// Basic Hello World
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

console.log('\n' + colors.bright + colors.cyan + '╔════════════════════════════════╗' + colors.reset);
console.log(colors.bright + colors.cyan + '║     ' + colors.magenta + 'HELLO WORLD!' + colors.cyan + '            ║' + colors.reset);
console.log(colors.bright + colors.cyan + '║     ' + colors.yellow + 'NovaSphere Demo' + colors.cyan + '        ║' + colors.reset);
console.log(colors.bright + colors.cyan + '╚════════════════════════════════╝' + colors.reset + '\n');

// Hello World with timestamp
const timestamp = new Date().toISOString();
console.log(colors.green + `[${timestamp}] Hello World!` + colors.reset);

// Hello World as ASCII art
console.log('\n' + colors.bright + colors.magenta);
console.log('  _   _      _ _        __        __         _     _ _ ');
console.log(' | | | | ___| | | ___   \\ \\      / /__  _ __| | __| | |');
console.log(' | |_| |/ _ \\ | |/ _ \\   \\ \\ /\\ / / _ \\| \'__| |/ _` | |');
console.log(' |  _  |  __/ | | (_) |   \\ V  V / (_) | |  | | (_| |_|');
console.log(' |_| |_|\\___|_|_|\\___/     \\_/\\_/ \\___/|_|  |_|\\__,_(_)');
console.log(colors.reset);

// Hello World with system info
console.log('\n' + colors.bright + 'System Information:' + colors.reset);
console.log(`  Platform: ${process.platform}`);
console.log(`  Node Version: ${process.version}`);
console.log(`  Architecture: ${process.arch}`);
console.log(`  PID: ${process.pid}`);

// Hello World in different formats
console.log('\n' + colors.bright + 'Hello World in Different Formats:' + colors.reset);
console.log('  String:', 'Hello World!');
console.log('  Array:', ['Hello', 'World!']);
console.log('  Object:', { greeting: 'Hello', target: 'World!' });
console.log('  JSON:', JSON.stringify({ message: 'Hello World!' }));

// Hello World with a simple function
function greet(name = 'World') {
    return `Hello ${name}!`;
}

console.log('\n' + colors.bright + 'Function Output:' + colors.reset);
console.log('  ' + greet());
console.log('  ' + greet('NovaSphere'));
console.log('  ' + greet('Developer'));

// Hello World with async/await
async function asyncHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World from async function!');
        }, 100);
    });
}

asyncHello().then(message => {
    console.log('\n' + colors.bright + 'Async Output:' + colors.reset);
    console.log('  ' + message);
    console.log('\n' + colors.green + '✓ All Hello World scripts completed successfully!' + colors.reset + '\n');
});

// Export for module usage
module.exports = {
    greet,
    asyncHello
};
