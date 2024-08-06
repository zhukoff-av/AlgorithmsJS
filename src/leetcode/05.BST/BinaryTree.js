// class Node

// class Binary Tree

// insert

// inorder

// delete

// min Value

// test

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

 class BinarySeachTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (current) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

module.exports = BinarySeachTree