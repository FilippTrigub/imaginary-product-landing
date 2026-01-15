#!/usr/bin/env node

// Node.js hello world script
console.log('='.repeat(50));
console.log('  Hello World from NovaSphere!');
console.log('='.repeat(50));
console.log('');
console.log('🌟 Welcome to the Future of Personal Computing');
console.log('');
console.log('System Information:');
console.log(`  Node Version: ${process.version}`);
console.log(`  Platform: ${process.platform}`);
console.log(`  Architecture: ${process.arch}`);
console.log('');
console.log('='.repeat(50));

// Colorful output if terminal supports it
if (process.stdout.isTTY) {
    console.log('\x1b[36m%s\x1b[0m', '✨ Terminal colors are supported!');
    console.log('\x1b[32m%s\x1b[0m', '✓ Hello World in green');
    console.log('\x1b[33m%s\x1b[0m', '✓ Hello World in yellow');
    console.log('\x1b[35m%s\x1b[0m', '✓ Hello World in magenta');
}
