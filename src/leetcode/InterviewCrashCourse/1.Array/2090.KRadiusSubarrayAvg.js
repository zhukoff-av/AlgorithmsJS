var getAverages = function(nums, k) {
    let result = new Array(nums.length).fill(-1)

    // Edge cases
    if (k === 0) return nums;
    if (nums.length < 2 * k + 1) return result;

    let doubleK = 2 * k;
    let sum = 0;

    // Initialize the sum for the first window
    for (let i = 0; i < doubleK; i++) {
        sum += nums[i];
    }

    // Process each index where a full window can be formed
    for (let i = doubleK; i < nums.length; i++) {
        sum += nums[i];
        result[i - k] = Math.floor(sum / (doubleK + 1));
        sum -= nums[i - doubleK];
    }

    return result;
};


// Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
// Output: [-1,-1,-1,5,4,4,-1,-1,-1]


console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3))