/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {

    let result = ''
    let counter = 0

    for (let letter of s) {

        if (letter === '(') {
            counter++
            result += letter
        } else if (letter === ')') {
            if (counter > 0) {
                counter--
                result += letter
            }
        } else {
            result += letter
        }
    }

    // Handle remaining unmatched opening parentheses (reverse iteration)
    let resultBuilder = '';
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] === '(' && counter > 0) {
            counter--;
        } else {
            resultBuilder = result[i] + resultBuilder;
        }
    }

    return resultBuilder;
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"))
console.log(minRemoveToMakeValid("))(("))


// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.