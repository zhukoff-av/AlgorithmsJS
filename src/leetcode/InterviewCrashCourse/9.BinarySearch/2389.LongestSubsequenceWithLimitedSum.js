const answerQueries = (nums, queries) => {

    nums.sort((a, b) => a - b)
    let answer = []

    for (let i = 0; i < queries.length; i++) {
        let count = 0

        for (let num of nums) {
            if (queries[i] >= num) {
                count++
                queries[i] -= num
            } else
                break
        }

        answer[i] = count
    }

    return answer
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]))

// nums [4,5,2,1]
// queries [3,10,21]
//
// output [2,3,4]