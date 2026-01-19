/**
 * Exercise 19: Prime Number Checker
 * Difficulty: Hard
 *
 * Task: Check if a number is prime.
 *
 * Instructions:
 * 1. Create a variable with a number
 * 2. A prime number is only divisible by 1 and itself
 * 3. Check if the number is prime
 * 4. Print "Prime" or "Not prime"
 */

// Solution:
const number = 17;

if (number <= 1) {
    console.log("Not prime");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Prime");
    } else {
        console.log("Not prime");
    }
}
