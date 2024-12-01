// Given an array nums of distinct integers, return all the possible
// permutations
//     . You can return the answer in any order.

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const permutation = (nums) => {
    const result = []

    function backtrack(current) {

        if (current.length === nums.length) {
            result.push([...current])
            return
        }

        for (const num of nums) {
            if (!current.includes(num)) {
                current.push(num)
                backtrack(current)
                current.pop()
            }
        }
    }

    backtrack([])
    return result
}

console.log(permutation([1, 2, 3]))