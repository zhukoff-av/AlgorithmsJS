/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let maxHeap = new MaxPriorityQueue();
    let ans = new Array();

    for(let i = 0; i < arr.length; i++){
        maxHeap.enqueue(arr[i], Math.abs(arr[i]-x));

        if(maxHeap.size() > k)
            maxHeap.dequeue();
    }

    while(!maxHeap.isEmpty()){
        ans.push(maxHeap.dequeue().element);
    }

    return ans.sort((a,b)=> a-b);
};