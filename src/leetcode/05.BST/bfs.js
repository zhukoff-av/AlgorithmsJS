function bfs(node) {
    const queue = [];
    const result = [];
    queue.push(node);

    while (queue.length > 0) {
        const tempNode = queue.shift();
        result.push(tempNode.value);

        if (tempNode.left) {
            queue.push(tempNode.left);
        }

        if (tempNode.right) {
            queue.push(tempNode.right);
        }
    }

    return result
}


bfs([3,9,20,null,null,15,7])