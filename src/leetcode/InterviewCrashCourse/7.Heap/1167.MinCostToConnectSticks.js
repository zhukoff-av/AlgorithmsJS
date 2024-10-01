/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    const pq = new MinPriorityQueue()
    let totalCost = 0

    for(let stick of sticks){
        pq.enqueue(stick)
    }

    while(pq.size() > 1) {
        let stick1 = pq.dequeue().element
        let stick2 = pq.dequeue().element

        let cost = stick1 + stick2

        totalCost += cost

        pq.enqueue(stick1 + stick2)
    }

    return totalCost

};