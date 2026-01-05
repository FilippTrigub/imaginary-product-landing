// Hello World in JavaScript
console.log("Hello World!");

// DOM manipulation version
document.addEventListener('DOMContentLoaded', () => {
    const helloDiv = document.createElement('div');
    helloDiv.innerHTML = '<h1>Hello World!</h1>';
    helloDiv.style.textAlign = 'center';
    helloDiv.style.padding = '50px';
    helloDiv.style.fontSize = '2em';
    helloDiv.style.color = '#667eea';
    document.body.appendChild(helloDiv);
});
