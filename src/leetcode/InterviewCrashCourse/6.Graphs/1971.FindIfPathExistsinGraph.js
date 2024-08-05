/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    const parent = Array(n).fill(null).map((_, index) => index);

    const find = (node) => {
        if (parent[node] !== node) {
            parent[node] = find(parent[node]);
        }
        return parent[node];
    }

    const union = (p, q) => {
        const root1 = find(p);
        const root2 = find(q);

        if (root1 !== root2) {
            parent[root2] = root1;
        }
    }

    for (const [a, b] of edges) {
        union(a, b);
    }

    return find(source) === find(destination);
};