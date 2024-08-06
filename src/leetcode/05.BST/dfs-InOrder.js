function dfsInOrder(node){
    const result = [];

    function recursiveTraverse(currentNode){
        if (node == null) return;

        if(currentNode.left) {
            recursiveTraverse(currentNode.left);
        }

        result.push(currentNode.value);

        if(currentNode.right) {
            recursiveTraverse(currentNode.right);
        }

    }

    recursiveTraverse(node);

    return result;
}