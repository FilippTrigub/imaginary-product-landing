document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.marginTop = '2rem';
    container.style.fontFamily = 'sans-serif';

    const heading = document.createElement('h1');
    heading.textContent = 'Hello, World!';
    container.appendChild(heading);

    document.body.appendChild(container);
});
