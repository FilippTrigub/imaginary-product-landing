// Hello World - Functional programming approach
const greet = (name) => `Hello, ${name}!`;

const greetAll = (names) => names.map(greet);

const printGreetings = (greetings) => greetings.forEach(console.log);

// Compose functions
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

const greetAndPrint = compose(printGreetings, greetAll);

// Usage
console.log(greet('World'));
greetAndPrint(['Alice', 'Bob', 'Charlie', 'World']);
