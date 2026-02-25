document.addEventListener('DOMContentLoaded', () => {
    // Check for environment variables FOOBAR or NEXT_PUBLIC_FOOBAR
    const foobarValue = typeof process !== 'undefined' && process.env
        ? process.env.FOOBAR || process.env.NEXT_PUBLIC_FOOBAR
        : null;

    // For client-side, check if injected during build
    const nextPublicFoobar = '__NEXT_PUBLIC_FOOBAR__';
    const envVarValue = foobarValue || (nextPublicFoobar !== '__NEXT_PUBLIC_FOOBAR__' ? nextPublicFoobar : null);

    // Show banner if environment variable is set
    if (envVarValue) {
        const banner = document.createElement('div');
        banner.className = 'env-banner';
        banner.innerHTML = `
            <div class="container">
                <span>⚙️ Environment Variable Detected: ${envVarValue}</span>
            </div>
        `;
        document.body.insertBefore(banner, document.body.firstChild);

        // Adjust header position if banner is shown
        const header = document.querySelector('header');
        if (header) {
            header.style.top = banner.offsetHeight + 'px';
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

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} shortly.`);

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

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
