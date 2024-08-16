/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    // sort
    boxTypes.sort((a, b) => b[1] - a[1])

    let inTruck = 0

    for (let i = 0; truckSize && i < boxTypes.length; i++) {
        let count = Math.min(boxTypes[i][0], truckSize)

        inTruck += count * boxTypes[i][1]
        truckSize -= count
    }

    return inTruck
};