/**
 * Generates all possible subsets of a given array of numbers.
 *
 * @param {number[]} nums - The array of numbers to generate subsets from.
 * @returns {number[][]} - A 2D array containing all subsets of the input array.
 */
const subsets = (nums) => {

    const result = []

    /**
     * Helper function to perform backtracking and generate subsets.
     *
     * @param {number} start - The starting index for generating subsets.
     * @param {number[]} current - The current subset being generated.
     */
    function backtrack(start, current) {
        result.push([...current])

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i])
            backtrack(i + 1, current)
            current.pop()
        }
    }

    backtrack(0, [])
    return result

}

console.log(subsets([1, 2, 3])); // Example usage: generates all subsets of [1, 2, 3]