// Simple Hello World Script
console.log('Hello, World!');

// Display hello world in the page if running in a browser
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    const helloElement = document.createElement('div');
    helloElement.textContent = 'Hello, World!';
    helloElement.style.fontSize = '24px';
    helloElement.style.fontWeight = 'bold';
    helloElement.style.padding = '20px';
    helloElement.style.textAlign = 'center';
    helloElement.style.marginTop = '20px';
    helloElement.id = 'hello-world-message';

    // Append to body if it exists, otherwise append when ready
    if (document.body) {
      document.body.appendChild(helloElement);
    }
  });
}
