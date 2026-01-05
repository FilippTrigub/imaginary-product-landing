#!/usr/bin/env node

// Hello World in Node.js
console.log("Hello World!");

// With colors (using ANSI escape codes)
console.log("\x1b[36m%s\x1b[0m", "Hello World in Cyan!");
console.log("\x1b[35m%s\x1b[0m", "Hello World in Magenta!");

// Multiple languages
const greetings = {
    english: "Hello World!",
    spanish: "¡Hola Mundo!",
    french: "Bonjour le Monde!",
    german: "Hallo Welt!",
    italian: "Ciao Mondo!",
    japanese: "こんにちは世界！",
    chinese: "你好世界！",
    russian: "Привет мир!"
};

console.log("\n=== Greetings in Multiple Languages ===");
for (const [language, greeting] of Object.entries(greetings)) {
    console.log(`${language.charAt(0).toUpperCase() + language.slice(1)}: ${greeting}`);
}

// ASCII Art
console.log("\n");
console.log("  _   _      _ _        __        __         _     _ _ ");
console.log(" | | | | ___| | | ___   \\ \\      / /__  _ __| | __| | |");
console.log(" | |_| |/ _ \\ | |/ _ \\   \\ \\ /\\ / / _ \\| '__| |/ _` | |");
console.log(" |  _  |  __/ | | (_) |   \\ V  V / (_) | |  | | (_| |_|");
console.log(" |_| |_|\\___|_|_|\\___/     \\_/\\_/ \\___/|_|  |_|\\__,_(_)");
console.log("\n");
