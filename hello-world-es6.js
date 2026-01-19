// Modern ES6+ Hello World examples

// Arrow function
const hello = () => 'Hello, World!';
console.log(hello());

// Destructuring
const greeting = { message: 'Hello', target: 'World' };
const { message, target } = greeting;
console.log(`${message}, ${target}!`);

// Spread operator
const words = ['Hello', 'World'];
console.log(...words);

// Default parameters
const greet = (name = 'World', greeting = 'Hello') => `${greeting}, ${name}!`;
console.log(greet());
console.log(greet('JavaScript'));

// Template literals with expressions
const name = 'World';
console.log(`Hello, ${name.toUpperCase()}!`);

// Array methods
['Hello', 'World'].forEach(word => console.log(word));

// Map and join
const helloWorld = ['Hello', 'World']
    .map(word => word.toUpperCase())
    .join(', ');
console.log(helloWorld + '!');

// Promise-based
const promiseHello = new Promise((resolve) => {
    resolve('Hello, World from Promise!');
});

promiseHello.then(msg => console.log(msg));

// Async/await
const asyncGreet = async () => {
    const message = await Promise.resolve('Hello, World from async/await!');
    console.log(message);
};

asyncGreet();

// Class with static method
class HelloWorld {
    static greet() {
        return 'Hello, World from static method!';
    }
    
    constructor(name = 'World') {
        this.name = name;
    }
    
    sayHello() {
        return `Hello, ${this.name}!`;
    }
}

console.log(HelloWorld.greet());
const hw = new HelloWorld('ES6');
console.log(hw.sayHello());

export { hello, greet, HelloWorld };
