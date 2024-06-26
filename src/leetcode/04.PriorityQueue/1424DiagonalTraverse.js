/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const findDiagonalOrder = (nums) => {

    let result = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            const num = nums[i][j]
            if (!num) continue
            const diagonal = result[i + j]
            diagonal ? diagonal.unshift(num) : result[i + j] = [num]
        }
    }
    console.log(result.flat())
    return result.flat()
};


findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])