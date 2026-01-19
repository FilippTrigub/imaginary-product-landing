// Hello World - DOM manipulation
document.addEventListener('DOMContentLoaded', () => {
    const helloDiv = document.createElement('div');
    helloDiv.textContent = 'Hello, World!';
    helloDiv.style.cssText = 'font-size: 2rem; text-align: center; margin-top: 50px; color: #333;';
    document.body.appendChild(helloDiv);
});
