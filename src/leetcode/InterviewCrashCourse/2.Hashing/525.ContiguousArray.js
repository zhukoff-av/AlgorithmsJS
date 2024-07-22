const findMaxLength = (nums) => {
    let balance = 0
    let maxLength = 0
    const map = new Map()

    map.set(0, -1)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            balance++
        } else {
            balance--
        }

        if (map.has(balance)) {
            maxLength = Math.max(maxLength, i - map.get(balance))
        } else {
            map.set(balance, i)
        }
    }
    console.log(maxLength)
    return maxLength
}

findMaxLength([0, 1])
findMaxLength([0, 1, 0])

// Example 1:
// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:
//
// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.