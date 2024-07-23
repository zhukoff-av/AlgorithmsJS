/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    let mapStones = {}

    for(let stone of stones){
        mapStones[stone] = (mapStones[stone] || 0) + 1
    }

    let counter = 0

    for(let jewel of jewels) {
        if(mapStones.hasOwnProperty(jewel)) {
            counter += mapStones[jewel]
        }
    }

    return counter

};