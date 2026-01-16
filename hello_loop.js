const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "Hallo"];

greetings.forEach((greeting, index) => {
  console.log(`${index + 1}. ${greeting} World!`);
});

console.log("\nSaying Hello 5 times:");
for (let i = 1; i <= 5; i++) {
  console.log(`  ${i}. Hello World!`);
}