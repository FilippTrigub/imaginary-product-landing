/**
 * ES6 Module Hello World
 * Demonstrates modern JavaScript module patterns
 */

// Export a simple greeting function
export function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

// Export a class-based greeter
export class Greeter {
    constructor(name = 'World') {
        this.name = name;
    }
    
    greet() {
        return `Hello, ${this.name}!`;
    }
    
    greetFormal() {
        return `Good day, ${this.name}. Welcome to NovaSphere.`;
    }
    
    greetCasual() {
        return `Hey ${this.name}! 👋`;
    }
}

// Export an object with multiple greeting methods
export const greetings = {
    english: 'Hello World',
    spanish: 'Hola Mundo',
    french: 'Bonjour le Monde',
    german: 'Hallo Welt',
    italian: 'Ciao Mondo',
    japanese: 'こんにちは世界',
    chinese: '你好世界',
    russian: 'Привет мир',
    arabic: 'مرحبا بالعالم',
    hindi: 'नमस्ते दुनिया'
};

// Export a default greeting function
export default function helloWorld() {
    console.log('Hello World!');
    console.log('Welcome to NovaSphere - The Future of Personal Computing');
    return 'Hello World!';
}

// Example usage (when imported):
// import helloWorld, { sayHello, Greeter, greetings } from './hello-world-module.js';
// 
// helloWorld();
// console.log(sayHello('NovaSphere'));
// 
// const greeter = new Greeter('User');
// console.log(greeter.greet());
// 
// console.log(greetings.spanish);
