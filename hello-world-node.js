#!/usr/bin/env node

/**
 * Hello World - Node.js Version
 * A Node.js hello world script with various features
 */

// Basic hello world
console.log('Hello, World!');
console.log('='.repeat(50));

// Display Node.js information
console.log('\n📦 Node.js Information:');
console.log(`   Node Version: ${process.version}`);
console.log(`   Platform: ${process.platform}`);
console.log(`   Architecture: ${process.arch}`);
console.log(`   Process ID: ${process.pid}`);

// Display environment
console.log('\n🌍 Environment:');
console.log(`   Current Directory: ${process.cwd()}`);
console.log(`   Script Path: ${__filename}`);
console.log(`   User: ${process.env.USER || process.env.USERNAME || 'Unknown'}`);

// Display date and time
console.log('\n📅 Current Date & Time:');
const now = new Date();
console.log(`   ${now.toLocaleString()}`);

// Colorful output using ANSI codes
console.log('\n🎨 Colorful Output:');
console.log('\x1b[31m%s\x1b[0m', '   Red: Hello, World!');
console.log('\x1b[32m%s\x1b[0m', '   Green: Hello, World!');
console.log('\x1b[33m%s\x1b[0m', '   Yellow: Hello, World!');
console.log('\x1b[34m%s\x1b[0m', '   Blue: Hello, World!');
console.log('\x1b[35m%s\x1b[0m', '   Magenta: Hello, World!');
console.log('\x1b[36m%s\x1b[0m', '   Cyan: Hello, World!');

// ASCII Art
console.log('\n🎭 ASCII Art:');
console.log(`
  _   _      _ _         __        __         _     _ _ 
 | | | | ___| | | ___    \\ \\      / /__  _ __| | __| | |
 | |_| |/ _ \\ | |/ _ \\    \\ \\ /\\ / / _ \\| '__| |/ _\` | |
 |  _  |  __/ | | (_) |    \\ V  V / (_) | |  | | (_| |_|
 |_| |_|\\___|_|_|\\___/      \\_/\\_/ \\___/|_|  |_|\\__,_(_)
                                                         
`);

// Project information
console.log('🚀 NovaSphere - The Future of Personal Computing');
console.log('   Version: 1.0.0');
console.log('   Author: NovaSphere Team');

console.log('\n' + '='.repeat(50));
console.log('✅ Hello World script completed successfully!\n');

// Exit with success code
process.exit(0);
