/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {

    arr.sort((a, b) => a - b)

    let counts = []
    let currentRun = 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentRun += 1
            continue;
        }
        counts.push(currentRun)
        currentRun = 1
    }

    counts.push(currentRun)

    counts.sort((a, b) => b - a)

    let nrOfItemsRemoved = 0
    let setSize = 0

    for (const count of counts) {
        nrOfItemsRemoved += count
        setSize += 1

        if (nrOfItemsRemoved >= arr.length / 2) {
            break
        }
    }

    return setSize
};