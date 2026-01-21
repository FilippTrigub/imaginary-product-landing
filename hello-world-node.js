#!/usr/bin/env node

/**
 * Hello World - Node.js Script
 * Run with: node hello-world-node.js
 */

const name = "World";
const timestamp = new Date().toLocaleString();

console.log(`Hello, ${name}!`);
console.log(`Script executed at: ${timestamp}`);
console.log(`Node.js version: ${process.version}`);
