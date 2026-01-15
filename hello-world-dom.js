// Hello World - DOM Manipulation Script
// This script can be included in an HTML page

document.addEventListener('DOMContentLoaded', () => {
    // Method 1: Create and append element
    const helloDiv = document.createElement('div');
    helloDiv.textContent = 'Hello World!';
    helloDiv.style.cssText = `
        font-size: 2em;
        color: #667eea;
        text-align: center;
        margin: 20px;
        padding: 20px;
        background: #f0f0f0;
        border-radius: 10px;
    `;
    document.body.appendChild(helloDiv);
    
    // Method 2: Using innerHTML
    const container = document.createElement('div');
    container.innerHTML = '<h2>Hello World from innerHTML!</h2>';
    container.style.textAlign = 'center';
    document.body.appendChild(container);
    
    // Method 3: Using template literals
    const template = `
        <div style="text-align: center; margin: 20px;">
            <p style="font-size: 1.5em; color: #764ba2;">
                Hello World from Template Literals!
            </p>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', template);
    
    // Console output
    console.log('Hello World - DOM script loaded successfully!');
});
