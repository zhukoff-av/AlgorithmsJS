class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    extractMax() {
        if (this.size() === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    peek() {
        return this.size() > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.size() - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element <= parent) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    bubbleDown() {
        let index = 0;
        const length = this.size();
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}
