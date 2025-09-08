// Problem Statement - https://leetcode.com/problems/diameter-of-binary-tree/description/?envType=problem-list-v2&envId=tree

function diameterOfBinaryTree(root) {
    let diameter = [0]; // using array to mimic pass-by-reference
    maxDepth(root, diameter);
    return diameter[0];
}

function maxDepth(root, diameter) {
    if (root === null) return 0;

    const leftHeight = maxDepth(root.left, diameter);
    const rightHeight = maxDepth(root.right, diameter);

    // Update diameter: max path through this node
    diameter[0] = Math.max(diameter[0], leftHeight + rightHeight);

    // Return height of this subtree
    return 1 + Math.max(leftHeight, rightHeight);
}
