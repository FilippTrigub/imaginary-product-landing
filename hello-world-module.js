/**
 * Hello World - ES6 Module
 * A modular approach to Hello World with exportable functions
 */

/**
 * Simple hello world function
 */
export function helloWorld() {
    return 'Hello, World!';
}

/**
 * Greet a specific person
 * @param {string} name - The name to greet
 * @returns {string} The greeting message
 */
export function greet(name) {
    return `Hello, ${name}!`;
}

/**
 * Get a welcome message for NovaSphere
 * @returns {string} Welcome message
 */
export function welcomeMessage() {
    return 'Welcome to NovaSphere - The Future of Personal Computing!';
}

/**
 * Display all greetings
 */
export function displayAllGreetings() {
    console.log(helloWorld());
    console.log(greet('Developer'));
    console.log(greet('User'));
    console.log(welcomeMessage());
    console.log(`Current time: ${new Date().toLocaleString()}`);
}

/**
 * Greeter class for object-oriented approach
 */
export class Greeter {
    constructor(defaultGreeting = 'Hello') {
        this.defaultGreeting = defaultGreeting;
    }
    
    greet(name) {
        return `${this.defaultGreeting}, ${name}!`;
    }
    
    greetMultiple(names) {
        return names.map(name => this.greet(name));
    }
}

// Default export
export default {
    helloWorld,
    greet,
    welcomeMessage,
    displayAllGreetings,
    Greeter
};
