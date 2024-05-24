// You are given an array people where people[i] is the weight of the ith person,
// and an infinite number of boats where each boat can carry a maximum weight of limit.
// Each boat carries at most two people at the same time, provided the sum of the weight of
// those people is at most limit.
//
//     Return the minimum number of boats to carry every given person.


/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {

    let sortedPeople = people.sort((a, b) => a - b)

    let left = 0
    let right = people.length - 1
    let boat = 0

    while (left <= right) {

        if ((sortedPeople[left] + sortedPeople[right]) <= limit) {
            left++
            right--
            boat++
        } else {
            right--
        }
        // boat++
    }
    return boat
};

console.log(numRescueBoats([1,3,5,6,7], 5))