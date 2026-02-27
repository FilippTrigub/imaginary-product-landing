#!/usr/bin/env node

// Information script to display system and runtime details
const os = require('os');
const path = require('path');

console.log('=== System Information Script ===\n');

// Display Node.js version
console.log('Runtime Information:');
console.log(`  Node.js Version: ${process.version}`);
console.log(`  NPM Version: ${process.versions.npm}`);
console.log(`  Platform: ${process.platform}`);
console.log(`  Architecture: ${process.arch}\n`);

// Display system info
console.log('System Information:');
console.log(`  OS Type: ${os.type()}`);
console.log(`  OS Release: ${os.release()}`);
console.log(`  Total Memory: ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`);
console.log(`  Free Memory: ${Math.round(os.freemem() / (1024 * 1024 * 1024))} GB`);
console.log(`  CPU Cores: ${os.cpus().length}\n`);

// Display working directory
console.log('Current Environment:');
console.log(`  Working Directory: ${process.cwd()}`);
console.log(`  Script Location: ${__dirname}\n`);

console.log('Info script completed successfully!');
