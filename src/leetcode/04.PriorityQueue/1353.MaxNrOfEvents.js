

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {

    let counter = 0

    for (let i = 0; i <events.length; i++) {
        counter++
    }

    console.log(counter)
};


maxEvents([[1,2],[2,3],[3,4]])

//
// Input: events = [[1,2],[2,3],[3,4]]
// Output: 3