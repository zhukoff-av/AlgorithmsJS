const missingNumber = (nums) => {

    const map = {}

    // el to map
    for(let el of nums){
        map[el] = (map[el] || 0) + 1
    }

    // check if it !exists in map
    for(let i = 0; i < nums.length; i++) {
        if(!map.hasOwnProperty(i)) return i
    }

}


// Input: nums = [3,0,1]
// Output: 2
//
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8

console.log(missingNumber([3,0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))