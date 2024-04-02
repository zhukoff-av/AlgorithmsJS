/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {

    let open = 0
    let close = 0

    for (let el of s) {
        if (el === '(') {
            open++
        } else if (!open) {
            close++
        } else {
            open--;
        }
    }
    return open + close
};

console.log(minAddToMakeValid("())"))
console.log(minAddToMakeValid("((("))

// Example 1:
//
// Input: s = "())"
// Output: 1
// Example 2:
//
// Input: s = "((("
// Output: 3