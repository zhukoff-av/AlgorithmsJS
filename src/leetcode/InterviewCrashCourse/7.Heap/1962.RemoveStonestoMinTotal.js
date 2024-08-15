// Source: https://leetcode.com/problems/remove-stones-to-minimize-the-total/
const pq = require('../../04.PriorityQueue/MaxPriorityQueue')

/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */

//  O(NLogN)

var minStoneSum = function (piles, k) {

    const pq = new MaxPriorityQueue()
    for (let pile of piles) {
        pq.enqueue(pile)
    }

    while (k--) {
        const max = pq.dequeue().element
        pq.enqueue(Math.ceil(max / 2))
    }

    // console.log(pq)

    let sum = 0
    while (pq.size() > 0) {
        sum += pq.dequeue().element
    }

    return sum
};


minStoneSum([5, 4, 9], 2) // 12