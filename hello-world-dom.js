// Hello World with DOM manipulation

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Create and append elements
    const container = document.createElement('div');
    container.id = 'hello-container';
    container.style.cssText = `
        padding: 20px;
        margin: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 10px;
        text-align: center;
        font-family: Arial, sans-serif;
    `;
    
    const heading = document.createElement('h1');
    heading.textContent = 'Hello, World!';
    heading.style.margin = '0 0 10px 0';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is dynamically created with JavaScript';
    
    const button = document.createElement('button');
    button.textContent = 'Click for Alert';
    button.style.cssText = `
        padding: 10px 20px;
        margin-top: 10px;
        background: white;
        color: #667eea;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    `;
    
    button.addEventListener('click', () => {
        alert('Hello, World from event listener!');
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.background = '#f0f0f0';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.background = 'white';
    });
    
    container.appendChild(heading);
    container.appendChild(paragraph);
    container.appendChild(button);
    
    document.body.appendChild(container);
    
    // Console output
    console.log('Hello, World from DOM script!');
});

// Alternative: Using innerHTML
function createHelloWorldWithInnerHTML() {
    const div = document.createElement('div');
    div.innerHTML = `
        <div style="padding: 20px; background: #4CAF50; color: white; margin: 20px; border-radius: 5px;">
            <h2>Hello, World!</h2>
            <p>Created with innerHTML</p>
        </div>
    `;
    document.body.appendChild(div);
}

// Export for use in other scripts
if (typeof window !== 'undefined') {
    window.createHelloWorldWithInnerHTML = createHelloWorldWithInnerHTML;
}
