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


    // second solution Two Pointer. More efficient O(n)
    // let leftPointer = 0;
    // let rightPointer = arr.length - 1;
    // while (rightPointer - leftPointer >= k) {
    //     // a-x <= b-x (Comparison Law at the Question)
    //     if (Math.abs(arr[leftPointer] - x) <= Math.abs(arr[rightPointer] - x)) rightPointer--;
    //     else leftPointer++;
    // }
    // return arr.slice(leftPointer, rightPointer + 1);
};