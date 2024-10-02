/**
 * @param {number[]} weight
 * @return {number}
 */
//  O(NLogN)
var maxNumberOfApples = function (weight) {

    weight.sort((a, b) => a - b)
    let basket = 0
    let count = 0

    for (let i = 0; i < weight.length; i++) {
        basket += weight[i]

        if (basket > 5000) {
            break
        }
        count += 1
    }

    return count
};