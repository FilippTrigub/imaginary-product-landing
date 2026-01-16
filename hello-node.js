#!/usr/bin/env node

// Hello World - Node.js Script
console.log("Hello World from Node.js!");

// With colors using ANSI codes
console.log("\x1b[32m%s\x1b[0m", "Hello World in Green!");
console.log("\x1b[36m%s\x1b[0m", "Hello World in Cyan!");
console.log("\x1b[33m%s\x1b[0m", "Hello World in Yellow!");

// With process info
console.log(`\nRunning on Node.js ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Current directory: ${process.cwd()}`);

// Export for module usage
module.exports = {
    sayHello: () => "Hello World!",
    greet: (name) => `Hello ${name}!`
};
