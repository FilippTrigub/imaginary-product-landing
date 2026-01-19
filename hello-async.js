// Async/await hello world
async function sayHello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, World!');
        }, 1000);
    });
}

async function main() {
    console.log('Waiting for greeting...');
    const greeting = await sayHello();
    console.log(greeting);
    console.log('Greeting delivered!');
}

main();
