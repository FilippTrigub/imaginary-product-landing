#!/usr/bin/env node

/**
 * Hello World - Node.js Script
 * NovaSphere Project
 */

// Simple Hello World
console.log('Hello World!');

// Styled Hello World with colors (using ANSI codes)
console.log('\x1b[36m%s\x1b[0m', '╔════════════════════════════════════╗');
console.log('\x1b[36m%s\x1b[0m', '║                                    ║');
console.log('\x1b[36m%s\x1b[35m%s\x1b[36m%s\x1b[0m', '║        ', 'Hello World!', '               ║');
console.log('\x1b[36m%s\x1b[0m', '║                                    ║');
console.log('\x1b[36m%s\x1b[0m', '║   Welcome to NovaSphere Project    ║');
console.log('\x1b[36m%s\x1b[0m', '║                                    ║');
console.log('\x1b[36m%s\x1b[0m', '╚════════════════════════════════════╝');

// Hello World with timestamp
const timestamp = new Date().toLocaleString();
console.log(`\n[${timestamp}] Hello World from Node.js!`);

// Hello World in different languages
const greetings = {
    english: 'Hello World!',
    spanish: '¡Hola Mundo!',
    french: 'Bonjour le monde!',
    german: 'Hallo Welt!',
    italian: 'Ciao Mondo!',
    japanese: 'こんにちは世界！',
    chinese: '你好世界！',
    russian: 'Привет мир!',
    arabic: 'مرحبا بالعالم!',
    hindi: 'नमस्ते दुनिया!'
};

console.log('\n🌍 Hello World in Multiple Languages:');
console.log('━'.repeat(40));
Object.entries(greetings).forEach(([language, greeting]) => {
    console.log(`${language.padEnd(15)}: ${greeting}`);
});

// Hello World with system info
console.log('\n💻 System Information:');
console.log('━'.repeat(40));
console.log(`Platform       : ${process.platform}`);
console.log(`Node Version   : ${process.version}`);
console.log(`Architecture   : ${process.arch}`);
console.log(`Current Dir    : ${process.cwd()}`);

// Export for module usage
module.exports = {
    sayHello: () => 'Hello World!',
    greetings: greetings
};
