// Define the TreeNode class
// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;

//     constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }


// Inorder Traversal (recursive)
function inorderTraversal(root){
    const result = [];

    function traversal(node, res) {
        if (node === null) return;
        traversal(node.left, res);   // left
        res.push(node.val);          // root
        traversal(node.right, res);  // right
    }

    traversal(root, result);
    return result;
}


// Inorder Traversal (iterative)
function inorderTraversal(root) {
    const result = [];
    const stack= [];
    let node = root;

    while (true) {
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            if (stack.length === 0) break;

            node = stack.pop();
            result.push(node.val);
            node = node.right;
        }
    }

    return result;
}