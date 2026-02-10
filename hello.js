(function () {
    'use strict';

    const message = 'Hello, NovaSphere!';

    const renderBanner = () => {
        const banner = document.createElement('div');
        banner.textContent = message;
        banner.style.position = 'fixed';
        banner.style.bottom = '20px';
        banner.style.right = '20px';
        banner.style.padding = '12px 20px';
        banner.style.background = 'linear-gradient(135deg, #6e8efb, #a777e3)';
        banner.style.color = '#fff';
        banner.style.borderRadius = '999px';
        banner.style.fontWeight = '600';
        banner.style.boxShadow = '0 10px 25px rgba(110, 142, 251, 0.4)';
        banner.style.zIndex = '9999';
        document.body.appendChild(banner);
        return banner;
    };

    const run = () => {
        console.log(`[NovaSphere] ${message}`);
        if (typeof document !== 'undefined') {
            return renderBanner();
        }
        return null;
    };

    if (typeof window !== 'undefined') {
        window.NovaHello = { run };
        window.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
