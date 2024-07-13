// O(logn)
const square = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    return nums.sort((a, b) => a - b)
}

console.log(square([-4, -1, 0, 3, 10]))

/**
 * O(n)
 Two-Pointer Approach
 1. Use two pointers, one starting at the beginning (left) and one at the end (right) of the array.
 2. Compare the absolute values of the elements pointed to by the two pointers.
 3. Square the larger value and add it to the result array from the end
 (since the largest squares will go to the end of the result array).
 4. Move the pointer corresponding to the larger value inward.
 Repeat until all elements are processed.
 */
const sortedArr = (arr) => {

}