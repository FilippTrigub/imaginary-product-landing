// Hello World Script for NovaSphere Project

function helloWorld() {
    const message = "Hello World";
    console.log(message);
    return message;
}

// Execute immediately
helloWorld();

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = helloWorld;
}
