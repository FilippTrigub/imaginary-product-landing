console.log('Hello World from JavaScript!');

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const message = document.createElement('p');
    message.textContent = 'This message was added by JavaScript!';
    message.style.color = '#6e8efb';
    message.style.fontWeight = 'bold';
    container.appendChild(message);
});
