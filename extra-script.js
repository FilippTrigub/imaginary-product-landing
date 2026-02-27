document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.type = 'button';
    backToTopButton.textContent = 'Back to Top';

    backToTopButton.style.position = 'fixed';
    backToTopButton.style.right = '24px';
    backToTopButton.style.bottom = '24px';
    backToTopButton.style.padding = '10px 16px';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '999px';
    backToTopButton.style.backgroundColor = '#111827';
    backToTopButton.style.color = '#ffffff';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.opacity = '0';
    backToTopButton.style.pointerEvents = 'none';
    backToTopButton.style.transition = 'opacity 0.2s ease';

    document.body.appendChild(backToTopButton);

    const updateVisibility = () => {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.pointerEvents = 'auto';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.pointerEvents = 'none';
        }
    };

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    updateVisibility();
    window.addEventListener('scroll', updateVisibility);
});
