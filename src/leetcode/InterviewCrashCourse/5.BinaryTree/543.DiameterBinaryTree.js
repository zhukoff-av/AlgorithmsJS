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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {

    let diameter = 0
    longestPath(root)
    return diameter


    function longestPath(node) {
        if (node === null) return 0

        let leftPath = longestPath(node.left)
        let rightPath = longestPath(node.right)

        diameter = Math.max(diameter, leftPath + rightPath)

        return Math.max(leftPath, rightPath) + 1
    }


};