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

    // Form submission handling with front-end validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Clear previous errors
            const showError = (id, msg) => {
                const el = document.getElementById(id);
                if (el) {
                    el.textContent = msg;
                    el.style.display = 'block';
                }
            };
            const hideError = (id) => {
                const el = document.getElementById(id);
                if (el) el.style.display = 'none';
            };

            hideError('error-name');
            hideError('error-email');
            hideError('error-message');

            // Get form data
            const name = document.getElementById('name') ? document.getElementById('name').value.trim() : '';
            const emailEl = document.getElementById('email');
            const email = emailEl ? emailEl.value.trim() : '';
            const message = document.getElementById('message') ? document.getElementById('message').value.trim() : '';

            let hasError = false;
            if (!name) {
                showError('error-name', 'Please enter your name.');
                hasError = true;
            }

            if (!email) {
                showError('error-email', 'Please enter your email address.');
                hasError = true;
            } else {
                // simple email regex
                const emailRe = /^\S+@\S+\.\S+$/;
                if (!emailRe.test(email)) {
                    showError('error-email', 'Please enter a valid email address.');
                    hasError = true;
                }
            }

            if (!message) {
                showError('error-message', 'Please enter a message.');
                hasError = true;
            }

            if (hasError) {
                return;
            }

            // Show success (no network call)
            const successEl = document.getElementById('form-success');
            if (successEl) {
                successEl.style.display = 'block';
                successEl.textContent = `Thank you, ${name}! Your message looks good — this is a demo message.`;
            } else {
                alert(`Thank you, ${name}! Your message looks good.`);
            }

            // Reset form after a short delay
            setTimeout(() => {
                if (contactForm) contactForm.reset();
                if (successEl) successEl.style.display = 'none';
            }, 2500);
        });
    }
    // Mobile menu toggle for pages that include the simple toggle button
    document.querySelectorAll('.mobile-menu-toggle').forEach(btn => {
      btn.addEventListener('click', function() {
        const nav = document.getElementById('main-nav');
        if (!nav) return;
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('active');
      });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
      const nav = document.getElementById('main-nav');
      const toggle = document.querySelector('.mobile-menu-toggle');
      if (!nav || !toggle) return;
      if (!nav.contains(event.target) && !toggle.contains(event.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

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