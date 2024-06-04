const furthestBuilding = (heights, bricks, ladders) => {
    let building = 0;
    let minHeap = []

    for (let i = 0; i < heights.length - 1; i++) {
        let diff = heights[i + 1] - heights[i];

        if (diff > 0) {
            minHeap.push(diff);
            minHeap.sort((a,b) => b - a)
            if (minHeap.length > ladders) {
                bricks -= minHeap.pop();
            }
            if (bricks < 0) {
                return i;
            }
        }
        building++;
    }

    return heights.length - 1;
};


// Example usage:
console.log(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1)); // Output: 4

// Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
// Output: 7

console.log(furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2)) // 7




// Alternative Solution - More efficient
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element >= parent) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

const furthestBuilding = (heights, bricks, ladders) => {
    let minHeap = new MinHeap();

    for (let i = 0; i < heights.length - 1; i++) {
        let diff = heights[i + 1] - heights[i];

        if (diff > 0) {
            minHeap.push(diff);
            if (minHeap.size() > ladders) {
                bricks -= minHeap.pop();
            }
            if (bricks < 0) {
                return i;
            }
        }
    }

    return heights.length - 1;
};

// Example usage:
console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)); // Output: 7
