#!/usr/bin/env node

/**
 * Basic Hello World script for Node.js
 * Run with: node hello.js
 */

console.log('Hello, World!');
console.log('Welcome to NovaSphere!');

// With some styling
console.log('\n' + '='.repeat(50));
console.log('  🌟 Hello from the NovaSphere team! 🌟');
console.log('='.repeat(50) + '\n');

// Export for potential module usage
module.exports = {
    greet: (name = 'World') => {
        console.log(`Hello, ${name}!`);
    }
};

// If run directly (not imported)
if (require.main === module) {
    console.log('This script was run directly!');
}
