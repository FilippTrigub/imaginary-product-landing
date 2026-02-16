/**
 * NovaSphere - Dummy Utility Script
 * Provides simulated interactive behaviors for the landing page.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ─── Fake Notification Toast System ──────────────────────────────
    // Periodically displays "social proof" purchase notifications.

    const toastMessages = [
        'Sarah from New York just purchased NovaSphere Pro!',
        'A team in London upgraded to NovaSphere Enterprise.',
        'Marcus from Tokyo started a free trial!',
        'NovaSphere Starter was just activated in Berlin.',
        'A new user in Sydney joined the NovaSphere community!',
        'Dr. Patel from Mumbai upgraded to the Pro plan.',
    ];

    const showToast = (message) => {
        const toast = document.createElement('div');
        toast.textContent = message;
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: 'white',
            padding: '14px 24px',
            borderRadius: '8px',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.9rem',
            boxShadow: '0 6px 20px rgba(110, 142, 251, 0.4)',
            opacity: '0',
            transform: 'translateY(20px)',
            transition: 'all 0.4s ease',
            zIndex: '9999',
            maxWidth: '340px',
        });

        document.body.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        // Animate out and remove
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    };

    const scheduleToasts = () => {
        const randomDelay = () => Math.floor(Math.random() * 8000) + 7000; // 7-15s

        const showNext = () => {
            const msg = toastMessages[Math.floor(Math.random() * toastMessages.length)];
            showToast(msg);
            setTimeout(showNext, randomDelay());
        };

        setTimeout(showNext, randomDelay());
    };

    scheduleToasts();


    // ─── Mock Analytics Tracker ──────────────────────────────────────
    // Logs simulated page interaction events to the console.

    const trackEvent = (category, action, label) => {
        const timestamp = new Date().toISOString();
        console.log(`[NovaSphere Analytics] ${timestamp} | ${category} > ${action} : ${label}`);
    };

    trackEvent('Page', 'Load', window.location.pathname);

    document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button, .btn-primary, .btn-secondary');
        if (target) {
            const label = target.textContent.trim().substring(0, 40);
            trackEvent('Interaction', 'Click', label);
        }
    });

    document.addEventListener('scroll', (() => {
        let maxScroll = 0;
        return () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                if (maxScroll % 25 === 0 && maxScroll > 0) {
                    trackEvent('Engagement', 'Scroll', `${maxScroll}% of page`);
                }
            }
        };
    })());


    // ─── Dummy Testimonial Rotator ───────────────────────────────────
    // Cycles through hardcoded testimonials if a container exists.

    const testimonials = [
        { quote: 'NovaSphere completely transformed how our team collaborates.', author: 'Elena V., Product Manager' },
        { quote: 'The holographic interface is unlike anything I have ever used.', author: 'Raj K., Software Engineer' },
        { quote: 'We cut our workflow time in half after switching to NovaSphere.', author: 'Tomoko S., CTO at Lumina' },
        { quote: 'Intuitive, powerful, and beautifully designed.', author: 'Carlos M., Freelance Designer' },
        { quote: 'The AI assistant feels like having a genius co-pilot.', author: 'Priya D., Data Scientist' },
    ];

    const testimonialContainer = document.querySelector('.testimonial-rotator');
    if (testimonialContainer) {
        let currentIndex = 0;

        const renderTestimonial = () => {
            const { quote, author } = testimonials[currentIndex];
            testimonialContainer.innerHTML = `
                <blockquote style="font-style:italic; font-size:1.15rem; color:#555; margin-bottom:10px;">
                    "${quote}"
                </blockquote>
                <cite style="color:#6e8efb; font-weight:600;">— ${author}</cite>
            `;
            testimonialContainer.style.transition = 'opacity 0.5s ease';
            testimonialContainer.style.opacity = '1';
        };

        const rotateTestimonial = () => {
            testimonialContainer.style.opacity = '0';
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                renderTestimonial();
            }, 500);
        };

        renderTestimonial();
        setInterval(rotateTestimonial, 6000);
    }


    // ─── Simulated Live Visitor Counter ──────────────────────────────
    // Displays a fluctuating "users online" count if a container exists.

    const visitorCountEl = document.querySelector('.live-visitor-count');
    if (visitorCountEl) {
        let visitors = Math.floor(Math.random() * 80) + 120; // start 120-200

        const updateCount = () => {
            const delta = Math.floor(Math.random() * 11) - 5; // -5 to +5
            visitors = Math.max(50, visitors + delta);
            visitorCountEl.textContent = `${visitors} users online now`;
        };

        updateCount();
        setInterval(updateCount, 3000);
    }


    // ─── Dummy Typing Effect ─────────────────────────────────────────
    // Applies a typewriter animation to any element with [data-typewriter].

    document.querySelectorAll('[data-typewriter]').forEach((el) => {
        const fullText = el.textContent;
        const speed = parseInt(el.dataset.typewriter, 10) || 60;
        el.textContent = '';
        el.style.borderRight = '2px solid #6e8efb';

        let i = 0;
        const type = () => {
            if (i < fullText.length) {
                el.textContent += fullText.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Remove cursor after typing completes
                setTimeout(() => { el.style.borderRight = 'none'; }, 1000);
            }
        };

        type();
    });

    console.log('[NovaSphere] Dummy utilities loaded.');
});
