// Hello World - DOM Manipulation
document.addEventListener('DOMContentLoaded', () => {
    // Create a new div element
    const helloDiv = document.createElement('div');
    helloDiv.textContent = 'Hello World!';
    helloDiv.style.cssText = `
        font-size: 48px;
        color: #333;
        text-align: center;
        margin-top: 50px;
        font-family: Arial, sans-serif;
    `;
    
    // Append to body
    document.body.appendChild(helloDiv);
    
    // Add animation
    setTimeout(() => {
        helloDiv.style.transition = 'all 1s ease';
        helloDiv.style.color = '#007bff';
        helloDiv.style.transform = 'scale(1.2)';
    }, 500);
});
