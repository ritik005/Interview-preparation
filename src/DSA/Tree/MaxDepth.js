function maxDepth(root) {
    if(root === null) return 0;
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
}