/**
 * Exercise 09: Basic Algorithms
 *
 * Algorithms are step-by-step procedures for solving problems.
 * This exercise covers fundamental algorithms that every programmer should know.
 *
 * Task:
 * 1. Implement factorial calculation (recursive and iterative)
 * 2. Generate Fibonacci sequence
 * 3. Check if a number is prime
 * 4. Find the maximum value in an array
 * 5. Calculate the sum of an array
 * 6. Reverse a string
 * 7. Check if a string is a palindrome
 * 8. Implement linear search
 * 9. Implement bubble sort
 * 10. Calculate the greatest common divisor (GCD)
 *
 * To run this exercise:
 * node exercises/exercise09.js
 */

// TODO: Factorial function (recursive)
// function factorial(n) {
//     if (n <= 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// TODO: Factorial function (iterative)
// function factorialIterative(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// TODO: Fibonacci sequence
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// TODO: Check if prime
// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;
//     if (n % 2 === 0 || n % 3 === 0) return false;

//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) return false;
//     }
//     return true;
// }

// TODO: Find maximum in array
// function findMax(arr) {
//     if (arr.length === 0) return undefined;
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// TODO: Sum of array
// function sumArray(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         sum += num;
//     }
//     return sum;
// }

// TODO: Reverse a string
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// TODO: Check palindrome
// function isPalindrome(str) {
//     let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let reversed = cleanStr.split('').reverse().join('');
//     return cleanStr === reversed;
// }

// TODO: Linear search
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// TODO: Bubble sort
// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// TODO: Greatest Common Divisor (GCD)
// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

/*
SOLUTION:
console.log("=== Factorial Calculations ===");
// Recursive factorial
function factorial(n) {
    if (n < 0) return undefined; // Factorial not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Iterative factorial
function factorialIterative(n) {
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log("Factorial of 5 (recursive):", factorial(5));
console.log("Factorial of 5 (iterative):", factorialIterative(5));
console.log("Factorial of 0:", factorial(0));
console.log("Factorial of 10:", factorial(10));

console.log("\n=== Fibonacci Sequence ===");
function fibonacci(n) {
    if (n < 0) return undefined;
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Recursive version (less efficient for large n)
function fibonacciRecursive(n) {
    if (n < 0) return undefined;
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i <= 10; i++) {
    console.log(`F(${i}) = ${fibonacci(i)}`);
}

console.log("F(20) =", fibonacci(20));

console.log("\n=== Prime Number Checking ===");
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Check divisibility by numbers of form 6k ± 1
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

console.log("Prime numbers between 1 and 50:");
let primes = [];
for (let i = 2; i <= 50; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}
console.log(primes.join(", "));

console.log("Is 17 prime?", isPrime(17));
console.log("Is 25 prime?", isPrime(25));
console.log("Is 97 prime?", isPrime(97));

console.log("\n=== Array Operations ===");
function findMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    if (arr.length === 0) return undefined;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function averageArray(arr) {
    if (arr.length === 0) return 0;
    return sumArray(arr) / arr.length;
}

let numbers = [23, 67, 12, 89, 45, 78, 34, 91, 56, 8];
console.log("Array:", numbers);
console.log("Maximum:", findMax(numbers));
console.log("Minimum:", findMin(numbers));
console.log("Sum:", sumArray(numbers));
console.log("Average:", averageArray(numbers).toFixed(2));

console.log("\n=== String Operations ===");
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverseStringArray(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = cleanStr.split('').reverse().join('');
    return cleanStr === reversed;
}

let testStrings = ["hello", "racecar", "A man, a plan, a canal: Panama", "JavaScript"];

console.log("String reversal:");
testStrings.forEach(str => {
    console.log(`"${str}" → "${reverseString(str)}"`);
});

console.log("\nPalindrome checking:");
let palindromeTests = ["racecar", "hello", "A man, a plan, a canal: Panama", "Madam", "12321", "not a palindrome"];
palindromeTests.forEach(str => {
    console.log(`"${str}" is palindrome: ${isPalindrome(str)}`);
});

console.log("\n=== Search Algorithms ===");
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let searchArray = [12, 23, 34, 45, 56, 67, 78, 89, 91];
let sortedArray = [8, 12, 23, 34, 45, 56, 67, 78, 89, 91];

console.log("Linear search in", searchArray);
console.log("Index of 45:", linearSearch(searchArray, 45));
console.log("Index of 100:", linearSearch(searchArray, 100));

console.log("\nBinary search in", sortedArray);
console.log("Index of 45:", binarySearch(sortedArray, 45));
console.log("Index of 100:", binarySearch(sortedArray, 100));

console.log("\n=== Sorting Algorithms ===");
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce the range for next pass
    } while (swapped);

    return arr;
}

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the minimum element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

let unsortedArray = [64, 34, 25, 12, 22, 11, 90, 5, 77, 30];
console.log("Original array:", unsortedArray);

let bubbleSorted = [...unsortedArray]; // Copy array
console.log("Bubble sort:", bubbleSort(bubbleSorted));

let selectionSorted = [...unsortedArray]; // Copy array
console.log("Selection sort:", selectionSort(selectionSorted));

console.log("\n=== Mathematical Algorithms ===");
function gcd(a, b) {
    // Euclidean algorithm
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    // Least Common Multiple
    return Math.abs(a * b) / gcd(a, b);
}

function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return n % 2 !== 0;
}

function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent < 0) return 1 / power(base, -exponent);

    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log("GCD of 48 and 18:", gcd(48, 18));
console.log("LCM of 12 and 15:", lcm(12, 15));
console.log("Is 42 even?", isEven(42));
console.log("Is 37 odd?", isOdd(37));
console.log("2^8 =", power(2, 8));
console.log("3^4 =", power(3, 4));

console.log("\n=== Array Algorithms ===");
function removeDuplicates(arr) {
    let unique = [];
    for (let item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}

function countOccurrences(arr, target) {
    let count = 0;
    for (let item of arr) {
        if (item === target) {
            count++;
        }
    }
    return count;
}

function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}

let arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 3, 6, 7, 5, 8];
console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Remove duplicates:", removeDuplicates(arrayWithDuplicates));
console.log("Count of 2's:", countOccurrences(arrayWithDuplicates, 2));
console.log("Duplicates found:", findDuplicates(arrayWithDuplicates));

console.log("\n=== String Algorithms ===");
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

function isAnagram(str1, str2) {
    let clean1 = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    let clean2 = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return clean1 === clean2;
}

let testString = "Hello, World!";
console.log(`Vowels in "${testString}":`, countVowels(testString));

let sentence = "hello world from javascript";
console.log(`Capitalize: "${sentence}" → "${capitalizeWords(sentence)}"`);

console.log("Anagram check:");
console.log('"listen" and "silent":', isAnagram("listen", "silent"));
console.log('"hello" and "world":', isAnagram("hello", "world"));
console.log('"Astronomer" and "Moon starer":', isAnagram("Astronomer", "Moon starer"));
*/