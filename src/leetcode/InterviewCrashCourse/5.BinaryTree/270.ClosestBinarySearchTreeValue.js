// import  {BinarySeachTree} from "../../05.BST/BinaryTree";

const BST = require('../../05.BST/BinaryTree')
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

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Given the root of a binary search tree and a target value, return
// the value in the BST that is closest to the target. If there are multiple answers, print the smallest.
var closestValue = function (root, target) {

    let result = root.val

    function helper(node, num) {
        if (!node) return

        if (num - node.val < num - result) result = node.val
        if (num - node.val === result) result = Math.min(result, node.val)

        helper(node?.left, num)
        helper(node?.right, num)

    }

    helper(root, target)
    return result
};

const bst = new BST()

bst.insert(1)

console.log(bst)

// console.log(closestValue([4, 2, 5, 1, 3], 3.7))