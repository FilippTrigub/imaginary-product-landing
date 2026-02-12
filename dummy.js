// Dummy script - basic JS demo

const items = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];

function greet(name) {
    return `Welcome to NovaSphere, ${name}!`;
}

items.forEach((item, index) => {
    console.log(`${index + 1}. ${greet(item)}`);
});

console.log(`\nTotal items: ${items.length}`);
