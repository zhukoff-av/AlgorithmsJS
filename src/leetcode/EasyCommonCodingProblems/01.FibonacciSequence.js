// Recursive approach TC: O(2^n) SC: O(n)
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8))


// How to improve? -> utilize memoization
// This version stores the results of previous calculations in the memo object,
// significantly reducing redundant calls and improving the time complexity to O(n).

function fibonacciMemo(n, memo = {}) {
    if (n <= 1) return n;

    if (memo[n]) return memo[n];

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(8))