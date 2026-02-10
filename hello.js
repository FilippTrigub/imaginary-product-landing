(function () {
    'use strict';

    var message = 'Hello, NovaSphere!';

    console.log('%c' + message, 'color:#6e8efb;font-size:1.2rem;font-weight:bold;');

    function injectBanner(text) {
        var banner = document.createElement('div');
        banner.textContent = text;
        banner.style.cssText =
            'position:fixed;top:20px;right:20px;background:linear-gradient(135deg,#6e8efb,#a777e3);' +
            'color:#fff;padding:12px 20px;border-radius:8px;font-family:Montserrat,sans-serif;' +
            'box-shadow:0 10px 25px rgba(0,0,0,0.15);z-index:2000;font-size:0.95rem;';

        document.body.appendChild(banner);

        setTimeout(function () {
            banner.style.opacity = '0';
            banner.style.transition = 'opacity 0.6s ease';
            setTimeout(function () {
                if (banner.parentNode) {
                    banner.parentNode.removeChild(banner);
                }
            }, 600);
        }, 3000);
    }

    if (typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
                injectBanner(message);
            });
        } else {
            injectBanner(message);
        }
    }

    window.sayHello = function () {
        injectBanner(message);
        return message;
    };
})();
