// Hello World DOM manipulation examples

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    
    // Create and append element
    const createHelloElement = () => {
        const div = document.createElement('div');
        div.textContent = 'Hello, World!';
        div.style.cssText = `
            font-size: 2rem;
            color: #667eea;
            text-align: center;
            margin: 2rem;
            font-family: Arial, sans-serif;
        `;
        document.body.appendChild(div);
    };
    
    // Create interactive button
    const createButton = () => {
        const button = document.createElement('button');
        button.textContent = 'Say Hello';
        button.style.cssText = `
            padding: 1rem 2rem;
            font-size: 1rem;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: block;
            margin: 0 auto;
        `;
        
        button.addEventListener('click', () => {
            alert('Hello, World!');
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.background = '#764ba2';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.background = '#667eea';
        });
        
        document.body.appendChild(button);
    };
    
    // Create animated text
    const createAnimatedText = () => {
        const text = document.createElement('p');
        text.textContent = 'Hello, Animated World!';
        text.style.cssText = `
            text-align: center;
            font-size: 1.5rem;
            color: #764ba2;
            opacity: 0;
            transition: opacity 1s ease-in;
            margin: 2rem;
        `;
        
        document.body.appendChild(text);
        
        // Trigger animation
        setTimeout(() => {
            text.style.opacity = '1';
        }, 100);
    };
    
    // Create list of greetings
    const createGreetingsList = () => {
        const greetings = [
            'Hello, World!',
            'Hola, Mundo!',
            'Bonjour, Monde!',
            'Hallo, Welt!',
            'Ciao, Mondo!'
        ];
        
        const ul = document.createElement('ul');
        ul.style.cssText = `
            list-style: none;
            padding: 0;
            text-align: center;
            font-size: 1.2rem;
        `;
        
        greetings.forEach(greeting => {
            const li = document.createElement('li');
            li.textContent = greeting;
            li.style.margin = '0.5rem';
            ul.appendChild(li);
        });
        
        document.body.appendChild(ul);
    };
    
    // Initialize all examples
    createHelloElement();
    createButton();
    createAnimatedText();
    createGreetingsList();
    
    console.log('Hello, World from DOM script!');
});
