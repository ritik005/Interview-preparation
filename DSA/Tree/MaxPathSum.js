function maxPathSum(root) {
    let maxSum = [Number.NEGATIVE_INFINITY]; // equivalent to Integer.MIN_VALUE in Java
    pathSum(root, maxSum);
    return maxSum[0];
}

function pathSum(root, maxSum) {
    if (root === null) {
        return 0;
    }

    // ignore negative paths by taking max with 0
    const leftSum = Math.max(0, pathSum(root.left, maxSum));
    const rightSum = Math.max(0, pathSum(root.right, maxSum));

    // update global maximum
    maxSum[0] = Math.max(maxSum[0], root.val + leftSum + rightSum);

    // return best single path
    return Math.max(leftSum, rightSum) + root.val;
}