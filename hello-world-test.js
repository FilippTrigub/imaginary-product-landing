#!/usr/bin/env node

/**
 * Hello World - Test Runner
 * Demonstrates different ways to output Hello World
 */

console.log('='.repeat(60));
console.log('HELLO WORLD - Multiple Implementations');
console.log('='.repeat(60));
console.log();

// 1. Simple console.log
console.log('1. Simple Output:');
console.log('   Hello, World!');
console.log();

// 2. Template literals
console.log('2. Template Literal:');
const greeting = 'World';
console.log(`   Hello, ${greeting}!`);
console.log();

// 3. Function
console.log('3. Function:');
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}
console.log(`   ${sayHello()}`);
console.log(`   ${sayHello('NovaSphere')}`);
console.log();

// 4. Arrow function
console.log('4. Arrow Function:');
const greet = (name) => `Hello, ${name}!`;
console.log(`   ${greet('Developer')}`);
console.log();

// 5. Class
console.log('5. Class-based:');
class HelloWorld {
    constructor(message = 'Hello, World!') {
        this.message = message;
    }
    
    say() {
        return this.message;
    }
    
    greet(name) {
        return `Hello, ${name}!`;
    }
}

const hello = new HelloWorld();
console.log(`   ${hello.say()}`);
console.log(`   ${hello.greet('User')}`);
console.log();

// 6. Array methods
console.log('6. Array Methods:');
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log(`   Hello, ${name}!`));
console.log();

// 7. Async/Promise
console.log('7. Async/Promise:');
const asyncHello = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, World! (async)');
        }, 100);
    });
};

asyncHello().then(msg => console.log(`   ${msg}`));

// 8. Object
console.log();
console.log('8. Object-based:');
const greeter = {
    greeting: 'Hello',
    target: 'World',
    say() {
        return `${this.greeting}, ${this.target}!`;
    }
};
console.log(`   ${greeter.say()}`);
console.log();

console.log('='.repeat(60));
console.log('All Hello World implementations completed!');
console.log('='.repeat(60));
