/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = []

    for (let ch of s) {
        if (stack.length > 0 && Math.abs(ch.charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32) {
            stack.pop()
        } else {
            stack.push(ch)
        }
    }


    return stack.join('')
};