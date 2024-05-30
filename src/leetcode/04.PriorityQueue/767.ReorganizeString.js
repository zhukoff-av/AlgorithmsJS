// function reorganizes string
// no two the same
// freq.map simulates maxHeap

const reorganizeString = (s) => {

    // 1. freq. map
    const freqMap = {}

    for (let c of s) {
        freqMap[c] = (freqMap[c] || 0) + 1
    }

    // 2. init max-heap
    const maxHeap = [...Object.keys(freqMap)].sort((a, b) => freqMap[b] - freqMap[a])

    // 3. reorganize string
    let res = ""

    while (maxHeap.length >= 2) {
        const ch1 = maxHeap.shift()
        const ch2 = maxHeap.shift()

        res += ch1
        res += ch2

        if (--freqMap[ch1] > 0) maxHeap.push(ch1)
        if (--freqMap[ch2] > 0) maxHeap.push(ch2)

        maxHeap.sort((a, b) => freqMap[b] - freqMap[a])
    }

    if (maxHeap.length) {
        const ch = maxHeap[0]
        if (freqMap[ch] > 1) return ""
        res += ch
    }

    return res
}

console.log(reorganizeString('aab'))