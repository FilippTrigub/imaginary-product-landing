#!/usr/bin/env node
/**
 * CommonJS Hello World (.cjs)
 * Demonstrating traditional Node.js module syntax
 */

// Simple console.log
console.log('Hello, World!');

// Using variables
const greeting = 'Hello';
const target = 'World';
console.log(greeting + ', ' + target + '!');

// Function expression
function greet(name) {
    name = name || 'World';
    return 'Hello, ' + name + '!';
}

console.log(greet());
console.log(greet('CommonJS'));

// Constructor function (traditional OOP)
function Greeter(message) {
    this.message = message || 'Hello, World!';
}

Greeter.prototype.greet = function() {
    return this.message;
};

Greeter.createDefault = function() {
    return new Greeter();
};

const greeter = Greeter.createDefault();
console.log(greeter.greet());

// Array iteration
const names = ['World', 'Node.js', 'Universe'];
names.forEach(function(name) {
    console.log('Hello, ' + name + '!');
});

// Using map
const messages = names.map(function(name) {
    return { greeting: 'Hello', name: name };
});

messages.forEach(function(msg) {
    console.log(msg.greeting + ', ' + msg.name + '!');
});

// Callback pattern
function asyncGreet(name, callback) {
    name = name || 'World';
    setTimeout(function() {
        callback(null, 'Hello, ' + name + '!');
    }, 0);
}

asyncGreet('Async World', function(err, result) {
    if (!err) {
        console.log(result);
    }
});

// Module exports (CommonJS style)
module.exports = {
    greet: greet,
    Greeter: Greeter,
    asyncGreet: asyncGreet
};

// Alternative export syntax
exports.sayHello = function() {
    console.log('Hello, World! (exports)');
};
