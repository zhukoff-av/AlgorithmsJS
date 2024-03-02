





const numOfIslands = (grid) => {


}

const testCases = [
    {name: '0, 0', input: [['0', '0']], expected: 0},
    {name: '0, 1', input: [['0', '1']], expected: 1},
    {name: '1, 0', input: [['1', '0']], expected: 1},
    {name: '1, 1', input: [['1', '1']], expected: 1},
    {name: '1, 0, 1', input: [['1', '0', '1']], expected: 2},
    {name: '1, 1, 0, 1', input: [['1', '1', '0', '1']], expected: 2},
    {name: '1, 1, 0, 1, 1, 1, 0', input: [['1', '1', '0', '1', '1', '1', '0']], expected: 2},
    {name: '1, 1, 0, 1, 0, 1, 0', input: [['1', '1', '0', '1', '0', '1', '0']], expected: 3},
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
    const result = numOfIslands(testCase.input)
    console.log(`Test ${testCase.name} = ${result}`)

    if (result !== testCase.expected) {
        console.error(`Test failed! Expected ${testCase.expected}`)
    }
}


