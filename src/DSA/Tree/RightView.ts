class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function rightSideView(root: TreeNode | null): number[] {
    const ans: number[] = [];
    if (!root) return ans;

    const q: (TreeNode | null)[] = [];
    q.push(root);

    while (q.length > 0) {
        const queueSize = q.length;
        let node: TreeNode | null = null;

        for (let i = 0; i < queueSize; i++) {
            node = q.shift()!; // ✅ dequeue

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        // ✅ last processed node at this level is the rightmost
        if (node) ans.push(node.val);
    }

    return ans;
}