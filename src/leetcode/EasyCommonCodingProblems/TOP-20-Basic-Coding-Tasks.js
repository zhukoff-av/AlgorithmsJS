// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('')
}

// console.log(reverseString('abcdefg'))

// 2. Check if a String is a Palindrome
function isAPalindrome(str) {
    return str === str.split('').reverse().join('')
}

// console.log(isAPalindrome('abcbaa'))

// 3. Find the Maximum Number in an Array
function findTheMax(arr) {
    return Math.max(...arr)
}

// console.log(findTheMax([1, 2, 3, 5, 7, 7, 12, 15, 2, 5]))

// 4. Remove Duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)]
}

// console.log(removeDuplicates([1, 2, 3, 5, 3, 5, 1, 2, 2]))

// 5. Count Vowels in a String
function countVowels(str) {
    const vowels = 'aeuioAEUIO'
    let count = 0;

    for (let letter of str) {
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count
}

// console.log(countVowels('lhifqwoun'))

// 6. Sum of Integers from 1 to n
function sumOfIntegers(n) {
    return (n * (n + 1)) / 2
}

// console.log(sumOfIntegers(5))

// 7. Check if a Number is Prime
function isPrime(n) {
    if (n <= 1) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true
}

// console.log(isPrime(2));    // true
// console.log(isPrime(3));    // true
// console.log(isPrime(4));    // false
// console.log(isPrime(5));    // true
// console.log(isPrime(9));    // false
// console.log(isPrime(11));   // true
// console.log(isPrime(25));   // false
// console.log(isPrime(29));   // true
// console.log(isPrime(-1));   // false
// console.log(isPrime(0));    // false
// console.log(isPrime(1));    // false

// 8. Swap Two Variables Without a Temporary Variable
function swapTwoVars(a, b) {
    [a, b] = [b, a]
}

// 9. Factorial of a Number Using Recursion
function factorial(n) {
    if (n <= 1) return n

    return n * factorial(n - 1)
}

// console.log(factorial(5))
// console.log(factorial(6))
// console.log(factorial(7))
// console.log(factorial(8))

// 10. Find Fibonacci Sequence up to n Terms

function fib(n) {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
}

// console.log(fib(5))
// console.log(fib(6))
// console.log(fib(7))
// console.log(fib(8))

// 11. Filter Even Numbers from an Array
function filterEvenNr(arr) {
    return arr.filter((num) => num % 2 === 0)
}

// console.log(filterEvenNr([1,2,3,4,5,6,7,8,9,9,10,110]))

// 12. Calculate Power of a Number

function powerOfNumber(number, pow) {
    return Math.pow(number, pow)
}

// console.log(powerOfNumber(2,3))

// 13. Find GCD of Two Numbers
// Implement a function that finds the greatest common divisor (GCD) of two numbers.
function findGCD(a, b) {
    while (b) {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}

// console.log(findGCD(48, 18)); // 6
// console.log(findGCD(56, 98)); // 14
// console.log(findGCD(101, 103)); // 1 (both are prime numbers)
// console.log(findGCD(0, 5)); // 5 (any number with 0 has the GCD as the other number)
// console.log(findGCD(0, 0)); // 0 (undefined case, can be handled as needed)
// console.log(findGCD(-48, 18)); // 6 (handles negative inputs)
// console.log(findGCD(270, 192)); // 6

// 14. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(n) {
    return (n * 9 / 5) + 32
}

// console.log(celsiusToFahrenheit(0));       // Expected output: 32
// console.log(celsiusToFahrenheit(100));     // Expected output: 212
// console.log(celsiusToFahrenheit(-40));     // Expected output: -40 (since -40°C = -40°F)
// console.log(celsiusToFahrenheit(37));      // Expected output: 98.6 (body temperature)
// console.log(celsiusToFahrenheit(25));      // Expected output: 77 (a typical room temperature)
// console.log(celsiusToFahrenheit(-273.15)); // Expected output: -459.67 (absolute zero in Fahrenheit)

// 15. Binary Search in a Sorted Array
function binarySearch(arr, target) {
    let left = 0
    let right = arr.length

    for (let i = 0; i < arr.length; i++) {
        const mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) return mid

        if (arr[mid] < target) {
            left = mid + 1
        }
        if (arr[mid] > target) {
            right = mid - 1
        }
    }
    return -1
}

