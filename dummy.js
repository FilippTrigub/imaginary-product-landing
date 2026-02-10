/**
 * NovaSphere - Dummy Script
 * Simulates site activity: fake analytics, notification toasts,
 * visitor counter, and rotating testimonials.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ── Dummy Analytics Logger ──────────────────────────────────────
    const dummyAnalytics = {
        visitors: Math.floor(Math.random() * 5000) + 1000,
        pageViews: Math.floor(Math.random() * 20000) + 5000,
        bounceRate: (Math.random() * 30 + 20).toFixed(1) + '%',
        avgSession: (Math.random() * 4 + 1).toFixed(1) + ' min',
        topReferrers: ['google.com', 'twitter.com', 'producthunt.com', 'hackernews.com'],
        topPages: ['/', '/team.html', '/header.html', '/#pricing'],
    };

    console.log('%c📊 NovaSphere Dummy Analytics', 'font-weight:bold;font-size:14px;color:#6e8efb;');
    console.table(dummyAnalytics);

    // ── Visitor Counter ─────────────────────────────────────────────
    let visitorCount = dummyAnalytics.visitors;

    const counterEl = document.createElement('div');
    counterEl.id = 'dummy-visitor-counter';
    Object.assign(counterEl.style, {
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        color: '#fff',
        padding: '10px 18px',
        borderRadius: '30px',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '0.85rem',
        fontWeight: '600',
        boxShadow: '0 4px 15px rgba(110,142,251,0.4)',
        zIndex: '9999',
        transition: 'transform 0.3s ease',
        cursor: 'default',
    });
    counterEl.textContent = `👥 ${visitorCount.toLocaleString()} visitors`;
    document.body.appendChild(counterEl);

    setInterval(() => {
        visitorCount += Math.floor(Math.random() * 3) + 1;
        counterEl.textContent = `👥 ${visitorCount.toLocaleString()} visitors`;
        counterEl.style.transform = 'scale(1.08)';
        setTimeout(() => { counterEl.style.transform = 'scale(1)'; }, 200);
    }, 3000);

    // ── Notification Toasts ─────────────────────────────────────────
    const notifications = [
        '🚀 New user just signed up from Tokyo!',
        '⭐ NovaSphere rated 5 stars by TechCrunch',
        '🎉 10,000th holographic session completed',
        '📦 NovaSphere Pro pre-orders now open',
        '🏆 Winner of CES 2026 Innovation Award',
        '🔬 New neural-link patent approved',
        '💡 Version 2.1 beta rolling out this week',
        '🌍 Now available in 30+ countries',
    ];

    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        Object.assign(toast.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: '#fff',
            color: '#333',
            padding: '14px 22px',
            borderRadius: '10px',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.9rem',
            boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
            zIndex: '10000',
            opacity: '0',
            transform: 'translateX(40px)',
            transition: 'all 0.4s ease',
            maxWidth: '340px',
            borderLeft: '4px solid #6e8efb',
        });
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(0)';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(40px)';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // Show a toast every 8 seconds
    let toastIndex = 0;
    setInterval(() => {
        showToast(notifications[toastIndex % notifications.length]);
        toastIndex++;
    }, 8000);

    // Show the first one after a short delay
    setTimeout(() => showToast(notifications[0]), 2000);

    // ── Rotating Testimonials ───────────────────────────────────────
    const testimonials = [
        { text: 'NovaSphere completely changed how I interact with my computer.', author: 'Alex K., Software Engineer' },
        { text: 'The holographic display is unlike anything I have ever seen.', author: 'Priya M., Product Designer' },
        { text: 'Productivity went up 40% after switching our team to NovaSphere.', author: 'Jordan L., Startup Founder' },
        { text: 'The neural-link integration feels like science fiction made real.', author: 'Dr. Yuki T., Neuroscientist' },
        { text: 'Best tech purchase I have made in the last decade. Period.', author: 'Sam R., Tech Reviewer' },
    ];

    const testimonialEl = document.createElement('div');
    testimonialEl.id = 'dummy-testimonial';
    Object.assign(testimonialEl.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#fff',
        color: '#333',
        padding: '16px 22px',
        borderRadius: '10px',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '0.85rem',
        lineHeight: '1.5',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        zIndex: '9999',
        maxWidth: '300px',
        opacity: '0',
        transition: 'opacity 0.5s ease',
        borderLeft: '4px solid #a777e3',
    });
    document.body.appendChild(testimonialEl);

    let testimonialIndex = 0;
    function rotateTestimonial() {
        const t = testimonials[testimonialIndex % testimonials.length];
        testimonialEl.innerHTML = `<em>"${t.text}"</em><br><strong style="color:#6e8efb;margin-top:6px;display:inline-block;">— ${t.author}</strong>`;
        testimonialEl.style.opacity = '1';

        setTimeout(() => { testimonialEl.style.opacity = '0'; }, 5500);
        testimonialIndex++;
    }

    setTimeout(rotateTestimonial, 4000);
    setInterval(rotateTestimonial, 7000);

    // ── Dummy Data Generator (for console) ──────────────────────────
    function generateDummyUsers(count) {
        const firstNames = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
        const plans = ['Starter', 'Professional', 'Enterprise'];

        return Array.from({ length: count }, (_, i) => ({
            id: i + 1,
            name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
            email: `user${i + 1}@example.com`,
            plan: plans[Math.floor(Math.random() * plans.length)],
            signupDate: new Date(Date.now() - Math.random() * 90 * 86400000).toISOString().split('T')[0],
        }));
    }

    console.log('%c👥 Dummy User Records', 'font-weight:bold;font-size:14px;color:#a777e3;');
    console.table(generateDummyUsers(10));

    console.log('%c✅ dummy.js loaded successfully', 'color:green;font-weight:bold;');
});
