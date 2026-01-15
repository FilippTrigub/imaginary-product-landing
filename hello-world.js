// Simple Hello World in JavaScript
console.log('Hello World!');

// Hello World with function
function sayHello() {
    return 'Hello World!';
}

console.log(sayHello());

// Hello World with arrow function
const greet = () => 'Hello World!';
console.log(greet());

// Hello World with DOM manipulation
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const helloDiv = document.createElement('div');
        helloDiv.textContent = 'Hello World!';
        helloDiv.style.cssText = 'font-size: 2em; text-align: center; padding: 20px; color: #667eea;';
        document.body.appendChild(helloDiv);
    });
}

// Hello World with alert
function alertHello() {
    alert('Hello World!');
}

// Hello World with multiple languages
const greetings = {
    english: 'Hello World!',
    spanish: '¡Hola Mundo!',
    french: 'Bonjour le Monde!',
    german: 'Hallo Welt!',
    japanese: 'こんにちは世界！',
    chinese: '你好世界！'
};

Object.entries(greetings).forEach(([lang, greeting]) => {
    console.log(`${lang}: ${greeting}`);
});
