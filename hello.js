// Hello World in JavaScript
console.log("Hello World!");

// Hello World with DOM manipulation (browser only)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const helloDiv = document.createElement('div');
        helloDiv.innerHTML = '<h1>Hello World!</h1>';
        helloDiv.style.textAlign = 'center';
        helloDiv.style.padding = '50px';
        helloDiv.style.fontSize = '2em';
        helloDiv.style.color = '#667eea';
        document.body.appendChild(helloDiv);
    });
}

// Hello World function
function sayHello(name = "World") {
    return `Hello ${name}!`;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sayHello };
}
