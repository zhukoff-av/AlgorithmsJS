class MaxPriorityQueue {
    constructor() {
        this.maxHeap = new MaxHeap();
    }

    enqueue(val) {
        this.maxHeap.insert(val);
    }

    dequeue() {
        return this.maxHeap.extractMax();
    }

    peek() {
        return this.maxHeap.peek();
    }

    size() {
        return this.maxHeap.size();
    }
}
