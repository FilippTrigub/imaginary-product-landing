#!/usr/bin/env node

/**
 * Hello World Script for Node.js
 * NovaSphere Project
 */

// Simple console log
console.log("Hello World!");

// Styled console output
console.log("\x1b[36m%s\x1b[0m", "╔═══════════════════════════════════════╗");
console.log("\x1b[36m%s\x1b[0m", "║                                       ║");
console.log("\x1b[36m%s\x1b[0m", "║         HELLO WORLD!                  ║");
console.log("\x1b[36m%s\x1b[0m", "║         NovaSphere Project            ║");
console.log("\x1b[36m%s\x1b[0m", "║                                       ║");
console.log("\x1b[36m%s\x1b[0m", "╚═══════════════════════════════════════╝");

// Function to greet
function greet(name = "World") {
    return `Hello ${name}!`;
}

// Class-based greeting
class Greeter {
    constructor(name = "World") {
        this.name = name;
    }
    
    greet() {
        return `Hello ${this.name}!`;
    }
    
    shout() {
        return `HELLO ${this.name.toUpperCase()}!`;
    }
}

// Arrow function
const sayHello = (name = "World") => `Hello ${name}!`;

// Async hello world
async function asyncHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World (async)!");
        }, 100);
    });
}

// Main execution
(async () => {
    console.log("\n=== Different Hello World Implementations ===");
    console.log("Function:", greet("Developer"));
    console.log("Arrow Function:", sayHello("NovaSphere"));
    
    const greeter = new Greeter("Node.js");
    console.log("Class Method:", greeter.greet());
    console.log("Class Shout:", greeter.shout());
    
    const asyncMessage = await asyncHello();
    console.log("Async:", asyncMessage);
    
    // Multiple languages
    const greetings = {
        "English": "Hello World!",
        "Spanish": "¡Hola Mundo!",
        "French": "Bonjour le Monde!",
        "German": "Hallo Welt!",
        "Italian": "Ciao Mondo!",
        "Japanese": "こんにちは世界!",
        "Chinese": "你好世界!",
        "Russian": "Привет мир!"
    };
    
    console.log("\n=== Hello World in Multiple Languages ===");
    Object.entries(greetings).forEach(([lang, greeting]) => {
        console.log(`${lang.padEnd(12)} : ${greeting}`);
    });
    
    // Environment info
    console.log("\n=== Environment Info ===");
    console.log(`Node Version: ${process.version}`);
    console.log(`Platform: ${process.platform}`);
    console.log(`Current Time: ${new Date().toISOString()}`);
})();

// Export for module usage
module.exports = {
    greet,
    Greeter,
    sayHello,
    asyncHello
};
