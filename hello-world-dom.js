/**
 * Hello World script for DOM manipulation
 * Creates and appends a hello world message to the document body
 */

document.addEventListener('DOMContentLoaded', () => {
    const helloDiv = document.createElement('div');
    helloDiv.style.cssText = `
        padding: 20px;
        margin: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-family: Arial, sans-serif;
        font-size: 24px;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    helloDiv.innerHTML = '<h1>Hello, World!</h1>';
    document.body.appendChild(helloDiv);
});
