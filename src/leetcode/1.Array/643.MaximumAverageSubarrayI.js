// O(n)
const averageSub = (nums, k) => {

    let sum = 0

    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    let max = sum
    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[i - k] + nums[i]
        max = Math.max(max, sum)
    }

    return max / k
}

console.log(averageSub([1, 12, -5, -6, 50, 3], 4))

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000