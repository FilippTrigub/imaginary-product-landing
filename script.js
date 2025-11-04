document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

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

    // Form submission handling with animation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;

            // Animate button
            submitBtn.textContent = 'Sending...';
            submitBtn.style.transform = 'scale(0.95)';

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simulate sending delay
            setTimeout(() => {
                // Show success message
                submitBtn.textContent = 'Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #4caf50, #45a049)';

                setTimeout(() => {
                    alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} shortly.`);

                    // Reset form and button
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.transform = '';
                }, 500);
            }, 1000);
        });
    }

    // Enhanced scroll animations for all cards
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .pricing-card, .pv-feature');
        elements.forEach((element, index) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    document.querySelectorAll('.feature-card, .pricing-card, .pv-feature').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
    });

    // Call once on load and then on scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');

        if (heroContent && heroImage) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });

    // Add cursor trail effect on pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Typing effect for hero title (optional - uncomment to activate)
    // const heroTitle = document.querySelector('.hero-content h1');
    // if (heroTitle) {
    //     const text = heroTitle.textContent;
    //     heroTitle.textContent = '';
    //     let i = 0;
    //     const typeWriter = () => {
    //         if (i < text.length) {
    //             heroTitle.textContent += text.charAt(i);
    //             i++;
    //             setTimeout(typeWriter, 50);
    //         }
    //     };
    //     typeWriter();
    // }

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    console.log('🎨 NovaSphere v2 - Enhanced with expressive interactions!');
});