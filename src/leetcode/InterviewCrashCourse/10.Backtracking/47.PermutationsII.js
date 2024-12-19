/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
    const result = []

    function backtrack(current) {
        if (nums.length === current.length) {
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
    return result;
};

// Todo Fix the case
// [1,1,2] - failed
// expected [[1,1,2],[1,2,1],[2,1,1]]

