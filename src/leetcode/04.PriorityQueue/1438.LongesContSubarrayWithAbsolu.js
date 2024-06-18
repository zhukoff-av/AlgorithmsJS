/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = (nums, limit) => {

    let maxQ = []
    let minQ = []
    let left = 0
    let maxLength = 0

    for (let right = 0; right < nums.length; right++) {

        while (maxQ.length && nums[maxQ[maxQ.length - 1]] <= nums[right]) {
            maxQ.pop()
        }

        while (minQ.length && nums[minQ[minQ.length - 1]] >= nums[right]) {
            minQ.pop()
        }

        maxQ.push(right)
        minQ.push(right)

        while (nums[maxQ[0]] - nums[minQ[0]] > limit) {
            if (maxQ[0] === left) maxQ.shift()
            if (minQ[0] === left) minQ.shift()
            left++
        }

        maxLength = Math.max(maxLength, right - left + 1)

    }

    console.log(maxLength)
    return maxLength

};

longestSubarray([8, 2, 4, 7], 4)

// Input: nums = [8,2,4,7], limit = 4
// Output: 2