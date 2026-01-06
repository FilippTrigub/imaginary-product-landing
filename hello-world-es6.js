// Modern ES6+ Hello World examples

// Arrow functions
const hello = () => 'Hello, World!';
console.log(hello());

// Template literals
const name = 'World';
console.log(`Hello, ${name}!`);

// Destructuring
const greeting = { message: 'Hello', target: 'World' };
const { message, target } = greeting;
console.log(`${message}, ${target}!`);

// Spread operator
const words = ['Hello', 'World'];
console.log(...words);

// Default parameters
const greet = (greeting = 'Hello', name = 'World') => `${greeting}, ${name}!`;
console.log(greet());
console.log(greet('Hi', 'JavaScript'));

// Promises
const promiseHello = new Promise((resolve) => {
    resolve('Hello, World from Promise!');
});

promiseHello.then(msg => console.log(msg));

// Async/Await
const asyncGreet = async () => {
    const message = await Promise.resolve('Hello, World from async/await!');
    console.log(message);
};

asyncGreet();

// Classes with modern syntax
class ModernGreeter {
    #privateGreeting = 'Hello'; // Private field
    
    constructor(name = 'World') {
        this.name = name;
    }
    
    greet() {
        return `${this.#privateGreeting}, ${this.name}!`;
    }
    
    // Static method
    static createGreeter(name) {
        return new ModernGreeter(name);
    }
}

const greeter = ModernGreeter.createGreeter('ES6+');
console.log(greeter.greet());

// Array methods
const greetings = ['Hello', 'Hi', 'Hey'];
greetings.forEach(g => console.log(`${g}, World!`));

// Map and filter
const names = ['Alice', 'Bob', 'Charlie'];
const personalGreetings = names.map(name => `Hello, ${name}!`);
console.log(personalGreetings.join(' | '));

// Optional chaining and nullish coalescing
const config = { greeting: { message: 'Hello' } };
console.log(`${config?.greeting?.message ?? 'Hi'}, World!`);

export { hello, greet, ModernGreeter };
