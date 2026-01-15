#!/usr/bin/env node

/**
 * Hello World - Node.js Edition
 * Multiple ways to say Hello World in Node.js
 */

// 1. Basic Hello World
console.log('Hello World!');

// 2. Styled console output
console.log('\x1b[36m%s\x1b[0m', '='.repeat(50));
console.log('\x1b[35m%s\x1b[0m', '         Hello World - Node.js Edition');
console.log('\x1b[36m%s\x1b[0m', '='.repeat(50));

// 3. Hello World with colors
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

console.log(`${colors.green}✓ Hello World in Green!${colors.reset}`);
console.log(`${colors.blue}✓ Hello World in Blue!${colors.reset}`);
console.log(`${colors.magenta}✓ Hello World in Magenta!${colors.reset}`);
console.log(`${colors.cyan}✓ Hello World in Cyan!${colors.reset}`);

// 4. Hello World with ASCII art
console.log('\n' + colors.yellow);
console.log('  _   _      _ _        __        __         _     _ _ ');
console.log(' | | | | ___| | | ___   \\ \\      / /__  _ __| | __| | |');
console.log(' | |_| |/ _ \\ | |/ _ \\   \\ \\ /\\ / / _ \\| \'__| |/ _` | |');
console.log(' |  _  |  __/ | | (_) |   \\ V  V / (_) | |  | | (_| |_|');
console.log(' |_| |_|\\___|_|_|\\___/     \\_/\\_/ \\___/|_|  |_|\\__,_(_)');
console.log(colors.reset);

// 5. Hello World function
function greet(name = 'World', language = 'en') {
    const greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
        de: 'Hallo',
        it: 'Ciao',
        ja: 'こんにちは',
        zh: '你好',
        ru: 'Привет'
    };
    
    return `${greetings[language] || greetings.en} ${name}!`;
}

console.log('\n' + colors.bright + 'Multi-language Greetings:' + colors.reset);
console.log(greet('World', 'en'));
console.log(greet('Mundo', 'es'));
console.log(greet('Monde', 'fr'));
console.log(greet('Welt', 'de'));
console.log(greet('世界', 'ja'));

// 6. Hello World with process info
console.log('\n' + colors.cyan + 'System Information:' + colors.reset);
console.log(`Node Version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);
console.log(`Current Directory: ${process.cwd()}`);

// 7. Hello World with timestamp
const now = new Date();
console.log(`\n${colors.green}Hello World at: ${now.toLocaleString()}${colors.reset}`);

// 8. Async Hello World
async function asyncHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello World from async function! 🚀');
        }, 100);
    });
}

asyncHello().then(message => {
    console.log(`\n${colors.magenta}${message}${colors.reset}`);
});

// 9. Hello World class
class HelloWorld {
    constructor(name = 'World') {
        this.name = name;
    }
    
    greet() {
        return `Hello ${this.name}!`;
    }
    
    shout() {
        return `HELLO ${this.name.toUpperCase()}!!!`;
    }
}

const hello = new HelloWorld('NovaSphere');
console.log(`\n${colors.blue}${hello.greet()}${colors.reset}`);
console.log(`${colors.red}${hello.shout()}${colors.reset}`);

// 10. Export for module usage
module.exports = {
    greet,
    HelloWorld,
    asyncHello
};

console.log('\n' + colors.cyan + '='.repeat(50) + colors.reset);
console.log(colors.green + '✓ Hello World script completed successfully!' + colors.reset);
console.log(colors.cyan + '='.repeat(50) + colors.reset + '\n');
