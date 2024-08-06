function dfsPostOrder(node) {
    const result = [];

    function recursiveTraverse(currentNode) {
        if (node == null) return;

        if (currentNode.left) {
            recursiveTraverse(currentNode.left);
        }

        if (currentNode.right) {
            recursiveTraverse(currentNode.right);
        }

        result.push(currentNode.value);

    }

    recursiveTraverse(node);

    return result;
}