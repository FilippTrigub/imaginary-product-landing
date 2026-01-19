/**
 * Exercise 07: Objects
 *
 * Objects are collections of key-value pairs and are fundamental to JavaScript.
 * They allow you to store and organize data in a structured way.
 *
 * Task:
 * 1. Create and access object properties
 * 2. Add, modify, and delete properties
 * 3. Use object methods
 * 4. Work with nested objects
 * 5. Use Object methods (keys, values, entries)
 * 6. Understand object references
 * 7. Use destructuring
 *
 * To run this exercise:
 * node exercises/exercise07.js
 */

// TODO: Create an object
// let person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
// };

// TODO: Access properties
// console.log("Name:", person.name);
// console.log("Age:", person["age"]);

// TODO: Add and modify properties
// person.job = "Developer";
// person.age = 31;

// TODO: Delete properties
// delete person.city;

// TODO: Object methods
// person.greet = function() {
//     return `Hello, I'm ${this.name}`;
// };

// console.log(person.greet());

// TODO: Nested objects
// let company = {
//     name: "Tech Corp",
//     address: {
//         street: "123 Main St",
//         city: "San Francisco"
//     }
// };

// console.log(company.address.city);

// TODO: Object methods
// console.log("Keys:", Object.keys(person));
// console.log("Values:", Object.values(person));
// console.log("Entries:", Object.entries(person));

