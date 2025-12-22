const animatedText = document.getElementById('animated-text');
const text = "Hello, World!";
animatedText.innerHTML = text
    .split('')
    .map((char, i) => `<span class="char" style="--char-index: ${i};">${char}</span>`)
    .join('');
