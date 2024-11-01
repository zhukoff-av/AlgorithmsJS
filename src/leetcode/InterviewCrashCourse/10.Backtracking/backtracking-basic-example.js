function findSubsets(nums) {
    const result = [];

    function backtrack(start, currentSubset) {
        // Save the current subset as one of the subsets
        result.push([...currentSubset]);

        // Iterate over the remaining elements
        for (let i = start; i < nums.length; i++) {
            // Add the current element to the subset
            currentSubset.push(nums[i]);
            // Continue with the new subset that includes nums[i]
            backtrack(i + 1, currentSubset);
            // Remove the last element to try the next path (backtrack)
            currentSubset.pop();
        }
    }

    // Start with an empty subset
    backtrack(0, []);
    return result;
}

// Example usage
const nums = [1, 2, 3];
console.log(findSubsets(nums));