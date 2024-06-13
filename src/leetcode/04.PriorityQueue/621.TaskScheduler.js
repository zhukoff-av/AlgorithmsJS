/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// Explanation:
    //    1.  Count the frequency of each task and store it in freqMap.
    //    2. Insert frequencies into a max heap.
    //    3.  Use a queue to keep track of the tasks that are cooling down, along with the interval when they will be available again.
    //    4. Process each interval:
    //       If the heap is not empty, extract the maximum frequency task, decrement its count, and push it into the queue with the interval when it will be available again.
//           If the first task in the queue is ready to be scheduled again (cooling period has passed), push it back into the heap.
    //    5.  Increment the interval counter until all tasks are processed.
//     This solution ensures that the most frequent tasks are always prioritized, and tasks are executed in the minimum number of intervals while respecting the cooling time n.

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._heapifyUp(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);

        return max;
    }

    _heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    _heapifyDown(index) {
        let largest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this._heapifyDown(largest);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

const leastInterval = (tasks, n) => {

    const freqMap = {}

    for (const task of tasks) {
        if (!freqMap[task]) {
            freqMap[task] = 0
        }
        freqMap[task]++
    }

    const heap = new MaxHeap()

    for (const key in freqMap) {
        heap.insert(freqMap[key])
    }

    let queue = []
    let interval = 0


    while (!heap.isEmpty() || queue.length > 0) {
        interval++

        if (!heap.isEmpty()) {
            let current = heap.extractMax() - 1
            if (current > 0) {
                queue.push([current, interval + n])
            }
        }

        if (queue.length > 0 && queue[0][1] === interval) {
            heap.insert(queue.shift()[0])
        }
    }
    return interval
};

leastInterval(["A", "A", "A", "B", "B", "B"], 2)

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8