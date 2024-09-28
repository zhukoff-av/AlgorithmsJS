function smallestDivisor(nums, threshold) {

    let left = 0
    let right = Math.max(...nums)

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (feasible(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left

    function feasible(div) {
        let sum = 0
        for (let num of nums) {
            sum += Math.ceil(num / div)

            if (sum > threshold) return false
        }
        return true
    }
}

console.log(smallestDivisor([1, 2, 5, 9], 6))
console.log(smallestDivisor([44, 22, 33, 11, 1], 5))

// Test 1
// [1,2,5,9]
// 6

// Test 2
//     [44,22,33,11,1]
// 5