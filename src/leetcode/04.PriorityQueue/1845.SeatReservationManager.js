/**
 * @param {number} n
 */
var SeatManager = function (n) {
    this.last = 0
    this.pq = []
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
    if (this.pq.length === 0) {
        return ++this.last
    } else {
        this.pq.sort((a, b) => a - b)
        return this.pq.shift()
    }
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
    if (seatNumber === this.last) {
        this.last--
    } else {
        this.pq.push(seatNumber)
    }
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

var obj = new SeatManager(5)
var param_1 = obj.reserve()
obj.unreserve(param_1)