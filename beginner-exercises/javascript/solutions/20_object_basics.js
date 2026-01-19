/**
 * Exercise 20: Object Basics
 * Difficulty: Medium
 *
 * Task: Create an object representing a student with properties.
 *
 * Instructions:
 * 1. Create an object with properties: name, age, grade
 * 2. Print the entire object
 * 3. Print specific properties
 * 4. Add a new property (school)
 * 5. Print the updated object
 */

// Solution:
const student = {
    name: "Alice",
    age: 16,
    grade: "A"
};

console.log("Student object:", student);
console.log("Name:", student.name);
console.log("Grade:", student.grade);

student.school = "Lincoln High School";
console.log("Updated student object:", student);
