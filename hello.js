// Hello World in JavaScript
console.log('Hello World!');

// Hello World with DOM manipulation
function displayHelloWorld() {
    const message = document.createElement('div');
    message.textContent = 'Hello World!';
    message.style.cssText = 'font-size: 2em; text-align: center; padding: 20px; color: #667eea;';
    document.body.appendChild(message);
}

// Hello World as an alert
function alertHelloWorld() {
    alert('Hello World!');
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { displayHelloWorld, alertHelloWorld };
}
