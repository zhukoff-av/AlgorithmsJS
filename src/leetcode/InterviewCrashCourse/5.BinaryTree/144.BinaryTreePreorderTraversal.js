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
 * @return {number[]}
 */
var preorderTraversal = function (root) {

    const stack = [root]
    let result = []

    while (stack.length !== 0) {
        root = stack.pop()

        if (root) {
            result.push(root.val)
            if (root.right) {
                stack.push(root.right)
            }
            if (root.left) {
                stack.push(root.left)
            }
        }
    }


    return result

};