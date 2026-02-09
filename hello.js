document.addEventListener('DOMContentLoaded', () => {
    const message = 'Hello, World!';

    console.log(message);

    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.padding = '60px 20px';
    container.style.fontFamily = "'Montserrat', sans-serif";

    const heading = document.createElement('h1');
    heading.textContent = message;
    heading.style.fontSize = '3rem';
    heading.style.background = 'linear-gradient(135deg, #6e8efb, #a777e3)';
    heading.style.webkitBackgroundClip = 'text';
    heading.style.webkitTextFillColor = 'transparent';

    container.appendChild(heading);
    document.body.appendChild(container);
});
