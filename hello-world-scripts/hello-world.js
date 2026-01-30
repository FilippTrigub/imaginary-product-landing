// Hello World in JavaScript
// This script demonstrates a simple hello world program
// that can be run in Node.js environment

// Main function to display hello world message
function displayHelloWorld() {
    const message = "Hello, World!";
    console.log(message);
    return message;
}

// Function to get current time and display with hello world
function displayHelloWorldWithTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.log(`Hello, World! The current time is ${timeString}`);
}

// Function to display hello world in different languages
function displayMultilingualHello() {
    const greetings = {
        english: "Hello, World!",
        spanish: "¡Hola, Mundo!",
        french: "Bonjour, le Monde!",
        german: "Hallo, Welt!",
        japanese: "こんにちは、世界！"
    };
    
    console.log("Multilingual Hello World:");
    for (const [language, greeting] of Object.entries(greetings)) {
        console.log(`${language.charAt(0).toUpperCase() + language.slice(1)}: ${greeting}`);
    }
}

// Main execution
console.log("=== JavaScript Hello World Script ===");
displayHelloWorld();
displayHelloWorldWithTime();
displayMultilingualHello();
console.log("=== Script Complete ===");