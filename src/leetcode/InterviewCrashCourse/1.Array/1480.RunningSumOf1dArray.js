


// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]


const sum = (nums) => {
    let result = []
    let acc = 0

    for (let i = 0; i < nums.length; i++) {
        acc += nums[i]

        result.push(acc)
    }
    return result
}

console.log(sum([1,2,3,4]))