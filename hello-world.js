/**
 * Hello World - JavaScript Console Version
 * A simple hello world script that outputs to the console
 */

console.log('Hello, World!');
console.log('Welcome to NovaSphere!');

// Additional greeting with timestamp
const now = new Date();
console.log(`Current time: ${now.toLocaleString()}`);

// Demonstrating different console methods
console.info('ℹ️ This is an info message');
console.warn('⚠️ This is a warning message');
console.error('❌ This is an error message (just for demo)');

// Object logging
const greeting = {
    message: 'Hello, World!',
    language: 'JavaScript',
    project: 'NovaSphere',
    version: '1.0.0'
};

console.table(greeting);
