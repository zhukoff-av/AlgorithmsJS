/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {

    let result = ''
    let counter = 0

    for (let par of s) {
        if (par === '(') {
            if (counter) {
                result += par
            }
            counter++
        } else {
            counter--
            if (counter) {
                result += par
            }
        }
    }

    return result

};

console.log(removeOuterParentheses("(()())(())")) // Output: "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")) // Output: "()()()()(())"