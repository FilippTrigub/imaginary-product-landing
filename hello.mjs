#!/usr/bin/env node
/**
 * ES6 Module Hello World (.mjs)
 * Demonstrating modern JavaScript module syntax
 */

// Simple console.log
console.log('Hello, World!');

// Using template literals
const greeting = 'Hello';
const target = 'World';
console.log(`${greeting}, ${target}!`);

// Arrow function
const greet = (name = 'World') => `Hello, ${name}!`;
console.log(greet());
console.log(greet('ES6 Modules'));

// Class with modern syntax
class Greeter {
    #message; // Private field
    
    constructor(message = 'Hello, World!') {
        this.#message = message;
    }
    
    greet() {
        return this.#message;
    }
    
    static createDefault() {
        return new Greeter();
    }
}

const greeter = Greeter.createDefault();
console.log(greeter.greet());

// Array methods
const names = ['World', 'JavaScript', 'Universe'];
names.forEach(name => console.log(`Hello, ${name}!`));

// Map and destructuring
const messages = names.map(name => ({ greeting: 'Hello', name }));
messages.forEach(({ greeting, name }) => console.log(`${greeting}, ${name}!`));

// Async/await example
const asyncGreet = async (name = 'World') => {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Hello, ${name}!`), 0);
    });
};

await asyncGreet('Async World').then(console.log);

// Optional chaining and nullish coalescing
const config = { greeting: { message: 'Hello, World!' } };
console.log(config?.greeting?.message ?? 'Default Hello');

// Export for use as module
export { greet, Greeter, asyncGreet };
export default () => console.log('Hello, World! (default export)');
