#!/usr/bin/env node
// Simple Hello World in Node.js
const args = process.argv.slice(2);
if (args.length > 0) {
  console.log(`Hello, ${args.join(' ')}!`);
} else {
  console.log('Hello, world!');
}
