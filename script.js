document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Show success message (in a real app, this would send data to a server)
            alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} shortly.`);
            
            // Reset form
            this.reset();
        });
    }

    // Simple animation for feature cards on scroll
    const animateOnScroll = () => {
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });

        // Animate ASCII art elements on scroll
        const asciiElements = document.querySelectorAll('.ascii-art');
        asciiElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });

    // Set initial state for ASCII art animations
    document.querySelectorAll('.ascii-art').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.95)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Call once on load and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // ASCII Art Typewriter Effect for Logo
    const asciiLogo = document.getElementById('ascii-logo');
    if (asciiLogo) {
        const originalText = asciiLogo.textContent;
        asciiLogo.textContent = '';
        asciiLogo.style.opacity = '1';
        asciiLogo.style.transform = 'scale(1)';
        
        let charIndex = 0;
        const typeSpeed = 5; // milliseconds per character
        
        function typeWriter() {
            if (charIndex < originalText.length) {
                asciiLogo.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typeSpeed);
            }
        }
        
        // Start typewriter effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // ASCII Art Color Cycling Effect
    const asciiIcons = document.querySelectorAll('.ascii-icon');
    const colors = [
        '#a777e3',
        '#6e8efb',
        '#00d4ff',
        '#00ff88',
        '#fbbf24',
        '#c084fc'
    ];
    
    let colorIndex = 0;
    setInterval(() => {
        asciiIcons.forEach((icon, index) => {
            const currentColorIndex = (colorIndex + index) % colors.length;
            icon.style.color = colors[currentColorIndex];
        });
        colorIndex = (colorIndex + 1) % colors.length;
    }, 3000);

    // ASCII Art Pulse Effect on Hover
    document.querySelectorAll('.ascii-art').forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // ASCII Divider Animation
    const asciiDivider = document.querySelector('.ascii-divider .ascii-art');
    if (asciiDivider) {
        asciiDivider.style.opacity = '1';
        asciiDivider.style.transform = 'scale(1)';
    }

    // Random ASCII Character Rain Effect (subtle background effect)
    function createAsciiRain() {
        const rainContainer = document.createElement('div');
        rainContainer.style.position = 'fixed';
        rainContainer.style.top = '0';
        rainContainer.style.left = '0';
        rainContainer.style.width = '100%';
        rainContainer.style.height = '100%';
        rainContainer.style.pointerEvents = 'none';
        rainContainer.style.zIndex = '1';
        rainContainer.style.opacity = '0.05';
        rainContainer.id = 'ascii-rain';
        
        const asciiChars = ['╔', '╗', '╚', '╝', '║', '═', '▓', '▒', '░', '◆', '◇', '⚡', '✦'];
        
        for (let i = 0; i < 20; i++) {
            const char = document.createElement('div');
            char.textContent = asciiChars[Math.floor(Math.random() * asciiChars.length)];
            char.style.position = 'absolute';
            char.style.left = Math.random() * 100 + '%';
            char.style.top = Math.random() * 100 + '%';
            char.style.fontSize = (Math.random() * 20 + 10) + 'px';
            char.style.fontFamily = 'Fira Code, monospace';
            char.style.color = '#667eea';
            char.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
            rainContainer.appendChild(char);
        }
        
        // Only add rain effect on index page
        if (document.querySelector('.hero-ascii')) {
            document.body.appendChild(rainContainer);
        }
    }
    
    createAsciiRain();

    // ASCII Architecture Animation
    const asciiArchitecture = document.querySelector('.ascii-architecture');
    if (asciiArchitecture) {
        asciiArchitecture.style.opacity = '1';
        asciiArchitecture.style.transform = 'scale(1)';
        
        // Add subtle pulsing effect
        setInterval(() => {
            asciiArchitecture.style.textShadow = '0 0 15px rgba(96, 165, 250, 0.8)';
            setTimeout(() => {
                asciiArchitecture.style.textShadow = '0 0 10px rgba(96, 165, 250, 0.5)';
            }, 1000);
        }, 2000);
    }
});