/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {

    // init
    const n = edges.length
    let parent = Array(n).fill(null)

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

    // union. merge two components together
    const union = (p, q) => {
        parent[find(p)] = find(q)
    }

    // for: check if connected - return this pair

    for (let [a, b] of edges) {
        if (find(a) === find(b)) {
            return [a, b]
        } else {
            union(a, b)
        }
    }
};

// [[1,2],[1,3],[2,3]]
// [[1,2],[2,3],[3,4],[1,4],[1,5]]
const tc1 = findRedundantConnection([[1, 2], [1, 3], [2, 3]])
const tc2 = findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])

console.log(tc1)
console.log(tc2)

