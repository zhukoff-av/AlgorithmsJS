// Input: s = "tree"
// Output: "eert"

const sortCharts = (str) => {

    // Initialize a Map to Count Frequencies
    let map = new Map()

    // Count the Frequency of Each Character
    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    // Convert Map Entries to an Array
    const pq = Array.from(map.entries())

    // Sort the Array by Frequency:
    pq.sort((a, b) => b[1] - a[1])

    let res = ''
    // Construct the Result String
    for (const [key, value] of pq) {
        res += key.repeat(value)
    }
    console.log(res)
}

sortCharts('tree')