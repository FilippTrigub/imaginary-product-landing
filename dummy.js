const greetings = ["Hello!", "Bonjour!", "Hola!", "Ciao!", "Hallo!"];

greetings.forEach((greeting, index) => {
    console.log(`${index + 1}. ${greeting}`);
});

console.log("\nTotal greetings:", greetings.length);