// Simple JavaScript Hello World
console.log('Hello, World!');

// Hello World with a function
function sayHello(name = 'World') {
    return `Hello, ${name}!`;
}

console.log(sayHello());
console.log(sayHello('NovaSphere'));

// Hello World in the browser (if running in browser context)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const helloDiv = document.createElement('div');
        helloDiv.textContent = 'Hello, World!';
        helloDiv.style.fontSize = '24px';
        helloDiv.style.fontWeight = 'bold';
        helloDiv.style.textAlign = 'center';
        helloDiv.style.marginTop = '50px';
        document.body.appendChild(helloDiv);
    });
}
