document.addEventListener('DOMContentLoaded', () => {
    // Check for environment variable banner display after DOM loads
    // In client-side JavaScript, direct access to environment variables is not available
    // So we'll check for special attributes or meta tags that might be injected server-side
    // For actual server-side usage, you'd inject the variable into the template
    
    // Check for data attributes that could be injected with env var values during SSR/SSG
    const htmlHasEnvVars = document.documentElement.hasAttribute('data-env-foobar-present') || 
                          document.documentElement.hasAttribute('data-env-foobar') ||
                          document.documentElement.hasAttribute('data-env-public-foobar') ||
                          // If env vars are provided via window object in the template
                          (typeof window.NEXT_PUBLIC_FOOBAR !== 'undefined' && window.NEXT_PUBLIC_FOOBAR) ||
                          (typeof window.FOOBAR !== 'undefined' && window.FOOBAR) ||
                          // Or via a global marker set by mock-env.js
                          window.ENV_VARS_PRESENT ||
                          // Check for localStorage item that might have been set (for demo purposes)
                          localStorage.getItem('FOOBAR') ||
                          localStorage.getItem('NEXT_PUBLIC_FOOBAR');
                          
    // Apply banner display if environment variables are detected
    if (htmlHasEnvVars) {
        const envBanner = document.getElementById('envBanner');
        if (envBanner) {
            envBanner.classList.add('show');
        }
    } else {
        // If we need to detect this in a real deployment scenario using the environment variable
        // The env vars are typically set in build-time, so we should check for template-injected variables
        const metaEnvVar = document.querySelector('meta[name*="foobar"]'); // Look for meta tags with foobar in the name
        if (metaEnvVar && (metaEnvVar.content === 'set' || metaEnvVar.content === 'true')) {
            const envBanner = document.getElementById('envBanner');
            if (envBanner) {
                envBanner.classList.add('show');
            }
        }
    }
    
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
    };

    // Set initial state for animation
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });

    // Call once on load and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});