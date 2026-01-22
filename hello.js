// Hello World JavaScript file for NovaSphere

console.log('Hello World from NovaSphere!');

// Function to display hello message
function sayHello(name = 'World') {
    return `Hello ${name}! Welcome to NovaSphere.`;
}

// Display hello message in the console
console.log(sayHello());
console.log(sayHello('Developer'));

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sayHello };
}
