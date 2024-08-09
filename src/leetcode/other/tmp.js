const findAverage = (nums) => {

    if(!nums) return 0

    let counter = 0
    for (let num of nums) {
        counter += num
    }

    return counter / nums.length
}

console.log(findAverage([-2, 0, 2]))