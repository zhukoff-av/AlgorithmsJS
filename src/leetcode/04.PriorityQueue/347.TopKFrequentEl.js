const topKFrequent = (num, k) => {

    let freqMap = {}
    const result = []
    // 1. count frequencies
    // 2 Store frequencies
    for (let n of num) {
        freqMap[n] = (freqMap[n] || 0) + 1
    }
    // 3 Sort of Heapify (desc)
    const heap = [...Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a])]


    // 4 Extract Top K Elements
    for (let i = 0; i < k; i++) {
        result.push(heap.shift())
    }

    return result
}


topKFrequent([1, 1, 1, 2, 2, 3], 2)