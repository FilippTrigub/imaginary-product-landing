(function () {
    'use strict';

    var message = 'Hello, World from NovaSphere!';

    console.log(message);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', appendMessage);
    } else {
        appendMessage();
    }

    function appendMessage() {
        var banner = document.createElement('div');
        banner.textContent = message;
        banner.style.cssText = 'text-align:center;padding:12px 20px;margin:20px auto;max-width:600px;' +
            'background:linear-gradient(135deg,#f5f7fa,#e6e9f0);border-radius:8px;font-family:Montserrat,sans-serif;' +
            'color:#333;font-weight:600;box-shadow:0 5px 15px rgba(0,0,0,0.08);';

        document.body.appendChild(banner);
    }
})();