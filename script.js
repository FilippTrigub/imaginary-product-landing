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

    // Interactive hero animation
    const orbitalCanvas = document.getElementById('orbital-field');
    if (orbitalCanvas) {
        const ctx = orbitalCanvas.getContext('2d');
        const particles = [];
        const size = { width: 0, height: 0 };
        const pointer = {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            influence: 0,
            influenceTarget: 0,
            ripple: 0
        };
        let lastTimestamp = performance.now();

        const createParticles = () => {
            particles.length = 0;
            const particleCount = 90;
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    orbit: 110 + Math.random() * 150,
                    size: 1.6 + Math.random() * 2.8,
                    angle: Math.random() * Math.PI * 2,
                    speed: 0.0008 + Math.random() * 0.0018,
                    drift: (Math.random() - 0.5) * 0.0006,
                    hue: 215 + Math.random() * 80,
                    alpha: 0.65 + Math.random() * 0.25
                });
            }
        };

        const resizeCanvas = () => {
            const rect = orbitalCanvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            orbitalCanvas.width = rect.width * dpr;
            orbitalCanvas.height = rect.height * dpr;
            orbitalCanvas.style.width = `${rect.width}px`;
            orbitalCanvas.style.height = `${rect.height}px`;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            size.width = rect.width;
            size.height = rect.height;
            pointer.x = pointer.targetX = size.width / 2;
            pointer.y = pointer.targetY = size.height / 2;
        };

        const updatePointer = (event) => {
            const rect = orbitalCanvas.getBoundingClientRect();
            pointer.targetX = event.clientX - rect.left;
            pointer.targetY = event.clientY - rect.top;
            pointer.influenceTarget = 1;
        };

        orbitalCanvas.addEventListener('pointermove', (event) => {
            updatePointer(event);
        });

        orbitalCanvas.addEventListener('pointerdown', () => {
            pointer.ripple = 1;
        });

        orbitalCanvas.addEventListener('pointerenter', (event) => {
            updatePointer(event);
        });

        orbitalCanvas.addEventListener('pointerleave', () => {
            pointer.influenceTarget = 0;
            pointer.targetX = size.width / 2;
            pointer.targetY = size.height / 2;
        });

        const drawCore = (cx, cy) => {
            const coreGradient = ctx.createRadialGradient(cx, cy, 10, cx, cy, 140);
            coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
            coreGradient.addColorStop(0.25, 'rgba(174, 203, 255, 0.85)');
            coreGradient.addColorStop(0.6, 'rgba(110, 142, 251, 0.45)');
            coreGradient.addColorStop(1, 'rgba(110, 142, 251, 0)');
            ctx.fillStyle = coreGradient;
            ctx.beginPath();
            ctx.arc(cx, cy, 150 + pointer.influence * 30, 0, Math.PI * 2);
            ctx.fill();
        };

        const render = (timestamp) => {
            const delta = Math.min(64, timestamp - lastTimestamp);
            lastTimestamp = timestamp;

            pointer.x += (pointer.targetX - pointer.x) * 0.08;
            pointer.y += (pointer.targetY - pointer.y) * 0.08;
            pointer.influence += (pointer.influenceTarget - pointer.influence) * 0.08;
            pointer.ripple = Math.max(0, pointer.ripple - 0.02);

            ctx.clearRect(0, 0, size.width, size.height);

            const cx = size.width / 2;
            const cy = size.height / 2;
            const warpX = (pointer.x - cx) * (0.18 * pointer.influence);
            const warpY = (pointer.y - cy) * (0.18 * pointer.influence);
            const orbitScale = 1 + pointer.influence * 0.35;

            const backgroundGradient = ctx.createLinearGradient(0, 0, size.width, size.height);
            backgroundGradient.addColorStop(0, 'rgba(13, 24, 48, 0.35)');
            backgroundGradient.addColorStop(1, 'rgba(28, 40, 68, 0.15)');
            ctx.fillStyle = backgroundGradient;
            ctx.fillRect(0, 0, size.width, size.height);

            drawCore(cx + warpX * 0.4, cy + warpY * 0.4);

            const timeFactor = timestamp * 0.001;
            particles.forEach((particle) => {
                particle.angle += (particle.speed * delta) + particle.drift;
                const pulsing = Math.sin(timeFactor + particle.angle * 4) * 8;
                const rippleBoost = pointer.ripple > 0 ? Math.sin(timeFactor * 4 + particle.angle * 3) * pointer.ripple * 40 : 0;
                const orbitRadius = (particle.orbit + pulsing + rippleBoost) * orbitScale;

                const px = cx + Math.cos(particle.angle) * orbitRadius + warpX;
                const py = cy + Math.sin(particle.angle * (1 - 0.12 * pointer.influence)) * orbitRadius + warpY;

                const gradient = ctx.createRadialGradient(px, py, 0, px, py, particle.size * 6);
                gradient.addColorStop(0, `hsla(${particle.hue}, 85%, 65%, ${particle.alpha})`);
                gradient.addColorStop(0.4, `hsla(${particle.hue}, 85%, 65%, ${particle.alpha * 0.6})`);
                gradient.addColorStop(1, 'rgba(110, 142, 251, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(px, py, particle.size * (1.5 + pointer.influence * 0.4), 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(render);
        };

        resizeCanvas();
        createParticles();
        window.addEventListener('resize', resizeCanvas);
        requestAnimationFrame(render);
    }
});
