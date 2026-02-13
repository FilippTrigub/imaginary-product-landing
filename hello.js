// Hello World in JavaScript

console.log("Hello, World!");

// Additional variations
console.log();
console.log("Welcome to the wonderful world of JavaScript!");
console.log("This is a simple Hello World script.");

// Function to print Hello World
function sayHello(name = "World") {
    return `Hello, ${name}!`;
}

console.log();
console.log(sayHello());
console.log(sayHello("JavaScript"));

// Array of greetings
const greetings = [
    "Hello, World!",
    "¡Hola, Mundo!",
    "Bonjour, le Monde!",
    "Hallo, Welt!",
    "Ciao, Mondo!",
    "こんにちは, 世界!"
];

console.log();
console.log("Hello, World in different languages:");
greetings.forEach(greeting => {
    console.log("- " + greeting);
});