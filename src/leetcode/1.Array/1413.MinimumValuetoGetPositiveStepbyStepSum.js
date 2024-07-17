// Input: nums = [-3,2,-3,4,2]
// Output: 5

const minVal = (nums) => {

    let sum = 0
    let min = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        min = Math.min(min, sum)
    }

    return min === 1? 1: (-1*min) + 1
}

console.log(minVal([-3,2,-3,4,2]))