// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

function totalQueens(n) {
    const result = [];
    const board = Array.from({length: n}, () => Array(n).fill('.'))

    function solve(row, cols) {

    }

    function backtrack() {
    }

    backtrack(0)
    return result
}

console.log(totalQueens(4))