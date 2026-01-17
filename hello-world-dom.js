// Hello World DOM manipulation examples

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    
    // Create and append element
    const createHelloElement = () => {
        const div = document.createElement('div');
        div.textContent = 'Hello, World!';
        div.style.cssText = 'font-size: 24px; color: #667eea; padding: 20px;';
        document.body.appendChild(div);
    };
    
    // Update existing element
    const updateElement = (selector, text) => {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    };
    
    // Create interactive button
    const createButton = () => {
        const button = document.createElement('button');
        button.textContent = 'Say Hello';
        button.style.cssText = 'padding: 10px 20px; font-size: 16px; cursor: pointer;';
        button.addEventListener('click', () => {
            alert('Hello, World!');
        });
        document.body.appendChild(button);
    };
    
    // Create animated element
    const createAnimatedHello = () => {
        const div = document.createElement('div');
        div.textContent = 'Hello, Animated World!';
        div.style.cssText = `
            font-size: 32px;
            color: #764ba2;
            padding: 20px;
            opacity: 0;
            transition: opacity 1s ease-in;
        `;
        document.body.appendChild(div);
        
        // Trigger animation
        setTimeout(() => {
            div.style.opacity = '1';
        }, 100);
    };
    
    // Create list of greetings
    const createGreetingList = () => {
        const greetings = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Hallo'];
        const ul = document.createElement('ul');
        ul.style.cssText = 'list-style: none; padding: 20px;';
        
        greetings.forEach(greeting => {
            const li = document.createElement('li');
            li.textContent = `${greeting}, World!`;
            li.style.cssText = 'padding: 5px; font-size: 18px;';
            ul.appendChild(li);
        });
        
        document.body.appendChild(ul);
    };
    
    // Example usage
    console.log('DOM Hello World scripts loaded!');
    
    // Uncomment to run examples:
    // createHelloElement();
    // createButton();
    // createAnimatedHello();
    // createGreetingList();
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createHelloElement,
        createButton,
        createAnimatedHello,
        createGreetingList
    };
}
