document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');

    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.padding = '60px 20px';
    container.style.fontFamily = "'Montserrat', sans-serif";
    container.style.color = '#333';

    const heading = document.createElement('h1');
    heading.textContent = 'Hello, World!';
    container.appendChild(heading);

    document.body.appendChild(container);
});
