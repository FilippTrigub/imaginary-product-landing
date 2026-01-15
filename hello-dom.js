// DOM manipulation hello world
document.addEventListener('DOMContentLoaded', () => {
    const helloDiv = document.createElement('div');
    helloDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 40px 60px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        font-family: 'Montserrat', sans-serif;
        font-size: 2em;
        font-weight: 700;
        text-align: center;
        z-index: 9999;
    `;
    helloDiv.innerHTML = 'Hello World! 👋';
    document.body.appendChild(helloDiv);
    
    // Fade out after 3 seconds
    setTimeout(() => {
        helloDiv.style.transition = 'opacity 1s ease';
        helloDiv.style.opacity = '0';
        setTimeout(() => helloDiv.remove(), 1000);
    }, 3000);
});
