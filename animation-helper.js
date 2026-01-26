/**
 * Animation Helper - Utility functions for animations
 */

class AnimationHelper {
    constructor() {
        this.animations = new Map();
    }

    // Fade in animation
    fadeIn(element, duration = 500) {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms ease-in`;
        
        setTimeout(() => {
            element.style.opacity = '1';
        }, 10);
    }

    // Fade out animation
    fadeOut(element, duration = 500) {
        element.style.opacity = '1';
        element.style.transition = `opacity ${duration}ms ease-out`;
        
        setTimeout(() => {
            element.style.opacity = '0';
        }, 10);
    }

    // Slide in from direction
    slideIn(element, direction = 'left', duration = 500) {
        const transforms = {
            left: 'translateX(-100%)',
            right: 'translateX(100%)',
            top: 'translateY(-100%)',
            bottom: 'translateY(100%)'
        };

        element.style.transform = transforms[direction] || transforms.left;
        element.style.transition = `transform ${duration}ms ease-out`;
        
        setTimeout(() => {
            element.style.transform = 'translate(0, 0)';
        }, 10);
    }

    // Bounce animation
    bounce(element, intensity = 20) {
        const originalTransform = element.style.transform;
        let bounces = 0;
        const maxBounces = 3;
        
        const doBounce = () => {
            if (bounces >= maxBounces) {
                element.style.transform = originalTransform;
                return;
            }
            
            const currentIntensity = intensity * (1 - bounces / maxBounces);
            element.style.transform = `translateY(-${currentIntensity}px)`;
            
            setTimeout(() => {
                element.style.transform = originalTransform;
                bounces++;
                setTimeout(doBounce, 100);
            }, 100);
        };
        
        doBounce();
    }

    // Pulse animation
    pulse(element, scale = 1.1, duration = 300) {
        const originalTransform = element.style.transform;
        element.style.transition = `transform ${duration}ms ease-in-out`;
        element.style.transform = `scale(${scale})`;
        
        setTimeout(() => {
            element.style.transform = originalTransform;
        }, duration);
    }

    // Rotate animation
    rotate(element, degrees = 360, duration = 500) {
        element.style.transition = `transform ${duration}ms ease-in-out`;
        element.style.transform = `rotate(${degrees}deg)`;
        
        setTimeout(() => {
            element.style.transform = 'rotate(0deg)';
        }, duration);
    }

    // Shake animation
    shake(element, intensity = 10) {
        const originalTransform = element.style.transform;
        let shakes = 0;
        const maxShakes = 6;
        
        const doShake = () => {
            if (shakes >= maxShakes) {
                element.style.transform = originalTransform;
                return;
            }
            
            const direction = shakes % 2 === 0 ? 1 : -1;
            element.style.transform = `translateX(${direction * intensity}px)`;
            shakes++;
            
            setTimeout(doShake, 50);
        };
        
        doShake();
    }

    // Typewriter effect
    typewriter(element, text, speed = 50) {
        element.textContent = '';
        let index = 0;
        
        const type = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        };
        
        type();
    }
}

// Export for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationHelper;
} else {
    window.AnimationHelper = AnimationHelper;
}
