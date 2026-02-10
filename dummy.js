/**
 * NovaSphere — Dummy Utility Script
 * Simulated analytics, fake data generators, and UI helpers
 * for development and demo purposes.
 */

(function () {
    'use strict';

    // ── Fake Visitor Counter ────────────────────────────────────────────
    const visitorCounter = (() => {
        let count = Math.floor(Math.random() * 5000) + 1000;

        const increment = () => {
            count += Math.floor(Math.random() * 3) + 1;
            return count;
        };

        const start = (intervalMs = 3000) => {
            console.log(`[NovaSphere] Visitor counter started at ${count}`);
            return setInterval(() => {
                console.log(`[NovaSphere] Live visitors: ${increment()}`);
            }, intervalMs);
        };

        return { increment, start, getCount: () => count };
    })();

    // ── Console Analytics Logger ────────────────────────────────────────
    const analyticsLogger = (() => {
        const events = [
            'page_view',
            'cta_click',
            'pricing_hover',
            'feature_scroll',
            'form_focus',
            'nav_toggle',
            'testimonial_read',
            'demo_request',
        ];

        const pages = ['/', '/features', '/pricing', '/team', '/contact'];

        const log = () => {
            const event = events[Math.floor(Math.random() * events.length)];
            const page = pages[Math.floor(Math.random() * pages.length)];
            const timestamp = new Date().toISOString();
            console.log(
                `[Analytics] ${timestamp} | event: ${event} | page: ${page}`
            );
        };

        const start = (intervalMs = 5000) => {
            console.log('[NovaSphere] Analytics logger active');
            return setInterval(log, intervalMs);
        };

        return { log, start };
    })();

    // ── Typing Effect Utility ───────────────────────────────────────────
    const typeText = (element, text, speed = 60) => {
        if (!element) return;
        let i = 0;
        element.textContent = '';
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) clearInterval(timer);
        }, speed);
    };

    // ── Random Testimonial Generator ────────────────────────────────────
    const testimonials = (() => {
        const names = [
            'Alex Morgan',
            'Priya Sharma',
            'Liam O\'Brien',
            'Mei Lin',
            'Carlos Gutierrez',
            'Fatima Al-Rashid',
        ];

        const roles = [
            'Software Engineer',
            'Product Manager',
            'UX Designer',
            'Data Scientist',
            'Startup Founder',
            'CTO',
        ];

        const quotes = [
            'NovaSphere completely transformed how our team collaborates on complex projects.',
            'The holographic interface is unlike anything I\'ve ever used — it feels like the future.',
            'We cut our prototyping time in half after switching to NovaSphere.',
            'Incredible performance and the most intuitive UI I\'ve seen in years.',
            'Our clients are blown away every time we demo with NovaSphere.',
            'Finally, a computing platform that keeps up with the speed of thought.',
        ];

        const generate = (count = 3) => {
            const result = [];
            for (let i = 0; i < count; i++) {
                const idx = Math.floor(Math.random() * names.length);
                result.push({
                    name: names[idx],
                    role: roles[idx],
                    quote: quotes[idx],
                    rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
                });
            }
            return result;
        };

        return { generate };
    })();

    // ── Notification Toast Simulator ────────────────────────────────────
    const toastSimulator = (() => {
        const messages = [
            '🚀 New feature released: Holographic Whiteboard',
            '🎉 NovaSphere just hit 1 million users!',
            '🔔 Scheduled maintenance tonight at 2 AM UTC',
            '💡 Tip: Try voice commands for hands-free control',
            '📦 Version 2.1 update available — see what\'s new',
            '⭐ You\'ve been using NovaSphere for 30 days!',
        ];

        const show = () => {
            const msg = messages[Math.floor(Math.random() * messages.length)];
            console.log(`[Toast] ${msg}`);
        };

        const start = (intervalMs = 8000) => {
            console.log('[NovaSphere] Toast notifications active');
            return setInterval(show, intervalMs);
        };

        return { show, start };
    })();

    // ── Expose on window for demo / console access ──────────────────────
    window.NovaDummy = {
        visitorCounter,
        analyticsLogger,
        typeText,
        testimonials,
        toastSimulator,
    };

    // ── Auto-start in development ───────────────────────────────────────
    console.log('═══════════════════════════════════════');
    console.log('  NovaSphere Dummy Script Loaded 🛸');
    console.log('  Access utilities via window.NovaDummy');
    console.log('═══════════════════════════════════════');

    visitorCounter.start();
    analyticsLogger.start();
    toastSimulator.start();

    console.log('[NovaSphere] Sample testimonials:', testimonials.generate(2));
})();
