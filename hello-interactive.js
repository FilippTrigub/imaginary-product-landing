// Interactive hello world with button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Click me to say Hello! 👆';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-size: 1.1em;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        z-index: 9999;
    `;
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateX(-50%) translateY(-3px)';
        button.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.6)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateX(-50%) translateY(0)';
        button.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
    });
    
    button.addEventListener('click', () => {
        const message = document.createElement('div');
        message.textContent = '🎉 Hello World! 🎉';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            background: white;
            color: #667eea;
            padding: 30px 50px;
            border-radius: 15px;
            font-size: 2em;
            font-weight: 700;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: popIn 0.5s ease forwards;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes popIn {
                0% { transform: translate(-50%, -50%) scale(0); }
                50% { transform: translate(-50%, -50%) scale(1.1); }
                100% { transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.transition = 'opacity 0.5s ease';
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 500);
        }, 2000);
    });
    
    document.body.appendChild(button);
});
