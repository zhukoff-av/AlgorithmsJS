// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return the number of distinct solutions to the n-queens puzzle.
//  Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.


function totalNQueen(n) {
    let count = 0;

    function solve(row, cols, diag1, diag2) {

        if (row === n) {
            count++
            return;
        }

        for (let col = 0; col < n; col++) {
            const d1 = row - col
            const d2 = row + col

            if (!cols.has(col) && !diag1.has(d1) && !diag2.has(d2)) {
                // add
                cols.add(col)
                diag1.add(d1)
                diag2.add(d2)
                // backtrack
                solve(row + 1, cols, diag1, diag2)

                // remove
                cols.delete(col)
                diag1.delete(d1)
                diag2.delete(d2)
            }

        }
    }

    solve(0, new Set(), new Set(), new Set())
    return count;
}

console.log(totalNQueen(4))