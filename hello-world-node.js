#!/usr/bin/env node
// Node.js Hello World with additional features

const os = require('os');

console.log("Hello, World!");
console.log(`Running on Node.js ${process.version}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Current directory: ${process.cwd()}`);
