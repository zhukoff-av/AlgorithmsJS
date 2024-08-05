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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    let result = root.val

    function helper(node, num) {
        if (!node) return

        if (Math.abs(num - node.val) < Math.abs(num - result)) result = node.val
        if (Math.abs(num - node.val) === Math.abs(num - result)) result = Math.min(node.val, result)

        helper(node?.left, num)
        helper(node?.right, num)
    }

    helper(root, target)
    return result
};
