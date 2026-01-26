/**
 * Animation Tester Script
 * Tests various CSS animations and transitions
 */

class AnimationTester {
    constructor() {
        this.animations = [
            'fadeIn',
            'slideInLeft',
            'slideInRight',
            'bounceIn',
            'zoomIn',
            'rotateIn',
            'flipIn'
        ];
        this.currentIndex = 0;
    }

    // Create test element
    createTestElement() {
        const element = document.createElement('div');
        element.id = 'animation-test-box';
        element.style.cssText = `
            width: 200px;
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 50px auto;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
            font-weight: bold;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `;
        element.textContent = 'Animation Test';
        return element;
    }

    // Apply animation
    applyAnimation(element, animationName) {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = `${animationName} 1s ease-in-out`;
            element.textContent = animationName;
        }, 10);
    }

    // Cycle through animations
    cycleAnimations(element) {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.animations.length;
            this.applyAnimation(element, this.animations[this.currentIndex]);
        }, 2000);
    }

    // Initialize
    init() {
        const testElement = this.createTestElement();
        document.body.appendChild(testElement);
        this.applyAnimation(testElement, this.animations[0]);
        this.cycleAnimations(testElement);
        
        console.log('Animation Tester initialized. Watch the box cycle through animations!');
    }
}

// Dummy animation keyframes (would normally be in CSS)
const animationStyles = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideInLeft {
        from { transform: translateX(-100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes bounceIn {
        0% { transform: scale(0.3); opacity: 0; }
        50% { transform: scale(1.05); }
        70% { transform: scale(0.9); }
        100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes zoomIn {
        from { transform: scale(0); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes rotateIn {
        from { transform: rotate(-200deg); opacity: 0; }
        to { transform: rotate(0); opacity: 1; }
    }
    
    @keyframes flipIn {
        from { transform: perspective(400px) rotateY(90deg); opacity: 0; }
        to { transform: perspective(400px) rotateY(0); opacity: 1; }
    }
`;

console.log('Animation Tester Script Loaded');
console.log('Available animations:', ['fadeIn', 'slideInLeft', 'slideInRight', 'bounceIn', 'zoomIn', 'rotateIn', 'flipIn']);
