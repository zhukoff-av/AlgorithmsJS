// time complexity: O(n^2 * α(n^2)) ≈ O(n^2)
// space complexity: O(n)
const findProvinces = (isConnected) => {

    const n = isConnected.length;
    const parent = Array(n).fill(null)

    for (let i = 0; i < n; i++) {
        parent[i] = i
    }
    const find = (node) => {
        if (parent[node] !== node) {
            node = find(parent[node])
        }
        return node;
    }

    // union
    const union = (p, q) => {
        const root1 = find(p)
        const root2 = find(q)

        if (parent[root2] !== parent[root1]) {
            parent[root2] = root1
        }
    }


    // for i for j
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] && i !== j) {
                union(i, j)
            }
        }
    }

    // count province
    let province = 0
    for (let i = 0; i < n; i++) {
        if (parent[i] === i) {
            province++
        }
    }

    return province
}

const isConnectedTC1 = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
const isConnectedTC2 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]

console.log(findProvinces(isConnectedTC1)); // Output: 2
console.log(findProvinces(isConnectedTC2)); // Output: 3