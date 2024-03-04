const numOfIslands = (grid) => {
    const parent = Array(grid).fill(null)

    for (let i = 0; i < grid.length; i++) {
        parent[i] = i
    }
    const find = (node) => {
        if (parent[node] !== node) {
            node = find(parent[node])
        }
        return node
    }

    const union = (p, q) => {
        const root1 = find(p)
        const root2 = find(q)

        if (parent[root2] !== parent[root1]) {
            parent[root2] = root1
        }
    }

    const m = grid.length
    const n = grid[0].length

    const direction = [[-1, 0], [0, -1], [1, 0], [0, 1]]


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                for (const [dx, dy] of direction) {
                    const newX = i + dx
                    const newY = j + dy
                    if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                        if (grid[newX][newY] === '1') {
                            union(i * n + j, newX * n + newY)
                        }
                    }
                }
            }

        }

    }

    // counter
    // for p[i] === i -> ++
    let counter = 0
    for (let i = 0; i < m * n; i++) {
        if (find(i) === i) {
            counter++
        }

    }

    return counter


}

const testCases = [
    {
        name: 'grid 1 island', input: [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"]
        ], expected: 1
    },
    {
        name: 'grid 3 islands', input: [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ], expected: 3
    },

]

for (const testCase of testCases) {
    const actual = numOfIslands(testCase.input);
    console.log(`Test case: ${testCase.name}`);
    console.log(`Expected: ${testCase.expected}, Actual: ${actual}`);
    if (actual === testCase.expected) {
        console.log("Passed!\n");
    } else {
        console.log('Failed!')
    }
}


