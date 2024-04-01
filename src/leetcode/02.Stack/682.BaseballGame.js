/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {

    const stack = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'C') {
            stack.pop();
        } else if (operations[i] === 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } else if (operations[i] === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else {
            stack.push(parseInt(operations[i]));
        }
    }

    return stack.reduce((acc, cur) => acc + cur, 0);

};

console.log(calPoints(["5", "2", "C", "D", "+"]))

// Input: ops = ["5","2","C","D","+"]
// Output: 30