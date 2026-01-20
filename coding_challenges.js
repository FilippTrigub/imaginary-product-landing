// Coding Challenges in JavaScript

// Challenge 1: Two Sum
// Given an array of integers and a target sum, return indices of two numbers that add up to the target.
// Assume each input has exactly one solution, and you may not use the same element twice.
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];
}

// Example usage for Challenge 1
console.log("Challenge 1 - Two Sum:");
console.log("Input: [2, 7, 11, 15], target: 9");
console.log("Output:", twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]

// Challenge 2: Reverse String
// Write a function that reverses a string. The input string is given as an array of characters.
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap characters
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }

    return s;
}

// Example usage for Challenge 2
console.log("\nChallenge 2 - Reverse String:");
console.log("Input: ['h','e','l','l','o']");
const str = ['h','e','l','l','o'];
reverseString(str);
console.log("Output:", str); // Expected: ['o','l','l','e','h']

// Challenge 3: Palindrome Check
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
function isPalindrome(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the cleaned string is equal to its reverse
    return cleaned === cleaned.split('').reverse().join('');
}

// Example usage for Challenge 3
console.log("\nChallenge 3 - Palindrome Check:");
console.log("Input: 'A man, a plan, a canal: Panama'");
console.log("Output:", isPalindrome("A man, a plan, a canal: Panama")); // Expected: true

// Challenge 4: FizzBuzz
// Write a program that outputs the string representation of numbers from 1 to n.
// For multiples of three, output "Fizz" instead of the number.
// For multiples of five, output "Buzz".
// For numbers which are multiples of both three and five, output "FizzBuzz".
function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

// Example usage for Challenge 4
console.log("\nChallenge 4 - FizzBuzz:");
console.log("Input: 15");
console.log("Output:", fizzBuzz(15));
// Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]