/*
SOLUTION:
console.log("=== Creating Objects ===");
// Object literal syntax
let person = {
    name: "Alice Johnson",
    age: 28,
    city: "Boston",
    hobbies: ["reading", "coding", "hiking"]
};

console.log("Person object:", person);

// Constructor syntax (less common)
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

console.log("Car object:", car);

console.log("\n=== Accessing Object Properties ===");
console.log("Dot notation - person.name:", person.name);
console.log("Bracket notation - person['age']:", person["age"]);

// Dynamic property access
let propertyName = "city";
console.log(`Dynamic access - person['${propertyName}']:", person[propertyName]);

// Accessing array properties within objects
console.log("First hobby:", person.hobbies[0]);
console.log("Number of hobbies:", person.hobbies.length);

console.log("\n=== Adding, Modifying, and Deleting Properties ===");
let student = {
    name: "Bob Smith",
    grade: "A"
};

console.log("Original student:", student);

// Adding properties
student.age = 20;
student.major = "Computer Science";
console.log("After adding properties:", student);

// Modifying properties
student.grade = "A+";
student.age = 21;
console.log("After modifying properties:", student);

// Deleting properties
delete student.major;
console.log("After deleting major:", student);

// Checking if property exists
console.log("Has 'name' property:", 'name' in student);
console.log("Has 'major' property:", 'major' in student);

console.log("\n=== Object Methods ===");
let calculator = {
    a: 10,
    b: 5,

    add: function() {
        return this.a + this.b;
    },

    subtract: function() {
        return this.a - this.b;
    },

    multiply: function() {
        return this.a * this.b;
    },

    // Arrow function (no 'this' binding)
    describe: () => {
        return "A simple calculator object";
    }
};

console.log("10 + 5 =", calculator.add());
console.log("10 - 5 =", calculator.subtract());
console.log("10 * 5 =", calculator.multiply());
console.log("Description:", calculator.describe());

// Method shorthand (ES6)
let circle = {
    radius: 5,

    area() {
        return Math.PI * this.radius * this.radius;
    },

    circumference() {
        return 2 * Math.PI * this.radius;
    },

    setRadius(newRadius) {
        this.radius = newRadius;
    }
};

console.log(`Circle with radius ${circle.radius}:`);
console.log("Area:", circle.area().toFixed(2));
console.log("Circumference:", circle.circumference().toFixed(2));

circle.setRadius(10);
console.log(`After changing radius to ${circle.radius}:`);
console.log("Area:", circle.area().toFixed(2));

console.log("\n=== Nested Objects ===");
let company = {
    name: "Tech Solutions Inc.",
    founded: 2010,
    address: {
        street: "123 Innovation Drive",
        city: "San Francisco",
        state: "CA",
        zipCode: "94105"
    },
    employees: [
        { name: "John Doe", position: "CEO", salary: 150000 },
        { name: "Jane Smith", position: "CTO", salary: 130000 },
        { name: "Bob Johnson", position: "Developer", salary: 90000 }
    ],
    departments: {
        engineering: {
            head: "Jane Smith",
            teamSize: 15
        },
        sales: {
            head: "Mike Wilson",
            teamSize: 8
        }
    }
};

console.log("Company name:", company.name);
console.log("Company address:", company.address);
console.log("Street address:", company.address.street);
console.log("City:", company.address.city);

// Accessing nested array elements
console.log("First employee:", company.employees[0]);
console.log("CEO name:", company.employees[0].name);

// Accessing deeply nested properties
console.log("Engineering head:", company.departments.engineering.head);
console.log("Sales team size:", company.departments.sales.teamSize);

console.log("\n=== Object Static Methods ===");
let user = {
    name: "Charlie Brown",
    age: 35,
    email: "charlie@example.com",
    active: true
};

console.log("Object.keys(user):", Object.keys(user));
console.log("Object.values(user):", Object.values(user));
console.log("Object.entries(user):", Object.entries(user));

// Iterating over object entries
console.log("Iterating over user properties:");
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

console.log("\n=== Object References vs Values ===");
let originalObject = {
    name: "Original",
    value: 100
};

let referenceCopy = originalObject; // Reference copy
let shallowCopy = { ...originalObject }; // Shallow copy using spread

console.log("Original object:", originalObject);
console.log("Reference copy:", referenceCopy);
console.log("Shallow copy:", shallowCopy);

// Modifying the original affects the reference copy
originalObject.value = 200;
console.log("After changing original.value to 200:");
console.log("Original object:", originalObject);
console.log("Reference copy:", referenceCopy); // Changed!
console.log("Shallow copy:", shallowCopy);     // Unchanged

// Modifying the shallow copy doesn't affect others
shallowCopy.name = "Modified";
console.log("After changing shallowCopy.name to 'Modified':");
console.log("Original object:", originalObject);
console.log("Reference copy:", referenceCopy);
console.log("Shallow copy:", shallowCopy);

console.log("\n=== Destructuring Objects ===");
let product = {
    id: 123,
    title: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    inStock: true,
    specs: {
        color: "Black",
        weight: "250g"
    }
};

// Basic destructuring
let { title, price, category } = product;
console.log("Destructured values:");
console.log("Title:", title);
console.log("Price:", price);
console.log("Category:", category);

// Destructuring with different variable names
let { id: productId, title: productName } = product;
console.log("Product ID:", productId);
console.log("Product Name:", productName);

// Destructuring nested objects
let { specs: { color, weight } } = product;
console.log("Color:", color);
console.log("Weight:", weight);

// Destructuring with default values
let { brand = "Unknown", warranty = "1 year" } = product;
console.log("Brand:", brand);
console.log("Warranty:", warranty);

// Rest operator in destructuring
let { id, ...productDetails } = product;
console.log("ID:", id);
console.log("Product details:", productDetails);

console.log("\n=== Object Prototypes and Inheritance ===");
let animal = {
    type: "Animal",
    speak: function() {
        return "Some sound";
    }
};

let dog = Object.create(animal);
dog.type = "Dog";
dog.breed = "Golden Retriever";
dog.speak = function() {
    return "Woof!";
};

console.log("Animal:", animal);
console.log("Dog:", dog);
console.log("Dog speaks:", dog.speak());
console.log("Dog type:", dog.type);
console.log("Dog has 'type' property:", dog.hasOwnProperty("type"));
console.log("Dog has 'speak' property:", dog.hasOwnProperty("speak"));

console.log("\n=== Object Freezing and Sealing ===");
let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
};

console.log("Original config:", config);

// Object.freeze() prevents adding, deleting, or modifying properties
Object.freeze(config);
config.newProperty = "test"; // Won't work
config.timeout = 10000;     // Won't work
delete config.retries;      // Won't work

console.log("After trying to modify frozen object:", config);

// Object.seal() allows modifying existing properties but not adding/deleting
let settings = {
    theme: "light",
    language: "en"
};

Object.seal(settings);
settings.theme = "dark";     // Works
settings.newSetting = "test"; // Won't work
delete settings.language;    // Won't work

console.log("Sealed settings after modification:", settings);

console.log("\n=== Computed Property Names ===");
let propertyName1 = "firstName";
let propertyName2 = "lastName";

let person2 = {
    [propertyName1]: "John",
    [propertyName2]: "Doe",
    ["full" + "Name"]: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Person with computed properties:", person2);
console.log("Full name:", person2.fullName());

console.log("\n=== Object.assign() for Merging ===");
let defaults = {
    theme: "light",
    language: "en",
    fontSize: 14
};

let userPrefs = {
    theme: "dark",
    fontSize: 16
};

let mergedSettings = Object.assign({}, defaults, userPrefs);
console.log("Merged settings:", mergedSettings);

// Original objects are unchanged
console.log("Defaults still:", defaults);
console.log("User prefs still:", userPrefs);
*/