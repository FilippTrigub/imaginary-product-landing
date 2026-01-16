// Hello World - JavaScript Console Version
console.log('Hello World!');

// Hello World - DOM Manipulation Version
document.addEventListener('DOMContentLoaded', () => {
    const helloDiv = document.createElement('div');
    helloDiv.textContent = 'Hello World!';
    helloDiv.style.cssText = `
        font-size: 2em;
        font-weight: bold;
        color: #667eea;
        text-align: center;
        padding: 20px;
        margin: 20px auto;
        max-width: 600px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    `;
    document.body.appendChild(helloDiv);
});
