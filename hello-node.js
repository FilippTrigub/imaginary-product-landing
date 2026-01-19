#!/usr/bin/env node

/**
 * Hello World in Node.js with CommonJS module
 */

function sayHello() {
  return "Hello, World!";
}

console.log(sayHello());

module.exports = { sayHello };
