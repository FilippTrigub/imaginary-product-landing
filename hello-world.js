// Simple Hello World in JavaScript
console.log('Hello World!');

// Hello World with styling
console.log('%cHello World!', 'color: #667eea; font-size: 24px; font-weight: bold;');

// Hello World function
function sayHello(name = 'World') {
    return `Hello ${name}!`;
}

console.log(sayHello());
console.log(sayHello('NovaSphere'));

// Hello World as DOM manipulation
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const helloDiv = document.createElement('div');
        helloDiv.innerHTML = '<h1 style="text-align: center; color: #667eea; padding: 20px;">Hello World from JavaScript!</h1>';
        document.body.insertBefore(helloDiv, document.body.firstChild);
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sayHello };
}
