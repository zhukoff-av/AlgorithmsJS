function getPermutations(str) {
    if (str.length <= 1) {
        return [str];
    }

    const permutations = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        for (const perm of getPermutations(remainingChars)) {
            permutations.push(char + perm);
        }
    }
    return permutations;
}

// Test case 1: Basic input with three characters
console.log(getPermutations("abc"));
// Expected output: ["abc", "acb", "bac", "bca", "cab", "cba"]

// Test case 2: Input with two characters
console.log(getPermutations("ab"));
// Expected output: ["ab", "ba"]

// Test case 3: Input with a single character
console.log(getPermutations("a"));
// Expected output: ["a"]

// Test case 4: Input with repeated characters
console.log(getPermutations("aab"));
// Expected output: ["aab", "aba", "baa"]

// Test case 5: Empty string
console.log(getPermutations(""));
// Expected output: [""]

// Test case 6: Input with four characters
console.log(getPermutations("abcd"));
// Expected output: ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"]

// Test case 7: Input with special characters
console.log(getPermutations("a!b"));
// Expected output: ["a!b", "ab!", "!ab", "!ba", "ba!", "b!a"]

// Test case 8: Input with spaces
console.log(getPermutations("a b"));
// Expected output: ["a b", "ab ", " ab", " ba", "ba ", "b a"]

// Test case 9: Larger input to check function performance
console.log(getPermutations("abcde").length);
// Expected output: 120 (5! = 120 permutations)