// // Test case 1: Target is in the middle of the array
// console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Expected output: 2
//
// // Test case 2: Target is the first element
// console.log(binarySearch([1, 3, 5, 7, 9], 1)); // Expected output: 0
//
// // Test case 3: Target is the last element
// console.log(binarySearch([1, 3, 5, 7, 9], 9)); // Expected output: 4
//
// // Test case 4: Target is not in the array
// console.log(binarySearch([1, 3, 5, 7, 9], 4)); // Expected output: -1
//
// // Test case 5: Target is smaller than the smallest element
// console.log(binarySearch([1, 3, 5, 7, 9], -1)); // Expected output: -1
//
// // Test case 6: Target is larger than the largest element
// console.log(binarySearch([1, 3, 5, 7, 9], 10)); // Expected output: -1
//
// // Test case 7: Empty array
// console.log(binarySearch([], 3)); // Expected output: -1
//
// // Test case 8: Single element array, target is present
// console.log(binarySearch([5], 5)); // Expected output: 0
//
// // Test case 9: Single element array, target is absent
// console.log(binarySearch([5], 1)); // Expected output: -1
//
// // Test case 10: Array with two elements, target is the first element
// console.log(binarySearch([3, 5], 3)); // Expected output: 0
//
// // Test case 11: Array with two elements, target is the second element
// console.log(binarySearch([3, 5], 5)); // Expected output: 1
//
// // Test case 12: Array with duplicate elements, target exists
// console.log(binarySearch([1, 2, 2, 2, 3], 2)); // Expected output: Index of any 2, e.g., 1, 2, or 3
//
// // Test case 13: Array with duplicate elements, target does not exist
// console.log(binarySearch([1, 2, 2, 2, 3], 4)); // Expected output: -1

// 16. Sum of Elements in an Array
function sumOfEl(arr) {
    return arr.reduce((sum, num) => sum + num, 0)
}

// console.log(sumOfEl([1,2,4,5]))

// 17. Reverse Words in a Sentence
function reverseWordInSentence(sentence) {
    return sentence.split('').reverse().join('')
}

// console.log(reverseWordInSentence('abc def ghi'))

// 18. Find the Most Frequent Element in an Array
function findTheMostFreqEl(arr) {
    const freq = {}
    let maxCounter = 0
    let mostFreqCount;

    for (let el of arr) {
        freq[el] = (freq[el] || 0) + 1
        if (freq[el] > maxCounter) {
            maxCounter = freq[el]
            mostFreqCount = el
        }
    }
    return mostFreqCount
}

// // Test case 1: Single most frequent element
// console.log(findTheMostFreqEl([1, 3, 1, 3, 2, 1])); // Expected output: 1
//
// // Test case 2: Multiple elements with the same frequency (returns first most frequent encountered)
// console.log(findTheMostFreqEl([1, 2, 2, 3, 3])); // Expected output: 2 or 3 (depends on implementation)
//
// // Test case 3: All elements are the same
// console.log(findTheMostFreqEl([4, 4, 4, 4])); // Expected output: 4
//
// // Test case 4: Array with only one element
// console.log(findTheMostFreqEl([7])); // Expected output: 7
//
// // Test case 5: Empty array
// console.log(findTheMostFreqEl([])); // Expected output: null
//
// // Test case 6: Array with negative numbers and zero
// console.log(findTheMostFreqEl([0, -1, -1, 2, 2, -1])); // Expected output: -1
//
// // Test case 7: Array with non-integer elements
// console.log(findTheMostFreqEl(['a', 'b', 'a', 'c', 'a'])); // Expected output: 'a'
//
// // Test case 8: Array with multiple frequent elements (same frequency, multiple options)
// console.log(findTheMostFreqEl([5, 5, 6, 6, 7, 7])); // Expected output: 5, 6, or 7 (depends on implementation)
//
// // Test case 9: Array with mixed data types
// console.log(findTheMostFreqEl(['a', 1, 'a', 2, 1, 'a'])); // Expected output: 'a'
//
// // Test case 10: Large array with distinct elements
// console.log(findTheMostFreqEl([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Expected output: 1 (or any other single element)

