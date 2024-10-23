
// Given two strings s and t, return true if t is an
// anagram of s, and false otherwise.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    return sortString(s) === sortString(t)
};

const sortString = (str) => {
    return str
        .split('')
        .sort()
        .join('')
}

console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('hello', 'world'))
// listen
// silent