#!/usr/bin/env node

/**
 * Basic Hello World Script
 * A simple Node.js script that prints "Hello World" to the console
 */

console.log('Hello World!');
console.log('Welcome to NovaSphere - The Future of Personal Computing');

// Additional examples
const greeting = 'Hello';
const target = 'World';
console.log(`${greeting}, ${target}!`);

// Function-based hello world
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

console.log(sayHello());
console.log(sayHello('NovaSphere'));
