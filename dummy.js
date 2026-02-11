document.addEventListener('DOMContentLoaded', () => {
    // ── Mock Product Data ────────────────────────────────────────────
    const dummyProducts = [
        { id: 1, name: 'NovaSphere Core', price: 299, category: 'hardware', inStock: true },
        { id: 2, name: 'NovaSphere Pro', price: 599, category: 'hardware', inStock: true },
        { id: 3, name: 'NovaSphere Ultra', price: 999, category: 'hardware', inStock: false },
        { id: 4, name: 'HoloLens Adapter', price: 149, category: 'accessory', inStock: true },
        { id: 5, name: 'Neural Link Cable', price: 79, category: 'accessory', inStock: true },
        { id: 6, name: 'Quantum Shield Case', price: 49, category: 'accessory', inStock: false }
    ];

    const dummyTestimonials = [
        { author: 'Alex M.', role: 'Software Engineer', text: 'NovaSphere completely changed how I interact with my workspace.' },
        { author: 'Priya K.', role: 'UX Designer', text: 'The holographic interface is unlike anything I have ever used before.' },
        { author: 'Jordan T.', role: 'Data Scientist', text: 'Processing complex datasets feels effortless with NovaSphere Pro.' },
        { author: 'Sam L.', role: 'Architect', text: 'I can walk through my 3D models in real time. Incredible.' }
    ];

    // ── Simulated API Fetch ──────────────────────────────────────────
    const fetchProducts = (category = null) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const results = category
                    ? dummyProducts.filter(p => p.category === category)
                    : dummyProducts;
                resolve({ status: 200, data: results, timestamp: new Date().toISOString() });
            }, 800);
        });
    };

    // ── Visitor Counter (localStorage) ───────────────────────────────
    const trackVisit = () => {
        const key = 'novasphere_visit_count';
        const count = parseInt(localStorage.getItem(key) || '0', 10) + 1;
        localStorage.setItem(key, count.toString());
        console.log(`[NovaSphere] Visit #${count} recorded`);
        return count;
    };

    // ── Toast Notification System ────────────────────────────────────
    const showToast = (message, duration = 3000) => {
        const toast = document.createElement('div');
        toast.textContent = message;
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
            color: 'white',
            padding: '14px 24px',
            borderRadius: '8px',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.95rem',
            boxShadow: '0 4px 20px rgba(110, 142, 251, 0.4)',
            zIndex: '9999',
            opacity: '0',
            transform: 'translateY(20px)',
            transition: 'all 0.4s ease'
        });

        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 400);
        }, duration);
    };

    // ── Random Testimonial Rotator ───────────────────────────────────
    const getRandomTestimonial = () => {
        const index = Math.floor(Math.random() * dummyTestimonials.length);
        return dummyTestimonials[index];
    };

    const rotateTestimonial = (containerSelector, interval = 5000) => {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const update = () => {
            const t = getRandomTestimonial();
            container.style.opacity = '0';
            setTimeout(() => {
                container.innerHTML = `
                    <p style="font-style:italic; color:#555;">"${t.text}"</p>
                    <strong style="color:#6e8efb;">${t.author}</strong>
                    <span style="color:#999;"> — ${t.role}</span>
                `;
                container.style.opacity = '1';
            }, 300);
        };

        container.style.transition = 'opacity 0.3s ease';
        update();
        setInterval(update, interval);
    };

    // ── Initialise ───────────────────────────────────────────────────
    const visits = trackVisit();

    fetchProducts().then(response => {
        console.log('[NovaSphere] Products loaded:', response.data.length, 'items');
    });

    // Welcome toast on first visit
    if (visits === 1) {
        showToast('Welcome to NovaSphere! Explore the future of computing.');
    }

    // Expose helpers globally for console / other scripts
    window.NovaDummy = {
        fetchProducts,
        showToast,
        getRandomTestimonial,
        rotateTestimonial,
        trackVisit
    };

    console.log('[NovaSphere] dummy.js loaded — utilities available at window.NovaDummy');
});
