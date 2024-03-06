

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
