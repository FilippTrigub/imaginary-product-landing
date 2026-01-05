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

// Hello World as JSON
console.log('\n' + colors.bright + 'Hello World as JSON:' + colors.reset);
const helloWorldData = {
    message: 'Hello World!',
    language: 'JavaScript',
    runtime: 'Node.js',
    version: process.version,
    timestamp: new Date().toISOString(),
    author: 'NovaSphere',
    status: 'success'
};
console.log(JSON.stringify(helloWorldData, null, 2));

// Hello World with multiple languages
console.log('\n' + colors.bright + colors.cyan + 'Hello World in Multiple Languages:' + colors.reset);
const greetings = {
    English: 'Hello World!',
    Spanish: '¡Hola Mundo!',
    French: 'Bonjour le Monde!',
    German: 'Hallo Welt!',
    Italian: 'Ciao Mondo!',
    Japanese: 'こんにちは世界!',
    Chinese: '你好世界!',
    Russian: 'Привет мир!',
    Korean: '안녕하세요 세계!',
    Hindi: 'नमस्ते दुनिया!'
};

Object.entries(greetings).forEach(([language, greeting]) => {
    console.log(`  ${colors.yellow}${language.padEnd(10)}${colors.reset}: ${greeting}`);
});

// Hello World with animation (simple)
console.log('\n' + colors.bright + 'Animated Hello World:' + colors.reset);
const message = 'Hello World!';
let displayed = '';

function animateMessage(index) {
    if (index < message.length) {
        displayed += message[index];
        process.stdout.write('\r' + colors.green + displayed + colors.reset);
        setTimeout(() => animateMessage(index + 1), 100);
    } else {
        console.log('\n');
        console.log(colors.bright + colors.green + '✓ Hello World script completed successfully!' + colors.reset + '\n');
    }
}

animateMessage(0);
