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

    // Animated counter for hero stats
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let counter = start;
        
        const timer = setInterval(() => {
            counter += increment;
            if (counter >= target) {
                const randomDigit = Math.floor(Math.random() * 10);
                const displayValue = target.toLocaleString() + randomDigit;
                element.textContent = displayValue + (element.parentElement.querySelector('.stat-label').textContent.includes('Rate') ? '%' : '+');
                clearInterval(timer);
            } else {
                const currentInt = Math.floor(counter);
                const randomDigit = Math.floor(Math.random() * 10);
                const displayValue = currentInt.toLocaleString() + randomDigit;
                element.textContent = displayValue + (element.parentElement.querySelector('.stat-label').textContent.includes('Rate') ? '%' : '+');
            }
        }, 16);
    };

    // Trigger counter animation when hero is visible
    const heroStats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    const checkHeroStats = () => {
        if (!statsAnimated && heroStats.length > 0) {
            const firstStat = heroStats[0];
            const statPosition = firstStat.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (statPosition < screenPosition) {
                statsAnimated = true;
                heroStats.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
            }
        }
    };
    
    checkHeroStats();
    window.addEventListener('scroll', checkHeroStats);

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

    // Enhanced animation for cards on scroll
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
        cards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    // Call once on load and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Video placeholder click handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            alert('Demo video would play here! 🎥\n\nIn a production environment, this would open a video player or modal with the product demo.');
        });
        videoPlaceholder.style.cursor = 'pointer';
    }

    // Add parallax effect to hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroImage = hero.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
    });

    // Add tilt effect to feature cards
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
});