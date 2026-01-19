// Async/await hello world with promises
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function sayHello() {
    console.log('Preparing to say hello...');
    await delay(1000);
    console.log('Hello, World!');
    await delay(500);
    console.log('Goodbye!');
}

sayHello().then(() => {
    console.log('Async hello world completed!');
});
