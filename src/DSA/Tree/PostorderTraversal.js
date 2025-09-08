/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//Recursive Solution
function postorderTraversal(root, result) {
    if(root === null) return;

    postorderTraversal(root.left);
    postorderTraversal(root.right);
    result.push(root.val);
}

let result = [];
postorderTraversal(root, result);

//Iterative Solution

