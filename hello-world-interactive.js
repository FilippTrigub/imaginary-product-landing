// Interactive Hello World Script for NovaSphere

class HelloWorld {
    constructor() {
        this.greetings = [
            { lang: 'English', text: 'Hello World!' },
            { lang: 'Spanish', text: '¡Hola Mundo!' },
            { lang: 'French', text: 'Bonjour le Monde!' },
            { lang: 'German', text: 'Hallo Welt!' },
            { lang: 'Italian', text: 'Ciao Mondo!' },
            { lang: 'Portuguese', text: 'Olá Mundo!' },
            { lang: 'Russian', text: 'Привет мир!' },
            { lang: 'Japanese', text: 'こんにちは世界！' },
            { lang: 'Chinese', text: '你好世界！' },
            { lang: 'Korean', text: '안녕하세요 세계!' },
            { lang: 'Arabic', text: 'مرحبا بالعالم!' },
            { lang: 'Hindi', text: 'नमस्ते दुनिया!' }
        ];
        this.currentIndex = 0;
    }

    // Get greeting by language
    getGreeting(language) {
        const greeting = this.greetings.find(g => 
            g.lang.toLowerCase() === language.toLowerCase()
        );
        return greeting ? greeting.text : 'Hello World!';
    }

    // Get random greeting
    getRandomGreeting() {
        const randomIndex = Math.floor(Math.random() * this.greetings.length);
        return this.greetings[randomIndex];
    }

    // Get next greeting
    getNextGreeting() {
        this.currentIndex = (this.currentIndex + 1) % this.greetings.length;
        return this.greetings[this.currentIndex];
    }

    // Display all greetings
    displayAll() {
        console.log('=== Hello World in Multiple Languages ===');
        this.greetings.forEach(({ lang, text }) => {
            console.log(`${lang.padEnd(15)} : ${text}`);
        });
    }

    // Animated console output
    async animatedGreeting(delay = 100) {
        const text = 'Hello World!';
        let output = '';
        
        for (let char of text) {
            output += char;
            console.clear();
            console.log(output);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    // Create DOM element with greeting
    createGreetingElement(language = 'English') {
        if (typeof document === 'undefined') {
            console.log('DOM not available');
            return null;
        }

        const greeting = this.getGreeting(language);
        const element = document.createElement('div');
        element.className = 'hello-world-greeting';
        element.innerHTML = `
            <h2>${greeting}</h2>
            <p>Language: ${language}</p>
        `;
        element.style.cssText = `
            padding: 20px;
            margin: 10px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 10px;
            text-align: center;
            font-family: 'Montserrat', Arial, sans-serif;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;
        
        return element;
    }

    // Cycle through greetings with animation
    startCycle(elementId, interval = 2000) {
        if (typeof document === 'undefined') {
            console.log('DOM not available');
            return;
        }

        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Element with id '${elementId}' not found`);
            return;
        }

        setInterval(() => {
            const { lang, text } = this.getNextGreeting();
            element.textContent = text;
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'fadeIn 0.5s ease-in';
            }, 10);
        }, interval);
    }
}

// Create instance
const helloWorld = new HelloWorld();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HelloWorld;
}

// Auto-run demos
console.log('=== Hello World Script Loaded ===');
console.log(helloWorld.getGreeting('English'));
console.log(helloWorld.getRandomGreeting().text);
console.log('\nDisplaying all greetings:');
helloWorld.displayAll();

// DOM ready handler
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('Hello World - DOM Ready! 🚀');
        
        // Add greeting to body if no specific container exists
        const greetingElement = helloWorld.createGreetingElement('English');
        if (greetingElement && !document.getElementById('hello-world-container')) {
            document.body.appendChild(greetingElement);
        }
    });
}
