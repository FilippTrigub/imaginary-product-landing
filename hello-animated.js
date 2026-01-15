// Animated hello world with typing effect
document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        font-family: 'Courier New', monospace;
        font-size: 1.2em;
        z-index: 9999;
        border-left: 4px solid #667eea;
    `;
    
    const text = 'Hello World! 💻';
    let index = 0;
    
    document.body.appendChild(container);
    
    // Typing effect
    const typeWriter = () => {
        if (index < text.length) {
            container.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            // Add blinking cursor
            const cursor = document.createElement('span');
            cursor.textContent = '|';
            cursor.style.animation = 'blink 1s infinite';
            container.appendChild(cursor);
            
            // Add CSS animation for cursor
            const style = document.createElement('style');
            style.textContent = `
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    };
    
    typeWriter();
});
