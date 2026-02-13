document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');

    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.padding = '40px';
    container.style.fontFamily = 'Montserrat, sans-serif';
    container.innerHTML = '<h1>Hello, World!</h1>';
    document.body.appendChild(container);
});
