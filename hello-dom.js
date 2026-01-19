// DOM manipulation hello world
document.addEventListener('DOMContentLoaded', () => {
    const helloDiv = document.createElement('div');
    helloDiv.style.cssText = `
        font-size: 48px;
        font-weight: bold;
        text-align: center;
        margin-top: 100px;
        color: #333;
        font-family: Arial, sans-serif;
    `;
    helloDiv.textContent = 'Hello, World!';
    document.body.appendChild(helloDiv);
});
