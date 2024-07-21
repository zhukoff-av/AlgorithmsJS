const findWinners = (matches) => {

    let winners = new Set()
    let losers = {}

    for (let [win, lose] of matches) {
        winners.add(win)
        losers[lose] = (losers[lose] || 0) + 1
    }

    let zeroLoses = []
    let oneLose = []

    for (let player of winners) {
        if (!(player in losers)) {
            zeroLoses.push(player)
        }
    }

    for (let [lose, count] of Object.entries(losers)) {
        if (count === 1) {
            oneLose.push(parseInt(lose))
        }
    }

    zeroLoses.sort((a, b) => a - b)
    oneLose.sort((a, b) => a - b)


    return [zeroLoses, oneLose]

}

matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]
// Output: [[1,2,10],[4,5,7,8]]

console.log(findWinners(matches))

