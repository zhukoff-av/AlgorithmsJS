const countElements = (arr) => {

    let counter = 0
    const set = new Set(arr)

    arr.forEach(num => {
        if (set.has(num + 1)) counter++
    })

    return counter
}

console.log(countElements([1, 2, 3]))
console.log(countElements([1, 1, 3, 3, 5, 5, 7, 7]))
