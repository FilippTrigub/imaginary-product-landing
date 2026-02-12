document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');

    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.padding = '60px 20px';
    container.style.fontFamily = 'Montserrat, sans-serif';

    const heading = document.createElement('h1');
    heading.textContent = 'Hello, World!';
    heading.style.color = '#667eea';

    container.appendChild(heading);
    document.body.appendChild(container);
});
