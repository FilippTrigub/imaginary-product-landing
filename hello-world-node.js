#!/usr/bin/env node

/**
 * Hello World - Node.js Script
 * NovaSphere Demo
 */

// Simple Hello World
console.log('Hello World!');

// Styled console output
console.log('\n=================================');
console.log('    HELLO WORLD - NODE.JS');
console.log('=================================\n');

// Hello World with colors (if terminal supports it)
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m'
};

console.log(`${colors.cyan}${colors.bright}Hello World!${colors.reset}`);
console.log(`${colors.green}Welcome to NovaSphere${colors.reset}`);

// Hello World with ASCII art
console.log('\n');
console.log(`${colors.blue}
 _   _      _ _        __        __         _     _ _ 
| | | | ___| | | ___   \\ \\      / /__  _ __| | __| | |
| |_| |/ _ \\ | |/ _ \\   \\ \\ /\\ / / _ \\| '__| |/ _\` | |
|  _  |  __/ | | (_) |   \\ V  V / (_) | |  | | (_| |_|
|_| |_|\\___|_|_|\\___/     \\_/\\_/ \\___/|_|  |_|\\__,_(_)
${colors.reset}`);

// Hello World in multiple languages
console.log('\n' + colors.yellow + 'Greetings in Multiple Languages:' + colors.reset);
const greetings = [
    { lang: 'English', text: 'Hello World!' },
    { lang: 'Spanish', text: '¡Hola Mundo!' },
    { lang: 'French', text: 'Bonjour le Monde!' },
    { lang: 'German', text: 'Hallo Welt!' },
    { lang: 'Japanese', text: 'こんにちは世界！' },
    { lang: 'Chinese', text: '你好世界！' }
];

greetings.forEach(({ lang, text }) => {
    console.log(`  ${colors.magenta}${lang.padEnd(10)}${colors.reset} : ${text}`);
});

// Hello World with timestamp
console.log(`\n${colors.green}Timestamp: ${new Date().toISOString()}${colors.reset}`);

// Hello World with system info
console.log(`\n${colors.cyan}System Information:${colors.reset}`);
console.log(`  Node Version: ${process.version}`);
console.log(`  Platform: ${process.platform}`);
console.log(`  Architecture: ${process.arch}`);

// Hello World with process info
console.log(`\n${colors.yellow}Process Information:${colors.reset}`);
console.log(`  PID: ${process.pid}`);
console.log(`  Working Directory: ${process.cwd()}`);

// Animated Hello World
async function animatedHello() {
    const text = 'Hello World!';
    const delay = 100;
    
    console.log('\n' + colors.bright + 'Animated:' + colors.reset);
    process.stdout.write('  ');
    
    for (let char of text) {
        process.stdout.write(colors.green + char + colors.reset);
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    console.log('\n');
}

// Run animation
animatedHello().then(() => {
    console.log(colors.bright + '=================================\n' + colors.reset);
});

// Export for use as module
module.exports = {
    greet: () => 'Hello World!',
    greetings: greetings
};
