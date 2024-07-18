
var checkIfPangram = function(sentence) {

    const map = {}
    const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

    // for(let ch of sentence) {
    //     map[ch] = (map[ch] || 0) + 1
    // }
    // const res = Object.keys(map).sort()
    const set = new Set(sentence)

    return alphabet.length === set.size
};

 // II solution
// const map = {}
// for(let ch of sentence) {
//     map[ch] = (map[ch] || 0) + 1
// }
// const res = Object.keys(map).sort()
// return JSON.stringify(alphabet) ===JSON.stringify(map)

// III solution - only one line
// return new Set(sentence).size === 26


console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))
