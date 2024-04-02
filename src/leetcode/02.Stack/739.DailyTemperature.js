/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = temperatures.length - 1; i >= 0; i--) {
        // is the number of days you have to wait after the ith day to get a warmer temperature
        while (stack.length && temperatures[i] >= temperatures[stack[0]]) {
            stack.shift()
        }

        if (stack.length === 0) {
            result[i] = 0;
        } else {
            result[i] = stack[0] - i;
        }
        stack.unshift(i)
    }
    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]