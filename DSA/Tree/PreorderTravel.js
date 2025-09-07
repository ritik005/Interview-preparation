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

// Recursive
function preorderTraversal(root) {
    let result = [];
    preorder(root, result);
    return result;
};

function preorder(root, result) {
    if(root === null) return;

    result.push(root.val);
    preorder(root.left, result);
    preorder(root.right, result);
    return;
}

//Iterative - using Stack
function preorderTraversal(root) {
    const result = [];
    if (root === null) return result;

    const stack = [];
    stack.push(root);

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);

        // Push right first so left is processed first
        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }

    return result;
}