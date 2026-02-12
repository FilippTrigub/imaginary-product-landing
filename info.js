#!/usr/bin/env node

const os = require('os');

console.log('=== System Information ===');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Node Version: ${process.version}`);
console.log(`Total Memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Uptime: ${(os.uptime() / 60 / 60).toFixed(2)} hours`);
console.log('==========================');
