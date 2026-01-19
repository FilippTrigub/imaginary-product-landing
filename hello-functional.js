// Functional programming hello world
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addGreeting = (name) => `Hello, ${name}`;
const addExclamation = (text) => `${text}!`;
const toUpperCase = (text) => text.toUpperCase();
const addEmoji = (text) => `${text} 🎉`;

// Compose functions
const greet = compose(
    addEmoji,
    addExclamation,
    addGreeting
);

const loudGreet = compose(
    addEmoji,
    toUpperCase,
    addExclamation,
    addGreeting
);

// Usage
console.log(greet('World'));
console.log(loudGreet('World'));

// Array operations
const names = ['Alice', 'Bob', 'Charlie'];
const greetings = names.map(greet);
console.log(greetings.join('\n'));
