/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let magazineMap = new Map()

    for (let ch of magazine) {
        if (magazineMap.has(ch)) {
            magazineMap.set(ch, magazineMap.get(ch) + 1)
        } else {
            magazineMap.set(ch, 1)
        }
    }

    for (let ch of ransomNote) {
        if (!magazineMap.has(ch) || magazineMap.get(ch) === 0) {
            return false
        }
        magazineMap.set(ch, magazineMap.get(ch) - 1)
    }

    return true
};