const findCheapestPrice = (n, flights, src, dst, k) => {

    let prices = new Array(n).fill(Number.MAX_SAFE_INTEGER)
    prices[src] = 0


    for (let i = 0; i <= k; i++) {
        const tmp = [...prices]

        for (let flight of flights) {
            const s = flight[0]
            const d = flight[1]
            const p = flight[2]

            if (prices[s] === Number.MAX_SAFE_INTEGER) continue

            if (prices[s] + p < tmp[d]) {
                tmp[d] = prices[s] + p
            }
        }
        prices = tmp

    }
    console.log(prices[dst])
    return prices[dst] === Number.MAX_SAFE_INTEGER ? -1 : prices[dst]
}

findCheapestPrice(4, [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], 0, 3, 1)
//
// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700