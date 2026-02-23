document.addEventListener('DOMContentLoaded', () => {
    // Check if foobar banner should be shown using the server-rendered HTML
    // A visible banner means NEXT_PUBLIC_FOOBAR was set
    
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

// Toggle banner function for the button (debug purposes)
function toggleBanner() {
    const banner = document.getElementById('foobar-banner');
    if (banner.classList.contains('hidden')) {
        banner.classList.remove('hidden');
        banner.classList.add('visible');
    } else {
        banner.classList.remove('visible');
        banner.classList.add('hidden');
    }
}