/**
 * NovaSphere — Dummy Utility Script
 * Simulated analytics, fake data generators, toast notifications, and typing effects.
 * For demonstration / prototyping purposes only.
 */

(function () {
    'use strict';

    // ── Dummy Analytics ─────────────────────────────────────────────────
    const analytics = {
        visitors: Math.floor(Math.random() * 50000) + 10000,
        pageViews: Math.floor(Math.random() * 200000) + 50000,
        bounceRate: (Math.random() * 30 + 20).toFixed(1) + '%',
        avgSession: (Math.random() * 4 + 1).toFixed(2) + ' min',
        topPages: [
            { path: '/', views: Math.floor(Math.random() * 8000) + 2000 },
            { path: '/team', views: Math.floor(Math.random() * 3000) + 500 },
            { path: '/header', views: Math.floor(Math.random() * 1500) + 200 }
        ]
    };

    console.log('%c[NovaSphere Analytics]', 'color:#6e8efb;font-weight:bold;');
    console.table({
        'Unique Visitors': analytics.visitors,
        'Page Views': analytics.pageViews,
        'Bounce Rate': analytics.bounceRate,
        'Avg. Session': analytics.avgSession
    });
    console.log('Top pages:', analytics.topPages);

    // ── Fake Testimonial / Review Generator ─────────────────────────────
    const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery'];
    const lastNames = ['Smith', 'Lee', 'Patel', 'Garcia', 'Kim', 'Nguyen', 'Müller', 'Tanaka'];
    const phrases = [
        'NovaSphere completely changed how I work with holograms!',
        'The holographic interface is incredibly intuitive.',
        'Best personal computing upgrade I have ever made.',
        'I can\'t imagine going back to a flat screen after this.',
        'Customer support was outstanding — five stars!',
        'Setup was seamless and the performance blew me away.',
        'Worth every penny. The future is here.',
        'My productivity doubled within the first week.'
    ];

    function generateTestimonials(count) {
        var results = [];
        for (var i = 0; i < count; i++) {
            results.push({
                name: firstNames[Math.floor(Math.random() * firstNames.length)] + ' ' +
                      lastNames[Math.floor(Math.random() * lastNames.length)],
                rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
                text: phrases[Math.floor(Math.random() * phrases.length)],
                date: new Date(Date.now() - Math.floor(Math.random() * 90) * 86400000)
                        .toISOString().split('T')[0]
            });
        }
        return results;
    }

    var dummyTestimonials = generateTestimonials(5);
    console.log('%c[NovaSphere Testimonials]', 'color:#a777e3;font-weight:bold;', dummyTestimonials);

    // ── Toast Notification System ───────────────────────────────────────
    function showToast(message, duration) {
        duration = duration || 3000;

        var toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = [
            'position:fixed',
            'bottom:30px',
            'right:30px',
            'background:linear-gradient(135deg,#6e8efb,#a777e3)',
            'color:#fff',
            'padding:14px 24px',
            'border-radius:8px',
            'font-family:Montserrat,sans-serif',
            'font-size:0.95rem',
            'box-shadow:0 6px 20px rgba(110,142,251,0.4)',
            'opacity:0',
            'transform:translateY(20px)',
            'transition:all 0.4s ease',
            'z-index:9999'
        ].join(';');

        document.body.appendChild(toast);

        // Trigger entrance animation on next frame
        requestAnimationFrame(function () {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        setTimeout(function () {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(function () {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 400);
        }, duration);
    }

    // Fire a welcome toast once the DOM is ready
    document.addEventListener('DOMContentLoaded', function () {
        showToast('Welcome to NovaSphere — the future of computing!');
    });

    // ── Typing Effect Utility ───────────────────────────────────────────
    function typeText(element, text, speed) {
        speed = speed || 60;
        var index = 0;
        element.textContent = '';

        function tick() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(tick, speed);
            }
        }

        tick();
    }

    // ── Expose helpers globally for other scripts / console usage ───────
    window.NovaDummy = {
        analytics: analytics,
        generateTestimonials: generateTestimonials,
        showToast: showToast,
        typeText: typeText
    };

    console.log('%c[NovaSphere Dummy Script Loaded]', 'color:#6e8efb;font-weight:bold;',
        'Use window.NovaDummy to access helpers.');
})();
