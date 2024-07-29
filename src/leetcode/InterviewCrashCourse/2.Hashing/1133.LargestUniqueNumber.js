

const uniqNumber = (nums) => {

    const map = {}

    for(let num of nums){
        map[num] = (map[num] || 0) + 1
    }

    let maxVal = -1

    for(const [key, value] of Object.entries(map)){

        if(value === 1) {
            maxVal = Math.max(maxVal, key)
        }
    }

    return maxVal
}

console.log(uniqNumber([1,2,5,8,9,9,4]))
console.log(uniqNumber([9,9,8,8]))

// [1,2,5,8,9,9,4]
// [9,9,8,8]