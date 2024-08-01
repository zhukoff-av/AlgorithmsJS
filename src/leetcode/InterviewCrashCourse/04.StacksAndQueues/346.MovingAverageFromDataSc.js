/**
 * @param {number} size
 */
class MovingAverage {
    constructor(size) {
        this.size = size
        this.array = []
        this.sum = 0
    }

    next(val) {
        if (this.array.length === this.size) {
            this.sum -= this.array.shift()
        }

        this.array.push(val)
        this.sum += val

        return this.sum / this.array.length
    }

}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

// input
// ["MovingAverage","next","next","next","next"]
//     [[3],[1],[10],[3],[5]]