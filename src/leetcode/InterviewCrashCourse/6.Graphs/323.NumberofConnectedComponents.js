// Difficulty: Medium
// time complexity: O(n)
// space complexity: O(n)
const countComponents = (n, edges) => {

    const parent = Array(n).fill(null).map((_, i) => i); // Each node is its own parent initially

    const find = (node) => {
        if (parent[node] !== node) {
            parent[node] = find(parent[node]);
        }
        return parent[node];
    }

    const union = (p, q) => {
        const root1 = find(p)
        const root2 = find(q)

        if (root1 !== root2) {
            parent[root2] = root1;
        }
    }
    for (const [a, b] of edges) {
        parent[find(a)] = find(b)
    }

    let count = 0
    for (let i = 0; i < n; i++) {
        if (i === find(i)) {
            count++
        }
    }

    console.log(count)
    return count
}


const testCases = [
    {n: 5, input: [[0, 1], [1, 2], [3, 4]], expected: 2},
    {n: 5, input: [[0, 1], [1, 2], [2, 3], [3, 4]], expected: 1}
]

for (const test of testCases) {
    const actual = countComponents(test.n, test.input)
    console.log(`Expected: ${test.expected}, Actual: ${actual}`);
    if (actual === test.expected) {
        console.log("Passed!\n");
    } else {
        console.log('Failed!')
    }
}