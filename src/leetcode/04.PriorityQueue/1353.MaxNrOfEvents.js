

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {

    events.sort((a, b) => a[1] - b[1]);

    // implement min priority queue
    const mq = new MinPriorityQueue();

    // min queue = new PriorityQueue();
    let counter = 0;
    let day = 0;
    let i = 0;
    while (i < events.length) {
        if (day >= events[i][0]) {
            i++;
            continue;
        }
        day = events[i][0];
        counter++;
        i++;
    }
    return counter;
};


maxEvents([[1,2],[2,3],[3,4]])

//
// Input: events = [[1,2],[2,3],[3,4]]
// Output: 3



// const maxEvents = function (events) {
//     // Sort events by their start day
//     events.sort((a, b) => a[0] - b[0]);
//
//     // A priority queue to get the first event that ends sooner
//     const queue = new MinPriorityQueue({
//         compare: (a, b) => events[a][1] > events[b][1],
//     });
//
//     let i = 0,
//         res = 0;
//
//     // Iterate over all available days
//     for (let day = 0; day <= Math.pow(10, 5); day++) {
//         // Add all events that start today to the queue
//         while (i < events.length && events[i][0] == day) queue.enqueue(i++);
//
//         // Attend the event that ends sooner
//         if (queue.size()) {
//             queue.dequeue();
//             res++;
//
//             // Remove all other events that ended today
//             while (queue.size() && events[queue.front()][1] == day)
//                 queue.dequeue();
//         }
//     }
//
//     return res;
// };