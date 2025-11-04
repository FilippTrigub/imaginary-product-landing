document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links (respecting header offset)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const targetElement = document.querySelector(href);
            if (!targetElement) return;

            e.preventDefault();
            const headerOffset = 90;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} shortly.`);
            this.reset();
        });
    }

    // Simple animation for feature/pricing cards on scroll (staggered reveal)
    const revealOnScroll = (selector, options = {}) => {
        const nodes = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(nodes).indexOf(entry.target) + 1;
                    entry.target.classList.add('show');
                    // stagger via inline delay if not already set
                    if (!entry.target.style.transitionDelay) {
                        entry.target.style.transitionDelay = `${index * 80}ms`;
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        nodes.forEach(n => observer.observe(n));
    };

    revealOnScroll('.feature-card');
    revealOnScroll('.pricing-card');

    // Rotating tagline
    const rotatingEl = document.querySelector('.rotating');
    const rotatingWords = ['Immersive', 'Adaptive', 'Quantum-powered', 'Limitless'];
    let rotIndex = 0;
    let rotTimeout;

    const startRotating = () => {
        if (!rotatingEl) return;
        rotatingEl.textContent = rotatingWords[rotIndex];
        rotatingEl.animate([{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 400, easing: 'ease-out' });
        rotIndex = (rotIndex + 1) % rotatingWords.length;
        rotTimeout = setTimeout(startRotating, 2400);
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches === false) {
        startRotating();
    } else if (rotatingEl) {
        // show first word immediately for reduced motion
        rotatingEl.textContent = rotatingWords[0];
    }

    // Hero device parallax on mouse move (subtle)
    const device = document.getElementById('hero-device');
    const deviceWrap = document.querySelector('.device-wrap');
    if (device && deviceWrap && window.matchMedia('(pointer: fine)').matches) {
        const onMove = (e) => {
            const rect = deviceWrap.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / rect.width;
            const dy = (e.clientY - cy) / rect.height;
            const rx = dy * 6; // tilt x
            const ry = dx * -8; // tilt y
            device.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
        };
        let throttled = false;
        window.addEventListener('mousemove', (e) => {
            if (throttled) return;
            throttled = true;
            requestAnimationFrame(() => {
                onMove(e);
                throttled = false;
            });
        });

        // reset on leave
        deviceWrap.addEventListener('mouseleave', () => { device.style.transform = 'translateZ(0)'; });
    }

    // Lightweight particle background for hero
    const canvas = document.getElementById('hero-particles');
    if (canvas && canvas.getContext && window.matchMedia('(prefers-reduced-motion: reduce)').matches === false) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;
        const particles = [];
        const count = Math.max(18, Math.floor(width / 80));

        const rand = (min, max) => Math.random() * (max - min) + min;

        const resize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        window.addEventListener('resize', resize);

        for (let i = 0; i < count; i++) {
            particles.push({
                x: rand(0, width),
                y: rand(0, height),
                r: rand(1, 3.5),
                vx: rand(-0.2, 0.2),
                vy: rand(-0.15, 0.15),
                life: rand(80, 280),
                alpha: rand(0.08, 0.32)
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            for (let p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.2;
                if (p.x < -10) p.x = width + 10;
                if (p.x > width + 10) p.x = -10;
                if (p.y < -10) p.y = height + 10;
                if (p.y > height + 10) p.y = -10;
                if (p.life <= 0) {
                    p.x = rand(0, width);
                    p.y = rand(0, height);
                    p.life = rand(80, 280);
                    p.alpha = rand(0.08, 0.32);
                }
                ctx.beginPath();
                ctx.fillStyle = `rgba(110,142,251,${p.alpha})`;
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
            requestAnimationFrame(draw);
        };
        draw();
    }

    // Initial reveal for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => { heroContent.classList.add('show'); }, 200);
    }

});
