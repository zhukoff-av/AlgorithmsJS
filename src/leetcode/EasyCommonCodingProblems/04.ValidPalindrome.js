// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
// removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    const originalStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // "A man, a plan, a canal: Panama" becoming "amanaplanacanalpanama"
    const reversedStr =
        originalStr
            .split('')
            .reverse()
            .join(''); // amanaplanacanalpanama
    return originalStr === reversedStr
};


// Test case 1: "A man, a plan, a canal: Panama"
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected output: true

// Test case 2: "hello world"
console.log(isPalindrome("hello world")); // Expected output: false