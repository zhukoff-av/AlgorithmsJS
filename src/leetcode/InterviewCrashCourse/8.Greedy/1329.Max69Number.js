/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {

    let nums = Array.from(num.toString())

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === '6') {
            nums[i] = '9'
            break;
        }
    }

    return nums.join('')
};