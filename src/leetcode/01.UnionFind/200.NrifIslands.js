/**
 * @param {character[][]} grid
 * @return {number}
 */
const numOfIslands = function (grid) {
    const m = grid.length
    if (m === 0) return 0
    const n = grid[0].length

    const parent = Array(m * n).fill(-1).map((_, index) => index)

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

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                for (let [dx, dy] of directions) {
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

    let counter = 0;
    const islands = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                const root = find(i * n + j);
                if (!islands.has(root)) {
                    counter++;
                    islands.add(root);
                }
            }
        }
    }

    return counter;
};

const testCases = [
    {name: 'Single element grid', input: [['0']], expected: 0},
    {name: '0, 0', input: [['0', '0']], expected: 0},
    {name: '0, 1', input: [['0', '1']], expected: 1},
    {name: '1, 0', input: [['1', '0']], expected: 1},
    {name: '1, 1', input: [['1', '1']], expected: 1},
    {name: '1, 0, 1', input: [['1', '0', '1']], expected: 2},
    {name: '1, 1, 0, 1', input: [['1', '1', '0', '1']], expected: 2},
    {name: '1, 1, 0, 1, 1, 1, 0', input: [['1', '1', '0', '1', '1', '1', '0']], expected: 2},
    {name: '1, 1, 0, 1, 0, 1, 0', input: [['1', '1', '0', '1', '0', '1', '0']], expected: 3},
    {
        name: 'grid 1 island',
        input: [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ],
        expected: 1,
    },
    {
        name: 'grid 3 islands',
        input: [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ],
        expected: 3,
    },
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
            ["1", "0", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "0"]
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


