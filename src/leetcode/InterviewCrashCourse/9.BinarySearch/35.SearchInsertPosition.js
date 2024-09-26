// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
//     You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2
const searchInsertPosition = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    let pivot

    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2)

        if (nums[pivot] === target) return nums[pivot]

        if (target < nums[pivot]) {
            right = pivot - 1
        } else {
            left = pivot + 1
        }
    }

    return left
}


console.log(searchInsertPosition([1, 3, 5, 6], 5))