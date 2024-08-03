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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {

    if (!root) return new TreeNode(val);
    let current = root

// Iterative

// while(current) {
//     if(val > current.val){
//         if(current.right){
//             current = current.right
//         } else {
//             current.right = new TreeNode(val)
//             return root
//         }
//     }

//     else if(val < current.val){
//         if(current.left){
//             current = current.left
//         } else {
//             current.left = new TreeNode(val)
//             return root
//         }
//     }
// }

// Recursion
    if (val > root.val) {
        root.right = insertIntoBST(root.right, val)
    } else if (val < root.val) {
        root.left = insertIntoBST(root.left, val)
    }

    return root

};