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
var deepestLeavesSum = function (root) {

    let deepestSum = 0;
    let depth = 0;
    let stack = [{node: root, currDepth: 0}];

    while (stack.length > 0) {
        let {node, currDepth} = stack.pop();

        if (node.left === null && node.right === null) {
            // if this leaf is the deepest one seen so far
            if (depth < currDepth) {
                deepestSum = node.val;  // start new sum
                depth = currDepth;      // note new depth
            } else if (depth === currDepth) {
                // if there were already leaves at this depth
                deepestSum += node.val; // update existing sum
            }
        } else {
            if (node.right !== null) {
                stack.push({node: node.right, currDepth: currDepth + 1});
            }
            if (node.left !== null) {
                stack.push({node: node.left, currDepth: currDepth + 1});
            }
        }
    }

    return deepestSum;
};