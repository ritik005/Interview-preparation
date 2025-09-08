//Problem Statement - https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/?envType=problem-list-v2&envId=tree


function zigzagLevelOrder(root) {
    const result = [];
    if (root === null) return result;

    const q = [];
    q.push(root);

    let flag = false; // controls direction

    while (q.length > 0) {
        const queSize = q.length;
        const temp = [];

        for (let i = 0; i < queSize; i++) {
            const node = q.shift(); // dequeue
            temp.push(node.val);

            if (node.left !== null) {
                q.push(node.left);
            }
            if (node.right !== null) {
                q.push(node.right);
            }
        }

        if (flag) {
            temp.reverse();
        }

        result.push(temp);
        flag = !flag; // toggle after each level
    }

    return result;
}