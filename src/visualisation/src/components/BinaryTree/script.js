// script.js
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.x = 0;
        this.y = 0;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        break;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }


    search(value) {
        // Search logic goes here
    }

    delete(value) {
        // Delete logic goes here
    }

    // Visualize the tree
    draw() {
        // Clear previous visualization
        const display = document.getElementById('treeDisplay');
        display.innerHTML = '';

        // Draw each node
        this._drawNode(this.root, display, 500, 20, 250); // Starting position and step width
    }

    _drawNode(node, display, x, y, step) {
        if (!node) return;

        const div = document.createElement('div');
        div.className = 'node';
        div.textContent = node.value;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        display.appendChild(div);

        node.x = x;
        node.y = y;

        // Draw left child
        if (node.left) {
            const leftLine = document.createElement('div');
            leftLine.className = 'line';
            leftLine.style.left = `${x - step / 4 + 15}px`; // Center the line between nodes
            leftLine.style.top = `${y + 10}px`; // Start line right below the node
            leftLine.style.height = `70px`; // Adjust height to reach the next level
            display.appendChild(leftLine);
            this._drawNode(node.left, display, x - step, y + 100, step / 2); // Adjust child node placement
        }

// Draw right child
        if (node.right) {
            const rightLine = document.createElement('div');
            rightLine.className = 'line';
            rightLine.style.left = `${x + step / 4 + 45}px`; // Adjust left to correctly position line
            rightLine.style.top = `${y + 30}px`; // Start line right below the node
            rightLine.style.height = `70px`; // Adjust height to reach the next level
            display.appendChild(rightLine);
            this._drawNode(node.right, display, x + step, y + 100, step / 2); // Adjust child node placement
        }
    }
}

// Global binary tree instance
const tree = new BinaryTree();

function handleInsert() {
    const value = parseInt(document.getElementById('nodeValue').value);
    tree.insert(value);
    tree.draw();
}

function handleSearch() {
    const value = parseInt(document.getElementById('nodeValue').value);
    tree.search(value);
    tree.draw();
}

function handleDelete() {
    const value = parseInt(document.getElementById('nodeValue').value);
    tree.delete(value);
    tree.draw();
}
