// Hello World in JavaScript (Browser)
console.log("Hello, World!");

// You can also use this in a browser
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const message = document.createElement('h1');
        message.textContent = 'Hello, World!';
        document.body.appendChild(message);
    });
}
