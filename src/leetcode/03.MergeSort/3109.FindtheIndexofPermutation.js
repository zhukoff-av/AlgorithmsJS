// Given an array perm of length n which is a permutation of [1, 2, ..., n], return the index of perm in the
// lexicographically sorted array of all of the permutations of [1, 2, ..., n].
// Since the answer may be very large, return it modulo 109 + 7.
// Example 1:
// Input: perm = [1,2]
// Output: 0

// Example 2:
// Input: perm = [3,1,2]
// Output: 4

let counter = 0

function findIndexOfPerm(perm) {
    const n = perm.length;
    const factorial = [1];
    let index = 0;

    // Precompute factorials up to n-1
    for (let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    // Compute the index of the permutation
    for (let i = 0; i < n; i++) {
        let countSmaller = 0; // count numbers smaller than perm[i] to its right
        for (let j = i + 1; j < n; j++) {
            if (perm[j] < perm[i]) {
                countSmaller++;
            }
        }
        index += countSmaller * factorial[n - 1 - i];
    }
    return index
}

const perm = [1, 3, 2]; // Permutation of [1, 2, 3]
// console.log(findIndexOfPerm([1,2]))
console.log(findIndexOfPerm([3, 1, 2]))


