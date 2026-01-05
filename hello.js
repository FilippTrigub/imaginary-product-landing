// Hello World JavaScript File
// NovaSphere Project

console.log('Hello World!');
console.log('Welcome to NovaSphere - The Future of Personal Computing');

// Simple Hello World function
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

// Display greeting
const greeting = sayHello();
console.log(greeting);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sayHello };
}
