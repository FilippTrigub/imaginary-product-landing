# JavaScript Coding Challenges

A collection of 5 JavaScript coding challenges ranging from beginner to intermediate difficulty levels.

---

## Challenge 1: Reverse a String (Beginner)

**Description:**
Write a function that takes a string as input and returns it reversed.

**Requirements:**
- Input: a string value
- Output: the same string in reverse order
- Handle empty strings gracefully

**Example:**
```javascript
reverseString("hello") // Output: "olleh"
reverseString("JavaScript") // Output: "tpircSavaJ"
reverseString("") // Output: ""
```

**Constraints:**
- Do not use the built-in reverse() array method (challenge yourself!)
- Time complexity should be O(n)

---

## Challenge 2: Find the Longest Word (Beginner)

**Description:**
Write a function that takes a string containing multiple words and returns the longest word.

**Requirements:**
- Input: a string with multiple words separated by spaces
- Output: the longest word as a string
- If multiple words have the same length, return the first one
- Handle strings with single words

**Example:**
```javascript
longestWord("The quick brown fox jumps over") // Output: "quick"
longestWord("JavaScript is awesome") // Output: "JavaScript"
longestWord("a") // Output: "a"
```

**Constraints:**
- Case-insensitive comparison for length
- Time complexity should be O(n)

---

## Challenge 3: Check if a Number is Prime (Intermediate)

**Description:**
Write a function that determines whether a given number is prime.

**Requirements:**
- Input: a positive integer
- Output: boolean (true if prime, false otherwise)
- A prime number is only divisible by 1 and itself
- Handle edge cases (numbers less than 2)

**Example:**
```javascript
isPrime(7) // Output: true
isPrime(10) // Output: false
isPrime(2) // Output: true
isPrime(1) // Output: false
isPrime(0) // Output: false
```

**Constraints:**
- Time complexity should be O(√n)
- Optimize for larger numbers

---

## Challenge 4: Array Deduplication (Intermediate)

**Description:**
Write a function that removes all duplicate values from an array while maintaining the original order of first occurrence.

**Requirements:**
- Input: an array that may contain duplicate elements
- Output: a new array with duplicates removed
- Preserve the order of first occurrence
- Handle mixed data types (numbers, strings, etc.)

**Example:**
```javascript
removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // Output: [1, 2, 3, 4, 5]
removeDuplicates(['a', 'b', 'a', 'c']) // Output: ['a', 'b', 'c']
removeDuplicates([1, '1', 1, 2, '2']) // Output: [1, '1', 2, '2']
removeDuplicates([]) // Output: []
```

**Constraints:**
- Time complexity should be O(n)
- Space complexity should be O(n)

---

## Challenge 5: Fibonacci Sequence Generator (Intermediate)

**Description:**
Write a function that generates the Fibonacci sequence up to a specified length or maximum value.

**Requirements:**
- Input: either count (number of elements) or maxValue (maximum value)
- Output: an array containing Fibonacci numbers
- The sequence starts with 0 and 1
- Handle edge cases (count < 1)

**Example:**
```javascript
fibonacciSequence(5) // Output: [0, 1, 1, 2, 3]
fibonacciSequence(7) // Output: [0, 1, 1, 2, 3, 5, 8]
fibonacciSequence(1) // Output: [0]
fibonacciSequence(0) // Output: []

// Alternative: by max value
fibonacciMax(10) // Output: [0, 1, 1, 2, 3, 5, 8]
fibonacciMax(50) // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

**Constraints:**
- Time complexity should be O(n)
- Space complexity should be O(n)
- Avoid using recursion (use iteration for better performance)

---

## How to Use These Challenges

1. **Read** each challenge carefully
2. **Implement** your solution based on the requirements
3. **Test** your code with the provided examples
4. **Optimize** if needed to meet the complexity constraints
5. **Compare** your solution with the reference solutions provided in `SOLUTIONS.js`

Good luck with the challenges!
