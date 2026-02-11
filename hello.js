document.addEventListener('DOMContentLoaded', () => {
    const message = 'Hello, NovaSphere!';

    const banner = document.createElement('p');
    banner.textContent = message;
    Object.assign(banner.style, {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '600',
        color: '#6e8efb',
        textAlign: 'center',
        margin: '20px 0'
    });

    document.body.prepend(banner);
    console.log(message);
});