// 19. Check if Two Strings are Anagrams
function isAnagram(str1, str2) {
    // Remove spaces, punctuation, and convert to lowercase
    const normalize = str => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Sort and compare the characters
    return normalize(str1).split('').sort().join('') === normalize(str2).split('').sort().join('');
}

// // Test case 1: Basic anagram
// console.log(isAnagram("listen", "silent")); // Expected output: true
//
// // Test case 2: Anagram with different cases
// console.log(isAnagram("Listen", "Silent")); // Expected output: true
//
// // Test case 3: Anagram with spaces and punctuation
// console.log(isAnagram("conversation", "voices rant on")); // Expected output: true
//
// // Test case 4: Non-anagram strings
// console.log(isAnagram("hello", "world")); // Expected output: false
//
// // Test case 5: Strings of different lengths
// console.log(isAnagram("hello", "helloo")); // Expected output: false
//
// // Test case 6: Empty strings
// console.log(isAnagram("", "")); // Expected output: true
//
// // Test case 7: Anagram with numbers included
// console.log(isAnagram("123abc", "abc123")); // Expected output: true
//
// // Test case 8: Non-anagram with special characters
// console.log(isAnagram("123abc!", "123abd!")); // Expected output: false
//
// // Test case 9: Anagram with special characters ignored
// console.log(isAnagram("Dormitory!", "Dirty room!!")); // Expected output: true
//
// // Test case 10: Anagram with Unicode characters
// console.log(isAnagram("résumé", "ésumér")); // Expected output: true

// 20. Merge and Sort Two Arrays

function mergeAndSortArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b)
}

// Test case 1: Basic merge and sort
console.log(mergeAndSortArrays([1, 3, 5], [2, 4, 6]));
// Expected output: [1, 2, 3, 4, 5, 6]

// Test case 2: Arrays with duplicate elements
console.log(mergeAndSortArrays([1, 2, 2, 3], [2, 4, 5]));
// Expected output: [1, 2, 2, 2, 3, 4, 5]

// Test case 3: One empty array
console.log(mergeAndSortArrays([], [3, 1, 2]));
// Expected output: [1, 2, 3]

// Test case 4: Both arrays empty
console.log(mergeAndSortArrays([], []));
// Expected output: []

// Test case 5: Arrays with negative numbers
console.log(mergeAndSortArrays([-1, -3, 2], [-2, 0, 4]));
// Expected output: [-3, -2, -1, 0, 2, 4]

// Test case 6: Arrays with already sorted elements
console.log(mergeAndSortArrays([1, 2, 3], [4, 5, 6]));
// Expected output: [1, 2, 3, 4, 5, 6]

// Test case 7: Arrays with single elements
console.log(mergeAndSortArrays([7], [3]));
// Expected output: [3, 7]

// Test case 8: Arrays with mixed data types
console.log(mergeAndSortArrays([1, 'apple'], [3, 'banana']));
// Expected output: [1, 3, 'apple', 'banana']

// Test case 9: Arrays with identical elements
console.log(mergeAndSortArrays([5, 5, 5], [5, 5]));
// Expected output: [5, 5, 5, 5, 5]

// Test case 10: Large array sizes
console.log(mergeAndSortArrays(Array.from({length: 1000}, (_, i) => i), Array.from({length: 1000}, (_, i) => i * 2)));
// Expected output: Array of 2000 elements, sorted in ascending order