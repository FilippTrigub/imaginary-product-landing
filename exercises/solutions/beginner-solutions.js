/**
 * SOLUTIONS: Beginner Exercises
 * 
 * Complete solutions for beginner-level exercises.
 */

// ============================================
// EXERCISE 1 SOLUTIONS
// ============================================

function formatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}

function calculateArea(width, height) {
    return width * height;
}

function doubleStringNumber(strNum) {
    return Number(strNum) * 2;
}

function createIntro(name, age, city) {
    return `Hi, I'm ${name}. I'm ${age} years old and I live in ${city}.`;
}

// ============================================
// EXERCISE 2 SOLUTIONS
// ============================================

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function isEvenOrOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
}

function fizzBuzz(num) {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
}

function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
    // Alternative: return (n * (n + 1)) / 2;
}

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function getDayName(dayNum) {
    switch (dayNum) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day";
    }
}

module.exports = {
    formatName,
    calculateArea,
    doubleStringNumber,
    createIntro,
    getGrade,
    isEvenOrOdd,
    fizzBuzz,
    sumUpTo,
    countVowels,
    getDayName
};
