# JavaScript Beginner Exercises

These exercises cover fundamental JavaScript concepts. Try to solve them using only basic JavaScript.

## Exercise 1: Variables and Data Types

**Goal:** Declare variables of different data types and log their values and types to the console.

1. Declare a variable `userName` and assign it your name (string).
2. Declare a variable `userAge` and assign it your age (number).
3. Declare a variable `isStudent` and assign it a boolean value indicating if you are a student.
4. Declare a variable `favoriteColors` and assign it an array of 3-5 colors (strings).
5. Declare a variable `userInfo` and assign it an object with properties `name`, `age`, and `isStudent` (use the variables you just created).
6. Use `console.log()` to print the value of each variable.
7. Use `console.log()` to print the data type of each variable using `typeof`.

**Expected Output Example:**
```
John Doe
25
true
["blue", "green", "red"]
{ name: "John Doe", age: 25, isStudent: true }
string
number
boolean
object
object
```

## Exercise 2: Basic Arithmetic Operators

**Goal:** Perform basic arithmetic operations and store the results.

1. Declare two numbers: `num1 = 10` and `num2 = 5`.
2. Calculate their sum and store it in a variable `sum`.
3. Calculate their difference and store it in `difference`.
4. Calculate their product and store it in `product`.
5. Calculate `num1` divided by `num2` and store it in `quotient`.
6. Calculate the remainder when `num1` is divided by `num2` and store it in `remainder`.
7. Use `console.log()` to print all results.

**Expected Output Example:**
```
Sum: 15
Difference: 5
Product: 50
Quotient: 2
Remainder: 0
```

## Exercise 3: Conditional Statements (if/else)

**Goal:** Write code that makes decisions based on conditions.

1. Declare a variable `temperature` and assign it a number (e.g., 20).
2. Write an `if-else if-else` statement:
   - If `temperature` is greater than 25, log "It's hot outside!"
   - Else if `temperature` is between 15 and 25 (inclusive), log "The weather is pleasant."
   - Else, log "It's cold outside!"
3. Test with different `temperature` values.

**Expected Output Examples:**
- `temperature = 30`: "It's hot outside!"
- `temperature = 20`: "The weather is pleasant."
- `temperature = 10`: "It's cold outside!"

## Exercise 4: Loops (for loop)

**Goal:** Use a `for` loop to perform repetitive tasks.

1. Write a `for` loop that prints numbers from 1 to 10 to the console.
2. Modify the loop to print only even numbers from 2 to 20.
3. Write another `for` loop that iterates through the `favoriteColors` array from Exercise 1 and prints each color.

**Expected Output Example (part 1 & 2):
```
1
2
...
10
2
4
...
20
```

## Exercise 5: Functions

**Goal:** Define and call functions to encapsulate reusable code.

1. Define a function `greet(name)` that takes a name as an argument and logs "Hello, [name]!" to the console.
2. Call `greet()` with your name.
3. Define a function `add(a, b)` that takes two numbers as arguments, returns their sum.
4. Call `add()` with two numbers and log the result.
5. Define a function `isEven(number)` that takes a number, returns `true` if it's even, `false` otherwise.
6. Call `isEven()` with a few numbers and log the results.

**Expected Output Example:**
```
Hello, Alice!
15
true
false
```

## Exercise 6: Arrays

**Goal:** Practice common array operations.

1. Declare an array `fruits = ["apple", "banana", "cherry"]`.
2. Add "date" to the end of the `fruits` array.
3. Remove "banana" from the `fruits` array.
4. Access and print the first element of the array.
5. Print the total number of elements in the array.
6. Use a `for` loop to print each fruit in the updated `fruits` array.

**Expected Output Example:**
```
["apple", "cherry", "date"]
apple
3
apple
cherry
date
```

## Exercise 7: Objects

**Goal:** Work with JavaScript objects.

1. Declare an object `book` with properties: `title` (string), `author` (string), `year` (number), and `isAvailable` (boolean).
2. Access and print the `title` and `author` properties.
3. Add a new property `genre` (string) to the `book` object.
4. Update the `isAvailable` property to `false`.
5. Print the entire `book` object.
6. Create an array `bookshelf` and add at least two `book` objects (you can create new ones or modify your existing `book` object).
7. Iterate through the `bookshelf` array and print the `title` of each book.

**Expected Output Example:**
```
Title: The Great Adventure
Author: Jane Doe
{ title: "The Great Adventure", author: "Jane Doe", year: 2020, isAvailable: false, genre: "Fantasy" }
The Great Adventure
Another Book Title
```
