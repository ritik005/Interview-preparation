//A height-balanced binary tree is a binary tree in which the depth of the two 
// subtrees of every node never differs by more than one.

function isBalanced(root) {
    return heightOfBT(root) !== -1;
}

function heightOfBT(root) {
    if (root === null) return 0;

    const leftHeight = heightOfBT(root.left);
    if (leftHeight === -1) return -1; // left subtree not balanced

    const rightHeight = heightOfBT(root.right);
    if (rightHeight === -1) return -1; // right subtree not balanced

    if (Math.abs(leftHeight - rightHeight) > 1) return -1; // height difference > 1

    return Math.max(leftHeight, rightHeight) + 1;
}