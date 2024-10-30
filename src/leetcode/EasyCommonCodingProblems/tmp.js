// Input: nums = [1,3,5,6], target = 5
// Output: 2

function binarySearch(nums, target) {
    let pivot
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        pivot = Math.floor((left + right) / 2)

        if (nums[pivot] === target) return pivot;

        if (nums[pivot] > target) right = pivot - 1

        else {
            left = pivot + 1
        }
    }

    return left;
}

console.log(binarySearch([1, 3, 5, 6], 5))