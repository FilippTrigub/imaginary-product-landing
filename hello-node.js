#!/usr/bin/env node
// Node.js Hello World Script with more features
const name = process.argv[2] || "World";
console.log(`Hello, ${name}!`);
console.log("Running on Node.js version:", process.version);
