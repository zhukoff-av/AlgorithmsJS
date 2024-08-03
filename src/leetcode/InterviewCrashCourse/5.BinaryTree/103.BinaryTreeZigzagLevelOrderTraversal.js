/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (root === null) return []

    let queue = [root]
    let sum = 0
    let output = []
    let deep = 0

    while (queue.length > 0) {
        let size = queue.length;
        let level = []

        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            if (deep % 2 === 0) level.push(node.val)
            else level.unshift(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        output.push(level)
        deep++
    }
    return output
}