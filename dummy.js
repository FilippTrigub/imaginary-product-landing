/**
 * NovaSphere — Dummy Utility Script
 * Simulated analytics, fake data, toast notifications, and typing effects.
 * For demonstration / placeholder purposes only.
 */

(function () {
    'use strict';

    // ── Dummy Analytics ─────────────────────────────────────────────────
    const analytics = {
        visitors: Math.floor(Math.random() * 5000) + 1000,
        pageViews: Math.floor(Math.random() * 20000) + 4000,
        bounceRate: (Math.random() * 30 + 20).toFixed(1) + '%',
        avgSession: (Math.random() * 4 + 1).toFixed(2) + ' min',
        topPages: ['/index.html', '/team.html', '/header.html', '/#pricing', '/#features'],
        generate: function () {
            return {
                visitors: this.visitors,
                pageViews: this.pageViews,
                bounceRate: this.bounceRate,
                avgSession: this.avgSession,
                topPages: this.topPages,
                generatedAt: new Date().toISOString()
            };
        }
    };

    console.log('[NovaSphere Analytics]', analytics.generate());

    // ── Fake Testimonials Generator ─────────────────────────────────────
    const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery'];
    const lastNames = ['Smith', 'Lee', 'Garcia', 'Nguyen', 'Patel', 'Kim', 'Müller', 'Santos'];
    const comments = [
        'NovaSphere completely changed how I interact with my devices!',
        'The holographic interface is unlike anything I have ever seen.',
        'Incredible performance and a beautiful design.',
        'I cannot imagine going back to a traditional screen.',
        'Customer support was fast and super helpful.',
        'Setup was a breeze — up and running in minutes.',
        'Worth every penny. Five stars!',
        'The future of computing is here, and it is called NovaSphere.'
    ];

    function randomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function generateTestimonials(count) {
        var testimonials = [];
        for (var i = 0; i < count; i++) {
            testimonials.push({
                id: i + 1,
                name: randomItem(firstNames) + ' ' + randomItem(lastNames),
                rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
                comment: randomItem(comments),
                date: new Date(Date.now() - Math.floor(Math.random() * 90) * 86400000).toLocaleDateString()
            });
        }
        return testimonials;
    }

    console.log('[NovaSphere Testimonials]', generateTestimonials(5));

    // ── Toast Notification System ───────────────────────────────────────
    function showToast(message, duration) {
        duration = duration || 3000;

        var toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText =
            'position:fixed;bottom:30px;right:30px;background:linear-gradient(135deg,#6e8efb,#a777e3);' +
            'color:#fff;padding:14px 24px;border-radius:8px;font-family:Montserrat,sans-serif;' +
            'font-size:0.95rem;box-shadow:0 4px 20px rgba(110,142,251,0.4);opacity:0;' +
            'transition:opacity 0.4s ease,transform 0.4s ease;transform:translateY(20px);z-index:9999;';

        document.body.appendChild(toast);

        // Trigger entrance animation
        requestAnimationFrame(function () {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        // Auto-dismiss
        setTimeout(function () {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(function () {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 400);
        }, duration);
    }

    // Fire a welcome toast after a short delay
    setTimeout(function () {
        showToast('Welcome to NovaSphere — The Future of Computing');
    }, 1500);

    // ── Typing Effect Utility ───────────────────────────────────────────
    function typeText(element, text, speed) {
        speed = speed || 60;
        var i = 0;
        element.textContent = '';

        function tick() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(tick, speed);
            }
        }

        tick();
    }

    // Apply typing effect to the first <h1> on the page, if present
    var headline = document.querySelector('h1');
    if (headline) {
        var originalText = headline.textContent;
        typeText(headline, originalText, 50);
    }

    // ── Dummy Session Heartbeat ─────────────────────────────────────────
    var heartbeatCount = 0;
    var heartbeat = setInterval(function () {
        heartbeatCount++;
        console.log('[NovaSphere Heartbeat] ping #' + heartbeatCount);
        if (heartbeatCount >= 5) {
            clearInterval(heartbeat);
            console.log('[NovaSphere Heartbeat] session tracking stopped');
        }
    }, 10000);

    // ── Expose helpers globally for console experimentation ─────────────
    window.NovaDummy = {
        analytics: analytics,
        generateTestimonials: generateTestimonials,
        showToast: showToast,
        typeText: typeText
    };
})();
