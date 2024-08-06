function dfsPreOrder(node) {
    const result = [];

    function recursiveTraverse(currentNode) {
        if (node == null) return;

        result.push(currentNode.value);

        if (currentNode.left) {
            recursiveTraverse(currentNode.left);
        }

        if (currentNode.right) {
            recursiveTraverse(currentNode.right);
        }

    }

    recursiveTraverse(node);

    return result;
}