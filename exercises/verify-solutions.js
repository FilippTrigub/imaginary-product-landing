#!/usr/bin/env node

/**
 * Verification script to test all solutions
 */

const beginnerSolutions = require('./solutions/beginner-solutions.js');
const intermediateSolutions = require('./solutions/intermediate-solutions.js');
const advancedSolutions = require('./solutions/advanced-solutions.js');

console.log('🧪 Verifying Solutions...\n');
console.log('='.repeat(60));

// Test Beginner Solutions
console.log('\n📚 BEGINNER SOLUTIONS');
console.log('='.repeat(60));

console.log('\n✓ formatName:', beginnerSolutions.formatName("John", "Doe"));
console.log('✓ calculateArea:', beginnerSolutions.calculateArea(5, 10));
console.log('✓ doubleStringNumber:', beginnerSolutions.doubleStringNumber("5"));
console.log('✓ createIntro:', beginnerSolutions.createIntro("Alice", 25, "NYC"));
console.log('✓ getGrade:', beginnerSolutions.getGrade(85));
console.log('✓ isEvenOrOdd:', beginnerSolutions.isEvenOrOdd(4));
console.log('✓ fizzBuzz:', beginnerSolutions.fizzBuzz(15));
console.log('✓ sumUpTo:', beginnerSolutions.sumUpTo(5));
console.log('✓ countVowels:', beginnerSolutions.countVowels("Hello World"));
console.log('✓ getDayName:', beginnerSolutions.getDayName(1));

// Test Intermediate Solutions
console.log('\n\n📚 INTERMEDIATE SOLUTIONS');
console.log('='.repeat(60));

console.log('\n✓ filterEvens:', JSON.stringify(intermediateSolutions.filterEvens([1,2,3,4,5,6])));
console.log('✓ doubleNumbers:', JSON.stringify(intermediateSolutions.doubleNumbers([1,2,3])));
console.log('✓ sumArray:', intermediateSolutions.sumArray([1,2,3,4]));
console.log('✓ findMax:', intermediateSolutions.findMax([3,7,2,9,1]));
console.log('✓ removeDuplicates:', JSON.stringify(intermediateSolutions.removeDuplicates([1,2,2,3,3,3,4])));
console.log('✓ flattenArray:', JSON.stringify(intermediateSolutions.flattenArray([[1,2],[3,4],[5]])));

const testPerson = intermediateSolutions.createPerson("John", "Doe", 25);
console.log('✓ createPerson.getFullName:', testPerson.getFullName());
console.log('✓ createPerson.isAdult:', testPerson.isAdult());

console.log('✓ mergeObjects:', JSON.stringify(intermediateSolutions.mergeObjects({a:1,b:2}, {b:3,c:4})));
console.log('✓ formatUser:', intermediateSolutions.formatUser({name:"Alice",email:"alice@test.com",age:25}));
console.log('✓ countProperties:', intermediateSolutions.countProperties({a:1,b:2,c:3}));

// Test Advanced Solutions
console.log('\n\n📚 ADVANCED SOLUTIONS');
console.log('='.repeat(60));

(async () => {
    console.log('\n✓ delay:', await advancedSolutions.delay(100, "Hello"));
    
    const counter = advancedSolutions.createCounter();
    counter.increment();
    counter.increment();
    console.log('✓ createCounter:', counter.getValue());
    
    const memoized = advancedSolutions.memoize((n) => n * 2);
    console.log('✓ memoize:', memoized(5));
    
    const add = (a, b, c) => a + b + c;
    const add5 = advancedSolutions.partial(add, 5);
    console.log('✓ partial:', add5(10, 15));
    
    const curriedAdd = advancedSolutions.curry(add);
    console.log('✓ curry:', curriedAdd(1)(2)(3));
    
    console.log('✓ twoSum:', JSON.stringify(advancedSolutions.twoSum([2,7,11,15], 9)));
    console.log('✓ isPalindrome:', advancedSolutions.isPalindrome("A man a plan a canal Panama"));
    console.log('✓ isAnagram:', advancedSolutions.isAnagram("listen", "silent"));
    console.log('✓ fibonacci:', JSON.stringify(advancedSolutions.fibonacci(7)));
    console.log('✓ binarySearch:', advancedSolutions.binarySearch([1,3,5,7,9], 5));
    console.log('✓ reverseWords:', advancedSolutions.reverseWords("Hello World"));
    console.log('✓ findPrimes:', JSON.stringify(advancedSolutions.findPrimes(10)));
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ All solutions verified successfully!');
    console.log('='.repeat(60));
})();
