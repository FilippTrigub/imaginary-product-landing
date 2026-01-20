// Coding Challenges

// Challenge 1: FizzBuzz
// Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Challenge 2: Palindrome Checker
// Write a function that takes a string and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as forward.

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Challenge 3: Find the Missing Number
// You are given an array of n-1 integers, and these integers are in the range of 1 to n. There are no duplicates in the array. One of the integers is missing from the array. Write a function to find the missing integer.

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

// Challenge 4: Factorial
// Write a recursive function to find the factorial of a non-negative integer.

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Challenge 5: Reverse a String
// Write a function that takes a string and returns a new string with the reversed order of characters.

function reverseString(str) {
  return str.split("").reverse().join("");
}
