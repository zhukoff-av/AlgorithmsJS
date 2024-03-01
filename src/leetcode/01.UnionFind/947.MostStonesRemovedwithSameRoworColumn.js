

const removeStones = (stones) => {

    // init
    const n = stones.length
    const parent = Array(n).fill(null)

    for (let i = 0; i < n; i++) {
        parent[i] = i
    }

    // find
    const find = (node) => {
        if (parent[node] !== node) {
            node = find(parent[node])
        }
        return node
    }

    // union
    const union = (p, q) => {
        const root1 = find(p)
        const root2 = find(q)

        if (root1 === root2) return 0

        if (parent[root2] !== parent[root1]) {
            parent[root2] = root1;
        }
        return 1
    }

    let connected = stones.length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1]) {
                connected -= union(i, j)
            }
        }
    }
    return stones.length - connected
}

// Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
// Output: 5
console.log(removeStones([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]))
