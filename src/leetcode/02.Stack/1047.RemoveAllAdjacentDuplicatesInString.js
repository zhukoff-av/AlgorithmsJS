/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {

    const stack = []
    for (let letter of s) {
        stack[stack.length - 1] === letter ? stack.pop() : stack.push(letter)
    }
    return stack.join('')
};


console.log(removeDuplicates("abbaca"))
console.log(removeDuplicates("azxxzy"))


//
// Input: s = "abbaca"
// Output: "ca"
//
//
// Input: s = "azxxzy"
// Output: "ay"