// Simple Hello World in JavaScript
console.log('Hello, World!');

// Hello World with a function
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

console.log(sayHello());
console.log(sayHello('NovaSphere'));

// Hello World as a class
class Greeter {
    constructor(greeting = 'Hello') {
        this.greeting = greeting;
    }
    
    greet(name = 'World') {
        return `${this.greeting}, ${name}!`;
    }
}

const greeter = new Greeter();
console.log(greeter.greet());
console.log(greeter.greet('Developer'));

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sayHello, Greeter };
}
