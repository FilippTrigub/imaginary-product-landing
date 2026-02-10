/**
 * NovaSphere - Hello World Demo
 */

document.addEventListener('DOMContentLoaded', () => {
    const message = '👋 Hello World from NovaSphere!';
    console.log(message);

    const banner = document.createElement('div');
    banner.textContent = message;
    Object.assign(banner.style, {
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '12px 24px',
        borderRadius: '999px',
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        color: '#fff',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '600',
        boxShadow: '0 10px 30px rgba(110,142,251,0.35)',
        zIndex: '10000',
    });

    document.body.appendChild(banner);

    setTimeout(() => {
        banner.style.transition = 'opacity 0.5s ease';
        banner.style.opacity = '0';
        setTimeout(() => banner.remove(), 500);
    }, 4000);
});
