function levelOrder(root){
    const result = [];

    if (root === null) return result;

    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
        const queueSize = queue.length;
        const temp = [];

        for (let i = 0; i < queueSize; i++) {
            const node = queue.shift(); // remove from front of queue
            temp.push(node.val);

            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(temp);
    }

    return result;
}