class UnionFind {
    constructor(size) {
        this.parent = Array(size).fill(null).map((_, i) => i); // Each node is its own parent initially
        this.rank = Array(size).fill(0); // Rank for path compression
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            // Union by rank
            if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}


function regionsBySlashes(grid) {
    const n = grid.length
    const totalNodes = n * n * 4;
    const uf = new UnionFind(totalNodes)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const indexBase = 4 * (i * n + j)
            // N, S, E, W
            const north = indexBase;
            const south = indexBase + 1
            const east = indexBase + 2
            const west = indexBase + 3

            if (grid[i][j] === '/') {
                uf.union(north, east)
                uf.union(south, west)
            } else if (grid[i][j] === '\\') {
                uf.union(north, west)
                uf.union(south, east)
            } else {
                uf.union(north, south)
                uf.union(north, west)
                uf.union(north, east)
            }
            if (j > 0) {
                uf.union(east, west - 4)
            }

            if (i > 0) {
                uf.union(north, south - 4 * n)
            }
        }

    }


    let region = 0

    for (let i = 0; i < totalNodes; i++) {
        if (uf.find(i) === i) region++
    }

    return region

}

// Time Complexity: O(N^2 * 4 * α(N^2)) = O(N^2 * α(N^2)) ≈ O(N^2), where N is the length of the grid
// Space Complexity: O(N^2) for the UnionFind data structure

// Test Cases:
const testCases = [
    {input: [" /", "/ "], expected: 2},
    {input: [" /", "  "], expected: 1},
    {input: ["/\\", "\\/"], expected: 5},
    {input: ["  ", "  "], expected: 4},
    {input: ["/\\", "\\/\\"], expected: 6}
];

// Improved error handling and output formatting
for (const testCase of testCases) {
    const result = regionsBySlashes(testCase.input);
    console.log(`Input: ${testCase.input.join('')}`); // Join array elements for better display
    console.log(`Expected: ${testCase.expected}, Output: ${result}`);
    if (result !== testCase.expected) {
        console.error(`Error: Test case failed for input '${testCase.input.join('')}'!`);
    }
}
