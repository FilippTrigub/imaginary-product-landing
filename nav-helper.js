document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    if (!navMenu) {
        return;
    }

    const navLinks = Array.from(navMenu.querySelectorAll('a[href]'));
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        const hrefPath = href.split('#')[0];

        if (hrefPath && hrefPath === currentPath) {
            navLinks.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
        }
    });

    navMenu.addEventListener('click', (event) => {
        const target = event.target;
        if (target instanceof HTMLAnchorElement && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});
