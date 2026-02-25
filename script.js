// Check for environment variable by looking for "FOOBAR" in URL hash or as a global variable
function checkEnvVar() {
    // In a real app, environment variables would be injected in build process
    // For demo purposes, we're checking if window.NEXT_PUBLIC_FOOBAR or window.FOOBAR is set
    return window.NEXT_PUBLIC_FOOBAR || window.FOOBAR || 
           window.location.search.includes('FOOBAR=true') || 
           window.location.hash.includes('FOOBAR=true');
}

// Create the banner element if environment variable is set
function initEnvVarBanner() {
    if (checkEnvVar()) {
        const banner = document.createElement('div');
        banner.id = 'env-var-banner-element';
        banner.innerHTML = `
            <div style="
                position: fixed; 
                top: 0; 
                width: 100%; 
                padding: 10px 0; 
                background-color: #ffcc00; 
                z-index: 2000;
                text-align: center; 
                color: #333;
                font-weight: bold;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                border-bottom: 2px solid #ff9900;">
                NOTICE: Environment variable FOOBAR is set! System in DEMO mode.
            </div>
        `;
        document.body.insertBefore(banner, document.body.firstChild);
        
        // Add the required spacing to the body to prevent content from hiding under the banner
        document.body.style.marginTop = '60px';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the environment variable banner
    initEnvVarBanner();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 140; // Adjust for banner height
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