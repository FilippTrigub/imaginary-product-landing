const tasks = [
    { id: 1, title: "Buy groceries", done: true },
    { id: 2, title: "Walk the dog", done: false },
    { id: 3, title: "Read a book", done: false },
    { id: 4, title: "Write code", done: true },
    { id: 5, title: "Clean the house", done: false },
];

const completed = tasks.filter((t) => t.done);
const pending = tasks.filter((t) => !t.done);

console.log("=== Task Summary ===\n");
console.log(`Total: ${tasks.length} | Completed: ${completed.length} | Pending: ${pending.length}\n`);

console.log("Completed:");
completed.forEach((t) => console.log(`  [x] ${t.title}`));

console.log("\nPending:");
pending.forEach((t) => console.log(`  [ ] ${t.title}`));