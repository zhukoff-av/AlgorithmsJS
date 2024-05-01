// 912. Sort an Array
// Medium
// Given an array of integers nums, sort the array in ascending order and return it.
//     You must solve the problem without using any built-in functions in O(nlog(n)) time complexity
//     and with the smallest space complexity possible

// to meet the requirenments time comp,... we can implement the Merge Sort algorithms.
// 1. this approach follows divide and conquer strategy
// 2. spliting in into halves recursevely
// 3. sorting those halves
// 4. and merge them together

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {

    if (nums.length < 2) return nums

    function merge(left, right) {
        const res = []

        let i = 0
        let j = 0
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                res.push(left[i])
                i++
            } else {
                res.push(right[j])
                j++
            }
        }

        res.push(...left.slice(i))
        res.push(...right.slice(j))
        return res
    }

    const mid = Math.floor(nums.length / 2)
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)

    const sortedLeft = sortArray(left)
    const sortedRight = sortArray(right)

    return merge(sortedLeft, sortedRight)

}

console.log(sortArray([5, 2, 3, 1]))
console.log(sortArray([5, 1, 1, 2, 0, 0]))